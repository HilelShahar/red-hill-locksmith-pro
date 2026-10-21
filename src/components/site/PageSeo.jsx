import { useEffect } from "react";
import { HOME_DESCRIPTION, HOME_TITLE, SITE_URL } from "@/lib/site";

function upsertMeta(attr, key, content) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  const previous = el.getAttribute("content");
  el.setAttribute("content", content);
  return () => {
    if (previous == null) el.remove();
    else el.setAttribute("content", previous);
  };
}

function upsertLink(rel, href) {
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  const created = !el;
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  const previous = el.getAttribute("href");
  el.setAttribute("href", href);
  return () => {
    if (created) el.remove();
    else if (previous) el.setAttribute("href", previous);
  };
}

export default function PageSeo({ title, description, path, jsonLd = [] }) {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = title;

    const restore = [
      upsertMeta("name", "description", description),
      upsertMeta("name", "robots", "index, follow"),
      upsertMeta("property", "og:title", title),
      upsertMeta("property", "og:description", description),
      upsertMeta("property", "og:url", `${SITE_URL}${path}`),
      upsertLink("canonical", `${SITE_URL}${path}`)
    ];

    const scripts = jsonLd.map((data) => {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.dataset.pageSeo = "true";
      script.textContent = JSON.stringify(data);
      document.head.appendChild(script);
      return script;
    });

    return () => {
      document.title = previousTitle || HOME_TITLE;
      restore.forEach((fn) => fn());
      scripts.forEach((script) => script.remove());
      const homeDesc = document.head.querySelector('meta[name="description"]');
      if (homeDesc && !homeDesc.getAttribute("content")) {
        homeDesc.setAttribute("content", HOME_DESCRIPTION);
      }
    };
  }, [title, description, path, jsonLd]);

  return null;
}
