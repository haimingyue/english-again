<script setup lang="ts">
import { homeContent } from "~/data/home";
const selected = ref("reading");
const shot = computed(
  () =>
    homeContent.screenshots[
      selected.value as keyof typeof homeContent.screenshots
    ] ?? homeContent.screenshots.reading,
);
const tabs = [
  { value: "reading", label: "阅读", id: "tab-reading" },
  { value: "film", label: "影视", id: "tab-film" },
  { value: "data", label: "数据", id: "tab-data" },
];
</script>

<template>
  <section
    aria-labelledby="tool-title"
    class="tools [background:#edeedf] pb-[54px] pl-0 pr-0 pt-[54px] min-[601px]:pb-[80px] min-[601px]:pt-[80px]"
    id="tools"
  >
    <div
      class="wrap tool-layout items-center gap-x-[32px] grid grid-cols-[1fr] mb-auto ml-auto mr-auto mt-auto gap-y-[32px] w-[calc(100%_-_40px)] min-[601px]:w-[calc(100%_-_64px)] min-[901px]:gap-x-[40px] min-[901px]:grid-cols-[7fr_4fr] min-[901px]:gap-y-[40px] min-[1101px]:gap-x-[72px] min-[1101px]:gap-y-[72px] min-[1101px]:w-[min(1280px,calc(100%_-_112px))]"
    >
      <div class="tool-screen">
        <div
          class="software-window bg-white [border:1px_solid_#ccd0be] rounded-[6px] [box-shadow:0_12px_30px_rgba(39,49,31,.06)] overflow-hidden"
        >
          <div
            class="window-top [background:#f9faf5] [border-bottom:1px_solid_#e1e4d7] [color:#647160] flex text-[10px] justify-between pb-[7px] pl-[10px] pr-[10px] pt-[7px] min-[601px]:text-[11px] min-[601px]:pb-[10px] min-[601px]:pl-[16px] min-[601px]:pr-[16px] min-[601px]:pt-[10px]"
          >
            <span>读书会 · 自研学习工具</span>
            <span id="window-label">{{ shot.label }}</span>
          </div>
          <img
            :alt="shot.alt"
            :aria-labelledby="'tab-' + selected"
            :src="shot.src"
            class="[aspect-ratio:1.25] block max-w-[100%] object-cover [object-position:left_top] w-full min-[601px]:[aspect-ratio:1.6] min-[601px]:[object-position:top]"
            id="software-panel"
            loading="lazy"
            role="tabpanel"
          />
        </div>
        <p
          class="software-caption [color:#576655] text-[11px] mb-0 ml-0 mr-0 mt-[12px] min-[601px]:text-[13px]"
          id="software-caption"
        >
          {{ shot.caption }}
        </p>
      </div>
      <div class="tool-copy [grid-row:1] min-[901px]:[grid-row:unset]">
        <div class="eyebrow text-[13px] font-[650] tracking-[.11em] mb-[18px]">
          从学习内容，走向实际使用
        </div>
        <h2
          class="text-[34px] font-bold tracking-[-.045em] leading-[1.22] mb-0 ml-0 mr-0 mt-0 [text-wrap:balance] min-[601px]:text-[42px] min-[901px]:[text-wrap:unset]"
          id="tool-title"
        >
          打开一本书。<br
            class="block min-[901px]:[display:unset]"
          />练习一段对话。<br
            class="block min-[901px]:[display:unset]"
          />留下学习的记录。
        </h2>
        <p
          class="[color:var(--muted)] text-[15px] mb-0 ml-0 mr-0 mt-[18px] min-[601px]:text-[17px] min-[601px]:mt-[24px]"
        >
          「读书会」是我自己开发的学习软件，把阅读、影视练习和学习数据放在同一个地方。
        </p>
        <UiTabs
          :items="tabs"
          button-class="[-webkit-tap-highlight-color:transparent] bg-transparent [border:0] [border-bottom:2px_solid_transparent] [color:inherit] cursor-pointer text-[14px] min-h-[44px] pb-[9px] pl-[13px] pr-[13px] pt-[9px]"
          class="tool-tabs gap-x-[8px] flex mt-[18px] gap-y-[8px] min-[601px]:mt-[26px]"
          label="软件功能截图"
          panel-id="software-panel"
          v-model="selected"
        ></UiTabs>
        <NuxtLink
          class="text-link [-webkit-tap-highlight-color:transparent] items-center [color:inherit] gap-x-[18px] inline-flex text-[16px] font-[650] mt-[22px] min-h-[44px] gap-y-[18px] no-underline"
          to="/tools"
          >了解软件与使用方法<span aria-hidden="true">↗</span>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
