/** Validate prerendered documents and local URLs without downloading the large decks. */
import { readFile, stat } from "node:fs/promises";
import { resolve, join } from "node:path";
const root = resolve(".output/public");
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
    for (const [, href] of html.matchAll(/\b(?:src|href)="([^"]+)"/g)) {
      if (
        href.startsWith("#") &&
        !ids.includes(decodeURIComponent(href.slice(1)))
      )
        failures.push(`${file}: missing ${href}`);
      if (!href.startsWith("/") || href.startsWith("//")) continue;
      const url = new URL(href, "https://local.test");
      const path = join(root, decodeURIComponent(url.pathname));
      const exists =
        (await stat(path).catch(() => null)) ||
        (await stat(join(path, "index.html")).catch(() => null));
      if (!exists) failures.push(`${file}: missing ${href}`);
      checked++;
    }
  }
}
if (failures.length) {
  console.error([...new Set(failures)].join("\n"));
  process.exitCode = 1;
} else
  console.log(
    `Verified ${routes.length} routes, legacy HTML aliases, document semantics and ${checked} local URL references.`,
  );
