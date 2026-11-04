<script setup lang="ts">
import type { GuideEpisode } from "~/data/guides";
defineProps<{ episode: GuideEpisode }>();
</script>

<template>
  <main
    id="main"
    data-page="guide-article"
    tabindex="-1"
    class="page-shell py-8 sm:py-12"
  >
    <article class="guide-prose mx-auto max-w-[760px]">
      <header class="mb-9 border-b border-line pb-7 sm:mb-11 sm:pb-9">
        <NuxtLink to="/guides" class="action-link text-forest"
          >← 全部使用指南</NuxtLink
        >
        <p class="mt-5 text-sm text-muted">
          使用指南 · 第 {{ episode.number }} 期 ·
          {{ episode.format || "图文" }}教程 · 全系列已完结
        </p>
        <h1 class="mt-3 text-[28px] font-bold leading-[1.4] sm:text-[38px]">
          {{ episode.title }}
        </h1>
      </header>
      <slot />
      <div class="mt-10 border-t border-line pt-6">
        <NuxtLink to="/guides" class="action-link text-forest"
          >← 返回使用指南</NuxtLink
        >
      </div>
    </article>
  </main>
</template>

<style scoped>
.guide-prose :deep(section + section) {
  margin-top: 2.5rem;
}
.guide-prose :deep(h2) {
  font-size: clamp(1.25rem, 2.5vw, 1.5rem);
  font-weight: 700;
  line-height: 1.5;
  margin-bottom: 1rem;
}
.guide-prose :deep(p + p) {
  margin-top: 1rem;
}
.guide-prose :deep(p),
.guide-prose :deep(li) {
  line-height: 1.95;
}
.guide-prose :deep(ol.steps) {
  list-style: decimal;
  padding-left: 1.5rem;
  margin: 1rem 0;
}
.guide-prose :deep(ol.steps li + li) {
  margin-top: 0.5rem;
}
.guide-prose :deep(a.inline-link) {
  color: var(--green);
  text-decoration: underline;
  text-underline-offset: 4px;
  overflow-wrap: anywhere;
}
.guide-prose :deep(code) {
  border-radius: 3px;
  background: #eaece3;
  padding: 0.15em 0.35em;
  font-size: 0.9em;
  overflow-wrap: anywhere;
}
</style>
