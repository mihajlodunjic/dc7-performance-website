import { rm, readdir, readFile, stat } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";

const root = process.cwd();
const dist = path.join(root, "dist");
const astroDir = path.join(dist, "_astro");
const publicImagesDir = path.join(dist, "images");
const referenced = new Set();
const textExtensions = new Set([".html", ".css", ".js", ".xml", ".txt", ".json", ".svg"]);
const imageExtensions = new Set([".avif", ".webp", ".jpg", ".jpeg", ".png"]);

async function walk(dir) {
  if (!existsSync(dir)) return [];
  const entries = await readdir(dir, { withFileTypes: true });
  const files = await Promise.all(entries.map(async (entry) => {
    const full = path.join(dir, entry.name);
    return entry.isDirectory() ? walk(full) : full;
  }));
  return files.flat();
}

for (const file of await walk(dist)) {
  if (!textExtensions.has(path.extname(file))) continue;
  const content = await readFile(file, "utf8");
  for (const match of content.matchAll(/\/_astro\/([^"'()\s<>]+)/g)) {
    referenced.add(match[1]);
  }
}

if (existsSync(publicImagesDir)) {
  await rm(publicImagesDir, { recursive: true, force: true });
}

if (existsSync(astroDir)) {
  for (const file of await walk(astroDir)) {
    const ext = path.extname(file);
    if (!imageExtensions.has(ext)) continue;
    const name = path.basename(file);
    const fileStat = await stat(file);
    if (!referenced.has(name) || fileStat.size > 2_000_000) {
      await rm(file, { force: true });
    }
  }
}
