import test from "node:test";
import assert from "node:assert/strict";
import {
  normalizeAnalyticsPath,
  classifyAnalyticsLink,
} from "../../app/utils/analytics.ts";
test("analytics consolidates canonical and legacy page paths", () => {
  for (const input of [
    "/reading",
    "/reading/",
    "/reading.html",
    "/reading.html?q=1#top",
  ])
    assert.equal(normalizeAnalyticsPath(input), "/reading");
  for (const input of ["/", "/index.html", "/index.html#top"])
    assert.equal(normalizeAnalyticsPath(input), "/");
});
test("analytics categorizes actual resource and external link clicks", () => {
  const origin = "https://english.tlpy8.com";
  assert.equal(
    classifyAnalyticsLink("/assets/deck.apkg?download=1", origin),
    "download",
  );
  assert.equal(
    classifyAnalyticsLink("https://books-club.cn/installer.dmg", origin),
    "download",
  );
  assert.equal(
    classifyAnalyticsLink("https://www.bilibili.com/video/BV123", origin),
    "video",
  );
  assert.equal(
    classifyAnalyticsLink("https://bilibili.com.fake.test/video", origin),
    "outbound",
  );
  assert.equal(classifyAnalyticsLink("/reading#exercise", origin), null);
  assert.equal(classifyAnalyticsLink("mailto:test@example.com", origin), null);
});
