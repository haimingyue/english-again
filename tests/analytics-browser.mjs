import { chromium } from "@playwright/test";
import { expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import { mkdtemp, mkdir, readFile, rm } from "node:fs/promises";
import { spawn, spawnSync } from "node:child_process";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
const temp = await mkdtemp(join(tmpdir(), "ea-analytics-test-"));
const origin = "http://127.0.0.1:8092";
const env = {
  ...process.env,
  ANALYTICS_DB: join(temp, "visits.db"),
  SITE_ORIGIN: origin,
  COOKIE_SECURE: "0",
};
const password = "browser-test-only-password-123";
const setup = spawnSync(
  resolve(".venv/bin/python"),
  ["backend/manage.py", "init-admin"],
  {
    env,
    input: JSON.stringify({ username: "admin", password }),
    encoding: "utf8",
  },
);
if (setup.status) throw new Error(setup.stderr);
const server = spawn(
  resolve(".venv/bin/gunicorn"),
  [
    "--chdir",
    "backend",
    "--bind",
    "127.0.0.1:8092",
    "--workers",
    "1",
    "--threads",
    "2",
    "preview:app",
  ],
  { env, stdio: ["ignore", "ignore", "pipe"] },
);
let serverErrors = "";
server.stderr.on("data", (chunk) => (serverErrors += chunk));
let browser;
try {
  for (let i = 0; i < 50; i++) {
    if (
      await fetch(origin + "/api/analytics/health")
        .then((r) => r.ok)
        .catch(() => false)
    )
      break;
    await new Promise((r) => setTimeout(r, 200));
  }
  browser = await chromium.launch({
    channel: process.env.CI ? undefined : "chrome",
    args: ["--disable-gpu"],
  });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 1000 },
    userAgent:
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36",
  });
  const page = await context.newPage();
  const errors = [];
  page.on("pageerror", (e) => errors.push(e.message));
  await page.goto(origin + "/admin/");
  await expect(page.getByRole("heading", { name: "欢迎回来" })).toBeVisible();
  await mkdir(".data/analytics-qa", { recursive: true });
  await page.screenshot({
    path: ".data/analytics-qa/login.png",
    fullPage: true,
  });
  await page.getByLabel("账号", { exact: true }).fill("admin");
  await page.getByLabel("密码", { exact: true }).fill("wrong");
  await page.getByRole("button", { name: /登录后台/ }).click();
  await expect(page.getByRole("alert").first()).toHaveText("账号或密码不正确");
  await page.getByLabel("密码", { exact: true }).fill(password);
  await page.getByRole("button", { name: /登录后台/ }).click();
  await expect(page.getByRole("heading", { name: "访问概览" })).toBeVisible();
  await expect(page.locator("#total")).toHaveText("0 条");
  // Real public navigation and download, through the generated Nuxt tracker.
  const visitor = await context.newPage();
  await visitor.goto(origin + "/");
  await visitor.waitForFunction(() =>
    Boolean(document.querySelector("#__nuxt")?.__vue_app__),
  );
  await visitor
    .getByRole("navigation", { name: "主导航" })
    .getByRole("link", { name: "阅读", exact: true })
    .click();
  await expect(visitor).toHaveURL(/\/reading\/?$/);
  await expect
    .poll(async () =>
      (await context.request.get(origin + "/api/analytics/records"))
        .json()
        .then((d) => d.total),
    )
    .toBe(2);
  await visitor.goto(origin + "/tools");
  await visitor.waitForFunction(() =>
    Boolean(document.querySelector("#__nuxt")?.__vue_app__),
  );
  const download = visitor.locator('a[href$=".dmg"]').first();
  await download.evaluate((el) =>
    el.addEventListener("click", (e) => e.preventDefault()),
  );
  await download.click();
  await expect
    .poll(async () =>
      (await context.request.get(origin + "/api/analytics/summary"))
        .json()
        .then((d) => d.downloads),
    )
    .toBe(1);
  await visitor.close();
  const current = await (
    await context.request.get(origin + "/api/analytics/records")
  ).json();
  expect(
    current.items
      .filter((r) => r.kind === "pageview")
      .map((r) => r.path)
      .sort(),
  ).toEqual(["/", "/reading", "/tools"]);
  expect(current.items.find((r) => r.path === "/reading").title).toContain(
    "阅读",
  );
  expect(
    current.items.find((r) => r.path === "/tools" && r.kind === "pageview")
      .title,
  ).toContain("工具");
  // Populate enough deterministic records to verify pagination and complete export.
  for (let i = 0; i < 30; i++) {
    const r = await context.request.post(origin + "/api/analytics/collect", {
      headers: { Origin: origin },
      data: {
        event_id: crypto.randomUUID(),
        visitor_id: "fixture-visitor-12345",
        session_id: "fixture-session-12345",
        path: "/reading.html",
        kind: "download",
        title: "浏览器验收",
        label: "<img src=x onerror=alert(1)> =test",
        target: "https://example.com/deck.apkg",
      },
    });
    expect(r.status()).toBe(204);
  }
  await page.getByRole("button", { name: "刷新数据", exact: true }).click();
  await expect(page.locator("#total")).toHaveText("34 条");
  await expect(page.locator("#rows tr")).toHaveCount(25);
  await page.getByRole("button", { name: "下一页", exact: true }).click();
  await expect(page.locator("#rows tr")).toHaveCount(9);
  await page.getByLabel("关键词", { exact: true }).fill("浏览器验收");
  await page.getByRole("button", { name: "查询记录" }).click();
  await expect(page.locator("#total")).toHaveText("30 条");
  const downloadPromise = page.waitForEvent("download");
  await page.getByRole("button", { name: /导出筛选结果 CSV/ }).click();
  const csvDownload = await downloadPromise;
  const csv = await readFile(await csvDownload.path(), "utf8");
  expect(csv.split("\n").filter(Boolean)).toHaveLength(31);
  await page.getByRole("button", { name: "查看", exact: true }).first().click();
  await expect(page.getByRole("dialog", { name: "访问详情" })).toBeVisible();
  await expect(page.locator("#detail-fields")).toContainText(
    "fixture-visitor-12345",
  );
  await page.getByRole("button", { name: "查看该访客的访问轨迹" }).click();
  await expect(page.locator("#visitor-filter")).toBeVisible();
  await page.getByRole("button", { name: "重置", exact: true }).click();
  await expect(page.locator("#total")).toHaveText("34 条");
  await page.getByLabel("事件类型", { exact: true }).selectOption("pageview");
  await page.getByRole("button", { name: "查询记录" }).click();
  await expect(page.locator("#total")).toHaveText("3 条");
  await page.screenshot({
    path: ".data/analytics-qa/dashboard.png",
    fullPage: true,
  });
  const audit = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa"])
    .analyze();
  expect(
    audit.violations.map((v) => ({
      id: v.id,
      nodes: v.nodes.map((n) => n.target),
    })),
  ).toEqual([]);
  await page.setViewportSize({ width: 390, height: 844 });
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth,
    ),
  ).toBe(true);
  await page.screenshot({
    path: ".data/analytics-qa/mobile.png",
    fullPage: true,
  });
  await page.getByRole("button", { name: "修改密码", exact: true }).click();
  await page.getByLabel("当前密码", { exact: true }).fill(password);
  await page
    .getByLabel("新密码", { exact: true })
    .fill("new-browser-test-password-456");
  await page
    .getByLabel("确认新密码", { exact: true })
    .fill("new-browser-test-password-456");
  await page.getByRole("button", { name: "保存新密码" }).click();
  await expect(page.locator("#login")).toBeVisible();
  await page.getByLabel("账号", { exact: true }).fill("admin");
  await page
    .getByLabel("密码", { exact: true })
    .fill("new-browser-test-password-456");
  await page.getByRole("button", { name: /登录后台/ }).click();
  await expect(page.locator("#dashboard")).toBeVisible();
  await page.getByRole("button", { name: "退出登录" }).click();
  await expect(page.locator("#login")).toBeVisible();
  expect(
    (await context.request.get(origin + "/api/analytics/export")).status(),
  ).toBe(401);
  expect(errors).toEqual([]);
  console.log(
    "PASS: actual SPA tracking, download tracking, login, filters, pagination, complete CSV export, details, visitor history, password change, logout, accessibility and mobile layout.",
  );
} catch (error) {
  console.error(serverErrors);
  throw error;
} finally {
  await browser?.close();
  server.kill("SIGTERM");
  await new Promise((r) => server.once("exit", r));
  await rm(temp, { recursive: true, force: true });
}
