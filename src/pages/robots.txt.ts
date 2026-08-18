import { absoluteUrl } from "@utils/site";

export const prerender = true;

export function GET() {
  return new Response(`User-agent: *
Allow: /
Sitemap: ${absoluteUrl("/sitemap.xml")}
`, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8"
    }
  });
}
