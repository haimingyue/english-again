<script setup lang="ts">
import type { Video } from "~/utils/catalog";
import { formatDuration } from "~/utils/catalog";
defineProps<{
  video: Video;
  seriesLabel: string;
  fallback?: string | null;
  eager?: boolean;
}>();
const { openImage } = useImagePreview();
</script>

<template>
  <article
    class="video-card min-w-0"
    data-category="导览"
    data-order="0"
    data-search="开篇 52周，10 个阶段，我们重学一次英语！我开了个英语自学专栏，一起玩一年。 开篇介绍与学习计划 []"
  >
    <a
      :href="video.url"
      :title="video.title + '（在新标签页打开 Bilibili）'"
      class="video-link [-webkit-tap-highlight-color:transparent] [color:inherit] block no-underline"
      rel="noopener noreferrer"
      target="_blank"
    >
      <div
        :class="video.original ? 'note-thumb' : 'cover-thumb'"
        class="video-thumb note-thumb [aspect-ratio:16/9] [background:#e6e7d9] [border:1px_solid_#e0ded2] rounded-[6px] overflow-hidden relative min-[601px]:rounded-[8px]"
      >
        <UiImage
          :alt="video.topic + ' · 视频封面'"
          :class="video.original ? 'object-cover' : 'object-contain'"
          :fallback="fallback ?? undefined"
          :loading="eager ? 'eager' : 'lazy'"
          :src="video.thumbnail"
          class="[background:#fff7ef] block h-full max-w-[100%] object-contain pb-[9px] pl-[9px] pr-[9px] pt-[9px] [transition:transform_.25s] w-full"
          decoding="async"
          referrerpolicy="no-referrer"
        />
        <span
          class="episode-badge [background:#172820ec] rounded-[4px] text-white text-[11px] left-[10px] leading-[1.5] pb-[4px] pl-[10px] pr-[10px] pt-[4px] absolute top-[10px]"
          >{{ video.label }}</span
        >
        <span
          aria-hidden="true"
          class="play-mark [background:#f7f3ebf2] rounded-full [color:var(--ink)] grid text-[11px] h-[32px] pl-[2px] place-items-center absolute right-[14px] top-[13px] [transition:background_.2s,transform_.2s] w-[32px]"
          >▶</span
        >
        <span
          class="duration [background:#172820dc] rounded-[4px] bottom-[8px] text-white text-[11px] [font-variant-numeric:tabular-nums] pb-[2px] pl-[7px] pr-[7px] pt-[2px] absolute right-[9px]"
          v-if="video.duration_seconds"
          >{{ formatDuration(video.duration_seconds) }}</span
        >
      </div>
      <div
        class="video-topic [color:#5c7160] text-[11px] leading-[1.65] mb-[6px] ml-0 mr-0 mt-[13px] min-[601px]:mt-[15px]"
      >
        {{ video.topic }}
      </div>
      <h3
        class="[-webkit-box-orient:vertical] [-webkit-line-clamp:3] [display:-webkit-box] text-[17px] font-semibold tracking-[-.018em] leading-[1.65] mb-0 ml-0 mr-0 mt-0 min-h-0 overflow-hidden min-[601px]:[-webkit-line-clamp:2] min-[601px]:text-[16px] min-[601px]:min-h-[56px] min-[1101px]:text-[17px]"
      >
        {{ video.title }}
      </h3>
      <span
        class="watch-label items-center [color:#566154] gap-x-[9px] flex text-[12px] mt-[10px] gap-y-[9px] min-[601px]:text-[11px]"
        >在 Bilibili 观看 <span aria-hidden="true">↗</span>
      </span>
    </a>
    <div
      class="card-bottom items-center [border-top:1px_solid_#daddd0] gap-x-[10px] flex justify-between mt-[12px] min-h-[44px] gap-y-[10px] min-[601px]:mt-[13px]"
    >
      <button
        :aria-label="'查看' + video.label + '完整学习笔记'"
        @click="
          video.original &&
          openImage({
            src: video.original,
            alt: video.topic + '完整学习笔记',
            title: video.label + ' · ' + video.topic,
          })
        "
        class="note-preview [-webkit-tap-highlight-color:transparent] items-center bg-transparent [border:0] [color:inherit] gap-x-[12px] cursor-pointer flex text-[12px] min-h-[44px] pb-[8px] pl-0 pr-0 pt-[8px] gap-y-[12px] min-[601px]:text-[11px]"
        type="button"
        v-if="video.original"
      >
        查看学习笔记 <span aria-hidden="true">↗</span></button
      ><span class="book-card-meta [color:#65725f] text-[10px]" v-else="">{{
        seriesLabel + " · 读书视频"
      }}</span>
      <span class="card-category [color:#65725f] text-[10px]">{{
        video.category
      }}</span>
    </div>
  </article>
</template>
