import { useEffect } from "react";
import { canonicalUrl } from "@/lib/seo";
import {
  HERO_IMAGE,
  HOME_DESCRIPTION,
  HOME_TITLE,
  OG_IMAGE_HEIGHT,
  OG_IMAGE_WIDTH,
  SITE_NAME,
  SITE_URL,
} from "@/lib/site";

function upsertMeta(attr, key, content) {
  const nodes = [...document.head.querySelectorAll(`meta[${attr}="${key}"]`)];
  let el = nodes[0];
  const created = !el;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  const previous = el.getAttribute("content");
  el.setAttribute("content", content);
  nodes.slice(1).forEach((extra) => extra.remove());
  return () => {
    if (created) el.remove();
    else if (previous != null) el.setAttribute("content", previous);
  };
}

function setCanonical(href) {
  const links = [...document.head.querySelectorAll('link[rel="canonical"]')];
  let el = links[0];
  const created = !el;
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  const previous = el.getAttribute("href");
  el.setAttribute("href", href);
  links.slice(1).forEach((extra) => extra.remove());
  return () => {
    if (created) el.remove();
    else if (previous) el.setAttribute("href", previous);
  };
}

export default function PageSeo({ title, description, path, jsonLd = [] }) {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = title;

    const url = canonicalUrl(path);
    const image = `${SITE_URL}${HERO_IMAGE}`;
    const restore = [
      upsertMeta("name", "description", description),
      upsertMeta("name", "robots", "index, follow"),
      upsertMeta("property", "og:type", "website"),
      upsertMeta("property", "og:site_name", SITE_NAME),
      upsertMeta("property", "og:title", title),
      upsertMeta("property", "og:description", description),
      upsertMeta("property", "og:url", url),
      upsertMeta("property", "og:image", image),
      upsertMeta("property", "og:image:width", OG_IMAGE_WIDTH),
      upsertMeta("property", "og:image:height", OG_IMAGE_HEIGHT),
      upsertMeta("property", "og:image:alt", SITE_NAME),
      upsertMeta("name", "twitter:card", "summary_large_image"),
      upsertMeta("name", "twitter:title", title),
      upsertMeta("name", "twitter:description", description),
      upsertMeta("name", "twitter:image", image),
      setCanonical(url)
    ];

    document.head.querySelectorAll('script[data-page-seo="true"]').forEach((script) => {
      script.remove();
    });

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
