<script setup lang="ts">
import { phoneticsContent } from "~/data/phonetics";
const pairIndex = ref(0);
const pair = computed(
  () => phoneticsContent.pairs[pairIndex.value] ?? phoneticsContent.pairs[0],
);
const correct = ref(0);
const chosen = ref<number | null>(null);
const heard = ref(false);
const answered = ref(false);
const feedback = ref("先听音频，再选择答案。");
const { playing, status, play, stop } = useAudioPlayer();
let generation = 0;
onMounted(() => {
  correct.value = Math.floor(Math.random() * 2);
});
async function listen() {
  const token = generation;
  const option = pair.value.options[correct.value];
  if (!option) return;
  const success = await play(option.audio);
  if (token !== generation) return;
  if (success) {
    heard.value = true;
    if (!answered.value) feedback.value = "听到哪一个？选出你的答案。";
  } else
    feedback.value = "音频暂时无法播放。可以重试，或下载卡组到 Anki 练习。";
}
function choose(index: number) {
  if (!heard.value || answered.value) return;
  chosen.value = index;
  answered.value = true;
  const word = pair.value.options[correct.value]?.word;
  feedback.value =
    index === correct.value
      ? `✓ 听对了，是 ${word}。可以重听一次，再换一组。`
      : `这次是 ${word}。再听一遍，留意它和另一项的区别。`;
}
function nextPair() {
  generation++;
  stop();
  pairIndex.value = (pairIndex.value + 1) % phoneticsContent.pairs.length;
  correct.value = Math.floor(Math.random() * 2);
  chosen.value = null;
  heard.value = false;
  answered.value = false;
  feedback.value = "先听音频，再选择答案。";
  status.value = "点击播放，听一遍";
}
</script>

<template>
  <div
    :class="{ 'is-playing': playing }"
    aria-labelledby="listen-title"
    class="listen-card [background:var(--paper)] rounded-[4px] [box-shadow:7px_7px_0_#173f34] [color:var(--ink)] pb-[14px] pl-[22px] pr-[22px] pt-[23px] [scroll-margin-top:30px] min-[701px]:[box-shadow:12px_12px_0_#173f34] min-[701px]:pl-[20px] min-[701px]:pr-[20px] min-[701px]:pt-[22px] min-[961px]:pb-[16px] min-[961px]:pl-[26px] min-[961px]:pr-[26px] min-[961px]:pt-[26px] min-[1201px]:pb-[18px] min-[1201px]:pl-[32px] min-[1201px]:pr-[32px] min-[1201px]:pt-[30px]"
    id="listen"
  >
    <div
      class="listen-top [border-bottom:1px_solid_#d6dace] [color:var(--muted)] gap-x-[12px] flex text-[11px] justify-between mb-[24px] pb-[18px] gap-y-[12px] min-[701px]:mb-[22px] min-[961px]:text-[12px] min-[961px]:mb-[26px]"
    >
      <span class="font-[650] tracking-[.04em]" id="quiz-type">{{
        pair.type
      }}</span>
      <span>先听，再选</span>
    </div>
    <h2
      class="text-[25px] font-bold tracking-[-.035em] leading-[1.35] mb-0 ml-0 mr-0 mt-0 text-center min-[701px]:text-[23px] min-[701px]:leading-[1.25] min-[961px]:text-[27px]"
      id="listen-title"
    >
      你听到的是哪一个？
    </h2>
    <p
      class="listen-sub [color:var(--muted)] text-[13px] mb-0 ml-0 mr-0 mt-[9px] text-center"
    >
      {{
        pair.type === "单词听辨"
          ? "只差一个声音，意思就不一样。"
          : "留意气流与声带，分辨这一对声音。"
      }}
    </p>
    <div
      class="listen-control items-center gap-x-[18px] flex justify-center mt-[24px] gap-y-[18px] min-[701px]:mt-[26px] min-[961px]:gap-x-[24px] min-[961px]:gap-y-[24px]"
    >
      <span
        aria-hidden="true"
        class="wave items-center [color:#789183] gap-x-[4px] flex h-[35px] gap-y-[4px]"
      >
        <i class="bg-current rounded-[3px] h-[12px] w-[3px]"> </i>
        <i class="bg-current rounded-[3px] h-[23px] w-[3px]"> </i>
        <i class="bg-current rounded-[3px] h-[34px] w-[3px]"> </i>
        <i class="bg-current rounded-[3px] h-[23px] w-[3px]"> </i>
        <i class="bg-current rounded-[3px] h-[12px] w-[3px]"> </i>
      </span>
      <button
        :aria-label="heard ? '重播本题音频' : '播放本题音频'"
        @click="listen"
        class="play [-webkit-tap-highlight-color:transparent] [background:var(--yellow)] [border:0] rounded-full [box-shadow:0_0_0_7px_#f7d84a20] [color:inherit] cursor-pointer grid h-[66px] place-items-center [transition:transform_.18s] w-[66px]"
        id="quiz-play"
        type="button"
      >
        <svg
          aria-hidden="true"
          class="block [fill:var(--ink)] h-[26px] ml-0 w-[26px]"
          viewBox="0 0 24 24"
        >
          <path d="M9 5v14l11-7z"></path>
        </svg>
      </button>
      <span
        aria-hidden="true"
        class="wave items-center [color:#789183] gap-x-[4px] flex h-[35px] gap-y-[4px]"
      >
        <i class="bg-current rounded-[3px] h-[12px] w-[3px]"> </i>
        <i class="bg-current rounded-[3px] h-[23px] w-[3px]"> </i>
        <i class="bg-current rounded-[3px] h-[34px] w-[3px]"> </i>
        <i class="bg-current rounded-[3px] h-[23px] w-[3px]"> </i>
        <i class="bg-current rounded-[3px] h-[12px] w-[3px]"> </i>
      </span>
    </div>
    <p
      class="play-caption [color:var(--muted)] text-[12px] mb-0 ml-0 mr-0 mt-[13px] min-h-[21px] text-center"
      id="play-caption"
    >
      {{ status }}
    </p>
    <div
      aria-label="选择听到的声音"
      class="answers gap-x-[12px] grid grid-cols-[1fr_1fr] mt-[22px] gap-y-[12px]"
      role="group"
    >
      <button
        :class="{
          'is-correct': answered && index === correct,
          'is-wrong': answered && index === chosen && chosen !== correct,
        }"
        :data-answer="index"
        :disabled="!heard || answered"
        :key="option.word"
        @click="choose(index)"
        class="answer [-webkit-tap-highlight-color:transparent] items-center bg-transparent [border:1px_solid_#bdc8bc] rounded-[3px] [color:inherit] cursor-pointer flex flex-col min-h-[110px] pb-[15px] pl-[10px] pr-[10px] pt-[15px] relative [transition:background_.16s,border-color_.16s] min-[961px]:pl-[18px] min-[961px]:pr-[18px]"
        type="button"
        v-for="(option, index) in pair.options"
      >
        <span
          class="option-letter [color:var(--muted)] text-[10px] left-[12px] absolute top-[10px]"
          >{{ index === 0 ? "A" : "B" }}</span
        >
        <strong
          class="text-[29px] tracking-[-.03em] leading-[1.3] mt-[5px] min-[701px]:text-[25px] min-[961px]:text-[29px]"
          >{{ option.word }}</strong
        >
        <span
          class="option-ipa [color:#526354] [font-family:Arial,sans-serif] text-[16px] [font-style:normal] leading-[1.5] mt-[7px]"
          >{{ option.ipa }}</span
        >
      </button>
    </div>
    <p
      :data-result="
        answered ? (chosen === correct ? 'correct' : 'wrong') : undefined
      "
      aria-live="polite"
      class="quiz-feedback text-[12px] leading-[1.65] mb-0 ml-0 mr-0 mt-0 min-h-[43px] pt-[12px]"
      id="quiz-feedback"
      role="status"
    >
      {{ feedback }}
    </p>
    <div
      class="listen-bottom items-center [border-top:1px_solid_#d6dace] gap-x-[12px] flex justify-between pt-[8px] gap-y-[12px]"
    >
      <span class="[color:var(--muted)] text-[11px]">音频来自配套卡组</span>
      <button
        @click="nextPair"
        class="text-link [-webkit-tap-highlight-color:transparent] items-center bg-transparent [border:0] [color:inherit] gap-x-[12px] cursor-pointer inline-flex text-[13px] font-[650] min-h-[44px] pb-0 pl-0 pr-0 pt-0 gap-y-[12px] min-[701px]:text-[14px] min-[961px]:text-[12px]"
        id="next-pair"
        type="button"
      >
        换一组 <span aria-hidden="true">→</span>
      </button>
    </div>
  </div>
</template>
