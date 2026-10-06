import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
const routes = [
  "/",
  "/about",
  "/phonetics",
  "/grammar",
  "/vocabulary",
  "/reading",
  "/columns",
  "/fluent-forever",
  "/make-it-stick",
  "/little-prince",
  "/tools",
];
for (const route of routes) {
  test(`${route}: accessible, responsive and complete`, async ({ page }) => {
    const errors: string[] = [];
    page.on("pageerror", (e) => errors.push(e.message));
    page.on("console", (m) => {
      if (/hydration/i.test(m.text())) errors.push(m.text());
    });
    await page.setViewportSize({ width: 1440, height: 1000 });
    await page.goto(route);
    await page.waitForFunction(
      "Boolean(document.querySelector(\'# __nuxt\'.replace(\' \',\'\'))?.__vue_app__)",
    );
    await expect(page.locator("main h1")).toHaveCount(1);
    await expect(page).toHaveTitle(/英语自学指北/);
    // Bring each lazy image into view before asserting its completed response.
    for (const image of await page.locator("main img").all()) {
      await image.scrollIntoViewIfNeeded();
      await expect
        .poll(() =>
          image.evaluate(
            (node: HTMLImageElement) => node.complete && node.naturalWidth > 0,
          ),
        )
        .toBe(true);
    }
    const audit = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
      .analyze();
    expect(
      audit.violations.map((v) => ({
        id: v.id,
        nodes: v.nodes.map((n) => n.target),
      })),
    ).toEqual([]);
    for (const width of [1440, 768, 390, 320]) {
      await page.setViewportSize({ width, height: 1000 });
      expect(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= innerWidth,
        ),
      ).toBe(true);
    }
    expect(errors).toEqual([]);
  });
}

test("mobile navigation, escape and route changes", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  await page.waitForFunction(
    "Boolean(document.querySelector(\'# __nuxt\'.replace(\' \',\'\'))?.__vue_app__)",
  );
  const menu = page.getByRole("button", { name: "菜单", exact: true });
  await menu.click();
  await expect(menu).toHaveAttribute("aria-expanded", "true");
  await page.keyboard.press("Escape");
  await expect(menu).toBeFocused();
  await expect(menu).toHaveAttribute("aria-expanded", "false");
  await menu.click();
  await page
    .getByRole("navigation", { name: "主导航" })
    .getByRole("link", { name: "阅读", exact: true })
    .click();
  await expect(page).toHaveURL(/\/reading\/?$/);
  await expect(menu).toHaveAttribute("aria-expanded", "false");
});

test("home course dialogs restore focus and software tabs switch images", async ({
  page,
}) => {
  await page.goto("/");
  await page.waitForFunction(
    "Boolean(document.querySelector(\'# __nuxt\'.replace(\' \',\'\'))?.__vue_app__)",
  );
  const trigger = page.getByRole("button", { name: /从第一周开始/ });
  await trigger.click();
  const dialog = page.locator("dialog[open]");
  await expect(dialog).toBeVisible();
  await expect(dialog.getByRole("link")).not.toHaveCount(0);
  await page.keyboard.press("Escape");
  await expect(dialog).toHaveCount(0);
  await expect(trigger).toBeFocused();
  const tab = page.getByRole("tab", { name: "影视", exact: true });
  await tab.click();
  await expect(page.locator("#software-panel")).toHaveAttribute(
    "src",
    /movies/,
  );
  await tab.press("ArrowRight");
  await expect(
    page.getByRole("tab", { name: "数据", exact: true }),
  ).toBeFocused();
  await expect(page.locator("#software-panel")).toHaveAttribute("src", /stats/);
});

test("recall answers, tabs, methods and image dialog", async ({ page }) => {
  await page.goto("/about");
  await page.waitForFunction(
    "Boolean(document.querySelector(\'# __nuxt\'.replace(\' \',\'\'))?.__vue_app__)",
  );
  await expect(page.locator("#card-feedback")).toBeHidden();
  await page.locator("#reveal-card").click();
  await expect(page.locator("#card-feedback")).toBeVisible();
  await page.locator("#recall").getByRole("tab").nth(1).click();
  await expect(page.locator("#card-feedback")).toBeHidden();
  const zoom = page.locator("#card-zoom");
  await zoom.click();
  await expect(page.locator("dialog[open] img")).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(zoom).toBeFocused();
  const first = await page.locator("#method-title").innerText();
  await page.locator("#practice").getByRole("tab").nth(1).click();
  await expect(page.locator("#method-title")).not.toHaveText(first);
});

test("phonetics requires actual playback before answers and resets each question", async ({
  page,
}) => {
  await page.goto("/phonetics");
  await page.waitForFunction(
    "Boolean(document.querySelector(\'# __nuxt\'.replace(\' \',\'\'))?.__vue_app__)",
  );
  const answers = page.locator("[data-answer]");
  await expect(answers.first()).toBeDisabled();
  const audio = page.waitForResponse(
    (r) => r.url().includes("/assets/audio/") && r.status() < 400,
  );
  await page.locator("#quiz-play").click();
  await audio;
  await expect(answers.first()).toBeEnabled();
  await answers.first().click();
  await expect(answers.first()).toBeDisabled();
  await expect(page.locator("#quiz-feedback")).not.toHaveText(
    "先听音频，再选择答案。",
  );
  await page.locator("#next-pair").click();
  await expect(answers.first()).toBeDisabled();
  await page.getByRole("tab", { name: "单词听辨", exact: true }).click();
  await expect(page.locator("#card-title")).toContainText("听");
});

test("vocabulary tabs reset audio and preview the selected card", async ({
  page,
}) => {
  await page.goto("/vocabulary");
  await page.waitForFunction(
    "Boolean(document.querySelector(\'# __nuxt\'.replace(\' \',\'\'))?.__vue_app__)",
  );
  const first = await page.locator("#word-title").innerText();
  await page.locator("#cards").getByRole("tab").nth(1).click();
  await expect(page.locator("#word-title")).not.toHaveText(first);
  const audio = page.waitForResponse(
    (r) => r.url().includes("/assets/audio/") && r.status() < 400,
  );
  await page.locator("#word-audio-play").click();
  await audio;
  await expect(page.locator("#audio-status")).not.toContainText("无法");
  await page.locator("#enlarge-word").click();
  await expect(page.locator("dialog[open] img")).toBeVisible();
  await page.keyboard.press("Escape");
});

test("reading hints and all five exercises reveal, reset and wrap", async ({
  page,
}) => {
  await page.goto("/reading");
  await page.waitForFunction(
    "Boolean(document.querySelector(\'# __nuxt\'.replace(\' \',\'\'))?.__vue_app__)",
  );
  for (const button of await page.locator(".reading-levels button").all()) {
    await button.click();
    await expect(button).toHaveAttribute("aria-pressed", "true");
    await expect(page.locator("#reading-hint")).toBeVisible();
  }
  await expect(page.locator("#previous-exercise")).toBeDisabled();
  for (let i = 1; i <= 5; i++) {
    await expect(page.locator("#exercise-position")).toHaveText(`${i} / 5`);
    await page.locator("#check-exercise").click();
    await expect(page.locator("#exercise-answer")).toBeVisible();
    await page.locator("#next-exercise").click();
    await expect(page.locator("#exercise-answer")).toBeHidden();
  }
  await expect(page.locator("#exercise-position")).toHaveText("1 / 5");
});

for (const [route, count] of [
  ["/columns", 25],
  ["/fluent-forever", 8],
  ["/make-it-stick", 7],
  ["/little-prince", 7],
] as const) {
  test(`${route}: search, sort, empty state and reset`, async ({ page }) => {
    await page.goto(route);
    await page.waitForFunction(
      "Boolean(document.querySelector(\'# __nuxt\'.replace(\' \',\'\'))?.__vue_app__)",
    );
    const cards = page.locator("#video-grid article");
    await expect(cards).toHaveCount(count);
    const first = await cards.first().innerText();
    await page.locator("#video-sort").selectOption("desc");
    await expect(cards.first()).not.toHaveText(first);
    await page.locator("#video-search").fill("无匹配XYZ");
    await expect(cards).toHaveCount(0);
    await expect(page.locator("#empty-state")).toBeVisible();
    await page.locator("#reset-filters").click();
    await expect(cards).toHaveCount(count);
    await expect(page.locator("#video-search")).toBeFocused();
  });
}

test("tools tabs, gallery arrows and published downloads", async ({ page }) => {
  await page.goto("/tools");
  await page.waitForFunction(
    "Boolean(document.querySelector(\'# __nuxt\'.replace(\' \',\'\'))?.__vue_app__)",
  );
  for (const tab of await page.locator("#features").getByRole("tab").all()) {
    await tab.click();
    await expect(tab).toHaveAttribute("aria-selected", "true");
    await expect(page.locator("#feature-title")).not.toBeEmpty();
  }
  await page.locator("#feature-screen").click();
  const dialog = page.locator("dialog[open]");
  await expect(dialog).toBeVisible();
  const src = await dialog.locator("img").getAttribute("src");
  await page.keyboard.press("ArrowRight");
  await expect(dialog.locator("img")).not.toHaveAttribute("src", src!);
  await page.keyboard.press("Escape");
  const downloads = {
    "win-x64":
      "https://books-club.cn/desktop-updates/windows/x64/English-Club-0.4.19-x64.exe",
    "mac-arm64":
      "https://books-club.cn/desktop-updates/macos/English-Club-0.4.19-arm64.dmg",
    "mac-x64":
      "https://books-club.cn/desktop-updates/macos/English-Club-0.4.19-x64.dmg",
  };
  await expect(page.locator('input[name="platform"]')).toHaveCount(3);
  await expect(page.locator('[data-platform="win-x86"]')).toHaveCount(0);
  for (const [platform, url] of Object.entries(downloads)) {
    const radio = page.locator(`input[value="${platform}"]`);
    await radio.check();
    await expect(radio).toBeChecked();
    await expect(page.locator("#download-unavailable")).toHaveCount(0);
    await expect(page.locator("#download-link")).toHaveAttribute("href", url);
    await expect(page.locator("#release-detail")).toHaveText("版本 0.4.19");
  }
});

test("grammar answers use native disclosure and all six decks are real files", async ({
  page,
  request,
}) => {
  await page.goto("/grammar");
  await page.waitForFunction(
    "Boolean(document.querySelector('#__nuxt')?.__vue_app__)",
  );
  const details = page.locator("main details");
  expect(await details.count()).toBeGreaterThan(0);
  for (const item of await details.all()) {
    await item.locator("summary").click();
    await expect(item).toHaveAttribute("open", "");
  }
  for (const name of [
    "phonetics",
    "grammar",
    "sentences",
    "coca-30000",
    "wordbook",
    "phrases",
  ]) {
    const response = await request.head(`/assets/downloads/anki/${name}.apkg`);
    expect(response.ok()).toBe(true);
    expect(Number(response.headers()["content-length"])).toBeGreaterThan(1000);
  }
});

test("legacy HTML links still resolve to the same content", async ({
  page,
}) => {
  for (const route of routes) {
    await page.goto(route === "/" ? "/index.html" : `${route}.html`);
    await expect(page.locator("main h1")).toHaveCount(1);
    await expect(page).toHaveTitle(/英语自学指北/);
  }
});

test("external image failure keeps a readable local cover", async ({
  page,
}) => {
  await page.route("https://*.hdslb.com/**", (route) => route.abort());
  await page.goto("/reading");
  await page.waitForFunction(
    "Boolean(document.querySelector('#__nuxt')?.__vue_app__)",
  );
  const cover = page.locator('img[alt*="开篇"]').first();
  await cover.scrollIntoViewIfNeeded();
  await expect(cover).toHaveAttribute("src", /^\/assets\//);
  await expect
    .poll(() => cover.evaluate((image: HTMLImageElement) => image.naturalWidth))
    .toBeGreaterThan(0);
});

test("tools: 32-bit Windows is unsupported without recommending x64", async ({
  page,
}) => {
  await page.addInitScript(() => {
    Object.defineProperty(navigator, "userAgentData", {
      configurable: true,
      value: {
        platform: "Windows",
        mobile: false,
        getHighEntropyValues: async () => ({
          platform: "Windows",
          architecture: "x86",
          bitness: "32",
          wow64: false,
        }),
      },
    });
  });
  await page.goto("/tools");
  await expect(page.locator("#detected-description")).toContainText(
    "Windows 32 位系统，目前不提供该版本",
  );
  await expect(page.locator('input[name="platform"]:checked')).toHaveCount(0);
  await expect(page.locator('input[value="win-x86"]')).toHaveCount(0);
  await expect(page.locator("#download-link")).toHaveCount(0);
  await expect(page.locator("#download-unavailable")).toBeDisabled();
  await expect(page.locator("#download-unavailable")).toHaveText(
    "请先选择版本",
  );
});
