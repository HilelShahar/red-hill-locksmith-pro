import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createServer } from "vite";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const distDir = path.join(root, "dist");
const templatePath = path.join(distDir, "index.html");

function escapeHtml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function upsertMeta(html, attr, key, content) {
  const tag = `<meta ${attr}="${key}" content="${escapeHtml(content)}" />`;
  const pattern = new RegExp(`\\s*<meta\\s+${attr}="${key}"\\s+content="[^"]*"\\s*/?>`, "g");
  if (!pattern.test(html)) return html.replace("</head>", `    ${tag}\n  </head>`);
  let kept = false;
  return html.replace(pattern, () => {
    if (kept) return "";
    kept = true;
    return `\n    ${tag}`;
  });
}

function applyHead(html, meta) {
  let next = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeHtml(meta.title)}</title>`);
  next = upsertMeta(next, "name", "description", meta.description);
  next = upsertMeta(next, "name", "robots", "index, follow");
  next = upsertMeta(next, "property", "og:type", "website");
  next = upsertMeta(next, "property", "og:site_name", "Red Hill Security & Locksmith");
  next = upsertMeta(next, "property", "og:title", meta.title);
  next = upsertMeta(next, "property", "og:description", meta.description);
  next = upsertMeta(next, "property", "og:url", meta.url);
  next = upsertMeta(next, "property", "og:image", meta.image);
  next = upsertMeta(next, "property", "og:image:width", "1024");
  next = upsertMeta(next, "property", "og:image:height", "1024");
  next = upsertMeta(next, "property", "og:image:alt", "Red Hill Security & Locksmith");
  next = upsertMeta(next, "name", "twitter:card", "summary_large_image");
  next = upsertMeta(next, "name", "twitter:title", meta.title);
  next = upsertMeta(next, "name", "twitter:description", meta.description);
  next = upsertMeta(next, "name", "twitter:image", meta.image);

  next = next.replace(/\s*<link\s+rel="canonical"[^>]*>\s*/gi, "\n");
  const canonical = `<link rel="canonical" href="${escapeHtml(meta.url)}" />`;
  next = next.replace("</head>", `    ${canonical}\n  </head>`);

  const jsonLd = meta.jsonLd
    .map(
      (data) =>
        `<script type="application/ld+json" data-page-seo="true">${JSON.stringify(data).replace(/</g, "\\u003c")}</script>`
    )
    .join("\n    ");
  next = next.replace("</head>", () => `    ${jsonLd}\n  </head>`);
  return next;
}

function assertPage(file, html, meta) {
  const text = html.replace(/<script[\s\S]*?<\/script>/gi, "").replace(/<style[\s\S]*?<\/style>/gi, "");
  const problems = [];
  if (!html.includes(`<title>${escapeHtml(meta.title)}</title>`)) problems.push("title");
  if (!html.includes('name="description"')) problems.push("description");
  const canonicals = html.match(/<link\s+rel="canonical"[^>]*>/gi) || [];
  if (canonicals.length !== 1 || !html.includes(`rel="canonical" href="${escapeHtml(meta.url)}"`)) {
    problems.push("canonical");
  }
  if (!html.includes(`property="og:url" content="${escapeHtml(meta.url)}"`)) problems.push("og:url mismatch");
  if (meta.path !== "/" && html.includes(`rel="canonical" href="https://www.redhillsecuritylocksmith.com.au/"`)) {
    problems.push("canonical points at homepage");
  }
  for (const key of ["og:type", "og:site_name", "og:title", "og:description", "og:url", "og:image"]) {
    const found = html.match(new RegExp(`property="${key}"(?!:)`, "g")) || [];
    if (found.length !== 1) problems.push(key);
  }
  for (const key of ["twitter:card", "twitter:title", "twitter:description", "twitter:image"]) {
    const found = html.match(new RegExp(`name="${key}"`, "g")) || [];
    if (found.length !== 1) problems.push(key);
  }
  if (!html.includes(`property="og:title" content="${escapeHtml(meta.title)}"`)) problems.push("og:title text");
  if (!html.includes(`property="og:description" content="${escapeHtml(meta.description)}"`)) problems.push("og:description text");
  if (!html.includes(`name="twitter:title" content="${escapeHtml(meta.title)}"`)) problems.push("twitter title");
  if (!html.includes('property="og:image" content="https://www.redhillsecuritylocksmith.com.au/images/hero.jpg"')) {
    problems.push("og:image");
  }
  if (!html.includes('application/ld+json')) problems.push("json-ld");
  if (!/<h1[\s>]/.test(text)) problems.push("h1");
  if (!/<h2[\s>]/.test(text)) problems.push("h2");
  if (!/<a\s[^>]*href=/.test(text)) problems.push("internal link");
  if (problems.length) {
    throw new Error(`${file} is missing ${problems.join(", ")}`);
  }
}

const vite = await createServer({
  root,
  configFile: path.join(root, "vite.config.js"),
  server: { middlewareMode: true },
  appType: "custom",
});

try {
  const template = fs.readFileSync(templatePath, "utf8");
  if (!template.includes('<div id="root"></div>')) {
    throw new Error("Built index.html has no empty #root placeholder");
  }

  const { render, PRERENDER_ROUTES } = await vite.ssrLoadModule("/src/entry-server.jsx");

  for (const route of PRERENDER_ROUTES) {
    const { html, meta } = await render(route);
    if (!meta) throw new Error(`No page metadata for ${route}`);
    if (!html.includes("<h1")) throw new Error(`Rendered HTML for ${route} has no h1`);

    const page = applyHead(
      template.replace('<div id="root"></div>', `<div id="root">${html}</div>`),
      meta
    );
    const file =
      route === "/"
        ? templatePath
        : path.join(distDir, route.slice(1), "index.html");
    fs.mkdirSync(path.dirname(file), { recursive: true });
    fs.writeFileSync(file, page);
    assertPage(file, page, meta);
    console.log(`prerendered ${route}`);
  }

  const deployment = JSON.parse(fs.readFileSync(path.join(root, "vercel.json"), "utf8"));
  const rewriteSources = new Set((deployment.rewrites || []).map((rule) => rule.source));
  if ((deployment.rewrites || []).some((rule) => rule.destination === "/index.html")) {
    throw new Error("vercel.json still rewrites unknown URLs to index.html");
  }
  for (const route of [...PRERENDER_ROUTES.filter((route) => route !== "/"), "/locksmith-red-hill"]) {
    if (!rewriteSources.has(route)) {
      throw new Error(`vercel.json is missing a rewrite for ${route}`);
    }
  }

  const { html: notFoundHtml } = await render("/missing-page");
  let notFound = template.replace('<div id="root"></div>', `<div id="root">${notFoundHtml}</div>`);
  notFound = notFound.replace(/<title>[\s\S]*?<\/title>/, "<title>Page Not Found | Red Hill Security &amp; Locksmith</title>");
  notFound = upsertMeta(notFound, "name", "robots", "noindex");
  notFound = notFound.replace(/\s*<link\s+rel="canonical"[^>]*>\s*/gi, "\n");
  notFound = notFound.replace(/\s*<meta\s+property="og:url"[^>]*>\s*/gi, "\n");
  notFound = notFound.replace(/\s*<script type="module"[\s\S]*?<\/script>\s*/gi, "\n");
  notFound = notFound.replace(
    "</body>",
    `    <script>
      var missingPath = document.querySelector("[data-missing-path]");
      if (missingPath) {
        var name = decodeURIComponent(location.pathname.replace(/^\\/+|\\/+$/g, ""));
        missingPath.textContent = '"' + name + '"';
      }
    </script>
  </body>`
  );
  fs.writeFileSync(path.join(distDir, "404.html"), notFound);
  if (!notFound.includes("Page Not Found") || !notFound.includes('content="noindex"')) {
    throw new Error("404.html is missing the not-found page");
  }
  console.log("prerendered /404");
} finally {
  await vite.close();
}
