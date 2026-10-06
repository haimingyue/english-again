<script setup lang="ts">
import { vocabularyContent } from "~/data/vocabulary";
const selected = ref("0");
const word = computed(
  () =>
    vocabularyContent.samples[Number(selected.value)] ??
    vocabularyContent.samples[0],
);
const description = computed(
  () =>
    vocabularyContent.descriptions[Number(selected.value)] ??
    vocabularyContent.descriptions[0],
);
const imageSource = computed(
  () => `/assets/images/vocabulary/${word.value.word}.jpg`,
);
const { playing, status, play, stop } = useAudioPlayer();
const { openImage } = useImagePreview();
status.value = "音频来自下载卡组";
watch(selected, () => {
  stop();
  status.value = "音频来自下载卡组";
});
const tabs = [
  { value: "0", label: "inquiry", id: "word-tab-0" },
  { value: "1", label: "reveal", id: "word-tab-1" },
  { value: "2", label: "nasty", id: "word-tab-2" },
];
</script>

<template>
  <section
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
            这是我正在使用的卡片
          </div>
          <h2
            class="text-[31px] font-bold tracking-[-.045em] leading-[1.35] mb-0 ml-0 mr-0 mt-0 max-w-[760px] min-[701px]:text-[38px] min-[701px]:leading-[1.25] min-[1201px]:text-[44px]"
          >
            再见到这个词，<br />也想起它出现的那一刻。
          </h2>
        </div>
        <p
          class="section-intro [color:var(--muted)] text-[15px] leading-[1.9] mb-0 ml-0 mr-0 mt-[18px] max-w-[640px] min-[701px]:text-[16px] min-[701px]:mt-[24px] min-[961px]:mt-0 min-[961px]:max-w-[330px] min-[1201px]:max-w-[380px]"
        >
          一张卡片里，不只有一个中文意思。它也可以有书中的一句话、电影里的一个场景，以及你自己的理解。
        </p>
      </div>
      <UiTabs
        :items="tabs"
        button-class="[-webkit-tap-highlight-color:transparent] bg-transparent [border:0] [border-bottom:3px_solid_transparent] [color:#615d72] cursor-pointer text-[17px] min-h-[50px] min-w-[64px] pb-[13px] pl-0 pr-0 pt-[10px] min-[701px]:text-[15px] min-[701px]:min-w-[unset] min-[701px]:pb-[16px] min-[701px]:pl-[2px] min-[701px]:pr-[2px]"
        class="card-tabs [border-bottom:1px_solid_#b7b3c8] gap-x-[34px] flex justify-start mb-0 gap-y-[34px] min-[701px]:gap-x-[30px] min-[701px]:[justify-content:unset] min-[701px]:gap-y-[30px]"
        label="词汇卡片示例"
        panel-id="word-panel"
        v-model="selected"
      ></UiTabs>
      <div
        :aria-labelledby="'word-tab-' + selected"
        class="card-showcase items-center gap-x-[4px] grid grid-cols-[1fr] pb-[12px] pl-0 pr-0 pt-[8px] gap-y-[4px] min-[701px]:gap-x-[26px] min-[701px]:grid-cols-[1fr_1fr] min-[701px]:pt-[28px] min-[701px]:gap-y-[26px] min-[961px]:gap-x-[44px] min-[961px]:grid-cols-[1fr_1.14fr] min-[961px]:gap-y-[44px] min-[1201px]:gap-x-[72px] min-[1201px]:gap-y-[72px]"
        id="word-panel"
        role="tabpanel"
      >
        <div
          class="card-description max-w-[none] pb-[10px] pl-0 pr-0 pt-[24px] min-[701px]:max-w-[440px] min-[701px]:pb-[22px] min-[701px]:pt-[22px]"
        >
          <span
            class="small-label [color:var(--muted)] text-[12px] tracking-[.06em]"
            id="word-label"
            >{{ description.label }}</span
          >
          <h3
            class="text-[29px] tracking-[-.045em] leading-[1.4] mb-0 ml-0 mr-0 mt-[13px] min-[701px]:text-[32px] min-[701px]:mt-[19px] min-[961px]:text-[38px] whitespace-pre-line"
            id="word-title"
          >
            {{ description.title }}
          </h3>
          <p
            class="[color:#555466] text-[15px] leading-[1.9] mb-0 ml-0 mr-0 mt-[17px] min-[701px]:mt-[22px] min-[961px]:text-[16px]"
            id="word-description"
          >
            {{ description.description }}
          </p>
          <div
            class="word-audio-row items-center gap-x-[18px] flex mt-[25px] gap-y-[18px]"
          >
            <button
              :aria-label="'播放 ' + word.word + ' 发音'"
              @click="play(word.audio)"
              class="audio-button [-webkit-tap-highlight-color:transparent] items-center [background:var(--ink)] [border:0] rounded-full text-white gap-x-[12px] cursor-pointer flex text-[14px] min-h-[48px] pb-[10px] pl-[20px] pr-[20px] pt-[10px] gap-y-[12px]"
              id="word-audio-play"
              type="button"
            >
              {{ playing ? "♫ 再听一遍" : "▶ 听听发音" }}
            </button>
            <span
              class="[color:#5b5571] [font-family:Georgia,serif] text-[20px]"
              id="word-ipa"
              >{{ word.ipa }}</span
            >
          </div>
          <p
            class="audio-status [color:#555466] text-[11px] leading-[1.9] mb-0 ml-0 mr-0 mt-[8px] min-h-[20px]"
            id="audio-status"
            role="status"
          >
            {{ status }}
          </p>
          <dl class="clues mb-0 ml-0 mr-0 mt-[23px]">
            <div
              class="[border-top:1px_solid_#bbb6cd] gap-x-[12px] grid text-[13px] grid-cols-[80px_1fr] pb-[13px] pl-0 pr-0 pt-[13px] gap-y-[12px] min-[701px]:grid-cols-[72px_1fr] min-[961px]:gap-x-[20px] min-[961px]:text-[14px] min-[961px]:grid-cols-[88px_1fr] min-[961px]:gap-y-[20px]"
            >
              <dt class="font-semibold">选词线索</dt>
              <dd class="[color:#555466] mb-0 ml-0 mr-0 mt-0" id="word-rank">
                {{ "COCA 排名 " + word.rank }}
              </dd>
            </div>
            <div
              class="[border-top:1px_solid_#bbb6cd] gap-x-[12px] grid text-[13px] grid-cols-[80px_1fr] pb-[13px] pl-0 pr-0 pt-[13px] gap-y-[12px] min-[701px]:grid-cols-[72px_1fr] min-[961px]:gap-x-[20px] min-[961px]:text-[14px] min-[961px]:grid-cols-[88px_1fr] min-[961px]:gap-y-[20px]"
            >
              <dt class="font-semibold">记忆线索</dt>
              <dd class="[color:#555466] mb-0 ml-0 mr-0 mt-0" id="word-clue">
                {{ description.clue }}
              </dd>
            </div>
            <div
              class="[border-top:1px_solid_#bbb6cd] gap-x-[12px] grid text-[13px] grid-cols-[80px_1fr] pb-[13px] pl-0 pr-0 pt-[13px] gap-y-[12px] min-[701px]:grid-cols-[72px_1fr] min-[961px]:gap-x-[20px] min-[961px]:text-[14px] min-[961px]:grid-cols-[88px_1fr] min-[961px]:gap-y-[20px]"
            >
              <dt class="font-semibold">复习时</dt>
              <dd class="[color:#555466] mb-0 ml-0 mr-0 mt-0">
                先回想，再核对答案
              </dd>
            </div>
          </dl>
          <button
            @click="
              openImage({
                src: imageSource,
                alt: description.alt,
                title: word.word + ' · 个人词汇卡片',
                caption: '个人使用截图，已补充语境。',
              })
            "
            class="text-link [-webkit-tap-highlight-color:transparent] items-center bg-transparent [border:0] [color:inherit] gap-x-[18px] cursor-pointer inline-flex text-[14px] font-[650] mt-[14px] min-h-[44px] pb-0 pl-0 pr-0 pt-0 gap-y-[18px] min-[701px]:mt-[20px]"
            id="enlarge-word"
            type="button"
          >
            放大查看原卡片 ↗
          </button>
        </div>
        <figure
          class="card-visual items-center flex flex-col justify-center mb-0 ml-0 mr-0 mt-0 min-w-0"
        >
          <img
            :alt="description.alt"
            :src="imageSource"
            class="block [filter:drop-shadow(0_8px_14px_#251e3520)] h-auto max-h-[570px] max-w-[100%] object-contain w-full min-[701px]:h-[525px] min-[701px]:max-h-[unset] min-[961px]:h-[625px]"
            height="1824"
            id="word-image"
            loading="lazy"
            width="1098"
          />
          <figcaption
            class="items-center [color:#5d576c] gap-x-[8px] flex text-[10px] mt-[8px] gap-y-[8px] min-[701px]:text-[11px]"
          >
            个人使用示例 · 已加入真实语境
          </figcaption>
        </figure>
      </div>
      <p
        class="notation-note [border-top:1px_solid_#c4bed6] [color:#5d576c] text-[11px] mb-0 ml-0 mr-0 mt-[26px] pt-[17px] min-[701px]:text-[12px] min-[701px]:mt-[28px] min-[701px]:pt-[18px]"
      >
        图中例句为使用过程中积累的内容。下载的 COCA
        基础卡组尚未填入这些个人例句；你可以在导入后补充自己的版本。
      </p>
    </div>
  </section>
</template>
