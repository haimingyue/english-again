<script setup lang="ts">
import { phoneticsContent } from "~/data/phonetics";
const selected = defineModel<string>({ default: "0" });
const card = computed(
  () =>
    phoneticsContent.cards[Number(selected.value)] ?? phoneticsContent.cards[0],
);
const { openImage } = useImagePreview();
const tabs = [
  { value: "0", label: "元音特征", id: "card-tab-0" },
  { value: "1", label: "发音图解", id: "card-tab-1" },
  { value: "2", label: "单词听辨", id: "card-tab-2" },
  { value: "3", label: "音素听辨", id: "card-tab-3" },
];
</script>

<template>
  <section
    aria-labelledby="cards-title"
    class="section cards-section [background:var(--lavender)] pb-[56px] pl-0 pr-0 pt-[56px] min-[701px]:pb-[72px] min-[701px]:pt-[72px] min-[961px]:pb-[96px] min-[961px]:pt-[96px]"
    id="cards"
  >
    <div
      class="wrap mb-auto ml-auto mr-auto mt-auto w-[calc(100%_-_40px)] min-[701px]:w-[calc(100%_-_64px)] min-[1201px]:w-[min(1280px,calc(100%_-_112px))]"
    >
      <div
        class="section-heading items-end gap-x-[40px] block justify-between mb-[30px] gap-y-[40px] min-[701px]:mb-[48px] min-[961px]:flex min-[1201px]:gap-x-[56px] min-[1201px]:gap-y-[56px]"
      >
        <div>
          <div
            class="eyebrow [color:#514c6c] text-[12px] font-[650] tracking-[.09em] mb-[19px] min-[701px]:text-[13px] min-[701px]:mb-[24px]"
          >
            自己做的卡片，自己每天用
          </div>
          <h2
            class="text-[31px] font-bold tracking-[-.045em] leading-[1.35] mb-0 ml-0 mr-0 mt-0 max-w-[760px] min-[701px]:text-[38px] min-[701px]:leading-[1.25] min-[1201px]:text-[44px]"
            id="cards-title"
          >
            从听出差别，<br />到看懂一个音。
          </h2>
        </div>
        <p
          class="section-intro [color:var(--muted)] text-[15px] leading-[1.9] mb-0 ml-0 mr-0 mt-[18px] max-w-[640px] min-[701px]:text-[16px] min-[701px]:mt-[24px] min-[961px]:mt-0 min-[961px]:max-w-[330px] min-[1201px]:max-w-[380px]"
        >
          把音频、音标和发音线索放进卡片。<br />一次只做一件事：听、判断，或者回忆。
        </p>
      </div>
      <UiTabs
        :items="tabs"
        button-class="[-webkit-tap-highlight-color:transparent] bg-transparent [border:0] [border-bottom:3px_solid_transparent] [color:#615d72] cursor-pointer text-[13px] min-h-[50px] min-w-[64px] pb-[13px] pl-0 pr-0 pt-[10px] min-[701px]:text-[15px] min-[701px]:min-w-[unset] min-[701px]:pb-[16px] min-[701px]:pl-[2px] min-[701px]:pr-[2px]"
        class="card-tabs [border-bottom:1px_solid_#b7b3c8] gap-x-0 flex justify-between mb-0 gap-y-0 min-[701px]:gap-x-[30px] min-[701px]:[justify-content:unset] min-[701px]:gap-y-[30px]"
        label="自制卡片类型"
        panel-id="card-panel"
        v-model="selected"
      ></UiTabs>
      <div
        :aria-labelledby="'card-tab-' + selected"
        class="card-showcase items-center gap-x-[4px] grid grid-cols-[1fr] pb-[12px] pl-0 pr-0 pt-[8px] gap-y-[4px] min-[701px]:gap-x-[26px] min-[701px]:grid-cols-[1fr_1fr] min-[701px]:pt-[28px] min-[701px]:gap-y-[26px] min-[961px]:gap-x-[44px] min-[961px]:grid-cols-[1fr_1.14fr] min-[961px]:gap-y-[44px] min-[1201px]:gap-x-[72px] min-[1201px]:gap-y-[72px]"
        id="card-panel"
        role="tabpanel"
      >
        <div
          class="card-description max-w-[none] pb-[10px] pl-0 pr-0 pt-[24px] min-[701px]:max-w-[440px] min-[701px]:pb-[22px] min-[701px]:pt-[22px]"
        >
          <span
            class="small-label [color:var(--muted)] text-[12px] tracking-[.06em]"
            id="card-label"
            >{{ card.label }}</span
          >
          <h3
            class="text-[31px] tracking-[-.045em] leading-[1.4] mb-0 ml-0 mr-0 mt-[13px] min-[701px]:text-[32px] min-[701px]:mt-[19px] min-[961px]:text-[38px] whitespace-pre-line"
            id="card-title"
          >
            {{ card.title }}
          </h3>
          <p
            class="[color:#555466] text-[15px] leading-[1.9] mb-0 ml-0 mr-0 mt-[17px] min-[701px]:mt-[22px] min-[961px]:text-[16px]"
            id="card-description"
          >
            {{ card.description }}
          </p>
          <dl
            class="clues mb-0 ml-0 mr-0 mt-[20px] min-[701px]:mt-[26px]"
            id="card-clues"
          >
            <div
              :key="label"
              class="[border-top:1px_solid_#bbb6cd] gap-x-[12px] grid text-[13px] grid-cols-[80px_1fr] pb-[13px] pl-0 pr-0 pt-[13px] gap-y-[12px] min-[701px]:grid-cols-[72px_1fr] min-[961px]:gap-x-[20px] min-[961px]:text-[14px] min-[961px]:grid-cols-[88px_1fr] min-[961px]:gap-y-[20px]"
              v-for="[label, description] in card.clues"
            >
              <dt class="font-semibold">{{ label }}</dt>
              <dd class="[color:#555466] mb-0 ml-0 mr-0 mt-0">
                {{ description }}
              </dd>
            </div>
          </dl>
          <p
            class="card-tip [border-left:2px_solid_#746a94] [color:#555466] text-[12px] leading-[1.9] mb-0 ml-0 mr-0 mt-[18px] pl-[16px] min-[701px]:text-[13px]"
            id="card-tip"
          >
            {{ card.tip }}
          </p>
          <button
            @click="
              openImage({
                src: '/assets/images/phonetics/' + card.image,
                alt: card.alt,
                title: card.label,
              })
            "
            class="text-link [-webkit-tap-highlight-color:transparent] items-center bg-transparent [border:0] [color:inherit] gap-x-[18px] cursor-pointer inline-flex text-[14px] font-[650] mt-[14px] min-h-[44px] pb-0 pl-0 pr-0 pt-0 gap-y-[18px] min-[701px]:mt-[20px]"
            id="enlarge-card"
            type="button"
          >
            放大查看原卡片 <span aria-hidden="true">↗</span>
          </button>
        </div>
        <figure
          class="card-visual items-center flex flex-col justify-center mb-0 ml-0 mr-0 mt-0 min-w-0"
        >
          <img
            :alt="card.alt"
            :height="Number(selected) < 2 ? 1332 : 1420"
            :src="'/assets/images/phonetics/' + card.image"
            :width="Number(selected) < 2 ? 1098 : 1024"
            class="block [filter:drop-shadow(0_8px_14px_#251e3520)] h-auto max-h-[490px] max-w-[100%] object-contain w-full min-[701px]:h-[480px] min-[701px]:max-h-[unset] min-[961px]:h-[580px]"
            id="card-image"
            loading="lazy"
          />
          <figcaption
            class="items-center [color:#5d576c] gap-x-[8px] flex text-[10px] mt-[-12px] gap-y-[8px] min-[701px]:text-[11px]"
          >
            <span
              aria-hidden="true"
              class="note-dot bg-current rounded-full inline-block shrink-0 h-[6px] w-[6px]"
            >
            </span
            >自制 Anki 卡片 · 实际界面
          </figcaption>
        </figure>
      </div>
      <p
        class="notation-note [border-top:1px_solid_#c4bed6] [color:#5d576c] text-[11px] mb-0 ml-0 mr-0 mt-[26px] pt-[17px] min-[701px]:text-[12px] min-[701px]:mt-[28px] min-[701px]:pt-[18px]"
      >
        音标是发音线索，具体音质仍要结合音频。不同词典可能使用 /i/ 或 /iː/
        等不同记法。
      </p>
    </div>
  </section>
</template>
