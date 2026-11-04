import { test, expect, type Locator } from "@playwright/test";
import { readFileSync } from "node:fs";

const report = JSON.parse(
  readFileSync("docs/maintenance/generated/png-webp.json", "utf8"),
) as {
  images: { source: string; webp: string; width: number; height: number }[];
};
const optimized = new Map(
  report.images.map((image) => [
    image.webp.replace(/^(?:site|public)/, ""),
    image,
  ]),
);
const originals = new Set(
  report.images.map((image) => image.source.replace(/^(?:site|public)/, "")),
);

async function checkImage(image: Locator) {
  await image.scrollIntoViewIfNeeded();
  const src = (await image.getAttribute("src"))!;
  expect(originals.has(src)).toBe(false);
  await expect
    .poll(() =>
      image.evaluate(
        (node: HTMLImageElement) => node.complete && node.naturalWidth > 0,
      ),
    )
    .toBe(true);
  const record = optimized.get(src);
  if (record) {
    expect(
      await image.evaluate((node: HTMLImageElement) => [
        node.naturalWidth,
        node.naturalHeight,
      ]),
    ).toEqual([record.width, record.height]);
  } else {
    // The small vowel card and the hand-drawn week-one SVG are retained.
    expect(src).toMatch(/\/(?:vowel-card\.png|week-01\.svg)$/);
  }
  return src;
}

test("all 12 tool gallery images load at original resolution as WebP", async ({
  page,
}) => {
  await page.goto("/tools");
  await page.locator("#feature-screen").click();
  const dialog = page.locator("dialog[open]");
  const seen = new Set<string>();
  for (let index = 0; index < 12; index++) {
    seen.add(await checkImage(dialog.locator("img")));
    await dialog.getByRole("button", { name: "下一张 →", exact: true }).click();
  }
  expect(seen.size).toBe(12);
});

test("all weekly note previews retain full resolution", async ({ page }) => {
  await page.goto("/columns");
  const buttons = page
    .locator("#video-grid")
    .getByRole("button", { name: /完整学习笔记/ });
  await expect(buttons).toHaveCount(25);
  for (const button of await buttons.all()) {
    await button.click();
    const dialog = page.locator("dialog[open]");
    const src = await checkImage(dialog.locator("img"));
    await expect(
      dialog.getByRole("link", { name: /查看原图/ }),
    ).toHaveAttribute("href", src);
    await page.keyboard.press("Escape");
  }
});

test("recall flips and phonetics tabs load their selected full-resolution images", async ({
  page,
}) => {
  await page.goto("/about");
  for (const tab of await page.locator("#recall").getByRole("tab").all()) {
    await tab.click();
    for (const side of ["front", "back"]) {
      if (side === "back") await page.locator("#reveal-card").click();
      await expect(page.locator("#card-image")).toHaveAttribute(
        "src",
        new RegExp(`-${side}\\.webp$`),
      );
      const selected = await checkImage(page.locator("#card-image"));
      await page.locator("#card-zoom").click();
      await expect(page.locator("dialog[open] img")).toHaveAttribute(
        "src",
        selected,
      );
      await checkImage(page.locator("dialog[open] img"));
      await page.keyboard.press("Escape");
    }
  }
  await page.goto("/phonetics");
  for (const tab of await page.locator("#cards").getByRole("tab").all()) {
    await tab.click();
    const selected = await checkImage(page.locator("#card-image"));
    await page.locator("#enlarge-card").click();
    await expect(page.locator("dialog[open] img")).toHaveAttribute(
      "src",
      selected,
    );
    await checkImage(page.locator("dialog[open] img"));
    await page.keyboard.press("Escape");
  }
});
