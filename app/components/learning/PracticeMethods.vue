<script setup lang="ts">
import { aboutContent } from "~/data/about";
const selected = defineModel<string>({ default: "spacing" });
const method = computed(
  () =>
    aboutContent.methods[selected.value as keyof typeof aboutContent.methods] ??
    aboutContent.methods.spacing,
);
const { openImage } = useImagePreview();
const tabs = [
  { value: "spacing", label: "02 间隔练习", id: "spacing-tab" },
  { value: "interleaving", label: "03 交织练习", id: "interleaving-tab" },
  { value: "variation", label: "04 变式练习", id: "variation-tab" },
];
</script>

<template>
  <section
    class="section practice-section pb-[56px] pl-0 pr-0 pt-[56px] min-[701px]:pb-[72px] min-[701px]:pt-[72px] min-[961px]:pb-[96px] min-[961px]:pt-[96px]"
    id="practice"
  >
    <div
      class="wrap mb-auto ml-auto mr-auto mt-auto w-[calc(100%_-_40px)] min-[701px]:w-[calc(100%_-_64px)] min-[1201px]:w-[min(1280px,calc(100%_-_112px))]"
    >
      <div
        class="section-heading items-end gap-x-[40px] block justify-between mb-[30px] gap-y-[40px] min-[701px]:mb-[48px] min-[961px]:flex min-[1201px]:gap-x-[56px] min-[1201px]:gap-y-[56px]"
      >
        <div>
          <div
            class="eyebrow text-[12px] font-[650] tracking-[.09em] mb-[19px] min-[701px]:text-[13px] min-[701px]:mb-[24px]"
          >
            把一次学习，变成多次相遇
          </div>
          <h2
            class="text-[31px] font-bold tracking-[-.045em] leading-[1.35] mb-0 ml-0 mr-0 mt-0 max-w-[760px] min-[701px]:text-[38px] min-[701px]:leading-[1.25] min-[1201px]:text-[44px]"
          >
            不只重复，<br />也改变练习的方式。
          </h2>
        </div>
        <p
          class="section-intro [color:var(--muted)] text-[15px] leading-[1.9] mb-0 ml-0 mr-0 mt-[18px] max-w-[640px] min-[701px]:text-[16px] min-[701px]:mt-[24px] min-[961px]:mt-0 min-[961px]:max-w-[330px] min-[1201px]:max-w-[380px]"
        >
          先理解基本内容，再适当拉开时间、混合题型、改变情境。每次练习后核对答案，让困难变得有用。
        </p>
      </div>
      <UiTabs
        :items="tabs"
        button-class="[-webkit-tap-highlight-color:transparent] items-center bg-transparent [border:0] [border-bottom:3px_solid_transparent] [color:var(--muted)] gap-x-[8px] cursor-pointer flex [font-family:inherit] text-[15px] font-semibold mb-[-1px] min-h-[58px] pb-[13px] pl-0 pr-0 pt-[13px] gap-y-[8px] text-left min-[701px]:gap-x-[16px] min-[701px]:text-[18px] min-[701px]:pb-[20px] min-[701px]:pr-[10px] min-[701px]:pt-[17px] min-[701px]:gap-y-[16px] min-[961px]:text-[20px]"
        class="practice-tabs [border-bottom:1px_solid_#c3cabb] gap-x-[12px] grid grid-cols-[repeat(3,1fr)] gap-y-[12px] min-[701px]:gap-x-[24px] min-[701px]:gap-y-[24px]"
        label="学习方法"
        panel-id="method-panel"
        v-model="selected"
      ></UiTabs>
      <div
        :aria-labelledby="selected + '-tab'"
        class="practice-panel items-center gap-x-[24px] grid grid-cols-[1fr] min-h-0 pt-[28px] gap-y-[24px] min-[701px]:gap-x-[32px] min-[701px]:grid-cols-[.85fr_1.15fr] min-[701px]:min-h-[480px] min-[701px]:pt-[42px] min-[701px]:gap-y-[32px] min-[961px]:gap-x-[45px] min-[961px]:gap-y-[45px] min-[1201px]:gap-x-[76px] min-[1201px]:gap-y-[76px]"
        id="method-panel"
        role="tabpanel"
      >
        <div class="practice-copy">
          <span
            class="small-label [color:var(--muted)] block text-[11px] tracking-[.06em]"
            id="method-english"
            >{{ method.english }}</span
          >
          <h3
            class="text-[30px] tracking-[-.045em] leading-[1.4] mb-[16px] ml-0 mr-0 mt-[13px] min-[701px]:mb-[18px] min-[701px]:mt-[18px] min-[961px]:text-[35px] whitespace-pre-line"
            id="method-title"
          >
            {{ method.title }}
          </h3>
          <p
            class="[color:var(--muted)] text-[14px] leading-[1.9] mb-0 ml-0 mr-0 mt-0 min-[701px]:text-[15px]"
            id="method-copy"
          >
            {{ method.copy }}
          </p>
          <div
            class="english-application [border-left:3px_solid_var(--green)] mb-[21px] ml-0 mr-0 mt-[21px] pb-[3px] pl-[17px] pr-0 pt-[3px] min-[701px]:mb-[25px] min-[701px]:mt-[25px] min-[701px]:pl-[20px]"
          >
            <span class="[color:var(--green)] text-[11px] font-bold"
              >放到英语学习中</span
            >
            <p
              class="text-[14px] leading-[1.85] mb-0 ml-0 mr-0 mt-[10px] min-[701px]:text-[15px]"
              id="method-example"
            >
              {{ method.example }}
            </p>
          </div>
          <p
            class="practice-tip [color:var(--muted)] text-[12px] leading-[1.9] mb-0 ml-0 mr-0 mt-0"
            id="method-tip"
          >
            {{ method.tip }}
          </p>
        </div>
        <figure class="diagram-figure mb-0 ml-0 mr-0 mt-0">
          <button
            @click="
              openImage({
                src: '/assets/images/about/' + selected + '.jpg',
                alt: method.alt,
                title: method.name + '手绘笔记',
              })
            "
            aria-label="放大间隔练习手绘笔记"
            class="zoom-image [-webkit-tap-highlight-color:transparent] bg-transparent [border:0] [color:var(--ink)] [cursor:zoom-in] block pb-0 pl-0 pr-0 pt-0 relative text-left w-full"
            id="method-zoom"
            type="button"
          >
            <img
              :alt="method.alt"
              :src="'/assets/images/about/' + selected + '.jpg'"
              class="bg-white block h-auto max-h-[350px] max-w-[100%] min-h-[200px] object-contain w-full min-[701px]:h-[320px] min-[701px]:max-h-[435px] min-[701px]:min-h-[unset] min-[961px]:h-[380px]"
              id="method-image"
              loading="lazy"
            />
            <span
              class="[background:var(--paper)] [border:1px_solid_var(--line)] rounded-[20px] bottom-[12px] [box-shadow:0_2px_8px_#00000009] text-[11px] pb-[7px] pl-[12px] pr-[12px] pt-[7px] absolute right-[12px]"
              >查看原图 ↗</span
            >
          </button>
          <figcaption
            class="[color:var(--muted)] text-[10px] mt-[12px] min-[701px]:text-[11px]"
          >
            手绘学习笔记 · 英语练习示例为本站整理
          </figcaption>
        </figure>
      </div>
      <div
        class="source-note items-start [border-top:1px_solid_var(--line)] [color:var(--muted)] gap-x-[14px] flex flex-wrap text-[11px] mt-[28px] pt-[20px] gap-y-[8px] min-[701px]:gap-x-[18px] min-[701px]:[flex-wrap:unset] min-[701px]:text-[12px] min-[701px]:mt-[44px] min-[701px]:pt-[22px] min-[701px]:gap-y-[18px]"
      >
        <span class="[color:var(--ink)] font-semibold whitespace-nowrap"
          >方法参考</span
        >
        <p
          class="flex-[1] mb-0 ml-0 mr-0 mt-0 min-w-[180px] min-[701px]:min-w-[unset]"
        >
          <em>Make It Stick</em> 第 2—5
          章：提取、混合练习、有益的困难与学习判断。具体做法需要结合内容和基础调整。
        </p>
        <a
          class="[-webkit-tap-highlight-color:transparent] items-center [color:inherit] flex ml-auto mt-0 min-h-[36px] underline [text-underline-offset:4px] whitespace-nowrap min-[701px]:ml-[unset] min-[701px]:mt-[-10px] min-[701px]:min-h-[44px]"
          href="https://www.makeitstick.com/learning-strategies"
          rel="noopener noreferrer"
          target="_blank"
          >作者网站 ↗</a
        >
      </div>
    </div>
  </section>
</template>
