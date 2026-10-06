<script setup lang="ts">
import { videoSeries } from "~/data/series";
const courses = videoSeries.weekly.videos;
const currentCourse = shallowRef<(typeof courses)[number]>();
const courseOpen = ref(false);
const catalogOpen = ref(false);
function openCourse(week: number) {
  currentCourse.value = courses.find((course) => course.weeks.includes(week));
  courseOpen.value = Boolean(currentCourse.value);
}

usePageSeo(
  "从发音到阅读，重新学一次英语",
  "英语自学指北汇集每周课程、音标听辨、语法练习、词汇卡组与阅读方法，按自己的节奏把英语用起来。",
);
definePageMeta({ alias: "/index.html" });
</script>

<template>
  <main data-page="index" id="main" tabindex="-1">
    <section
      aria-labelledby="hero-title"
      class="hero items-start [background:#233326] text-white flex isolate min-h-[632px] overflow-hidden relative min-[601px]:items-center min-[601px]:min-h-[610px] min-[901px]:min-h-[640px] min-[1600px]:min-h-[720px]"
    >
      <img
        alt="一位学习者在窗边阅读英文并做笔记，学习场景示意图"
        class="hero-photo block h-full [inset:0] max-w-[100%] object-cover [object-position:64%_center] absolute w-full z-[-2] min-[601px]:[object-position:62%_center] min-[901px]:[object-position:center_center]"
        loading="eager"
        src="/assets/images/home/learning-scene.png"
      />
      <div
        class="wrap hero-content mb-auto ml-auto mr-auto mt-auto pb-[56px] pt-[60px] w-[calc(100%_-_40px)] min-[601px]:pb-[68px] min-[601px]:pt-[66px] min-[601px]:w-[calc(100%_-_64px)] min-[1101px]:w-[min(1280px,calc(100%_-_112px))]"
      >
        <div
          class="eyebrow [color:#e8dba5] text-[12px] font-[650] tracking-[.11em] mb-[22px] min-[601px]:text-[13px] min-[601px]:mb-[18px]"
        >
          一个按周推进的英语自学计划
        </div>
        <h1
          class="text-[40px] font-[750] tracking-[-.055em] leading-[1.28] mb-0 ml-0 mr-0 mt-0 max-w-[760px] [text-wrap:balance] min-[601px]:text-[58px] min-[601px]:tracking-[-.045em] min-[601px]:leading-[1.22] min-[601px]:[text-wrap:unset] min-[901px]:text-[62px] min-[1101px]:text-[76px] min-[1600px]:text-[84px]"
          id="hero-title"
        >
          从发音到阅读，<br />重新学一次英语。
        </h1>
        <p
          class="[color:#ecf0e9] text-[16px] leading-[1.8] mb-0 ml-0 mr-0 mt-[22px] max-w-[340px] min-[601px]:text-[19px] min-[601px]:mt-[26px] min-[601px]:max-w-[540px]"
        >
          把课程、练习资料和阅读工具放在一起。<br />找到起点，也知道接下来可以学什么。
        </p>
        <div
          class="hero-actions items-start gap-x-[13px] flex flex-col mt-[30px] gap-y-[13px] min-[601px]:items-center min-[601px]:gap-x-[26px] min-[601px]:[flex-direction:unset] min-[601px]:mt-[36px] min-[601px]:gap-y-[26px]"
        >
          <button
            @click="openCourse(1)"
            class="btn btn-primary [-webkit-tap-highlight-color:transparent] items-center [background:var(--yellow)] [border:0] rounded-full [color:var(--ink)] gap-x-[22px] cursor-pointer inline-flex text-[15px] font-[650] justify-center min-h-[52px] pb-[12px] pl-[23px] pr-[23px] pt-[12px] gap-y-[22px] [transition:background_.18s,transform_.18s] min-[601px]:text-[16px] min-[601px]:min-h-[56px] min-[601px]:pb-[14px] min-[601px]:pl-[28px] min-[601px]:pr-[28px] min-[601px]:pt-[14px]"
            type="button"
          >
            从第一周开始<span
              aria-hidden="true"
              class="arrow text-[22px] leading-[1]"
              >→</span
            >
          </button>
          <NuxtLink
            class="text-link [-webkit-tap-highlight-color:transparent] items-center [color:inherit] gap-x-[18px] inline-flex text-[14px] font-[650] min-h-[44px] gap-y-[18px] no-underline min-[601px]:text-[16px]"
            to="/about"
            >先了解学习方法<span
              aria-hidden="true"
              class="arrow text-[22px] leading-[1]"
              >↗</span
            >
          </NuxtLink>
        </div>
      </div>
      <div
        class="hero-caption bottom-[18px] [color:#edece5] text-[10px] tracking-[.04em] absolute right-[20px] min-[601px]:bottom-[24px] min-[601px]:text-[12px] min-[601px]:right-[32px] min-[901px]:right-[56px]"
      >
        ENGLISH, ONE WEEK AT A TIME.
      </div>
    </section>
    <div class="facts [background:var(--yellow)]">
      <div
        class="wrap facts-inner items-center gap-x-[8px] grid grid-cols-[repeat(3,1fr)] mb-auto ml-auto mr-auto mt-auto min-h-[98px] gap-y-[8px] w-[calc(100%_-_40px)] min-[601px]:gap-x-[unset] min-[601px]:gap-y-[unset] min-[601px]:w-[calc(100%_-_64px)] min-[901px]:min-h-[88px] min-[1101px]:w-[min(1280px,calc(100%_-_112px))]"
      >
        <div
          class="fact items-center gap-x-[16px] block text-[16px] font-semibold justify-center pb-[8px] pl-0 pr-0 pt-[8px] gap-y-[16px] text-center min-[901px]:flex min-[901px]:pb-[unset] min-[901px]:pl-[unset] min-[901px]:pr-[unset] min-[901px]:pt-[unset] min-[901px]:[text-align:unset]"
        >
          <strong
            class="block text-[23px] tracking-[-.03em] leading-[1.2] whitespace-nowrap min-[601px]:text-[28px] min-[901px]:[display:unset] min-[901px]:[white-space:unset]"
            >25 周</strong
          >
          <span
            class="block text-[11px] mt-[7px] min-[601px]:text-[13px] min-[901px]:[display:unset] min-[901px]:text-[15px] min-[901px]:mt-[unset]"
            >英语自学计划</span
          >
        </div>
        <div
          class="fact items-center [border-left:1px_solid_rgba(23,40,32,.22)] gap-x-[16px] block text-[16px] font-semibold justify-center pb-[8px] pl-0 pr-0 pt-[8px] gap-y-[16px] text-center min-[901px]:flex min-[901px]:pb-[unset] min-[901px]:pl-[unset] min-[901px]:pr-[unset] min-[901px]:pt-[unset] min-[901px]:[text-align:unset]"
        >
          <strong
            class="block text-[23px] tracking-[-.03em] leading-[1.2] whitespace-nowrap min-[601px]:text-[28px] min-[901px]:[display:unset] min-[901px]:[white-space:unset]"
            >第 25 周</strong
          >
          <span
            class="block text-[11px] mt-[7px] min-[601px]:text-[13px] min-[901px]:[display:unset] min-[901px]:text-[15px] min-[901px]:mt-[unset]"
            >已整理的课程内容</span
          >
        </div>
        <div
          class="fact items-center [border-left:1px_solid_rgba(23,40,32,.22)] gap-x-[16px] block text-[16px] font-semibold justify-center pb-[8px] pl-0 pr-0 pt-[8px] gap-y-[16px] text-center min-[901px]:flex min-[901px]:pb-[unset] min-[901px]:pl-[unset] min-[901px]:pr-[unset] min-[901px]:pt-[unset] min-[901px]:[text-align:unset]"
        >
          <strong
            class="block text-[20px] tracking-[-.03em] leading-[1.2] whitespace-nowrap min-[601px]:text-[28px] min-[901px]:[display:unset] min-[901px]:[white-space:unset]"
            >学 · 练 · 用</strong
          >
          <span
            class="block text-[11px] mt-[7px] min-[601px]:text-[13px] min-[901px]:[display:unset] min-[901px]:text-[15px] min-[901px]:mt-[unset]"
            >课程、资料与自研工具</span
          >
        </div>
      </div>
    </div>
    <section
      aria-labelledby="foundation-title"
      class="section foundations pb-[60px] pl-0 pr-0 pt-[60px] min-[601px]:pb-[72px] min-[601px]:pt-[72px] min-[901px]:pb-[96px] min-[901px]:pt-[96px]"
    >
      <div
        class="wrap mb-auto ml-auto mr-auto mt-auto w-[calc(100%_-_40px)] min-[601px]:w-[calc(100%_-_64px)] min-[1101px]:w-[min(1280px,calc(100%_-_112px))]"
      >
        <div
          class="section-head mb-[30px] ml-auto mr-auto mt-0 max-w-[840px] text-center min-[601px]:mb-[48px]"
        >
          <h2
            class="text-[32px] font-bold tracking-[-.045em] leading-[1.22] mb-0 ml-0 mr-0 mt-0 [text-wrap:balance] min-[601px]:text-[38px] min-[901px]:text-[48px] min-[901px]:[text-wrap:unset]"
            id="foundation-title"
          >
            先打好基础，<br
              class="mobile-break block min-[601px]:hidden"
            />再一步步往前。
          </h2>
          <p
            class="sub [color:var(--muted)] text-[15px] mb-0 ml-auto mr-auto mt-[18px] max-w-[700px] min-[601px]:text-[18px] min-[601px]:mt-[22px]"
          >
            从第 1–2 周的辅音、元音开始，再进入基础语法。<br />学习内容有顺序，练习也有具体的主题。
          </p>
        </div>
        <div
          class="foundations-grid gap-x-[20px] grid grid-cols-[1fr] gap-y-[20px] min-[601px]:gap-x-[24px] min-[601px]:grid-cols-[1fr_1fr] min-[601px]:gap-y-[24px]"
        >
          <article
            class="foundation foundation-phonetics [background:var(--green)] text-white flex flex-col min-h-[335px] overflow-hidden pb-0 pl-[26px] pr-[26px] pt-[28px] min-[601px]:min-h-[368px] min-[601px]:pl-[30px] min-[601px]:pr-[30px] min-[601px]:pt-[36px] min-[1101px]:pl-[40px] min-[1101px]:pr-[40px]"
            id="phonetics"
          >
            <div
              class="eyebrow text-[13px] font-[650] tracking-[.11em] mb-[18px]"
            >
              发音与听辨 · 第 1–2 周
            </div>
            <h3
              class="text-[26px] tracking-[-.045em] leading-[1.22] mb-0 ml-0 mr-0 mt-0 [text-wrap:balance] min-[601px]:text-[25px] min-[901px]:text-[30px] min-[901px]:[text-wrap:unset]"
            >
              听出区别，<br
                class="mobile-break block min-[601px]:hidden"
              />才有练习的方向。
            </h3>
            <p
              class="text-[14px] mb-0 ml-0 mr-0 mt-[12px] min-[601px]:text-[16px]"
            >
              认识美式音标，用最小配对练习听辨。
            </p>
            <div
              aria-label="最小配对示例 ship 和 sheep"
              class="phonetic-demo items-center gap-x-[30px] flex flex-[1] justify-center pb-[22px] pl-0 pr-0 pt-[22px] gap-y-[30px] min-[901px]:gap-x-[58px] min-[901px]:gap-y-[58px]"
            >
              <div class="sound text-center">
                <div
                  class="ipa [font-family:Arial,sans-serif] text-[60px] tracking-[-.08em] leading-[1.4] min-[601px]:text-[68px]"
                >
                  /ɪ/
                </div>
                <div class="word text-[22px] min-[601px]:text-[24px]">ship</div>
              </div>
              <div
                aria-hidden="true"
                class="pair-line [background:#698778] h-[90px] w-[1px]"
              ></div>
              <div class="sound text-center">
                <div
                  class="ipa [font-family:Arial,sans-serif] text-[60px] tracking-[-.08em] leading-[1.4] min-[601px]:text-[68px]"
                >
                  /i/
                </div>
                <div class="word text-[22px] min-[601px]:text-[24px]">
                  sheep
                </div>
              </div>
            </div>
            <div
              class="foundation-bottom items-center [border-color:#5f8274] [border-top:1px_solid_rgba(23,40,32,.17)] flex text-[14px] justify-between mb-0 ml-[-26px] mr-[-26px] mt-0 pb-[14px] pl-[26px] pr-[26px] pt-[14px] min-[601px]:ml-[-30px] min-[601px]:mr-[-30px] min-[601px]:pb-[18px] min-[601px]:pl-[30px] min-[601px]:pr-[30px] min-[601px]:pt-[18px] min-[1101px]:ml-[-40px] min-[1101px]:mr-[-40px] min-[1101px]:pl-[40px] min-[1101px]:pr-[40px]"
            >
              <span>音标 · 最小配对 · 练习方法</span>
              <NuxtLink
                class="text-link [-webkit-tap-highlight-color:transparent] items-center bg-transparent [border:0] [color:inherit] gap-x-[18px] cursor-pointer inline-flex text-[16px] font-[650] min-h-[44px] gap-y-[18px]"
                to="/phonetics"
                >查看音标<span aria-hidden="true">↗</span>
              </NuxtLink>
            </div>
          </article>
          <article
            class="foundation foundation-grammar [background:var(--lavender)] flex flex-col min-h-[335px] overflow-hidden pb-0 pl-[26px] pr-[26px] pt-[28px] min-[601px]:min-h-[368px] min-[601px]:pl-[30px] min-[601px]:pr-[30px] min-[601px]:pt-[36px] min-[1101px]:pl-[40px] min-[1101px]:pr-[40px]"
            id="grammar"
          >
            <div
              class="eyebrow text-[13px] font-[650] tracking-[.11em] mb-[18px]"
            >
              基础语法 · 第 5 周起
            </div>
            <h3
              class="text-[26px] tracking-[-.045em] leading-[1.22] mb-0 ml-0 mr-0 mt-0 [text-wrap:balance] min-[601px]:text-[25px] min-[901px]:text-[30px] min-[901px]:[text-wrap:unset]"
            >
              在句子里，把规则学明白。
            </h3>
            <p
              class="text-[14px] mb-0 ml-0 mr-0 mt-[12px] min-[601px]:text-[16px]"
            >
              以 Essential Grammar in Use 为学习参考。
            </p>
            <div
              class="grammar-demo [background:rgba(255,255,255,.72)] mb-[32px] ml-0 mr-0 mt-[26px] pb-[20px] pl-[22px] pr-[22px] pt-[20px] min-[601px]:pb-[24px] min-[601px]:pl-[28px] min-[601px]:pr-[28px] min-[601px]:pt-[24px]"
            >
              <div
                class="grammar-line items-center gap-x-[8px] grid grid-cols-[62px_1fr] pb-[9px] pl-0 pr-0 pt-[9px] gap-y-[8px] min-[601px]:gap-x-[2px] min-[601px]:grid-cols-[1fr] min-[601px]:gap-y-[2px] min-[901px]:gap-x-[12px] min-[901px]:grid-cols-[76px_1fr] min-[901px]:gap-y-[12px]"
              >
                <span class="[color:#6a646f] text-[14px]">经常发生</span>
                <strong
                  class="text-[19px] font-[550] tracking-[-.02em] min-[601px]:text-[20px] min-[1101px]:text-[23px]"
                  >I
                  <em class="[color:#534d89] [font-style:normal]">read</em>
                  every day.</strong
                >
              </div>
              <div
                class="grammar-line items-center gap-x-[8px] grid grid-cols-[62px_1fr] pb-[9px] pl-0 pr-0 pt-[9px] gap-y-[8px] min-[601px]:gap-x-[2px] min-[601px]:grid-cols-[1fr] min-[601px]:gap-y-[2px] min-[901px]:gap-x-[12px] min-[901px]:grid-cols-[76px_1fr] min-[901px]:gap-y-[12px]"
              >
                <span class="[color:#6a646f] text-[14px]">正在发生</span>
                <strong
                  class="text-[19px] font-[550] tracking-[-.02em] min-[601px]:text-[20px] min-[1101px]:text-[23px]"
                  >I
                  <em class="[color:#534d89] [font-style:normal]"
                    >am reading</em
                  >
                  now.</strong
                >
              </div>
            </div>
            <div
              class="foundation-bottom items-center [border-top:1px_solid_rgba(23,40,32,.17)] flex text-[14px] justify-between mb-0 ml-[-26px] mr-[-26px] mt-0 pb-[14px] pl-[26px] pr-[26px] pt-[14px] min-[601px]:ml-[-30px] min-[601px]:mr-[-30px] min-[601px]:pb-[18px] min-[601px]:pl-[30px] min-[601px]:pr-[30px] min-[601px]:pt-[18px] min-[1101px]:ml-[-40px] min-[1101px]:mr-[-40px] min-[1101px]:pl-[40px] min-[1101px]:pr-[40px]"
            >
              <span>例句 · 语法笔记 · 每周课程</span>
              <NuxtLink
                class="text-link [-webkit-tap-highlight-color:transparent] items-center bg-transparent [border:0] [color:inherit] gap-x-[18px] cursor-pointer inline-flex text-[16px] font-[650] min-h-[44px] gap-y-[18px]"
                to="/grammar"
                >查看语法<span aria-hidden="true">↗</span>
              </NuxtLink>
            </div>
          </article>
        </div>
      </div>
    </section>
    <section
      aria-labelledby="course-title"
      class="section courses bg-white pb-[60px] pl-0 pr-0 pt-[60px] min-[601px]:pb-[72px] min-[601px]:pt-[72px] min-[901px]:pb-[96px] min-[901px]:pt-[96px]"
      id="courses"
    >
      <div
        class="wrap split items-center gap-x-[36px] grid grid-cols-[1fr] mb-auto ml-auto mr-auto mt-auto gap-y-[36px] w-[calc(100%_-_40px)] min-[601px]:gap-x-[40px] min-[601px]:gap-y-[40px] min-[601px]:w-[calc(100%_-_64px)] min-[901px]:gap-x-[56px] min-[901px]:grid-cols-[4fr_7fr] min-[901px]:gap-y-[56px] min-[1101px]:gap-x-[100px] min-[1101px]:gap-y-[100px] min-[1101px]:w-[min(1280px,calc(100%_-_112px))]"
      >
        <div class="course-intro">
          <div
            class="eyebrow text-[13px] font-[650] tracking-[.11em] mb-[18px]"
          >
            每周学习专栏
          </div>
          <h2
            class="text-[34px] font-bold tracking-[-.045em] leading-[1.22] mb-0 ml-0 mr-0 mt-0 max-w-[100%] [text-wrap:balance] min-[601px]:text-[38px] min-[901px]:text-[48px] min-[901px]:max-w-[360px] min-[901px]:[text-wrap:unset]"
            id="course-title"
          >
            每周一个主题。<br
              class="block min-[601px]:[display:unset]"
            />把英语慢慢<br
              class="desktop-break hidden min-[901px]:[display:unset]"
            />学回来。
          </h2>
          <p
            class="[color:var(--muted)] text-[15px] mb-0 ml-0 mr-0 mt-[18px] min-[601px]:text-[17px] min-[601px]:mt-[24px]"
          >
            B
            站专栏从发音、词汇走到基础语法。可以从开篇了解学习方法，也可以按主题找到需要的那一周。
          </p>
          <NuxtLink
            class="btn btn-dark [-webkit-tap-highlight-color:transparent] items-center [background:var(--ink)] rounded-full text-white gap-x-[22px] inline-flex text-[16px] font-[650] justify-center mt-[22px] min-h-[56px] pb-[14px] pl-[28px] pr-[28px] pt-[14px] gap-y-[22px] no-underline [transition:background_.18s,transform_.18s] min-[601px]:mt-[30px]"
            to="/columns"
            >查看课程目录<span
              aria-hidden="true"
              class="arrow text-[22px] leading-[1]"
              >→</span
            >
          </NuxtLink>
          <div
            class="course-counter [border-top:1px_solid_var(--line)] [color:var(--muted)] gap-x-[26px] flex text-[13px] mt-[24px] pt-[20px] gap-y-[26px] min-[601px]:mt-[38px]"
          >
            <div>
              <strong class="[color:var(--ink)] block text-[28px] font-[650]"
                >24 集</strong
              >周次课程
            </div>
            <div>
              <strong class="[color:var(--ink)] block text-[28px] font-[650]"
                >1 集</strong
              >开篇介绍
            </div>
            <div>
              <strong class="[color:var(--ink)] block text-[28px] font-[650]"
                >第 3–4 周</strong
              >两周合为一集
            </div>
          </div>
        </div>
        <div>
          <div class="course-list [border-top:1px_solid_var(--line)]">
            <button
              @click="openCourse(25)"
              class="course-row [-webkit-tap-highlight-color:transparent] items-center bg-transparent [border:0] [border-bottom:1px_solid_var(--line)] [color:inherit] gap-x-[16px] cursor-pointer flex pb-[22px] pl-0 pr-0 pt-[22px] gap-y-[16px] text-left [transition:background_.18s] w-full min-[601px]:gap-x-[24px] min-[601px]:pb-[28px] min-[601px]:pt-[28px] min-[601px]:gap-y-[24px]"
              type="button"
            >
              <div
                class="week-box flex-[0_0_64px] [flex-basis:48px] text-[20px] font-[650] leading-[1] w-[48px] min-[601px]:[flex-basis:unset] min-[601px]:text-[24px] min-[601px]:w-[64px]"
              >
                25<span
                  class="[color:var(--muted)] block text-[12px] font-medium tracking-0 mt-[8px]"
                  >周次</span
                >
              </div>
              <div class="course-info flex-[1]">
                <small
                  class="[color:var(--muted)] text-[11px] min-[601px]:text-[12px]"
                  >短语动词<span
                    class="latest [background:#e9efdc] rounded-[2px] [color:#31462f] inline-block text-[11px] ml-[5px] pb-[3px] pl-[10px] pr-[10px] pt-[3px] min-[601px]:ml-[10px]"
                    >最近整理</span
                  >
                </small>
                <strong
                  class="block text-[17px] font-semibold tracking-[-.015em] leading-[1.55] mt-[5px] min-[601px]:text-[20px]"
                  >Phrasal verbs 短语动词是啥？</strong
                >
              </div>
              <span
                aria-hidden="true"
                class="round-arrow [border:1px_solid_#b9c3bb] rounded-full grid shrink-0 text-[20px] h-[40px] place-items-center w-[40px] min-[601px]:h-[44px] min-[601px]:w-[44px]"
                >↗</span
              >
            </button>
            <button
              @click="openCourse(24)"
              class="course-row [-webkit-tap-highlight-color:transparent] items-center bg-transparent [border:0] [border-bottom:1px_solid_var(--line)] [color:inherit] gap-x-[16px] cursor-pointer flex pb-[22px] pl-0 pr-0 pt-[22px] gap-y-[16px] text-left [transition:background_.18s] w-full min-[601px]:gap-x-[24px] min-[601px]:pb-[28px] min-[601px]:pt-[28px] min-[601px]:gap-y-[24px]"
              type="button"
            >
              <div
                class="week-box flex-[0_0_64px] [flex-basis:48px] text-[20px] font-[650] leading-[1] w-[48px] min-[601px]:[flex-basis:unset] min-[601px]:text-[24px] min-[601px]:w-[64px]"
              >
                24<span
                  class="[color:var(--muted)] block text-[12px] font-medium tracking-0 mt-[8px]"
                  >周次</span
                >
              </div>
              <div class="course-info flex-[1]">
                <small
                  class="[color:var(--muted)] text-[11px] min-[601px]:text-[12px]"
                  >英语中的“小词”</small
                >
                <strong
                  class="block text-[17px] font-semibold tracking-[-.015em] leading-[1.55] mt-[5px] min-[601px]:text-[20px]"
                  >英语里的这些“小词”，才是最麻烦的！</strong
                >
              </div>
              <span
                aria-hidden="true"
                class="round-arrow [border:1px_solid_#b9c3bb] rounded-full grid shrink-0 text-[20px] h-[40px] place-items-center w-[40px] min-[601px]:h-[44px] min-[601px]:w-[44px]"
                >↗</span
              >
            </button>
            <button
              @click="openCourse(23)"
              class="course-row [-webkit-tap-highlight-color:transparent] items-center bg-transparent [border:0] [border-bottom:1px_solid_var(--line)] [color:inherit] gap-x-[16px] cursor-pointer flex pb-[22px] pl-0 pr-0 pt-[22px] gap-y-[16px] text-left [transition:background_.18s] w-full min-[601px]:gap-x-[24px] min-[601px]:pb-[28px] min-[601px]:pt-[28px] min-[601px]:gap-y-[24px]"
              type="button"
            >
              <div
                class="week-box flex-[0_0_64px] [flex-basis:48px] text-[20px] font-[650] leading-[1] w-[48px] min-[601px]:[flex-basis:unset] min-[601px]:text-[24px] min-[601px]:w-[64px]"
              >
                23<span
                  class="[color:var(--muted)] block text-[12px] font-medium tracking-0 mt-[8px]"
                  >周次</span
                >
              </div>
              <div class="course-info flex-[1]">
                <small
                  class="[color:var(--muted)] text-[11px] min-[601px]:text-[12px]"
                  >英语介词</small
                >
                <strong
                  class="block text-[17px] font-semibold tracking-[-.015em] leading-[1.55] mt-[5px] min-[601px]:text-[20px]"
                  >为什么是 at work，却是 in bed？</strong
                >
              </div>
              <span
                aria-hidden="true"
                class="round-arrow [border:1px_solid_#b9c3bb] rounded-full grid shrink-0 text-[20px] h-[40px] place-items-center w-[40px] min-[601px]:h-[44px] min-[601px]:w-[44px]"
                >↗</span
              >
            </button>
            <button
              @click="openCourse(22)"
              class="course-row [-webkit-tap-highlight-color:transparent] items-center bg-transparent [border:0] [border-bottom:1px_solid_var(--line)] [color:inherit] gap-x-[16px] cursor-pointer flex pb-[22px] pl-0 pr-0 pt-[22px] gap-y-[16px] text-left [transition:background_.18s] w-full min-[601px]:gap-x-[24px] min-[601px]:pb-[28px] min-[601px]:pt-[28px] min-[601px]:gap-y-[24px]"
              type="button"
            >
              <div
                class="week-box flex-[0_0_64px] [flex-basis:48px] text-[20px] font-[650] leading-[1] w-[48px] min-[601px]:[flex-basis:unset] min-[601px]:text-[24px] min-[601px]:w-[64px]"
              >
                22<span
                  class="[color:var(--muted)] block text-[12px] font-medium tracking-0 mt-[8px]"
                  >周次</span
                >
              </div>
              <div class="course-info flex-[1]">
                <small
                  class="[color:var(--muted)] text-[11px] min-[601px]:text-[12px]"
                  >句子组合</small
                >
                <strong
                  class="block text-[17px] font-semibold tracking-[-.015em] leading-[1.55] mt-[5px] min-[601px]:text-[20px]"
                  >如何把简单句组成长句子？</strong
                >
              </div>
              <span
                aria-hidden="true"
                class="round-arrow [border:1px_solid_#b9c3bb] rounded-full grid shrink-0 text-[20px] h-[40px] place-items-center w-[40px] min-[601px]:h-[44px] min-[601px]:w-[44px]"
                >↗</span
              >
            </button>
          </div>
          <NuxtLink
            class="text-link all-weeks [-webkit-tap-highlight-color:transparent] items-center bg-transparent [color:inherit] gap-x-[18px] inline-flex text-[16px] font-[650] mt-[16px] min-h-[44px] gap-y-[18px] no-underline"
            to="/columns"
            >从开篇查看全部课程<span aria-hidden="true">→</span>
          </NuxtLink>
        </div>
      </div>
    </section>
    <HomeSoftwareShowcase></HomeSoftwareShowcase>
    <section
      aria-labelledby="method-title"
      class="methods pb-[56px] pl-0 pr-0 pt-[56px] min-[601px]:pb-[76px] min-[601px]:pt-[76px]"
      id="methods"
    >
      <div
        class="wrap method-layout [align-items:start] gap-x-[28px] grid grid-cols-[1fr] mb-auto ml-auto mr-auto mt-auto gap-y-[28px] w-[calc(100%_-_40px)] min-[601px]:gap-x-[40px] min-[601px]:grid-cols-[1fr_1fr] min-[601px]:gap-y-[40px] min-[601px]:w-[calc(100%_-_64px)] min-[901px]:gap-x-[100px] min-[901px]:gap-y-[100px] min-[1101px]:w-[min(1280px,calc(100%_-_112px))]"
      >
        <div>
          <div
            class="eyebrow text-[13px] font-[650] tracking-[.11em] mb-[18px]"
          >
            关于这套学习方式
          </div>
          <h2
            class="text-[30px] font-bold tracking-[-.045em] leading-[1.22] mb-0 ml-0 mr-0 mt-0 [text-wrap:balance] min-[601px]:text-[36px] min-[901px]:[text-wrap:unset]"
            id="method-title"
          >
            源于科学的学习方法
          </h2>
          <p
            class="[color:var(--muted)] text-[15px] mb-0 ml-0 mr-0 mt-[18px] max-w-[440px] min-[601px]:text-[16px]"
          >
            项目以 COCA、Make It Stick 和 Fluent Forever
            为参考，将学习材料、练习方法与每周内容连接起来。
          </p>
          <NuxtLink
            class="text-link [-webkit-tap-highlight-color:transparent] items-center bg-transparent [border:0] [color:inherit] gap-x-[18px] cursor-pointer inline-flex text-[16px] font-[650] mt-[16px] min-h-[44px] gap-y-[18px]"
            to="/about"
            >了解项目与学习依据<span aria-hidden="true">↗</span>
          </NuxtLink>
        </div>
        <div class="method-list [border-top:1px_solid_var(--line)]">
          <div
            class="method-row items-center [border-bottom:1px_solid_var(--line)] flex justify-between pb-[16px] pl-0 pr-0 pt-[16px]"
          >
            <strong
              class="text-[20px] font-[550] tracking-[-.02em] min-[601px]:text-[22px]"
              >COCA</strong
            >
            <span
              class="[color:var(--muted)] text-[12px] min-[601px]:text-[13px]"
              >语言材料</span
            >
          </div>
          <div
            class="method-row items-center [border-bottom:1px_solid_var(--line)] flex justify-between pb-[16px] pl-0 pr-0 pt-[16px]"
          >
            <strong
              class="text-[20px] font-[550] tracking-[-.02em] min-[601px]:text-[22px]"
              >Make It Stick</strong
            >
            <span
              class="[color:var(--muted)] text-[12px] min-[601px]:text-[13px]"
              >学习与记忆</span
            >
          </div>
          <div
            class="method-row items-center [border-bottom:1px_solid_var(--line)] flex justify-between pb-[16px] pl-0 pr-0 pt-[16px]"
          >
            <strong
              class="text-[20px] font-[550] tracking-[-.02em] min-[601px]:text-[22px]"
              >Fluent Forever</strong
            >
            <span
              class="[color:var(--muted)] text-[12px] min-[601px]:text-[13px]"
              >语言学习方法</span
            >
          </div>
        </div>
      </div>
    </section>
    <section
      aria-labelledby="cta-title"
      class="final-cta [background:var(--yellow)] pb-[54px] pl-[20px] pr-[20px] pt-[54px] text-center min-[601px]:pb-[72px] min-[601px]:pl-[24px] min-[601px]:pr-[24px] min-[601px]:pt-[72px]"
      id="resources"
    >
      <h2
        class="text-[32px] font-bold tracking-[-.045em] leading-[1.22] mb-auto ml-auto mr-auto mt-auto max-w-[320px] [text-wrap:balance] min-[601px]:text-[44px] min-[601px]:mb-0 min-[601px]:ml-0 min-[601px]:mr-0 min-[601px]:mt-0 min-[601px]:max-w-[unset] min-[901px]:[text-wrap:unset]"
        id="cta-title"
      >
        下一步，<br
          class="mobile-break block min-[601px]:hidden"
        />从第一周开始。
      </h2>
      <p class="text-[15px] mb-0 ml-0 mr-0 mt-[16px] min-[601px]:text-[17px]">
        先看课程，再找到对应的练习资料。
      </p>
      <button
        @click="openCourse(1)"
        class="btn btn-dark [-webkit-tap-highlight-color:transparent] items-center [background:var(--ink)] [border:0] rounded-full text-white gap-x-[22px] cursor-pointer inline-flex text-[16px] font-[650] justify-center mt-[28px] min-h-[56px] pb-[14px] pl-[28px] pr-[28px] pt-[14px] gap-y-[22px] [transition:background_.18s,transform_.18s]"
        type="button"
      >
        查看第一周内容<span
          aria-hidden="true"
          class="arrow text-[22px] leading-[1]"
          >→</span
        >
      </button>
      <NuxtLink
        class="text-link [-webkit-tap-highlight-color:transparent] items-center bg-transparent [border:0] [color:inherit] gap-x-[18px] cursor-pointer inline-flex text-[16px] font-[650] ml-[24px] min-h-[44px] gap-y-[18px]"
        to="/vocabulary"
        >浏览词汇卡组<span aria-hidden="true">↗</span>
      </NuxtLink>
    </section>
    <UiDialog
      :title="
        currentCourse
          ? `第 ${currentCourse.weeks.join('–')} 周 · ${currentCourse.topic}`
          : '课程介绍'
      "
      v-model="courseOpen"
      ><template v-if="currentCourse"
        ><p class="py-4">{{ currentCourse.title }}</p>
        <a
          :href="currentCourse.url"
          class="action-link text-forest"
          rel="noopener noreferrer"
          target="_blank"
          >在 B 站观看课程 ↗</a
        ></template
      ></UiDialog
    ><UiDialog title="英语自学指北 · 课程目录" v-model="catalogOpen"
      ><a
        :href="course.url"
        :key="course.url"
        class="flex min-h-12 items-center border-b border-line py-3 text-forest hover:underline"
        rel="noopener noreferrer"
        target="_blank"
        v-for="course in courses"
        >{{ course.label }} · {{ course.topic }} ↗</a
      ></UiDialog
    >
  </main>
</template>
