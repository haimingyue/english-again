/** Run both previews first. Captures reference and Nuxt at identical viewports. */
import { chromium } from "playwright-core";
import { mkdir, writeFile } from "node:fs/promises";
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
const base = process.env.PLAYWRIGHT_BASE_URL || "http://127.0.0.1:4177";
const reference = process.env.REFERENCE_BASE_URL || "http://127.0.0.1:4176";
await mkdir("design/qa", { recursive: true });
const browser = await chromium.launch({
  channel: process.env.CI ? undefined : "chrome",
});
const report = [];
try {
  for (const width of [1440, 390]) {
    const context = await browser.newContext({
      viewport: { width, height: 1000 },
      reducedMotion: "reduce",
    });
    const page = await context.newPage();
    let errors = [];
    page.on("pageerror", (e) => errors.push(e.message));
    page.on("console", (m) => {
      if (/hydration/i.test(m.text())) errors.push(m.text());
    });
    for (const route of routes) {
      for (const kind of ["reference", "nuxt"]) {
        errors = [];
        await page.goto(
          kind === "reference"
            ? `${reference}/${route}.html`
            : `${base}/${route === "index" ? "" : route}`,
          { waitUntil: "networkidle" },
        );
        await page.waitForSelector("main h1");
        await page.addStyleTag({content: "html,body,* { scroll-behavior: auto !important; }"});
        await page.evaluate(async () => {
          for (let y = 0; y < document.body.scrollHeight; y += 700) {
            scrollTo(0, y);
            await new Promise((r) => setTimeout(r, 70));
          }
        });
        await page
          .waitForFunction(
            () =>
              [...document.querySelectorAll("main img")].every(
                (i) => i.complete && i.naturalWidth,
              ),
            {},
            { timeout: 9000 },
          )
          .catch(() => {});
        await page.evaluate(() => scrollTo(0, 0));
        await page.screenshot({
          path: `design/qa/${kind}-${route}-${width}.png`,
          fullPage: true,
        });
        if (kind === "nuxt") {
          const state = await page.evaluate(() => ({
            height: document.body.scrollHeight,
            overflow: document.documentElement.scrollWidth > innerWidth,
            broken: [...document.querySelectorAll("main img")]
              .filter((i) => !i.complete || !i.naturalWidth)
              .map((i) => i.currentSrc || i.src),
          }));
          report.push({ route, width, ...state, errors });
          console.log(
            route,
            width,
            JSON.stringify(state),
            errors.length ? "ERRORS" : "OK",
          );
        }
      }
    }
    await context.close();
  }
} finally {
  await browser.close();
  await writeFile(
    "design/qa/browser-audit.json",
    JSON.stringify(report, null, 2) + "\n",
  );
}
if (report.some((r) => r.overflow || r.broken.length || r.errors.length))
  process.exitCode = 1;
