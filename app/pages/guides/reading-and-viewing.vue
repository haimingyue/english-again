<script setup lang="ts">
import { guideEpisodes } from "~/data/guides";
const episode = guideEpisodes.find(
  (guide) => guide.slug === "reading-and-viewing",
)!;
usePageSeo(episode.title, episode.description);
definePageMeta({ alias: "/guides/reading-and-viewing.html" });
</script>

<template>
  <GuideArticle :episode="episode">
    <section aria-labelledby="reading-video-title">
      <h2 id="reading-video-title">让背过的单词，走进真实的语言</h2>
      <p>
        学完音标之后，继续积累基础词汇和语法，但不要把背单词当成唯一的学习方式。这期视频讲如何从单词走向阅读和观影，把学过的内容放进真实语境。
      </p>
      <GuideVideo
        bvid="BV1ohHg67E6q"
        :title="episode.title"
        duration="15:09"
        number="03"
      />
    </section>
    <section aria-labelledby="reading-resources-title">
      <h2 id="reading-resources-title">接着，开始自己的练习</h2>
      <div class="grid gap-4 sm:grid-cols-2">
        <NuxtLink
          to="/vocabulary"
          class="border border-line bg-sage p-5 font-semibold text-forest"
          >词汇卡牌与语境记忆 ↗</NuxtLink
        ><NuxtLink
          to="/reading"
          class="border border-line bg-sage p-5 font-semibold text-forest"
          >原著阅读方法与练习 ↗</NuxtLink
        ><NuxtLink
          to="/tools"
          class="border border-line bg-sage p-5 font-semibold text-forest"
          >阅读与影视学习工具 ↗</NuxtLink
        ><NuxtLink
          to="/resources#obsidian"
          class="border border-line bg-sage p-5 font-semibold text-forest"
          >下载专栏 Obsidian 笔记库 ↗</NuxtLink
        >
      </div>
    </section>
    <div class="mt-8 border-l-2 border-forest bg-sage p-6">
      <p class="font-semibold text-forest">使用指南三期已完结</p>
      <p class="mt-2 text-sm text-muted">
        从准备工具、练习音标，到进入阅读与观影。教程看完后，就回到每周专栏，按自己的节奏继续学习。
      </p>
    </div>
    <nav
      aria-label="相邻教程"
      class="mt-9 flex flex-wrap justify-between gap-4 border-t border-line pt-6"
    >
      <NuxtLink to="/guides/phonetics-practice" class="action-link text-forest"
        >← 第二期：美式音标练习</NuxtLink
      ><NuxtLink to="/columns" class="action-link text-forest"
        >去看每周专栏 →</NuxtLink
      >
    </nav>
  </GuideArticle>
</template>
