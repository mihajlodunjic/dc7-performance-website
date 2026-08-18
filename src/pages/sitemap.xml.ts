import { absoluteUrl } from "@utils/site";

export const prerender = true;

const routes = [
  "/",
  "/metod-rada/",
  "/testiranje-sportista/",
  "/rezultati/",
  "/o-dejanu/",
  "/kontakt/"
];

export function GET() {
  const updated = new Date().toISOString();
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map((route) => `  <url>
    <loc>${absoluteUrl(route)}</loc>
    <lastmod>${updated}</lastmod>
  </url>`).join("\n")}
</urlset>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8"
    }
  });
}
