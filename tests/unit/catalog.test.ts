import { strict as assert } from "node:assert";
import { test } from "node:test";
import {
  filterVideos,
  normalizeSearch,
  formatDuration,
  type Video,
} from "../../app/utils/catalog.ts";
const videos: Video[] = [
  {
    title: "第 1 周发音",
    label: "第 1 周",
    topic: "辅音",
    category: "发音",
    url: "/one",
    thumbnail: "/1.png",
  },
  {
    title: "第 2 周元音 IPA",
    label: "第 2 周",
    topic: "听辨练习",
    category: "发音",
    url: "/two",
    thumbnail: "/2.png",
  },
  {
    title: "第 3–4 周的单词",
    label: "第 3–4 周",
    topic: "100 词",
    category: "词汇",
    url: "/three",
    thumbnail: "/3.png",
  },
];
test("search handles fullwidth Latin, spaces, and dash variants", () => {
  assert.equal(normalizeSearch("ＩＰＡ ３—４"), "ipa3-4");
  assert.deepEqual(
    filterVideos(videos, "ＩＰＡ 听辨", "全部", "asc").map((v) => v.url),
    ["/two"],
  );
  assert.deepEqual(
    filterVideos(videos, "3-4", "全部", "asc").map((v) => v.url),
    ["/three"],
  );
});
test("category and all search terms are applied together", () => {
  assert.equal(filterVideos(videos, "单词", "发音", "asc").length, 0);
  assert.equal(filterVideos(videos, "", "发音", "asc").length, 2);
  assert.equal(filterVideos(videos, "不存在", "全部", "asc").length, 0);
});
test("descending order does not mutate source data", () => {
  assert.deepEqual(
    filterVideos(videos, "", "全部", "desc").map((v) => v.url),
    ["/three", "/two", "/one"],
  );
  assert.equal(videos[0]?.url, "/one");
});
test("duration formatting handles minute boundaries and absent metadata", () => {
  assert.equal(formatDuration(665), "11:05");
  assert.equal(formatDuration(60), "1:00");
  assert.equal(formatDuration(null), "");
  assert.equal(formatDuration(-1), "");
});
