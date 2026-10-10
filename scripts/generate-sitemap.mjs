import { writeFileSync } from "node:fs";

// Only public, indexable routes belong here; section anchors are not pages.
const baseUrl = "https://abdoemad-portofolio.lovable.app";
const entries = ["/"];
const urls = entries.map(path => `  <url>\n    <loc>${baseUrl}${path}</loc>\n  </url>`);
writeFileSync(new URL("../public/sitemap.xml", import.meta.url),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>\n`);