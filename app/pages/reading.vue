<script setup lang="ts">
import { readingContent } from "~/data/reading";
usePageSeo(
  "阅读与理解",
  "按照《8天教你像读中文一样读英文》的语境理解、断点、加词与语序方法，练习阅读书中的英文句子。",
);
definePageMeta({ alias: "/reading.html" });
</script>

<template>
  <main data-page="reading" id="main" tabindex="-1">
    <section
      class="reading-hero [background:var(--green)] text-white pb-[40px] pl-0 pr-0 pt-[35px] min-[701px]:pb-[50px] min-[701px]:pt-[45px] min-[961px]:pb-[64px] min-[961px]:pt-[62px]"
    >
      <div
        class="wrap reading-hero-grid items-center gap-x-[32px] grid grid-cols-[1fr] mb-auto ml-auto mr-auto mt-auto gap-y-[32px] w-[calc(100%_-_40px)] min-[701px]:gap-x-[30px] min-[701px]:grid-cols-[1.2fr_.85fr] min-[701px]:gap-y-[30px] min-[701px]:w-[calc(100%_-_64px)] min-[961px]:gap-x-[50px] min-[961px]:grid-cols-[1.3fr_1fr] min-[961px]:gap-y-[50px] min-[1201px]:gap-x-[85px] min-[1201px]:gap-y-[85px] min-[1201px]:w-[min(1280px,calc(100%_-_112px))]"
      >
        <div>
          <div
            class="eyebrow [color:var(--yellow)] text-[10px] font-[650] tracking-[.09em] mb-[22px] min-[701px]:text-[12px] min-[701px]:mb-[24px]"
          >
            8天教你像读中文一样读英文 / 阅读方法
          </div>
          <h1
            class="text-[42px] font-[750] tracking-[-.045em] leading-[1.32] mb-0 ml-0 mr-0 mt-0 min-[701px]:text-[43px] min-[961px]:text-[51px] min-[1201px]:text-[58px]"
          >
            像读中文一样，<br />顺着语序，<br />读懂<span
              class="design-underline relative whitespace-nowrap"
              >英文句子。</span
            >
          </h1>
          <p
            class="reading-lede [color:#e0e9df] text-[14px] leading-[1.9] mb-[23px] ml-0 mr-0 mt-[23px] min-[701px]:text-[15px] min-[701px]:mb-[30px] min-[701px]:mt-[25px] min-[1201px]:text-[16px]"
          >
            根据语境理解词义，用断点和加词把长句读通。<br
              class="hidden min-[961px]:[display:unset]"
            />接受英文的语序，带着尚未完整的意思继续读。
          </p>
          <div
            class="actions items-center gap-x-[18px] flex flex-row flex-wrap gap-y-[18px] min-[701px]:items-start min-[701px]:gap-x-[10px] min-[701px]:flex-col min-[701px]:gap-y-[10px] min-[961px]:items-center min-[961px]:gap-x-[19px] min-[961px]:[flex-direction:unset] min-[961px]:gap-y-[19px] min-[1201px]:gap-x-[25px] min-[1201px]:gap-y-[25px]"
          >
            <a
              class="btn btn-yellow [-webkit-tap-highlight-color:transparent] items-center [background:var(--yellow)] rounded-full [color:var(--ink)] gap-x-[28px] inline-flex text-[13px] font-[650] justify-center min-h-[48px] pb-[12px] pl-[21px] pr-[21px] pt-[12px] gap-y-[28px] no-underline [transition:background_.18s,transform_.18s] min-[701px]:text-[14px] min-[701px]:min-h-[52px] min-[701px]:pl-[23px] min-[701px]:pr-[23px] min-[1201px]:pb-[14px] min-[1201px]:pl-[28px] min-[1201px]:pr-[28px] min-[1201px]:pt-[14px]"
              href="#methods"
              >从书中方法开始 <span aria-hidden="true">↓</span>
            </a>
            <NuxtLink
              class="text-link light-link [-webkit-tap-highlight-color:transparent] items-center bg-transparent text-white gap-x-[18px] inline-flex text-[11px] font-[650] min-h-[44px] pb-0 pl-0 pr-0 pt-0 gap-y-[18px] no-underline min-[701px]:text-[12px] min-[1201px]:text-[14px]"
              to="/little-prince"
              >一起读《小王子》 ↗</NuxtLink
            >
          </div>
          <p
            class="reading-hero-note [color:#ccddce] text-[10px] mb-0 ml-0 mr-0 mt-[20px] min-[961px]:text-[12px] min-[961px]:mt-[28px]"
          >
            书中的训练目标：读一遍，理解句子的整体意思。
          </p>
        </div>
        <aside
          class="reading-book-panel [border:1px_solid_#709280] gap-x-[23px] grid grid-cols-[86px_1fr] max-w-[none] pb-[20px] pl-[20px] pr-[20px] pt-[20px] gap-y-[14px] min-[701px]:gap-x-[unset] min-[701px]:[display:unset] min-[701px]:grid-cols-[unset] min-[701px]:max-w-[470px] min-[701px]:gap-y-[unset] min-[1201px]:pb-[24px] min-[1201px]:pl-[27px] min-[1201px]:pr-[27px] min-[1201px]:pt-[22px]"
        >
          <div
            class="reading-panel-top [color:#dae7d9] gap-x-[20px] flex text-[10px] [grid-column:1/-1] justify-between tracking-[.05em] gap-y-[20px] min-[701px]:text-[9px] min-[701px]:[grid-column:unset] min-[961px]:text-[11px]"
          >
            <span>培养正确的英文阅读习惯</span>
            <span>01—04</span>
          </div>
          <div
            class="reading-book-stage items-center [align-self:center] flex [grid-row:2] h-auto justify-center mb-0 ml-0 mr-0 mt-0 relative min-[701px]:[align-self:unset] min-[701px]:[grid-row:unset] min-[701px]:h-[230px] min-[701px]:mb-[20px] min-[701px]:mt-[24px] min-[961px]:h-[270px]"
          >
            <img
              alt="《8天教你像读中文一样读英文》书封"
              class="[box-shadow:6px_6px_0_#173f34] block h-[122px] max-w-[100%] [transform:rotate(-6deg)] w-auto min-[701px]:[box-shadow:12px_12px_0_#173f34] min-[701px]:h-[220px] min-[961px]:h-[265px]"
              height="578"
              loading="eager"
              src="/assets/images/reading/reading-book.png"
              width="400"
            />
            <span
              class="reading-sticker items-center [background:var(--yellow)] rounded-full bottom-[13px] [color:var(--ink)] hidden flex-col text-[12px] h-[82px] justify-center leading-[1.5] absolute right-[-8px] [transform:rotate(8deg)] w-[82px] min-[701px]:flex min-[961px]:text-[14px] min-[961px]:h-[104px] min-[961px]:right-0 min-[961px]:w-[104px]"
              >顺着读<br />
              <strong class="text-[15px] min-[961px]:text-[18px]"
                >读出意思</strong
              >
              <span aria-hidden="true" class="text-[22px]">↗</span>
            </span>
          </div>
          <div
            class="reading-panel-bottom [align-self:center] [border:0] [border-top:1px_solid_#709280] pb-0 pl-0 pr-0 pt-0 min-[701px]:[align-self:unset] min-[701px]:[border:unset] min-[701px]:pb-[unset] min-[701px]:pl-[unset] min-[701px]:pr-[unset] min-[701px]:pt-[20px]"
          >
            <strong
              class="block text-[14px] leading-[1.7] min-[701px]:[display:unset] min-[701px]:leading-[unset] min-[961px]:text-[17px]"
              >语境、断点、加词、语序。</strong
            >
            <p
              class="[color:#d3e1d2] text-[10px] leading-[1.9] mb-0 ml-0 mr-0 mt-[8px]"
            >
              本页按照书中第一部分的方法展开。<br
                class="hidden min-[701px]:[display:unset]"
              />讲解与练习使用书中例句。
            </p>
          </div>
        </aside>
      </div>
    </section>
    <nav aria-label="本页内容" class="page-route [background:var(--sage)]">
      <div
        class="wrap route-grid gap-x-0 grid grid-cols-[repeat(3,1fr)] mb-auto ml-auto mr-auto mt-auto pb-[16px] pl-[10px] pr-[10px] pt-[16px] gap-y-0 w-full min-[701px]:gap-x-[20px] min-[701px]:pb-[23px] min-[701px]:pl-0 min-[701px]:pr-0 min-[701px]:pt-[23px] min-[701px]:gap-y-[20px] min-[701px]:w-[calc(100%_-_64px)] min-[961px]:gap-x-[32px] min-[961px]:gap-y-[32px] min-[1201px]:w-[min(1280px,calc(100%_-_112px))]"
      >
        <a
          class="[-webkit-tap-highlight-color:transparent] items-center [color:inherit] gap-x-[4px] flex flex-col text-[11px] font-semibold justify-center leading-[1.6] min-h-[52px] gap-y-[4px] no-underline min-[701px]:gap-x-[12px] min-[701px]:[flex-direction:unset] min-[701px]:text-[13px] min-[701px]:[justify-content:unset] min-[701px]:leading-[unset] min-[701px]:min-h-[44px] min-[701px]:gap-y-[12px] min-[961px]:gap-x-[20px] min-[961px]:text-[15px] min-[961px]:gap-y-[20px]"
          href="#methods"
        >
          <span
            class="[color:#52644f] text-[11px] font-normal min-[701px]:text-[13px]"
            >01</span
          >书中的四个方法
          <span
            aria-hidden="true"
            class="route-arrow [color:#52644f] hidden ml-auto min-[701px]:[display:unset]"
            >↘</span
          >
        </a>
        <a
          class="[-webkit-tap-highlight-color:transparent] items-center [border-left:1px_solid_#bac4b3] [color:inherit] gap-x-[4px] flex flex-col text-[11px] font-semibold justify-center leading-[1.6] min-h-[52px] pl-0 gap-y-[4px] no-underline min-[701px]:gap-x-[12px] min-[701px]:[flex-direction:unset] min-[701px]:text-[13px] min-[701px]:[justify-content:unset] min-[701px]:leading-[unset] min-[701px]:min-h-[44px] min-[701px]:pl-[22px] min-[701px]:gap-y-[12px] min-[961px]:gap-x-[20px] min-[961px]:text-[15px] min-[961px]:pl-[40px] min-[961px]:gap-y-[20px]"
          href="#try"
        >
          <span
            class="[color:#52644f] text-[11px] font-normal min-[701px]:text-[13px]"
            >02</span
          >跟着书中例句读
          <span
            aria-hidden="true"
            class="route-arrow [color:#52644f] hidden ml-auto min-[701px]:[display:unset]"
            >↘</span
          >
        </a>
        <a
          class="[-webkit-tap-highlight-color:transparent] items-center [border-left:1px_solid_#bac4b3] [color:inherit] gap-x-[4px] flex flex-col text-[11px] font-semibold justify-center leading-[1.6] min-h-[52px] pl-0 gap-y-[4px] no-underline min-[701px]:gap-x-[12px] min-[701px]:[flex-direction:unset] min-[701px]:text-[13px] min-[701px]:[justify-content:unset] min-[701px]:leading-[unset] min-[701px]:min-h-[44px] min-[701px]:pl-[22px] min-[701px]:gap-y-[12px] min-[961px]:gap-x-[20px] min-[961px]:text-[15px] min-[961px]:pl-[40px] min-[961px]:gap-y-[20px]"
          href="#watch"
        >
          <span
            class="[color:#52644f] text-[11px] font-normal min-[701px]:text-[13px]"
            >03</span
          >观看视频与共读
          <span
            aria-hidden="true"
            class="route-arrow [color:#52644f] hidden ml-auto min-[701px]:[display:unset]"
            >↘</span
          >
        </a>
      </div>
    </nav>
    <section
      class="section reading-methods bg-[var(--sage)] py-14 min-[701px]:py-[72px] min-[961px]:py-24"
      id="methods"
    >
      <div
        class="wrap mx-auto w-[calc(100%_-_40px)] min-[701px]:w-[calc(100%_-_64px)] min-[1201px]:w-[min(1280px,calc(100%_-_112px))]"
      >
        <div class="section-heading mb-8 min-[701px]:mb-12">
          <div class="eyebrow mb-5 text-xs font-semibold tracking-[.09em]">
            01 / 第二章 · 四个方面的阅读思维
          </div>
          <h2
            class="m-0 text-[29px] font-bold leading-[1.45] tracking-[-.045em] min-[701px]:text-[34px] min-[961px]:text-[38px]"
          >
            按照书中的方法，<br />改变阅读句子的习惯。
          </h2>
          <p
            class="mt-5 max-w-[760px] text-[15px] leading-[1.9] text-[var(--muted)]"
          >
            从句子的整体意思理解单词，把长句断开，必要时加词，并按照英文的语序接受信息。这四个方面在阅读中互相配合。
          </p>
        </div>
        <div
          class="reading-method-grid grid grid-cols-1 min-[701px]:grid-cols-2 min-[701px]:gap-x-10 min-[1201px]:gap-x-16"
        >
          <article
            v-for="(method, index) in readingContent.methods"
            :key="method.title"
            class="border-t border-[#aebda4] py-7"
          >
            <div
              class="method-heading flex justify-between gap-4 text-xs text-[#50614b]"
            >
              <span>0{{ index + 1 }}</span
              ><span>{{ method.source }}</span>
            </div>
            <h3
              class="mb-0 mt-5 text-[23px] font-bold tracking-[-.045em] min-[961px]:text-[26px]"
            >
              {{ method.title }}
            </h3>
            <p
              class="reading-example my-5 text-[22px] leading-[1.6] min-[961px]:text-[26px]"
              :class="{ 'font-[Georgia,serif]': method.english }"
              :lang="method.english ? 'en' : undefined"
            >
              {{ method.example }}
            </p>
            <p
              v-for="paragraph in method.paragraphs"
              :key="paragraph"
              class="my-3 text-sm leading-[1.9] text-[#4a5b47]"
            >
              {{ paragraph }}
            </p>
            <p
              class="method-takeaway mb-0 mt-5 text-xs font-semibold leading-[1.8]"
            >
              {{ method.takeaway }}
            </p>
          </article>
        </div>
      </div>
    </section>
    <ReadingHints />
    <section
      class="section reading-words py-14 min-[701px]:py-[72px] min-[961px]:py-24"
      id="words"
    >
      <div
        class="wrap mx-auto w-[calc(100%_-_40px)] min-[701px]:w-[calc(100%_-_64px)] min-[1201px]:w-[min(1280px,calc(100%_-_112px))]"
      >
        <div class="section-heading mb-8 min-[701px]:mb-12">
          <div class="eyebrow mb-5 text-xs font-semibold tracking-[.09em]">
            03 / 第二章 · 第一节
          </div>
          <h2
            class="m-0 text-[29px] font-bold leading-[1.45] tracking-[-.045em] min-[701px]:text-[34px] min-[961px]:text-[38px]"
          >
            养成带着生词<br />读句子的习惯。
          </h2>
          <p
            class="mt-5 max-w-[760px] text-[15px] leading-[1.9] text-[var(--muted)]"
          >
            书中强调，不要一见到生词就让注意力被它带走。把注意力放在认识的内容上，从句子的整体意思出发。对于不同词性的生词，书中给出以下处理办法。
          </p>
        </div>
        <div class="grid gap-7 min-[701px]:grid-cols-2 min-[961px]:grid-cols-4">
          <article
            v-for="word in readingContent.unfamiliarWords"
            :key="word.title"
            class="border-t border-[#bac5af] pt-5"
          >
            <h3 class="m-0 text-xl font-semibold">{{ word.title }}</h3>
            <p class="mb-0 mt-4 text-sm leading-[1.9] text-[var(--muted)]">
              {{ word.text }}
            </p>
          </article>
        </div>
      </div>
    </section>
    <section
      class="section reading-routine bg-[var(--sage)] py-14 min-[701px]:py-[72px] min-[961px]:py-24"
      id="routine"
    >
      <div
        class="wrap mx-auto w-[calc(100%_-_40px)] min-[701px]:w-[calc(100%_-_64px)] min-[1201px]:w-[min(1280px,calc(100%_-_112px))]"
      >
        <div class="section-heading mb-8 min-[701px]:mb-12">
          <div class="eyebrow mb-5 text-xs font-semibold tracking-[.09em]">
            04 / 第三章 · 培养正确阅读习惯的练习步骤
          </div>
          <h2
            class="m-0 text-[29px] font-bold leading-[1.45] tracking-[-.045em] min-[701px]:text-[34px] min-[961px]:text-[38px]"
          >
            拿到一句话，<br />按照书中的步骤练习。
          </h2>
          <p
            class="mt-5 max-w-[760px] text-[15px] leading-[1.9] text-[var(--muted)]"
          >
            四项技巧需要在实际阅读中配合使用。第三章按以下顺序，把它们放进同一句话中训练。
          </p>
        </div>
        <ol
          class="reading-loop m-0 grid list-none gap-7 p-0 min-[701px]:grid-cols-2 min-[961px]:grid-cols-4"
        >
          <li
            v-for="(step, index) in readingContent.training"
            :key="step.title"
            class="border-t border-[#aebda4] pt-5"
          >
            <span class="font-[Georgia,serif] text-[32px] text-[#52644f]"
              >0{{ index + 1 }}</span
            >
            <h3 class="my-4 text-xl font-semibold leading-[1.5]">
              {{ step.title }}
            </h3>
            <p class="m-0 text-sm leading-[1.9] text-[var(--muted)]">
              {{ step.text }}
            </p>
          </li>
        </ol>
        <div class="mt-10 border-t border-[#aebda4] pt-6">
          <h3 class="m-0 text-xl font-semibold">再比较容易产生的误解</h3>
          <p
            class="mb-0 mt-3 max-w-[900px] text-sm leading-[1.9] text-[var(--muted)]"
          >
            书中的例句分析还会比较三种情况：单词在句中的意思与容易误译的意思；语序错误带来的理解错误；整句话容易产生的错误理解。
          </p>
        </div>
        <details class="mt-6 border-t border-[#aebda4] pt-2">
          <summary class="cursor-pointer py-4 text-sm font-semibold">
            书中如何安排整本书的练习？
          </summary>
          <p class="mb-0 text-sm leading-[1.9] text-[var(--muted)]">
            书中建议熟悉阅读技巧后，每天选 20 句：10 句参照分析过程，另 10
            句自己模仿练习，再查看书中的分析。用大约 10 天完成全书 200
            句的训练，时间允许时至少重复三遍。遇到阅读障碍时，重新回顾方法。
          </p>
          <p class="mb-2 mt-3 text-xs leading-[1.8] text-[var(--muted)]">
            这里说明的是书中对全书练习的安排；本页展示下方选取的 5 条书中例句。
          </p>
        </details>
      </div>
    </section>
    <ReadingExercises />
    <section
      class="section reading-videos [background:#ecefe3] pb-[56px] pl-0 pr-0 pt-[56px] min-[701px]:pb-[72px] min-[701px]:pt-[72px] min-[961px]:pb-[96px] min-[961px]:pt-[96px]"
      id="watch"
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
              06 / 阅读方法视频
            </div>
            <h2
              class="text-[29px] font-bold tracking-[-.045em] leading-[1.45] mb-0 ml-0 mr-0 mt-0 max-w-[760px] min-[701px]:text-[34px] min-[701px]:leading-[1.4] min-[961px]:text-[38px]"
            >
              跟着视频，<br />阅读书中的方法。
            </h2>
          </div>
          <p
            class="section-intro [color:var(--muted)] text-[15px] leading-[1.9] mb-0 ml-0 mr-0 mt-[18px] max-w-[640px] min-[701px]:text-[16px] min-[701px]:mt-[24px] min-[961px]:mt-0 min-[961px]:max-w-[330px] min-[1201px]:max-w-[380px]"
          >
            4 集方法视频，从阅读习惯到具体技巧。<br />点击卡片，前往 Bilibili
            观看。
          </p>
        </div>
        <div
          class="video-grid reading-video-grid gap-x-[30px] grid grid-cols-[1fr] gap-y-[30px] min-[701px]:gap-x-[25px] min-[701px]:grid-cols-[1fr_1fr] min-[961px]:gap-x-[19px] min-[961px]:grid-cols-[repeat(4,minmax(0,1fr))] min-[961px]:gap-y-[19px] min-[1201px]:gap-x-[24px] min-[1201px]:gap-y-[24px]"
        >
          <article class="video-card min-w-0">
            <a
              class="video-link [-webkit-tap-highlight-color:transparent] [color:inherit] block no-underline"
              href="https://www.bilibili.com/video/BV1ZeNu6BExR/"
              rel="noopener noreferrer"
              target="_blank"
              title="一本英语阅读方法的绝版好书 ｜ 8天，教你像读中文一样读英文 ｜ 开篇（在新标签页打开 Bilibili）"
            >
              <div
                class="video-thumb [aspect-ratio:16/9] [background:#e6e7d9] [border:1px_solid_#e0ded2] rounded-[6px] overflow-hidden relative min-[601px]:rounded-[8px]"
              >
                <UiImage
                  alt="一本英语阅读方法的绝版好书 ｜ 8天，教你像读中文一样读英文 ｜ 开篇 · 视频封面"
                  class="block h-full max-w-[100%] object-cover [transition:transform_.25s] w-full"
                  decoding="async"
                  fallback="/assets/images/reading/reading-book.png"
                  loading="lazy"
                  referrerpolicy="no-referrer"
                  src="https://i1.hdslb.com/bfs/archive/41c61babbad637dd9dfc044c812c9cab36ebc394.jpg"
                />
                <span
                  aria-hidden="true"
                  class="play-mark [background:#f7f3ebf2] rounded-full [color:var(--ink)] grid text-[11px] h-[32px] pl-[2px] place-items-center absolute right-[14px] top-[13px] [transition:background_.2s,transform_.2s] w-[32px]"
                  >▶</span
                >
                <span
                  class="duration [background:#172820dc] rounded-[4px] bottom-[8px] text-white text-[11px] [font-variant-numeric:tabular-nums] pb-[2px] pl-[7px] pr-[7px] pt-[2px] absolute right-[9px]"
                  >08:48</span
                >
              </div>
              <div
                class="video-topic [color:#5c7160] text-[11px] leading-[1.65] mb-[6px] ml-0 mr-0 mt-[17px] min-[701px]:text-[10px]"
              >
                01 / 开篇 · 重新认识阅读
              </div>
              <h3
                class="[-webkit-box-orient:vertical] [-webkit-line-clamp:3] [display:-webkit-box] text-[17px] font-semibold tracking-[-.018em] leading-[1.65] mb-0 ml-0 mr-0 mt-0 min-h-0 overflow-hidden min-[701px]:min-h-[56px] min-[961px]:text-[15px] min-[961px]:min-h-[75px]"
              >
                一本英语阅读方法的绝版好书 ｜ 8天，教你像读中文一样读英文 ｜
                开篇
              </h3>
              <span
                class="watch-label items-center [color:#566154] gap-x-[9px] flex text-[11px] mt-[15px] gap-y-[9px]"
                >在 Bilibili 观看 ↗</span
              >
            </a>
          </article>
          <article class="video-card min-w-0">
            <a
              class="video-link [-webkit-tap-highlight-color:transparent] [color:inherit] block no-underline"
              href="https://www.bilibili.com/video/BV1sxgy68ENf/"
              rel="noopener noreferrer"
              target="_blank"
              title="为什么读中文可以一目十行，而英语不可以？｜ 8 天教你像读中文一样读英文（在新标签页打开 Bilibili）"
            >
              <div
                class="video-thumb [aspect-ratio:16/9] [background:#e6e7d9] [border:1px_solid_#e0ded2] rounded-[6px] overflow-hidden relative min-[601px]:rounded-[8px]"
              >
                <UiImage
                  alt="为什么读中文可以一目十行，而英语不可以？｜ 8 天教你像读中文一样读英文 · 视频封面"
                  class="block h-full max-w-[100%] object-cover [transition:transform_.25s] w-full"
                  decoding="async"
                  fallback="/assets/images/reading/reading-book.png"
                  loading="lazy"
                  referrerpolicy="no-referrer"
                  src="https://i0.hdslb.com/bfs/archive/2ab78c0b18961920b1c80f9c0f566ec5dd016c74.jpg"
                />
                <span
                  aria-hidden="true"
                  class="play-mark [background:#f7f3ebf2] rounded-full [color:var(--ink)] grid text-[11px] h-[32px] pl-[2px] place-items-center absolute right-[14px] top-[13px] [transition:background_.2s,transform_.2s] w-[32px]"
                  >▶</span
                >
                <span
                  class="duration [background:#172820dc] rounded-[4px] bottom-[8px] text-white text-[11px] [font-variant-numeric:tabular-nums] pb-[2px] pl-[7px] pr-[7px] pt-[2px] absolute right-[9px]"
                  >09:50</span
                >
              </div>
              <div
                class="video-topic [color:#5c7160] text-[11px] leading-[1.65] mb-[6px] ml-0 mr-0 mt-[17px] min-[701px]:text-[10px]"
              >
                02 / 从逐词翻译到理解
              </div>
              <h3
                class="[-webkit-box-orient:vertical] [-webkit-line-clamp:3] [display:-webkit-box] text-[17px] font-semibold tracking-[-.018em] leading-[1.65] mb-0 ml-0 mr-0 mt-0 min-h-0 overflow-hidden min-[701px]:min-h-[56px] min-[961px]:text-[15px] min-[961px]:min-h-[75px]"
              >
                为什么读中文可以一目十行，而英语不可以？｜ 8
                天教你像读中文一样读英文
              </h3>
              <span
                class="watch-label items-center [color:#566154] gap-x-[9px] flex text-[11px] mt-[15px] gap-y-[9px]"
                >在 Bilibili 观看 ↗</span
              >
            </a>
          </article>
          <article class="video-card min-w-0">
            <a
              class="video-link [-webkit-tap-highlight-color:transparent] [color:inherit] block no-underline"
              href="https://www.bilibili.com/video/BV1ypg96pEkT/"
              rel="noopener noreferrer"
              target="_blank"
              title="掌握怎样根据“语境”“猜词”的技能，英文阅读能力立刻提升！！！（在新标签页打开 Bilibili）"
            >
              <div
                class="video-thumb [aspect-ratio:16/9] [background:#e6e7d9] [border:1px_solid_#e0ded2] rounded-[6px] overflow-hidden relative min-[601px]:rounded-[8px]"
              >
                <UiImage
                  alt="掌握怎样根据“语境”“猜词”的技能，英文阅读能力立刻提升！！！ · 视频封面"
                  class="block h-full max-w-[100%] object-cover [transition:transform_.25s] w-full"
                  decoding="async"
                  fallback="/assets/images/reading/reading-book.png"
                  loading="lazy"
                  referrerpolicy="no-referrer"
                  src="https://i1.hdslb.com/bfs/archive/e2f8cb85d1c593b12681dd4f4381552cc2681f59.jpg"
                />
                <span
                  aria-hidden="true"
                  class="play-mark [background:#f7f3ebf2] rounded-full [color:var(--ink)] grid text-[11px] h-[32px] pl-[2px] place-items-center absolute right-[14px] top-[13px] [transition:background_.2s,transform_.2s] w-[32px]"
                  >▶</span
                >
                <span
                  class="duration [background:#172820dc] rounded-[4px] bottom-[8px] text-white text-[11px] [font-variant-numeric:tabular-nums] pb-[2px] pl-[7px] pr-[7px] pt-[2px] absolute right-[9px]"
                  >15:06</span
                >
              </div>
              <div
                class="video-topic [color:#5c7160] text-[11px] leading-[1.65] mb-[6px] ml-0 mr-0 mt-[17px] min-[701px]:text-[10px]"
              >
                03 / 结合语境，判断词义
              </div>
              <h3
                class="[-webkit-box-orient:vertical] [-webkit-line-clamp:3] [display:-webkit-box] text-[17px] font-semibold tracking-[-.018em] leading-[1.65] mb-0 ml-0 mr-0 mt-0 min-h-0 overflow-hidden min-[701px]:min-h-[56px] min-[961px]:text-[15px] min-[961px]:min-h-[75px]"
              >
                掌握怎样根据“语境”“猜词”的技能，英文阅读能力立刻提升！！！
              </h3>
              <span
                class="watch-label items-center [color:#566154] gap-x-[9px] flex text-[11px] mt-[15px] gap-y-[9px]"
                >在 Bilibili 观看 ↗</span
              >
            </a>
          </article>
          <article class="video-card min-w-0">
            <a
              class="video-link [-webkit-tap-highlight-color:transparent] [color:inherit] block no-underline"
              href="https://www.bilibili.com/video/BV1Psgg6AEZn/"
              rel="noopener noreferrer"
              target="_blank"
              title="英语阅读的三大核心技巧：断句、加词、接受语序（在新标签页打开 Bilibili）"
            >
              <div
                class="video-thumb [aspect-ratio:16/9] [background:#e6e7d9] [border:1px_solid_#e0ded2] rounded-[6px] overflow-hidden relative min-[601px]:rounded-[8px]"
              >
                <UiImage
                  alt="英语阅读的三大核心技巧：断句、加词、接受语序 · 视频封面"
                  class="block h-full max-w-[100%] object-cover [transition:transform_.25s] w-full"
                  decoding="async"
                  fallback="/assets/images/reading/reading-book.png"
                  loading="lazy"
                  referrerpolicy="no-referrer"
                  src="https://i2.hdslb.com/bfs/archive/c3584689ab019cc7714ed044403997e6ce839e11.jpg"
                />
                <span
                  aria-hidden="true"
                  class="play-mark [background:#f7f3ebf2] rounded-full [color:var(--ink)] grid text-[11px] h-[32px] pl-[2px] place-items-center absolute right-[14px] top-[13px] [transition:background_.2s,transform_.2s] w-[32px]"
                  >▶</span
                >
                <span
                  class="duration [background:#172820dc] rounded-[4px] bottom-[8px] text-white text-[11px] [font-variant-numeric:tabular-nums] pb-[2px] pl-[7px] pr-[7px] pt-[2px] absolute right-[9px]"
                  >11:55</span
                >
              </div>
              <div
                class="video-topic [color:#5c7160] text-[11px] leading-[1.65] mb-[6px] ml-0 mr-0 mt-[17px] min-[701px]:text-[10px]"
              >
                04 / 断句、加词与语序
              </div>
              <h3
                class="[-webkit-box-orient:vertical] [-webkit-line-clamp:3] [display:-webkit-box] text-[17px] font-semibold tracking-[-.018em] leading-[1.65] mb-0 ml-0 mr-0 mt-0 min-h-0 overflow-hidden min-[701px]:min-h-[56px] min-[961px]:text-[15px] min-[961px]:min-h-[75px]"
              >
                英语阅读的三大核心技巧：断句、加词、接受语序
              </h3>
              <span
                class="watch-label items-center [color:#566154] gap-x-[9px] flex text-[11px] mt-[15px] gap-y-[9px]"
                >在 Bilibili 观看 ↗</span
              >
            </a>
          </article>
        </div>
      </div>
    </section>
    <section
      class="prince-invitation [background:var(--green)] text-white pb-[49px] pl-0 pr-0 pt-[45px] min-[701px]:pb-[75px] min-[701px]:pt-[75px]"
      id="prince"
    >
      <div
        class="wrap prince-invitation-grid items-center gap-x-[35px] grid grid-cols-[1fr] mb-auto ml-auto mr-auto mt-auto gap-y-[35px] w-[calc(100%_-_40px)] min-[701px]:grid-cols-[1.15fr_1fr] min-[701px]:w-[calc(100%_-_64px)] min-[961px]:gap-x-[55px] min-[961px]:gap-y-[55px] min-[1201px]:gap-x-[85px] min-[1201px]:gap-y-[85px] min-[1201px]:w-[min(1280px,calc(100%_-_112px))]"
      >
        <div>
          <span
            class="ongoing-tag [border:1px_solid_#91ac8c] rounded-[30px] [color:#e6efdf] inline-block text-[11px] pb-[6px] pl-[12px] pr-[12px] pt-[6px]"
            >连载中 · 已收录 7 集</span
          >
          <div
            class="prince-en-title [color:#f4e3a2] [font-family:Georgia,serif] text-[59px] [font-style:normal] tracking-[-.04em] leading-[1.02] mb-[22px] ml-0 mr-0 mt-[22px] min-[701px]:text-[58px] min-[701px]:mb-[27px] min-[701px]:mt-[25px] min-[961px]:text-[66px]"
            lang="en"
          >
            The Little<br />
            <em class="font-normal">Prince.</em>
          </div>
          <h2
            class="text-[25px] font-bold tracking-[-.045em] leading-[1.4] mb-0 ml-0 mr-0 mt-0 min-[961px]:text-[29px]"
          >
            一起读进，小王子的世界。
          </h2>
          <p
            class="[color:#dce9d8] text-[13px] leading-[1.9] mb-[23px] ml-0 mr-0 mt-[16px] min-[701px]:text-[14px] min-[701px]:mb-[26px] min-[701px]:mt-[18px]"
          >
            从开篇导读到每天的一段英文。<br />进入共读专栏，查看完整的视频目录。
          </p>
          <NuxtLink
            class="btn btn-yellow [-webkit-tap-highlight-color:transparent] items-center [background:var(--yellow)] rounded-full [color:var(--ink)] gap-x-[28px] inline-flex text-[13px] font-[650] justify-center min-h-[50px] pb-[12px] pl-[22px] pr-[22px] pt-[12px] gap-y-[28px] no-underline [transition:background_.18s,transform_.18s] min-[701px]:text-[14px] min-[701px]:pb-[14px] min-[701px]:pl-[28px] min-[701px]:pr-[28px] min-[701px]:pt-[14px]"
            to="/little-prince"
            >进入《小王子》共读专栏 <span aria-hidden="true">↗</span>
          </NuxtLink>
        </div>
        <NuxtLink
          aria-label="查看小王子共读专栏的全部 7 集"
          class="prince-feature [-webkit-tap-highlight-color:transparent] [background:var(--paper)] [box-shadow:7px_7px_0_#173f34] [color:var(--ink)] block mr-[7px] no-underline [transform:rotate(1deg)] [transition:transform_.2s] min-[701px]:[box-shadow:12px_12px_0_#173f34] min-[701px]:mr-[unset] min-[701px]:[transform:rotate(2deg)]"
          to="/little-prince"
        >
          <UiImage
            alt="只需要 1000 词的基础，和你一起读小王子：开篇视频封面"
            class="[aspect-ratio:16/9] block max-w-[100%] object-cover w-full"
            fallback="/assets/images/reading/little-prince-placeholder.svg"
            loading="lazy"
            referrerpolicy="no-referrer"
            src="https://i0.hdslb.com/bfs/archive/d46078c23abbb8f90fbdc290320f2db78565c0ec.jpg"
          />
          <div
            class="gap-x-[11px] flex flex-col pb-[22px] pl-[22px] pr-[22px] pt-[22px] gap-y-[11px] min-[701px]:gap-x-[14px] min-[701px]:pb-[23px] min-[701px]:pl-[23px] min-[701px]:pr-[23px] min-[701px]:pt-[23px] min-[701px]:gap-y-[14px] min-[961px]:pb-[28px] min-[961px]:pl-[28px] min-[961px]:pr-[28px] min-[961px]:pt-[28px]"
          >
            <span class="text-[11px]">开篇导读 + DAY 01—06</span>
            <strong
              class="text-[24px] min-[701px]:text-[23px] min-[961px]:text-[27px]"
              >从第一段，到下一段。</strong
            >
            <span class="text-[11px]">查看共读目录 ↗</span>
          </div>
        </NuxtLink>
      </div>
    </section>
    <section
      class="section reading-source py-14 min-[701px]:py-[72px]"
      id="sources"
    >
      <div
        class="wrap mx-auto w-[calc(100%_-_40px)] min-[701px]:w-[calc(100%_-_64px)] min-[1201px]:w-[min(1280px,calc(100%_-_112px))]"
      >
        <div class="flex items-start gap-6">
          <img
            alt="《8天教你像读中文一样读英文》书封"
            class="h-auto w-[70px] shrink-0 shadow-[4px_4px_0_#e4e3d6]"
            height="101"
            width="70"
            loading="lazy"
            src="/assets/images/reading/reading-book.png"
          />
          <div>
            <h2 class="m-0 text-2xl font-bold">方法来源</h2>
            <p class="mb-0 mt-3 text-sm leading-[1.9]">
              《8天教你像读中文一样读英文》第一部分：培养正确的英文阅读习惯。
            </p>
            <p
              class="mb-0 mt-2 max-w-[800px] text-xs leading-[1.9] text-[var(--muted)]"
            >
              本页按项目保存的三章原书摘录整理：第一章的阅读习惯，第二章的语境理解、断点、加词与语序，第三章的练习步骤。示范和练习均标明所在章节，例句编号沿用摘录。
            </p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
