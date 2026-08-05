// import { createFileRoute } from "@tanstack/react-router";
// import type {} from "@tanstack/react-start";

// const BASE_URL = "https://mitriv.in";

// interface SitemapEntry {
//   path: string;
//   changefreq?: "weekly" | "daily" | "monthly";
//   priority?: string;
// }

// export const Route = createFileRoute("/sitemap.xml")({
//   server: {
//     handlers: {
//       GET: async () => {
//         const entries: SitemapEntry[] = [
//   { path: "/", changefreq: "weekly", priority: "1.0" },
//   { path: "/contact", changefreq: "monthly", priority: "0.8" },
//   { path: "/projects", changefreq: "weekly", priority: "0.9" },
// ];
//         const urls = entries.map(
//           (e) =>
//             `  <url>\n    <loc>${BASE_URL}${e.path}</loc>\n    <changefreq>${e.changefreq}</changefreq>\n    <priority>${e.priority}</priority>\n  </url>`,
//         );
//         const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>`;
//         return new Response(xml, {
//           headers: {
//             "Content-Type": "application/xml",
//             "Cache-Control": "public, max-age=3600",
//           },
//         });
//       },
//     },
//   },
// });

import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

const BASE_URL = "https://mitriv.in";

interface SitemapEntry {
  path: string;
  changefreq?: "weekly" | "daily" | "monthly";
  priority?: string;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const lastmod = new Date().toISOString();

        const entries: SitemapEntry[] = [
          { path: "/", changefreq: "daily", priority: "1.0000" },
          { path: "/contact", changefreq: "daily", priority: "0.8000" },
          { path: "/project-detail/godrej-horizon", changefreq: "daily", priority: "0.8000" },
          { path: "/project-detail/godrej-skyshore", changefreq: "daily", priority: "0.8000" },
        ];

        const urls = entries
          .map(
            (e) => `
  <url>
    <loc>${BASE_URL}${e.path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${e.changefreq}</changefreq>
    <priority>${e.priority}</priority>
  </url>`
          )
          .join("");

        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/css" href="https://www.xml-sitemaps.com/css/sitemap.css"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>`;

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});