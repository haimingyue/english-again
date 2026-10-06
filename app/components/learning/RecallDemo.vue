<script setup lang="ts">
import { aboutContent } from "~/data/about";
const selected = ref("word");
const revealed = ref(false);
const card = computed(
  () =>
    aboutContent.cards[selected.value as keyof typeof aboutContent.cards] ??
    aboutContent.cards.word,
);
const imageSource = computed(
  () =>
    `/assets/images/about/${card.value.file}-${revealed.value ? "back" : "front"}.png`,
);
watch(selected, () => {
  revealed.value = false;
});
const { openImage } = useImagePreview();
const tabs = [
  { value: "word", label: "单词卡片", id: "word-tab" },
  { value: "grammar", label: "语法卡片", id: "grammar-tab" },
];
</script>

<template>
  <section
    class="section recall-section [background:var(--lavender)] pb-[56px] pl-0 pr-0 pt-[56px] min-[701px]:pb-[72px] min-[701px]:pt-[72px] min-[961px]:pb-[96px] min-[961px]:pt-[96px]"
    id="recall"
  >
    <div
      class="wrap mb-auto ml-auto mr-auto mt-auto w-[calc(100%_-_40px)] min-[701px]:w-[calc(100%_-_64px)] min-[1201px]:w-[min(1280px,calc(100%_-_112px))]"
    >
      <div
        class="section-heading items-center gap-x-[24px] block justify-between mb-[30px] gap-y-[24px] min-[701px]:flex min-[701px]:mb-[48px] min-[961px]:items-end min-[961px]:gap-x-[40px] min-[961px]:gap-y-[40px] min-[1201px]:gap-x-[56px] min-[1201px]:gap-y-[56px]"
      >
        <div>
          <div
            class="eyebrow text-[12px] font-[650] tracking-[.09em] mb-[19px] min-[701px]:text-[13px] min-[701px]:mb-[24px]"
          >
            01 / 主动回忆 · RETRIEVAL PRACTICE
          </div>
          <h2
            class="text-[31px] font-bold tracking-[-.045em] leading-[1.35] mb-0 ml-0 mr-0 mt-0 max-w-[760px] min-[701px]:text-[38px] min-[701px]:leading-[1.25] min-[1201px]:text-[44px]"
          >
            先给自己几秒钟，<br />然后，再翻过来。
          </h2>
        </div>
        <div
          class="anki-intro items-center gap-x-[17px] flex text-[13px] leading-[1.8] mt-[23px] gap-y-[17px] min-[701px]:text-[12px] min-[701px]:mt-[unset] min-[961px]:text-[14px]"
        >
          <img
            alt="Anki 标志"
            class="rounded-[12px] block h-[42px] max-w-[100%] object-contain w-[42px] min-[961px]:h-[54px] min-[961px]:w-[54px] shrink-0"
            height="54"
            loading="lazy"
            src="/assets/images/about/anki-logo.png"
            width="54"
          />
          <p class="mb-0 ml-0 mr-0 mt-0">
            <strong class="font-[650]">Anki，把方法放进日常。</strong>
            <br
              class="hidden min-[701px]:[display:unset]"
            />先尝试回答，再看反馈；<br />把下一次复习交给安排。
          </p>
        </div>
      </div>
      <div
        class="recall-layout [align-items:start] gap-x-[22px] grid grid-cols-[1fr] gap-y-[22px] min-[701px]:gap-x-[32px] min-[701px]:grid-cols-[1fr_1fr] min-[701px]:gap-y-[32px] min-[961px]:gap-x-[55px] min-[961px]:gap-y-[55px] min-[1201px]:gap-x-[88px] min-[1201px]:gap-y-[88px]"
      >
        <div class="recall-copy">
          <UiTabs
            :items="tabs"
            button-class="[-webkit-tap-highlight-color:transparent] bg-transparent [border:0] [border-bottom:3px_solid_transparent] [color:#615d72] cursor-pointer text-[13px] min-h-[50px] min-w-[64px] pb-[13px] pl-0 pr-0 pt-[10px] min-[701px]:text-[15px] min-[701px]:min-w-[unset] min-[701px]:pb-[16px] min-[701px]:pl-[2px] min-[701px]:pr-[2px]"
            class="card-tabs [border-bottom:1px_solid_#b7b3c8] [border-bottom-color:#bcb9ce] gap-x-[30px] flex justify-start mb-0 ml-0 mr-0 mt-0 gap-y-[30px] min-[701px]:gap-x-[36px] min-[701px]:gap-y-[36px]"
            label="选择卡片示例"
            panel-id="card-panel"
            v-model="selected"
          ></UiTabs>
          <div class="recall-instructions pt-[22px] min-[701px]:pt-[26px]">
            <span
              class="small-label [color:var(--muted)] block text-[11px] tracking-[.06em]"
              id="card-kind"
              >{{ card.kind }}</span
            >
            <h3
              class="text-[29px] tracking-[-.045em] leading-[1.45] mb-[16px] ml-0 mr-0 mt-[14px] min-[701px]:text-[27px] min-[961px]:text-[32px] whitespace-pre-line"
              id="card-question"
            >
              {{ card.question }}
            </h3>
            <p
              class="[color:#495047] text-[14px] leading-[1.9] mb-0 ml-0 mr-0 mt-0 max-w-[445px] min-[961px]:text-[15px]"
              id="card-description"
            >
              {{ card.description }}
            </p>
            <ol
              class="recall-steps gap-x-[14px] grid [list-style:none] mb-[22px] ml-0 mr-0 mt-[22px] pb-0 pl-0 pr-0 pt-0 gap-y-[14px] min-[701px]:gap-x-[16px] min-[701px]:mb-[27px] min-[701px]:mt-[25px] min-[701px]:gap-y-[16px]"
            >
              <li class="gap-x-[16px] flex gap-y-[16px]">
                <span
                  class="[border:1px_solid_#94949d] rounded-full grid flex-[0_0_25px] text-[11px] h-[25px] mt-[2px] place-items-center"
                  >1</span
                >
                <div>
                  <strong class="text-[14px]">先尝试</strong>
                  <p
                    class="[color:#4b534b] text-[13px] mb-[3px] ml-0 mr-0 mt-[3px]"
                  >
                    看提示，给出自己的答案。
                  </p>
                </div>
              </li>
              <li class="gap-x-[16px] flex gap-y-[16px]">
                <span
                  class="[border:1px_solid_#94949d] rounded-full grid flex-[0_0_25px] text-[11px] h-[25px] mt-[2px] place-items-center"
                  >2</span
                >
                <div>
                  <strong class="text-[14px]">再核对</strong>
                  <p
                    class="[color:#4b534b] text-[13px] mb-[3px] ml-0 mr-0 mt-[3px]"
                  >
                    看释义、例句或发音，找到差别。
                  </p>
                </div>
              </li>
              <li class="gap-x-[16px] flex gap-y-[16px]">
                <span
                  class="[border:1px_solid_#94949d] rounded-full grid flex-[0_0_25px] text-[11px] h-[25px] mt-[2px] place-items-center"
                  >3</span
                >
                <div>
                  <strong class="text-[14px]">如实反馈</strong>
                  <p
                    class="[color:#4b534b] text-[13px] mb-[3px] ml-0 mr-0 mt-[3px]"
                  >
                    在 Anki 中按实际表现评分；忘记了就选 Again。
                  </p>
                </div>
              </li>
            </ol>
            <button
              :aria-expanded="revealed"
              @click="revealed = !revealed"
              aria-controls="card-feedback"
              class="btn btn-dark [-webkit-tap-highlight-color:transparent] items-center [background:var(--ink)] [border:0] rounded-full text-white gap-x-[28px] cursor-pointer inline-flex text-[16px] font-[650] justify-center min-h-[56px] pb-[14px] pl-[28px] pr-[28px] pt-[14px] gap-y-[28px] [transition:background_.18s,transform_.18s]"
              id="reveal-card"
              type="button"
            >
              {{ revealed ? "回到正面，再试一次 ↺" : "我想好了，查看背面 ↗" }}
            </button>
            <div
              class="card-feedback [background:#f7f3eb99] [border-left:3px_solid_var(--green)] mt-[20px] pb-[16px] pl-[20px] pr-[20px] pt-[16px]"
              id="card-feedback"
              v-show="revealed"
            >
              <strong class="text-[16px]" id="feedback-title">{{
                card.answer
              }}</strong>
              <p
                class="text-[13px] leading-[1.8] mb-0 ml-0 mr-0 mt-[6px]"
                id="feedback-copy"
              >
                {{ card.feedback }}
              </p>
            </div>
            <p
              class="demo-note [color:#495047] text-[11px] leading-[1.8] mb-0 ml-0 mr-0 mt-[17px] max-w-[400px]"
              id="demo-note"
            >
              {{ card.note }}
            </p>
          </div>
        </div>
        <div
          :aria-labelledby="selected + '-tab'"
          id="card-panel"
          role="tabpanel"
        >
          <div
            class="card-preview-top flex text-[10px] justify-between tracking-[.08em] pb-[12px] pl-0 pr-0 pt-[12px] min-[701px]:pb-[15px] min-[701px]:pt-[15px]"
          >
            <span>MY ANKI CARDS</span>
            <span aria-live="polite" id="card-side">{{
              revealed ? "背面 · 核对答案" : "正面 · 先回忆"
            }}</span>
          </div>
          <button
            @click="
              openImage({
                src: imageSource,
                alt: revealed ? card.backAlt : card.frontAlt,
                title: card.name + ' · ' + (revealed ? '背面' : '正面'),
              })
            "
            aria-label="查看 indeed 卡片完整截图"
            class="card-preview zoom-image [-webkit-tap-highlight-color:transparent] [background:#f8f6f0] [border:0] rounded-[12px] [box-shadow:0_16px_40px_#3025440d] [color:var(--ink)] [cursor:zoom-in] block h-[440px] overflow-hidden pb-0 pl-0 pr-0 pt-0 relative text-left w-full min-[701px]:h-[470px] min-[961px]:h-[535px]"
            id="card-zoom"
            type="button"
          >
            <img
              :alt="revealed ? card.backAlt : card.frontAlt"
              :src="imageSource"
              class="block ml-[-10.5%] mt-[-6.8%] max-w-[none] w-[121%]"
              id="card-image"
              loading="lazy"
            />
            <span
              class="[background:var(--paper)] [border:1px_solid_var(--line)] rounded-[20px] bottom-[16px] [box-shadow:0_2px_8px_#00000009] text-[11px] pb-[7px] pl-[12px] pr-[12px] pt-[7px] absolute right-[12px]"
              >查看完整截图 ↗</span
            >
          </button>
          <p
            class="preview-caption [color:#55565a] text-[10px] mb-0 ml-0 mr-0 mt-[12px] text-center min-[701px]:text-[11px]"
          >
            自制 Anki 卡片 · 局部展示，点击可查看原图
          </p>
        </div>
      </div>
      <div
        class="anki-boundary items-center [border-top:1px_solid_#bab8ca] gap-x-[16px] flex mt-[27px] pt-[20px] gap-y-[16px] min-[701px]:gap-x-[24px] min-[701px]:mt-[42px] min-[701px]:pt-[26px] min-[701px]:gap-y-[24px]"
      >
        <span aria-hidden="true" class="text-[35px]">↗</span>
        <p
          class="text-[12px] leading-[1.9] mb-0 ml-0 mr-0 mt-0 min-[701px]:text-[14px]"
        >
          <strong class="block">记住，是为了在卡片外用出来。</strong> Anki
          帮你安排回忆与复习；阅读、听力、说话和写作，让你在真实情境中继续理解和运用。
        </p>
      </div>
    </div>
  </section>
</template>
