/** Validate prerendered documents and local URLs without downloading the large decks. */
import { readFile, stat } from "node:fs/promises";
import { resolve, join } from "node:path";
import { createHash } from "node:crypto";
const root = resolve(".output/public");
const imageReport = JSON.parse(
  await readFile("docs/maintenance/generated/png-webp.json", "utf8"),
);
const replacedPngs = new Set(
  imageReport.images.map((image) =>
    image.source.replace(/^(?:site|public)/, ""),
  ),
);
const routes = [
  "index",
  "about",
  "phonetics",
  "grammar",
  "vocabulary",
  "reading",
  "columns",
  "fluent-forever",
  "make-it-stick",
  "little-prince",
  "tools",
  "guides",
  "guides/anki-setup",
  "guides/phonetics-practice",
  "guides/reading-and-viewing",
  "resources",
];
const failures = [];
let checked = 0;
for (const route of routes) {
  for (const file of new Set([
    `${route}.html`,
    route === "index" ? "index.html" : `${route}/index.html`,
  ])) {
    const html = await readFile(join(root, file), "utf8");
    if ((html.match(/<h1\b/g) || []).length !== 1)
      failures.push(`${file}: expected one h1`);
    if (!html.includes('lang="zh-CN"'))
      failures.push(`${file}: missing language`);
    const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map((m) => m[1]);
    if (new Set(ids).size !== ids.length)
      failures.push(`${file}: duplicate IDs`);
    for (const [, attribute, href] of html.matchAll(
      /\b(src|href)="([^"]+)"/g,
    )) {
      if (
        href.startsWith("#") &&
        !ids.includes(decodeURIComponent(href.slice(1)))
      )
        failures.push(`${file}: missing ${href}`);
      if (!href.startsWith("/") || href.startsWith("//")) continue;
      const url = new URL(href, "https://local.test");
      if (replacedPngs.has(url.pathname))
        failures.push(`${file}: large PNG should use WebP: ${href}`);
      const path = join(root, decodeURIComponent(url.pathname));
      const exists =
        (await stat(path).catch(() => null)) ||
        (await stat(join(path, "index.html")).catch(() => null));
      if (!exists) failures.push(`${file}: missing ${href}`);
      checked++;
    }
  }
}
for (const image of imageReport.images) {
  const path = join(root, image.webp.replace(/^(?:site|public)\//, ""));
  const bytes = await readFile(path).catch(() => null);
  if (
    !bytes ||
    createHash("sha256").update(bytes).digest("hex") !== image.webp_sha256
  )
    failures.push(`Missing or changed optimized image: ${image.webp}`);
}
for (const icon of imageReport.icons) {
  const path = join(root, icon.path.replace(/^public\//, ""));
  const bytes = await readFile(path).catch(() => null);
  if (
    !bytes ||
    createHash("sha256").update(bytes).digest("hex") !== icon.sha256
  )
    failures.push(`Missing or changed platform icon: ${icon.path}`);
}
if (failures.length) {
  console.error([...new Set(failures)].join("\n"));
  process.exitCode = 1;
} else
  console.log(
    `Verified ${routes.length} routes, legacy HTML aliases, document semantics and ${checked} local URL references.`,
  );
