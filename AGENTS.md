# Architecture rules
- Keep sitewide crawler/social fallbacks in index.html and route-specific metadata in React Helmet under one HelmetProvider; static social crawlers do not execute route-specific JavaScript.
- Generate public/sitemap.xml from the explicit public-route list before development and production builds; omit catch-all routes and unauthoritative lastmod values.
- Serve share-sized portrait renditions from public/social with absolute published-domain metadata URLs so social crawlers can fetch them.