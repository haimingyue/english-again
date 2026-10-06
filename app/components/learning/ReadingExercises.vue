<script setup lang="ts">
import { readingContent } from "~/data/reading";
const exercises = readingContent.exercises;
const index = ref(0);
const revealed = ref(false);
const exercise = computed(() => exercises[index.value] ?? exercises[0]);
function change(direction: number) {
  index.value = (index.value + direction + exercises.length) % exercises.length;
  revealed.value = false;
}
</script>

<template>
  <section
    class="section practice-section-reading [background:var(--lavender)] pb-[56px] pl-0 pr-0 pt-[56px] min-[701px]:pb-[72px] min-[701px]:pt-[72px] min-[961px]:pb-[96px] min-[961px]:pt-[96px]"
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
            05 / 使用书中例句练习
          </div>
          <h2
            class="text-[29px] font-bold tracking-[-.045em] leading-[1.45] mb-0 ml-0 mr-0 mt-0 max-w-[760px] min-[701px]:text-[34px] min-[701px]:leading-[1.4] min-[961px]:text-[38px]"
          >
            把书中的方法，<br />用到具体句子里。
          </h2>
        </div>
        <p
          class="section-intro [color:var(--muted)] text-[15px] leading-[1.9] mb-0 ml-0 mr-0 mt-[18px] max-w-[640px] min-[701px]:text-[16px] min-[701px]:mt-[24px] min-[961px]:mt-0 min-[961px]:max-w-[330px] min-[1201px]:max-w-[380px]"
        >
          按照刚才的步骤阅读，再查看句子的理解过程，比较词义和语序上容易产生的误解。
        </p>
      </div>
      <div
        class="transfer-card [background:#f7f4fc] [border:1px_solid_#bdb6d2] mb-0 ml-auto mr-auto mt-0 max-w-[1000px] pb-[12px] pl-[22px] pr-[22px] pt-[22px] min-[701px]:pb-[18px] min-[701px]:pl-[38px] min-[701px]:pr-[38px] min-[701px]:pt-[30px]"
      >
        <div
          class="transfer-top flex-wrap leading-[1.8] [color:#635b77] gap-x-[14px] flex text-[10px] justify-between gap-y-[14px] min-[701px]:gap-x-[20px] min-[701px]:text-[11px] min-[701px]:gap-y-[20px]"
        >
          <span id="exercise-kind">{{
            `${index + 1} / ${exercises.length} · ${exercise.kind}`
          }}</span>
          <span>{{ exercise.source }}</span>
        </div>
        <p
          class="[font-family:Georgia,serif] text-[28px] [font-style:normal] leading-[1.55] mb-[22px] ml-0 mr-0 mt-[22px] min-h-[132px] min-[701px]:text-[34px] min-[701px]:leading-[1.6] min-[701px]:mb-[20px] min-[701px]:mt-[25px] min-[701px]:min-h-[110px]"
          id="exercise-sentence"
          lang="en"
        >
          {{ exercise.sentence }}
        </p>
        <p
          class="text-[14px] leading-[1.9] mb-[24px] ml-0 mr-0 mt-0 min-[701px]:text-[15px] min-[701px]:leading-[unset]"
          id="exercise-question"
        >
          {{ exercise.question }}
        </p>
        <button
          :aria-expanded="revealed"
          @click="revealed = !revealed"
          aria-controls="exercise-answer"
          class="btn btn-dark [-webkit-tap-highlight-color:transparent] items-center [background:var(--ink)] [border:0] rounded-full text-white gap-x-[28px] cursor-pointer inline-flex text-[12px] font-[650] justify-center min-h-[48px] pb-[11px] pl-[19px] pr-[19px] pt-[11px] gap-y-[28px] [transition:background_.18s,transform_.18s] min-[701px]:text-[13px] min-[701px]:pb-[10px] min-[701px]:pl-[22px] min-[701px]:pr-[22px] min-[701px]:pt-[10px]"
          id="check-exercise"
          type="button"
        >
          {{ revealed ? "收起讲解 ↑" : "查看书中方法的讲解 ↓" }}
        </button>
        <div
          class="exercise-answer [background:#e7e1f1] [border-left:3px_solid_#827396] mb-0 ml-0 mr-0 mt-[22px] pb-[17px] pl-[17px] pr-[17px] pt-[17px] min-[701px]:pb-[20px] min-[701px]:pl-[23px] min-[701px]:pr-[23px] min-[701px]:pt-[20px]"
          id="exercise-answer"
          v-show="revealed"
        >
          <strong class="text-[14px] min-[701px]:text-[16px]">{{
            exercise.answer
          }}</strong>
          <p
            class="[color:#574f66] text-[12px] leading-[1.9] mb-0 ml-0 mr-0 mt-[7px] min-[701px]:text-[13px]"
          >
            {{ exercise.why }}
          </p>
        </div>
        <div
          class="exercise-navigation items-center [border-top:1px_solid_#d5cde2] [color:#645b75] flex text-[12px] justify-between mt-[25px] pt-[12px]"
        >
          <button
            :disabled="index === 0"
            @click="change(-1)"
            class="text-link [-webkit-tap-highlight-color:transparent] items-center bg-transparent [border:0] [color:inherit] gap-x-[18px] cursor-pointer inline-flex text-[12px] font-[650] min-h-[44px] pb-0 pl-0 pr-0 pt-0 gap-y-[18px]"
            id="previous-exercise"
            type="button"
          >
            ← 上一句
          </button>
          <span aria-live="polite" id="exercise-position">{{
            `${index + 1} / ${exercises.length}`
          }}</span>
          <button
            @click="change(1)"
            class="text-link [-webkit-tap-highlight-color:transparent] items-center bg-transparent [border:0] [color:inherit] gap-x-[18px] cursor-pointer inline-flex text-[12px] font-[650] min-h-[44px] pb-0 pl-0 pr-0 pt-0 gap-y-[18px]"
            id="next-exercise"
            type="button"
          >
            {{ index === exercises.length - 1 ? "回到第一句 ↺" : "下一句 →" }}
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
