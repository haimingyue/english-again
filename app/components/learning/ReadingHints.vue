<script setup lang="ts">
import { readingContent } from "~/data/reading";
const level = ref(0);
const example = readingContent.demonstration;
const levels = ["原句", "断点", "加词", "接受语序"];
</script>

<template>
  <section
    class="section sentence-section py-14 min-[701px]:py-[72px] min-[961px]:py-24"
    id="try"
  >
    <div
      class="wrap mx-auto w-[calc(100%_-_40px)] min-[701px]:w-[calc(100%_-_64px)] min-[1201px]:w-[min(1280px,calc(100%_-_112px))]"
    >
      <div class="section-heading mb-8 min-[701px]:mb-12">
        <div class="eyebrow mb-5 text-xs font-semibold tracking-[.09em]">
          02 / 跟着书中的例句读
        </div>
        <h2
          class="m-0 text-[29px] font-bold leading-[1.45] tracking-[-.045em] min-[701px]:text-[34px] min-[961px]:text-[38px]"
        >
          意思还没说完，<br />就带着它继续读。
        </h2>
        <p
          class="mt-5 max-w-[760px] text-[15px] leading-[1.9] text-[var(--muted)]"
        >
          书中用这句话说明断点、加词和语序怎样配合。按英文出现的顺序，看看每一步读到了什么，哪个意思还没有完整。
        </p>
      </div>
      <div
        class="sentence-workbench border border-[#c8d0bf] bg-[#fffdf8] px-5 pt-5 pb-3 shadow-[5px_5px_0_#e5e7da] min-[701px]:px-9 min-[701px]:pt-7 min-[701px]:pb-5 min-[701px]:shadow-[9px_9px_0_#e5e7da]"
      >
        <div
          class="workbench-head flex flex-wrap justify-between gap-3 text-[11px] leading-[1.8] text-[#576b56]"
        >
          <span>书中例句 / 阅读过程</span><span>{{ example.source }}</span>
        </div>
        <p
          class="original-sentence my-6 max-w-[1080px] font-[Georgia,serif] text-[25px] leading-[1.65] tracking-[-.025em] min-[701px]:text-[28px] min-[961px]:text-[32px]"
          lang="en"
        >
          {{ example.sentence }}
        </p>
        <div
          aria-label="选择书中例句的讲解步骤"
          class="reading-levels grid grid-cols-4 border-b border-[#c9cebe] min-[701px]:gap-3"
          role="group"
        >
          <button
            v-for="(label, index) in levels"
            :key="label"
            :aria-pressed="level === index"
            @click="level = index"
            aria-controls="reading-hint"
            class="-mb-px flex min-h-[63px] cursor-pointer flex-col items-center justify-center gap-1 border-0 border-b-[3px] border-solid border-transparent bg-transparent px-1 py-3 text-[11px] text-inherit min-[701px]:min-h-[53px] min-[701px]:flex-row min-[701px]:justify-start min-[701px]:gap-3 min-[701px]:px-[10px] min-[701px]:text-sm"
            type="button"
          >
            <span class="px-[6px] py-[3px] text-[11px] text-[#637359]"
              >0{{ index + 1 }}</span
            >{{ label }}
          </button>
        </div>
        <div
          id="reading-hint"
          aria-live="polite"
          class="reading-hint min-h-[245px] py-6"
        >
          <template v-if="level === 0">
            <span class="text-xs text-[var(--muted)]">直接读句子</span>
            <h3 class="my-3 text-[22px] font-semibold leading-[1.5]">
              顺着英文，读出句子的意思。
            </h3>
            <p
              class="m-0 max-w-[890px] text-sm leading-[1.9] text-[var(--muted)]"
            >
              按照书中的方法，直接读这句话，根据语境理解单词，并在一个意思完整时断句。如果前面的事物还没有相应描述，就带着这段未完成的意思继续读。
            </p>
          </template>
          <template v-if="level === 1">
            <span class="text-xs text-[var(--muted)]"
              >书中设置断点的思路过程</span
            >
            <ol class="m-0 mt-4 list-none p-0">
              <li
                v-for="(step, index) in example.steps"
                :key="step.english"
                class="grid gap-2 border-t border-[#d9ddce] py-4 min-[701px]:grid-cols-[1fr_1fr] min-[701px]:gap-x-7"
              >
                <div>
                  <span class="text-xs text-[#576b56]"
                    >读到 0{{ index + 1 }}</span
                  >
                  <p
                    class="mb-0 mt-2 font-[Georgia,serif] text-xl leading-[1.7]"
                    lang="en"
                  >
                    {{ step.english }}
                  </p>
                </div>
                <div>
                  <p class="m-0 text-sm font-semibold leading-[1.9]">
                    {{ step.meaning }}
                  </p>
                  <p
                    class="mb-0 mt-2 text-sm leading-[1.9] text-[var(--muted)]"
                  >
                    {{ step.explanation }}
                  </p>
                </div>
              </li>
            </ol>
          </template>
          <template v-if="level === 2">
            <span class="text-xs text-[var(--muted)]"
              >按书中的加词方式，把断开的意思接起来</span
            >
            <div class="mt-4 grid gap-4 min-[701px]:grid-cols-2">
              <div class="bg-[#eef0e6] p-5">
                <p
                  class="m-0 font-[Georgia,serif] text-xl leading-[1.7]"
                  lang="en"
                >
                  What is harder to establish is
                </p>
                <p class="mb-0 mt-3 text-base leading-[1.9]">
                  <mark class="bg-[var(--yellow)] px-1 text-inherit"
                    >（这一点）</mark
                  >更难确定。
                </p>
                <p class="mb-0 mt-2 text-sm leading-[1.9] text-[var(--muted)]">
                  用“这一点”承接后面要说的内容。
                </p>
              </div>
              <div class="bg-[#eef0e6] p-5">
                <p
                  class="m-0 font-[Georgia,serif] text-xl leading-[1.7]"
                  lang="en"
                >
                  that businessmen assume they are presiding over
                </p>
                <p class="mb-0 mt-3 text-base leading-[1.9]">
                  商界人士以为他们正在主导<mark
                    class="bg-[var(--yellow)] px-1 text-inherit"
                    >（这场革命）</mark
                  >。
                </p>
                <p class="mb-0 mt-2 text-sm leading-[1.9] text-[var(--muted)]">
                  把所主导的事物补出来，让这一段意思完整。
                </p>
              </div>
            </div>
            <p class="mb-0 mt-5 text-sm leading-[1.9] text-[var(--muted)]">
              书中加词的目的：在不改变句子本身意思的前提下，恢复断开后需要补出的内容，使理解完整、连贯。
            </p>
          </template>
          <template v-if="level === 3">
            <span class="text-xs text-[var(--muted)]">接受英文的语序习惯</span>
            <p
              class="my-4 font-[Georgia,serif] text-[24px] leading-[1.8] min-[701px]:text-[28px]"
              lang="en"
            >
              whether the productivity revolution … is for real.
            </p>
            <h3 class="my-3 text-[22px] font-semibold leading-[1.6]">
              这场生产力革命是否……确实存在。
            </h3>
            <p
              class="m-0 max-w-[890px] text-sm leading-[1.9] text-[var(--muted)]"
            >
              读到“这场生产力革命是否……”时，这个意思还没有说完。先理解中间商界人士的那段内容，等
              is for real
              出现，再与前面未完成的意思接起来。书中通过这个过程说明：事物与相应描述相隔很远时，也要按顺序接受信息。
            </p>
          </template>
        </div>
        <div
          class="workbench-foot flex flex-wrap items-center justify-between gap-x-5 border-t border-[#d9ddce] pt-3 text-xs leading-[1.8] text-[var(--muted)]"
        >
          <span>语境理解、断点、加词和语序，在同一句话中配合。</span>
          <a
            class="text-link inline-flex min-h-11 items-center font-semibold text-inherit no-underline"
            href="#practice"
            >练习书中的其他例句 ↗</a
          >
        </div>
      </div>
    </div>
  </section>
</template>
