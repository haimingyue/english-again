import { test, expect } from "@playwright/test";

test("guide navigation, article illustrations, screenshot preview and resource link", async ({
  page,
}) => {
  await page.goto("/about");
  const navigation = page.getByRole("navigation", {
    name: "主导航",
    exact: true,
  });
  await navigation.getByRole("link", { name: "使用指南", exact: true }).click();
  await expect(page).toHaveURL(/\/guides\/?$/);
  await page.getByRole("link", { name: /阅读第 1 期/ }).click();
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "Anki 入门：安装、导入与同步",
  );
  await expect(
    navigation.getByRole("link", { name: "使用指南", exact: true }),
  ).toHaveAttribute("aria-current", "page");
  await expect(page.locator("main figure img")).toHaveCount(8);
  for (const image of await page.locator("main figure img").all()) {
    await image.scrollIntoViewIfNeeded();
    await expect
      .poll(() =>
        image.evaluate((node: HTMLImageElement) => [
          node.complete,
          node.naturalWidth,
          node.naturalHeight,
        ]),
      )
      .toEqual([true, 1192, 791]);
    expect((await image.boundingBox())!.width).toBeLessThanOrEqual(596);
  }
  const preview = page.getByRole("button", {
    name: /放大查看：电脑版下载入口/,
  });
  await preview.click();
  await expect(page.locator("dialog[open] img")).toBeVisible();
  const fullImage = page.locator("dialog[open] img");
  await expect
    .poll(() =>
      fullImage.evaluate((node: HTMLImageElement) => [
        node.complete,
        node.naturalWidth,
        node.naturalHeight,
      ]),
    )
    .toEqual([true, 2385, 1581]);
  await expect(page.getByRole("link", { name: "查看原图 ↗" })).toHaveAttribute(
    "href",
    (await fullImage.getAttribute("src"))!,
  );
  await page.keyboard.press("Escape");
  await expect(page.locator("dialog[open]")).toHaveCount(0);
  await expect(preview).toBeFocused();
  await page.getByRole("link", { name: "音标卡牌", exact: true }).click();
  await expect(page).toHaveURL(/\/phonetics\/?#download$/);
  await expect(page.locator("#download")).toBeVisible();
});

test("guide HTML alias, mobile menu and header at intermediate widths", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/guides/anki-setup.html");
  const menu = page.getByRole("button", { name: "菜单", exact: true });
  await menu.click();
  await page
    .getByRole("navigation", { name: "主导航", exact: true })
    .getByRole("link", { name: "使用指南", exact: true })
    .click();
  await expect(page).toHaveURL(/\/guides\/?$/);
  await expect(menu).toHaveAttribute("aria-expanded", "false");
  for (const width of [320, 768, 961, 1024, 1201, 1440]) {
    await page.setViewportSize({ width, height: 1000 });
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
    ).toBe(true);
    if (width >= 961) {
      const guideLink = page
        .getByRole("navigation", { name: "主导航", exact: true })
        .getByRole("link", { name: "使用指南", exact: true });
      await expect(guideLink).toBeInViewport();
      const rect = await guideLink.boundingBox();
      const cta = await page
        .getByRole("banner")
        .getByRole("link", { name: "开始学习", exact: true })
        .boundingBox();
      expect(rect!.x + rect!.width).toBeLessThanOrEqual(cta!.x);
    }
  }
});
