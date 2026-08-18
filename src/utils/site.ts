export const siteOrigin = import.meta.env.SITE_URL || "http://localhost:4321";

export function absoluteUrl(path = "/") {
  return new URL(path, siteOrigin).href;
}

export function normalizePath(path: string) {
  if (path === "/") return "/";
  return path.endsWith("/") ? path : `${path}/`;
}
