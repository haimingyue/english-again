<script setup lang="ts">
defineProps<{
  bvid: string;
  title: string;
  duration: string;
  number: string;
}>();
const loaded = ref(false);
</script>

<template>
  <figure class="my-8 overflow-hidden border border-line bg-ink text-white">
    <div class="relative aspect-video">
      <iframe
        v-if="loaded"
        :src="`https://player.bilibili.com/player.html?bvid=${bvid}&page=1&autoplay=0`"
        :title="title"
        class="absolute inset-0 h-full w-full border-0"
        allow="fullscreen; picture-in-picture"
        allowfullscreen
        referrerpolicy="strict-origin-when-cross-origin"
      />
      <button
        v-else
        type="button"
        :aria-label="`播放第 ${Number(number)} 期视频：${title}`"
        class="absolute inset-0 flex h-full w-full flex-col items-center justify-center gap-4 bg-[#244c40] p-6 text-white hover:bg-forest"
        @click="loaded = true"
      >
        <span
          class="absolute top-5 left-5 text-xs font-semibold tracking-[.12em] text-[#dce9df]"
          >使用指南 / {{ number }}</span
        >
        <svg viewBox="0 0 64 64" class="size-14 sm:size-20" aria-hidden="true">
          <circle cx="32" cy="32" r="30" fill="#f7d84a" />
          <path d="m26 21 18 11-18 11z" fill="#172820" />
        </svg>
        <span class="text-sm font-semibold sm:text-base"
          >点击加载视频 · {{ duration }}</span
        >
      </button>
    </div>
    <figcaption
      class="flex flex-wrap items-center justify-between gap-3 px-5 py-4 text-sm"
    >
      <span class="text-[#dce9df]">B 站视频教程 · {{ duration }}</span
      ><a
        :href="`https://www.bilibili.com/video/${bvid}/`"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex min-h-11 items-center text-sun underline underline-offset-4"
        >在 B 站观看 ↗</a
      >
    </figcaption>
  </figure>
</template>
