<script setup lang="ts">
import { guideDeckResources, guideEpisodes } from "~/data/guides";
usePageSeo(
  "使用指南",
  "英语自学指北的系列使用指南。从 Anki 安装、卡牌导入和手机同步开始，一步步用好项目中的学习资源。",
);
definePageMeta({ alias: "/guides.html" });
</script>

<template>
  <main id="main" data-page="guides" tabindex="-1">
    <section class="bg-forest py-12 text-white sm:py-18 lg:py-22">
      <div
        class="page-shell grid items-center gap-10 lg:grid-cols-[1.3fr_1fr] lg:gap-20"
      >
        <div>
          <p
            class="flex items-center gap-3 text-sm font-semibold tracking-wider text-sun"
          >
            <span
              aria-hidden="true"
              class="h-0.5 w-6 bg-sun"
            />一步一步，把资源用起来
          </p>
          <h1 class="mt-6 text-[44px] font-bold sm:text-[56px] lg:text-[64px]">
            使用指南
          </h1>
          <p
            class="mt-4 inline-flex items-center gap-2 border border-[#729887] px-3 py-1 text-sm text-[#dce9df]"
          >
            <span class="size-1.5 rounded-full bg-sun" aria-hidden="true" />全 3
            期 · 已完结
          </p>
          <p
            class="mt-5 max-w-[580px] text-base leading-[1.95] text-[#dce9df] sm:text-lg"
          >
            跟着教程完成一次实际操作，<br
              class="hidden sm:block"
            />让英语自学指北成为你每天用得上的学习工具。
          </p>
          <a href="#episodes" class="primary-button mt-8"
            >从第一期开始 <span aria-hidden="true">↓</span></a
          >
        </div>
        <aside
          aria-labelledby="guide-resources-title"
          class="border border-[#729887] bg-[#1e5143] px-5 py-6 sm:px-8 sm:py-8"
        >
          <div
            class="flex items-baseline justify-between border-b border-[#729887] pb-4"
          >
            <h2 id="guide-resources-title" class="text-2xl font-semibold">
              卡牌资源
            </h2>
            <span class="text-xs text-[#dce9df]">6 套 · .apkg</span>
          </div>
          <p class="mt-4 text-sm text-[#dce9df]">
            选择需要的卡牌，点击即可下载。
          </p>
          <ul
            class="my-5 grid list-none grid-cols-1 gap-3 p-0 min-[360px]:grid-cols-2"
          >
            <li v-for="resource in guideDeckResources" :key="resource.file">
              <a
                :href="`/assets/downloads/anki/${resource.file}${resource.version ? `?v=${resource.version}` : ''}`"
                :download="resource.downloadName"
                class="flex min-h-14 items-center justify-between gap-2 border border-[#729887] bg-white/5 px-3 py-3 text-sm hover:border-sun hover:bg-white/10 sm:px-4"
                ><span class="min-w-0 break-words">{{ resource.label }}</span
                ><span aria-hidden="true" class="shrink-0 text-sun">↓</span></a
              >
            </li>
          </ul>
          <p class="text-xs leading-relaxed text-[#dce9df]">
            下载后，按第一期教程导入 Anki 即可使用。
          </p>
          <NuxtLink
            to="/resources"
            class="mt-5 inline-flex min-h-11 items-center text-sm font-semibold text-sun underline underline-offset-4"
            >Obsidian 笔记与安卓发音工具 ↗</NuxtLink
          >
        </aside>
      </div>
    </section>

    <section
      id="episodes"
      class="page-shell py-12 sm:py-18 lg:py-22"
      aria-labelledby="episodes-title"
    >
      <div class="mb-8 flex flex-wrap items-end justify-between gap-3">
        <h2 id="episodes-title" class="text-3xl font-bold">系列教程</h2>
        <p class="text-sm text-muted">
          全 {{ guideEpisodes.length }} 期 · 已完结
        </p>
      </div>
      <article
        v-for="episode in guideEpisodes"
        :key="episode.slug"
        class="grid gap-6 border-y border-line py-8 sm:grid-cols-[80px_minmax(0,1fr)] sm:gap-8 lg:grid-cols-[100px_minmax(0,1fr)_auto] lg:items-center lg:py-10"
      >
        <div class="flex items-baseline gap-3 sm:block">
          <span
            class="text-[48px] font-semibold leading-none tracking-tight text-forest sm:text-[60px]"
            >{{ episode.number }}</span
          ><span class="text-xs text-muted sm:mt-3 sm:block">使用指南</span>
        </div>
        <div>
          <p class="mb-3 text-xs font-semibold tracking-wider text-forest">
            第 {{ Number(episode.number) }} 期 / {{ episode.format }}教程
          </p>
          <h3 class="text-2xl font-bold leading-[1.4] sm:text-[28px]">
            <NuxtLink
              :to="`/guides/${episode.slug}`"
              class="hover:text-forest hover:underline"
              >{{ episode.title }}</NuxtLink
            >
          </h3>
          <p class="mt-4 max-w-[680px] text-base leading-[1.9] text-muted">
            {{ episode.description }}
          </p>
          <ul
            aria-label="教程主题"
            class="mt-5 flex list-none flex-wrap gap-x-5 gap-y-2 p-0 text-sm text-forest"
          >
            <li v-for="topic in episode.topics" :key="topic">{{ topic }}</li>
          </ul>
        </div>
        <NuxtLink
          :to="`/guides/${episode.slug}`"
          class="action-link justify-self-start text-forest sm:col-start-2 lg:col-start-auto lg:whitespace-nowrap"
          >{{ episode.format === "视频" ? "观看" : "阅读" }}第
          {{ Number(episode.number) }} 期
          <span aria-hidden="true">↗</span></NuxtLink
        >
      </article>
      <div class="mt-9 flex items-start gap-4 bg-sage p-6 sm:p-8">
        <span aria-hidden="true" class="text-2xl text-forest">↳</span>
        <div>
          <h3 class="text-lg font-semibold">三期已完结，接下来就动手试试</h3>
          <p class="mt-2 text-sm leading-[1.9] text-muted">
            安装与同步、音标练习、阅读与观影，都已整理好。需要哪一步，就回来看对应的教程。
          </p>
          <NuxtLink to="/resources" class="action-link mt-3 text-sm text-forest"
            >打开配套资源下载 ↗</NuxtLink
          >
        </div>
      </div>
    </section>
  </main>
</template>
