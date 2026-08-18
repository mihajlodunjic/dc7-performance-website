import { mkdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const source = path.join(root, "public", "images", "dejan-hero-barbell.jpeg");
const outDir = path.join(root, "public", "social");

if (!existsSync(source)) {
  throw new Error("Missing hero source image for social preview.");
}

await mkdir(outDir, { recursive: true });

const pipeline = sharp(source).resize(1200, 630, {
  fit: "cover",
  position: "right"
});

await pipeline.clone().jpeg({ quality: 82, mozjpeg: true }).toFile(path.join(outDir, "og-default.jpg"));
await pipeline.clone().webp({ quality: 82 }).toFile(path.join(outDir, "og-default.webp"));
