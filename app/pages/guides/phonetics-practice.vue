<script setup lang="ts">
import { guideEpisodes } from "~/data/guides";
const episode = guideEpisodes.find(
  (guide) => guide.slug === "phonetics-practice",
)!;
usePageSeo(episode.title, episode.description);
definePageMeta({ alias: "/guides/phonetics-practice.html" });
</script>

<template>
  <GuideArticle :episode="episode">
    <section aria-labelledby="phonetics-video-title">
      <h2 id="phonetics-video-title">用卡牌，把音标练起来</h2>
      <p>
        这期视频围绕美式音标学习展开，介绍如何使用音标卡牌进行练习。先建立对声音的认识，再在持续的听辨与发音中慢慢磨练。
      </p>
      <GuideVideo
        bvid="BV1zXHw6cE2p"
        :title="episode.title"
        duration="15:06"
        number="02"
      />
    </section>
    <section aria-labelledby="phonetics-resources-title">
      <h2 id="phonetics-resources-title">把练习资料准备好</h2>
      <div class="grid gap-4 sm:grid-cols-2">
        <NuxtLink
          to="/phonetics#download"
          class="border border-line bg-sage p-5 font-semibold text-forest"
          >音标卡牌与听辨练习 ↗</NuxtLink
        ><NuxtLink
          to="/resources#android-tts"
          class="border border-line bg-sage p-5 font-semibold text-forest"
          >安卓卡牌无法发音？ ↗</NuxtLink
        >
      </div>
      <p class="mt-5 text-sm text-muted">
        第一次使用
        Anki？可以先按第一期完成安装、卡牌导入和手机同步，再回来看本期。
      </p>
    </section>
    <nav
      aria-label="相邻教程"
      class="mt-9 flex flex-wrap justify-between gap-4 border-t border-line pt-6"
    >
      <NuxtLink to="/guides/anki-setup" class="action-link text-forest"
        >← 第一期：安装与同步</NuxtLink
      ><NuxtLink
        to="/guides/reading-and-viewing"
        class="action-link text-forest"
        >第三期：走向阅读与观影 →</NuxtLink
      >
    </nav>
  </GuideArticle>
</template>
