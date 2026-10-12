import { writeFileSync } from "node:fs";

// Only public, indexable routes belong here; section anchors are not pages.
const baseUrl = "https://abdoemad-portofolio.lovable.app";
const entries = ["/", "/ar"];
const alternates = [["en", "/"], ["ar", "/ar"], ["x-default", "/"]]
  .map(([lang, p]) => `    <xhtml:link rel="alternate" hreflang="${lang}" href="${baseUrl}${p}"/>`)
  .join("\n");
const urls = entries.map(path => `  <url>\n    <loc>${baseUrl}${path}</loc>\n${alternates}\n  </url>`);
writeFileSync(new URL("../public/sitemap.xml", import.meta.url),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls.join("\n")}\n</urlset>\n`);