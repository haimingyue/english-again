<script setup lang="ts">
const { openImage } = useImagePreview();
usePageSeo(
  "词汇与记忆",
  "结合 COCA 词频、个人语境与阅读观影，建立词汇联系，下载词汇、短语和生词本 Anki 卡组。",
);
definePageMeta({ alias: "/vocabulary.html" });
</script>

<template>
  <main data-page="vocabulary" id="main" tabindex="-1">
    <section
      class="hero vocab-hero [background:var(--green)] text-white pb-[46px] pl-0 pr-0 pt-[40px] min-[701px]:pb-[74px] min-[701px]:pt-[70px]"
    >
      <div
        class="wrap vocab-hero-grid items-center gap-x-[32px] grid grid-cols-[1fr] mb-auto ml-auto mr-auto mt-auto gap-y-[32px] w-[calc(100%_-_40px)] min-[701px]:gap-x-[38px] min-[701px]:gap-y-[38px] min-[701px]:w-[calc(100%_-_64px)] min-[961px]:gap-x-[40px] min-[961px]:grid-cols-[1fr_1.1fr] min-[961px]:gap-y-[40px] min-[1201px]:gap-x-[64px] min-[1201px]:gap-y-[64px] min-[1201px]:w-[min(1280px,calc(100%_-_112px))]"
      >
        <div>
          <div
            class="eyebrow items-center [color:#f7df75] gap-x-[12px] flex text-[12px] font-[650] tracking-[.09em] mb-[20px] gap-y-[12px] min-[701px]:text-[13px] min-[701px]:mb-[24px]"
          >
            <span
              aria-hidden="true"
              class="tiny-line bg-current h-[2px] w-[22px]"
            >
            </span
            >COCA 30000 · 我的词汇库
          </div>
          <h1
            class="text-[42px] font-[750] tracking-[-.045em] leading-[1.35] mb-0 ml-0 mr-0 mt-0 max-w-[680px] min-[701px]:text-[52px] min-[701px]:leading-[1.3] min-[1201px]:text-[60px]"
          >
            每一次遇见，<br />都让一个词<br
              class="block min-[701px]:hidden min-[961px]:[display:unset]"
            />
            <span class="design-underline relative whitespace-nowrap"
              >更熟悉一点。</span
            >
          </h1>
          <p
            class="hero-lede [color:#dce9df] text-[15px] leading-[1.9] mb-[25px] ml-0 mr-0 mt-[22px] min-[701px]:text-[16px] min-[701px]:mb-[34px] min-[701px]:mt-[30px] min-[1201px]:text-[17px]"
          >
            书里读到的，电影里听到的，网页上查到的。<br
              class="hidden min-[701px]:[display:unset]"
            />把这些相遇，留在同一个词条里。
          </p>
          <div
            class="actions items-center gap-x-[24px] flex flex-wrap gap-y-[14px] min-[701px]:gap-x-[20px] min-[701px]:gap-y-[20px] min-[1201px]:gap-x-[26px] min-[1201px]:gap-y-[26px]"
          >
            <a
              class="btn btn-yellow [-webkit-tap-highlight-color:transparent] items-center [background:var(--yellow)] rounded-full [color:var(--ink)] gap-x-[28px] inline-flex text-[14px] font-[650] justify-center min-h-[52px] pb-[14px] pl-[23px] pr-[23px] pt-[14px] gap-y-[28px] no-underline [transition:background_.18s,transform_.18s] min-[701px]:min-h-[50px] min-[961px]:min-h-[56px] min-[1201px]:text-[16px] min-[1201px]:pl-[28px] min-[1201px]:pr-[28px]"
              href="#download"
              >下载 COCA 词汇卡组 ↓</a
            >
            <a
              class="text-link light-link [-webkit-tap-highlight-color:transparent] items-center bg-transparent text-white gap-x-[18px] inline-flex text-[13px] font-[650] min-h-[44px] pb-0 pl-0 pr-0 pt-0 gap-y-[18px] no-underline min-[1201px]:text-[15px]"
              href="#workflow"
              >看看怎么积累 ↗</a
            >
          </div>
          <div
            class="hero-note items-center [color:#d5e2d9] gap-x-[9px] flex text-[11px] mt-[24px] gap-y-[9px] min-[961px]:text-[12px] min-[961px]:mt-[40px]"
          >
            <span
              aria-hidden="true"
              class="note-dot bg-current rounded-full inline-block shrink-0 h-[6px] w-[6px]"
            >
            </span
            >高频词打底 · 真实语境连接 · Anki 间隔复习
          </div>
        </div>
        <figure
          class="vocab-map [background:var(--paper)] rounded-[4px] [box-shadow:7px_7px_0_#173f34] mb-0 ml-0 mr-0 mt-0 max-w-[700px] pb-[14px] pl-[6px] pr-[6px] pt-[6px] min-[701px]:[box-shadow:10px_10px_0_#173f34] min-[701px]:pb-[20px] min-[701px]:pl-[12px] min-[701px]:pr-[12px] min-[701px]:pt-[12px] min-[961px]:max-w-[unset]"
        >
          <img
            alt="阅读、影视、网页中遇到的词，通过查找词条和补充语境汇入 COCA 30000 词汇库，再回到 inquiry、reveal、nasty 等个人卡片"
            class="[aspect-ratio:3/2] block h-auto max-w-[100%] object-contain w-full"
            height="1024"
            loading="eager"
            src="/assets/images/vocabulary/word-library.png"
            width="1536"
          />
          <figcaption
            class="[color:#586254] text-[10px] mt-[9px] pb-0 pl-[8px] pr-[8px] pt-0 text-center min-[701px]:text-[12px] min-[701px]:pb-[unset] min-[701px]:pl-[unset] min-[701px]:pr-[unset] min-[701px]:pt-[unset]"
          >
            把分散的相遇，变成可以再次回想的记忆。
          </figcaption>
        </figure>
      </div>
    </section>
    <nav aria-label="本页内容" class="page-route [background:var(--sage)]">
      <div
        class="wrap route-grid gap-x-0 grid grid-cols-[repeat(3,1fr)] mb-auto ml-auto mr-auto mt-auto pb-[16px] pl-[10px] pr-[10px] pt-[16px] gap-y-0 w-full min-[701px]:gap-x-[20px] min-[701px]:pb-[23px] min-[701px]:pl-0 min-[701px]:pr-0 min-[701px]:pt-[23px] min-[701px]:gap-y-[20px] min-[701px]:w-[calc(100%_-_64px)] min-[961px]:gap-x-[32px] min-[961px]:gap-y-[32px] min-[1201px]:w-[min(1280px,calc(100%_-_112px))]"
      >
        <a
          class="[-webkit-tap-highlight-color:transparent] items-center [color:inherit] gap-x-[4px] flex flex-col text-[11px] font-semibold justify-center leading-[1.6] min-h-[52px] gap-y-[4px] no-underline min-[701px]:gap-x-[12px] min-[701px]:[flex-direction:unset] min-[701px]:text-[13px] min-[701px]:[justify-content:unset] min-[701px]:leading-[unset] min-[701px]:min-h-[44px] min-[701px]:gap-y-[12px] min-[961px]:gap-x-[20px] min-[961px]:text-[15px] min-[961px]:gap-y-[20px]"
          href="#coca"
        >
          <span
            class="[color:#52644f] text-[11px] font-normal min-[701px]:text-[13px]"
            >01</span
          >为什么选 COCA
          <span
            class="route-arrow [color:#52644f] hidden ml-auto min-[701px]:[display:unset]"
            >↘</span
          >
        </a>
        <a
          class="[-webkit-tap-highlight-color:transparent] items-center [border-left:1px_solid_#bac4b3] [color:inherit] gap-x-[4px] flex flex-col text-[11px] font-semibold justify-center leading-[1.6] min-h-[52px] pl-0 gap-y-[4px] no-underline min-[701px]:gap-x-[12px] min-[701px]:[flex-direction:unset] min-[701px]:text-[13px] min-[701px]:[justify-content:unset] min-[701px]:leading-[unset] min-[701px]:min-h-[44px] min-[701px]:pl-[22px] min-[701px]:gap-y-[12px] min-[961px]:gap-x-[20px] min-[961px]:text-[15px] min-[961px]:pl-[40px] min-[961px]:gap-y-[20px]"
          href="#cards"
        >
          <span
            class="[color:#52644f] text-[11px] font-normal min-[701px]:text-[13px]"
            >02</span
          >语境怎样留在卡片里
          <span
            class="route-arrow [color:#52644f] hidden ml-auto min-[701px]:[display:unset]"
            >↘</span
          >
        </a>
        <a
          class="[-webkit-tap-highlight-color:transparent] items-center [border-left:1px_solid_#bac4b3] [color:inherit] gap-x-[4px] flex flex-col text-[11px] font-semibold justify-center leading-[1.6] min-h-[52px] pl-0 gap-y-[4px] no-underline min-[701px]:gap-x-[12px] min-[701px]:[flex-direction:unset] min-[701px]:text-[13px] min-[701px]:[justify-content:unset] min-[701px]:leading-[unset] min-[701px]:min-h-[44px] min-[701px]:pl-[22px] min-[701px]:gap-y-[12px] min-[961px]:gap-x-[20px] min-[961px]:text-[15px] min-[961px]:pl-[40px] min-[961px]:gap-y-[20px]"
          href="#goals"
        >
          <span
            class="[color:#52644f] text-[11px] font-normal min-[701px]:text-[13px]"
            >03</span
          >词汇目标与实践
          <span
            class="route-arrow [color:#52644f] hidden ml-auto min-[701px]:[display:unset]"
            >↘</span
          >
        </a>
      </div>
    </nav>
    <section
      class="section pb-[56px] pl-0 pr-0 pt-[56px] min-[701px]:pb-[72px] min-[701px]:pt-[72px] min-[961px]:pb-[96px] min-[961px]:pt-[96px]"
      id="coca"
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
              先学常遇见的，再学自己需要的
            </div>
            <h2
              class="text-[31px] font-bold tracking-[-.045em] leading-[1.35] mb-0 ml-0 mr-0 mt-0 max-w-[760px] min-[701px]:text-[38px] min-[701px]:leading-[1.25] min-[1201px]:text-[44px]"
            >
              让真实英语，<br />帮你排学习的先后。
            </h2>
          </div>
          <p
            class="section-intro [color:var(--muted)] text-[15px] leading-[1.9] mb-0 ml-0 mr-0 mt-[18px] max-w-[640px] min-[701px]:text-[16px] min-[701px]:mt-[24px] min-[961px]:mt-0 min-[961px]:max-w-[330px] min-[1201px]:max-w-[380px]"
          >
            COCA
            是美国当代英语语料库。它从不同类型的真实材料中统计用词频率，为“接下来学哪个词”提供依据。
          </p>
        </div>
        <div
          class="coca-facts gap-x-[28px] grid grid-cols-[1fr] gap-y-[28px] min-[701px]:gap-x-[24px] min-[701px]:grid-cols-[repeat(3,1fr)] min-[701px]:gap-y-[24px] min-[961px]:gap-x-[40px] min-[961px]:gap-y-[40px]"
        >
          <article class="[border-top:1px_solid_#bfc6b8] pt-[22px]">
            <strong
              class="text-[43px] font-semibold tracking-[-.05em] min-[701px]:text-[40px] min-[961px]:text-[49px]"
              >10 亿</strong
            >
            <h3
              class="text-[23px] tracking-[-.045em] leading-[1.25] mb-[10px] ml-0 mr-0 mt-[10px] min-[701px]:text-[20px] min-[701px]:mb-[15px] min-[701px]:mt-[15px] min-[961px]:text-[23px]"
            >
              词次构成的语料
            </h3>
            <p
              class="[color:var(--muted)] text-[15px] leading-[1.9] mb-0 ml-0 mr-0 mt-0 min-[701px]:text-[14px] min-[961px]:text-[15px]"
            >
              来自 1990–2019
              年的英语材料。这里的“词次”是语料规模，不是要背的单词数量。
            </p>
          </article>
          <article class="[border-top:1px_solid_#bfc6b8] pt-[22px]">
            <strong
              class="text-[43px] font-semibold tracking-[-.05em] min-[701px]:text-[40px] min-[961px]:text-[49px]"
              >8 类</strong
            >
            <h3
              class="text-[23px] tracking-[-.045em] leading-[1.25] mb-[10px] ml-0 mr-0 mt-[10px] min-[701px]:text-[20px] min-[701px]:mb-[15px] min-[701px]:mt-[15px] min-[961px]:text-[23px]"
            >
              接近日常的使用场景
            </h3>
            <p
              class="[color:var(--muted)] text-[15px] leading-[1.9] mb-0 ml-0 mr-0 mt-0 min-[701px]:text-[14px] min-[961px]:text-[15px]"
            >
              口语、小说、杂志、报纸、学术文本、影视字幕、博客与网页，让词频不只来自一种材料。
            </p>
          </article>
          <article class="[border-top:1px_solid_#bfc6b8] pt-[22px]">
            <strong
              class="text-[35px] font-semibold tracking-[-.05em] leading-[1.5] min-[701px]:text-[29px] min-[701px]:leading-[1.9] min-[961px]:text-[39px]"
              >你的需要</strong
            >
            <h3
              class="text-[23px] tracking-[-.045em] leading-[1.25] mb-[10px] ml-0 mr-0 mt-[10px] min-[701px]:text-[20px] min-[701px]:mb-[15px] min-[701px]:mt-[15px] min-[961px]:text-[23px]"
            >
              决定下一步学什么
            </h3>
            <p
              class="[color:var(--muted)] text-[15px] leading-[1.9] mb-0 ml-0 mr-0 mt-0 min-[701px]:text-[14px] min-[961px]:text-[15px]"
            >
              先补常用词的缺口，再加入工作、兴趣中反复遇到的词。词频是参考，你的语境也很重要。
            </p>
          </article>
        </div>
        <div
          class="source-note items-start [border-top:1px_solid_var(--line)] [color:var(--muted)] gap-x-[14px] flex flex-wrap text-[11px] mt-[28px] pt-[20px] gap-y-[8px] min-[701px]:gap-x-[18px] min-[701px]:[flex-wrap:unset] min-[701px]:text-[12px] min-[701px]:mt-[44px] min-[701px]:pt-[22px] min-[701px]:gap-y-[18px]"
        >
          <span class="[color:var(--ink)] font-semibold whitespace-nowrap"
            >语料依据</span
          >
          <p
            class="flex-[1] mb-0 ml-0 mr-0 mt-0 min-w-[220px] min-[701px]:min-w-[unset]"
          >
            COCA
            的规模与体裁介绍；不同词表对词元、词形和词性的计数口径不同，卡片数不能直接当作个人词汇量。
          </p>
          <a
            class="[-webkit-tap-highlight-color:transparent] items-center [color:inherit] flex ml-auto mt-0 max-w-[none] min-h-[36px] underline [text-underline-offset:4px] whitespace-nowrap min-[701px]:ml-[unset] min-[701px]:mt-[-10px] min-[701px]:max-w-[230px] min-[701px]:min-h-[44px]"
            href="https://www.english-corpora.org/coca/help/tour.asp"
            rel="noopener noreferrer"
            target="_blank"
            >COCA 官方介绍 ↗</a
          >
        </div>
      </div>
    </section>
    <section
      class="section workflow [background:var(--sage)] pb-[56px] pl-0 pr-0 pt-[56px] min-[701px]:pb-[72px] min-[701px]:pt-[72px] min-[961px]:pb-[96px] min-[961px]:pt-[96px]"
      id="workflow"
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
              一个词条，装下不同的相遇
            </div>
            <h2
              class="text-[31px] font-bold tracking-[-.045em] leading-[1.35] mb-0 ml-0 mr-0 mt-0 max-w-[760px] min-[701px]:text-[38px] min-[701px]:leading-[1.25] min-[1201px]:text-[44px]"
            >
              有了底库，<br />再把你的经历放进去。
            </h2>
          </div>
          <p
            class="section-intro [color:var(--muted)] text-[15px] leading-[1.9] mb-0 ml-0 mr-0 mt-[18px] max-w-[640px] min-[701px]:text-[16px] min-[701px]:mt-[24px] min-[961px]:mt-0 min-[961px]:max-w-[330px] min-[1201px]:max-w-[380px]"
          >
            下载并导入 COCA
            卡组，就有了一套可以搜索、补充和复习的词汇底库。遇见新语境时，回到原词条继续积累。
          </p>
        </div>
        <div
          class="workflow-grid gap-x-[28px] grid grid-cols-[1fr] gap-y-[28px] min-[701px]:gap-x-[24px] min-[701px]:grid-cols-[repeat(3,1fr)] min-[701px]:gap-y-[24px] min-[961px]:gap-x-[40px] min-[961px]:gap-y-[40px]"
        >
          <article class="[border-top:1px_solid_#b3bfa9] pt-[20px]">
            <span
              class="step-number [color:#64755c] block text-[24px] mb-[11px] min-[701px]:text-[26px] min-[701px]:mb-[16px]"
              >01</span
            >
            <h3
              class="text-[23px] tracking-[-.045em] leading-[1.25] mb-0 ml-0 mr-0 mt-0 min-[701px]:text-[21px] min-[961px]:text-[24px]"
            >
              在内容里遇见它
            </h3>
            <p
              class="[color:#52634b] text-[15px] leading-[1.9] mb-0 ml-0 mr-0 mt-[12px] min-[701px]:text-[14px] min-[701px]:mt-[15px] min-[961px]:text-[15px]"
            >
              阅读、看剧或浏览网页时，留下值得学习的单词和原句，先弄懂它在这里的意思。
            </p>
          </article>
          <article class="[border-top:1px_solid_#b3bfa9] pt-[20px]">
            <span
              class="step-number [color:#64755c] block text-[24px] mb-[11px] min-[701px]:text-[26px] min-[701px]:mb-[16px]"
              >02</span
            >
            <h3
              class="text-[23px] tracking-[-.045em] leading-[1.25] mb-0 ml-0 mr-0 mt-0 min-[701px]:text-[21px] min-[961px]:text-[24px]"
            >
              找到词条，补充语境
            </h3>
            <p
              class="[color:#52634b] text-[15px] leading-[1.9] mb-0 ml-0 mr-0 mt-[12px] min-[701px]:text-[14px] min-[701px]:mt-[15px] min-[961px]:text-[15px]"
            >
              在配套阅读或观影工具的查词弹窗中，点击「发送到
              COCA」，把这次遇见的原句补进主卡例句。也可以在 Anki 中手动补充。
            </p>
          </article>
          <article class="[border-top:1px_solid_#b3bfa9] pt-[20px]">
            <span
              class="step-number [color:#64755c] block text-[24px] mb-[11px] min-[701px]:text-[26px] min-[701px]:mb-[16px]"
              >03</span
            >
            <h3
              class="text-[23px] tracking-[-.045em] leading-[1.25] mb-0 ml-0 mr-0 mt-0 min-[701px]:text-[21px] min-[961px]:text-[24px]"
            >
              回到同一个地方复习
            </h3>
            <p
              class="[color:#52634b] text-[15px] leading-[1.9] mb-0 ml-0 mr-0 mt-[12px] min-[701px]:text-[14px] min-[701px]:mt-[15px] min-[961px]:text-[15px]"
            >
              让词频、声音和自己的例句一起成为线索。底库没有的词，用生词本补充；固定搭配可以单独记。
            </p>
          </article>
        </div>
        <div
          class="workflow-note [border-top:1px_solid_#b3bfa9] gap-x-[12px] grid text-[13px] grid-cols-[1fr] mt-[30px] pt-[22px] gap-y-[12px] min-[701px]:text-[14px] min-[701px]:mt-[38px] min-[961px]:gap-x-[40px] min-[961px]:grid-cols-[1fr_1.65fr] min-[961px]:gap-y-[40px]"
        >
          <strong class="text-[15px] min-[701px]:text-[16px]"
            >从导入卡组开始，靠每一次补充长大。</strong
          >
          <p class="[color:#52634b] leading-[1.9] mb-0 ml-0 mr-0 mt-0">
            先导入 COCA 卡组，再通过配套工具的「发送到
            COCA」入口积累例句；底库之外的词可选择「发送到生词本」。仅下载卡组不会自动采集内容。
          </p>
        </div>
        <div
          aria-labelledby="capture-title"
          class="capture-examples [border-top:1px_solid_#b3bfa9] mt-[36px] pt-[30px] [scroll-margin-top:32px] min-[701px]:mt-[56px] min-[701px]:pt-[40px]"
          id="capture"
        >
          <div
            class="capture-heading [align-items:start] gap-x-[18px] flex flex-col justify-between mb-[26px] gap-y-[18px] min-[701px]:mb-[32px] min-[961px]:[align-items:end] min-[961px]:gap-x-[32px] min-[961px]:[flex-direction:unset] min-[961px]:gap-y-[32px]"
          >
            <div>
              <div
                class="eyebrow text-[12px] font-[650] tracking-[.09em] mb-[19px] min-[701px]:text-[13px] min-[701px]:mb-[24px]"
              >
                从这里，把相遇留下来
              </div>
              <h3
                class="text-[27px] tracking-[-.035em] leading-[1.45] mb-0 ml-0 mr-0 mt-[16px] min-[701px]:text-[32px]"
                id="capture-title"
              >
                阅读时、观影时，<br />都能发回同一个词汇库。
              </h3>
            </div>
            <p
              class="[color:#52634b] text-[15px] leading-[1.9] mb-0 ml-0 mr-0 mt-0"
            >
              打开单词弹窗，确认句中意思，<br
                class="hidden min-[961px]:[display:unset]"
              />在底部找到「发送到 COCA」。
            </p>
          </div>
          <div
            class="capture-grid gap-x-[32px] grid grid-cols-[1fr] gap-y-[32px] min-[701px]:gap-x-[24px] min-[701px]:grid-cols-[1fr_1fr] min-[701px]:gap-y-[24px] min-[961px]:gap-x-[32px] min-[961px]:gap-y-[32px]"
          >
            <article class="capture-example min-w-0">
              <div
                class="capture-label [color:#52634b] gap-x-[16px] flex text-[11px] justify-between mb-[14px] gap-y-[16px] min-[701px]:text-[12px]"
              >
                <span>01 / 阅读中</span>
                <span>The Little Prince</span>
              </div>
              <button
                @click="
                  openImage({
                    src: '/assets/images/vocabulary/reading-send.png',
                    alt: '小王子阅读工具中 understand 的查词弹窗，底部左侧橙色按钮为发送到 COCA，旁边为发送到生词本',
                    title: '阅读中 · 发送 understand 到 COCA',
                    caption:
                      '配套工具操作截图 · 弹窗底部左侧的橙色按钮为「发送到 COCA」。',
                  })
                "
                aria-label="放大查看阅读时发送单词的入口"
                class="capture-image [-webkit-tap-highlight-color:transparent] [background:var(--paper)] [border:1px_solid_#bbc5b3] rounded-[4px] [color:inherit] [cursor:zoom-in] block overflow-hidden pb-0 pl-0 pr-0 pt-0 text-left w-full"
                type="button"
              >
                <img
                  alt="小王子阅读工具中 understand 的查词弹窗，底部左侧橙色按钮为发送到 COCA，旁边为发送到生词本"
                  class="[aspect-ratio:8/5] block h-auto max-w-[100%] object-contain w-full"
                  height="1800"
                  loading="lazy"
                  src="/assets/images/vocabulary/reading-send.png"
                  width="2880"
                />
                <span
                  class="[color:var(--ink)] block text-[12px] pb-[13px] pl-[18px] pr-[18px] pt-[13px]"
                  >查看完整截图 ↗</span
                >
              </button>
              <div class="capture-caption pt-[16px] min-[701px]:pt-[20px]">
                <h4
                  class="text-[20px] leading-[1.5] min-[701px]:text-[18px] min-[961px]:text-[20px]"
                >
                  读到 understand，留下书中的原句。
                </h4>
                <p
                  class="[color:#52634b] text-[14px] leading-[1.9] mb-0 ml-0 mr-0 mt-[12px]"
                >
                  在查词弹窗底部，选择橙色的「发送到 COCA ·
                  主卡例句」，让这段阅读成为下次复习的线索。
                </p>
              </div>
            </article>
            <article class="capture-example min-w-0">
              <div
                class="capture-label [color:#52634b] gap-x-[16px] flex text-[11px] justify-between mb-[14px] gap-y-[16px] min-[701px]:text-[12px]"
              >
                <span>02 / 观影中</span>
                <span>影视对白</span>
              </div>
              <button
                @click="
                  openImage({
                    src: '/assets/images/vocabulary/viewing-send.png',
                    alt: '影视画面上 gracefully 的查词弹窗，底部左侧橙色按钮为发送到 COCA，保留 Age gracefully, like you 的对白语境',
                    title: '观影中 · 发送 gracefully 到 COCA',
                    caption:
                      '配套工具操作截图 · 弹窗底部左侧的橙色按钮为「发送到 COCA」。',
                  })
                "
                aria-label="放大查看观影时发送单词的入口"
                class="capture-image [-webkit-tap-highlight-color:transparent] [background:var(--paper)] [border:1px_solid_#bbc5b3] rounded-[4px] [color:inherit] [cursor:zoom-in] block overflow-hidden pb-0 pl-0 pr-0 pt-0 text-left w-full"
                type="button"
              >
                <img
                  alt="影视画面上 gracefully 的查词弹窗，底部左侧橙色按钮为发送到 COCA，保留 Age gracefully, like you 的对白语境"
                  class="[aspect-ratio:8/5] block h-auto max-w-[100%] object-contain w-full"
                  height="1800"
                  loading="lazy"
                  src="/assets/images/vocabulary/viewing-send.png"
                  width="2880"
                />
                <span
                  class="[color:var(--ink)] block text-[12px] pb-[13px] pl-[18px] pr-[18px] pt-[13px]"
                  >查看完整截图 ↗</span
                >
              </button>
              <div class="capture-caption pt-[16px] min-[701px]:pt-[20px]">
                <h4
                  class="text-[20px] leading-[1.5] min-[701px]:text-[18px] min-[961px]:text-[20px]"
                >
                  听到 gracefully，留下这一句对白。
                </h4>
                <p
                  class="[color:#52634b] text-[14px] leading-[1.9] mb-0 ml-0 mr-0 mt-[12px]"
                >
                  在字幕单词的弹窗里，同样找到「发送到
                  COCA」。让影视中听见的用法，也回到熟悉的词条中。
                </p>
              </div>
            </article>
          </div>
          <p
            class="capture-footnote [color:#52634b] text-[11px] mb-0 ml-0 mr-0 mt-[28px] min-[701px]:text-[12px]"
          >
            配套工具操作截图 · 点击图片放大查看按钮位置
          </p>
        </div>
      </div>
    </section>
    <VocabularyCards></VocabularyCards>
    <section
      class="section memory pb-[56px] pl-0 pr-0 pt-[56px] min-[701px]:pb-[72px] min-[701px]:pt-[72px] min-[961px]:pb-[96px] min-[961px]:pt-[96px]"
      id="memory"
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
              源于科学的学习方法
            </div>
            <h2
              class="text-[31px] font-bold tracking-[-.045em] leading-[1.35] mb-0 ml-0 mr-0 mt-0 max-w-[760px] min-[701px]:text-[38px] min-[701px]:leading-[1.25] min-[1201px]:text-[44px]"
            >
              记住一个词，<br />让它能被认出，也能被用到。
            </h2>
          </div>
          <p
            class="section-intro [color:var(--muted)] text-[15px] leading-[1.9] mb-0 ml-0 mr-0 mt-[18px] max-w-[640px] min-[701px]:text-[16px] min-[701px]:mt-[24px] min-[961px]:mt-0 min-[961px]:max-w-[330px] min-[1201px]:max-w-[380px]"
          >
            Fluent Forever
            把声音、图像、语境和个人联系放在一起。用主动回忆检查记忆，再通过间隔复习和实际使用继续巩固。
          </p>
        </div>
        <div
          class="method-grid gap-x-[30px] grid grid-cols-[1fr] gap-y-[30px] min-[701px]:gap-x-[24px] min-[701px]:grid-cols-[repeat(3,1fr)] min-[701px]:gap-y-[24px] min-[961px]:gap-x-[40px] min-[961px]:gap-y-[40px]"
        >
          <article
            class="method-item [border-top:1px_solid_#bfc6b8] flex flex-col pt-[17px] min-[701px]:pt-[20px]"
          >
            <div
              class="method-index [color:#60715e] flex text-[10px] justify-between tracking-[.12em] min-[701px]:text-[11px]"
            >
              01 / 看见能理解
            </div>
            <div
              class="memory-word [color:var(--green)] [font-family:Georgia,serif] text-[42px] [font-style:italic] leading-[1.2] pb-[23px] pl-0 pr-0 pt-[23px] min-[701px]:text-[43px] min-[701px]:pb-[30px] min-[701px]:pt-[30px]"
            >
              recognize
            </div>
            <h3
              class="text-[24px] tracking-[-.025em] leading-[1.25] mb-0 ml-0 mr-0 mt-0 min-[701px]:text-[20px] min-[961px]:text-[23px]"
            >
              回忆它在这里的意思
            </h3>
            <p
              class="[color:var(--muted)] text-[15px] leading-[1.9] mb-[11px] ml-0 mr-0 mt-[13px] min-[701px]:text-[14px] min-[701px]:mb-[18px] min-[701px]:mt-[16px] min-[961px]:text-[15px]"
            >
              看到英文，先试着回忆当前语境中的含义。再核对例句与图片，补充熟词的新义和搭配。
            </p>
          </article>
          <article
            class="method-item [border-top:1px_solid_#bfc6b8] flex flex-col pt-[17px] min-[701px]:pt-[20px]"
          >
            <div
              class="method-index [color:#60715e] flex text-[10px] justify-between tracking-[.12em] min-[701px]:text-[11px]"
            >
              02 / 听到能辨认
            </div>
            <div
              class="memory-word [color:var(--green)] [font-family:Georgia,serif] text-[42px] [font-style:italic] leading-[1.2] pb-[23px] pl-0 pr-0 pt-[23px] min-[701px]:text-[43px] min-[701px]:pb-[30px] min-[701px]:pt-[30px]"
            >
              listen
            </div>
            <h3
              class="text-[24px] tracking-[-.025em] leading-[1.25] mb-0 ml-0 mr-0 mt-0 min-[701px]:text-[20px] min-[961px]:text-[23px]"
            >
              把文字和声音连起来
            </h3>
            <p
              class="[color:var(--muted)] text-[15px] leading-[1.9] mb-[11px] ml-0 mr-0 mt-[13px] min-[701px]:text-[14px] min-[701px]:mb-[18px] min-[701px]:mt-[16px] min-[961px]:text-[15px]"
            >
              先听音频，再核对词形和发音。在短句里继续听，检查离开文字提示后还能不能理解。
            </p>
          </article>
          <article
            class="method-item [border-top:1px_solid_#bfc6b8] flex flex-col pt-[17px] min-[701px]:pt-[20px]"
          >
            <div
              class="method-index [color:#60715e] flex text-[10px] justify-between tracking-[.12em] min-[701px]:text-[11px]"
            >
              03 / 想说能调用
            </div>
            <div
              class="memory-word [color:var(--green)] [font-family:Georgia,serif] text-[42px] [font-style:italic] leading-[1.2] pb-[23px] pl-0 pr-0 pt-[23px] min-[701px]:text-[43px] min-[701px]:pb-[30px] min-[701px]:pt-[30px]"
            >
              use
            </div>
            <h3
              class="text-[24px] tracking-[-.025em] leading-[1.25] mb-0 ml-0 mr-0 mt-0 min-[701px]:text-[20px] min-[961px]:text-[23px]"
            >
              说一句与自己有关的话
            </h3>
            <p
              class="[color:var(--muted)] text-[15px] leading-[1.9] mb-[11px] ml-0 mr-0 mt-[13px] min-[701px]:text-[14px] min-[701px]:mb-[18px] min-[701px]:mt-[16px] min-[961px]:text-[15px]"
            >
              把常用词放进自己的表达，核对用法。低频词可先以理解为主，不必要求每个词都立刻会说会写。
            </p>
          </article>
        </div>
        <div
          class="source-note items-start [border-top:1px_solid_var(--line)] [color:var(--muted)] gap-x-[14px] flex flex-wrap text-[11px] mt-[28px] pt-[20px] gap-y-[8px] min-[701px]:gap-x-[18px] min-[701px]:[flex-wrap:unset] min-[701px]:text-[12px] min-[701px]:mt-[44px] min-[701px]:pt-[22px] min-[701px]:gap-y-[18px]"
        >
          <span class="[color:var(--ink)] font-semibold whitespace-nowrap"
            >方法参考</span
          >
          <p
            class="flex-[1] mb-0 ml-0 mr-0 mt-0 min-w-[220px] min-[701px]:min-w-[unset]"
          >
            <em>Fluent Forever</em> 第 2、4、5、7
            章；本站将这些原则整理为上面的三项练习目标。复习量应随自己的时间和遗忘情况调整。
          </p>
        </div>
      </div>
    </section>
    <section
      class="section goals [background:#f1e2bb] pb-[56px] pl-0 pr-0 pt-[56px] min-[701px]:pb-[72px] min-[701px]:pt-[72px] min-[961px]:pb-[96px] min-[961px]:pt-[96px]"
      id="goals"
    >
      <div
        class="wrap mb-auto ml-auto mr-auto mt-auto w-[calc(100%_-_40px)] min-[701px]:w-[calc(100%_-_64px)] min-[1201px]:w-[min(1280px,calc(100%_-_112px))]"
      >
        <div
          class="goal-lead gap-x-[26px] grid grid-cols-[1fr] gap-y-[26px] min-[961px]:gap-x-[48px] min-[961px]:grid-cols-[1fr_1fr] min-[961px]:gap-y-[48px] min-[1201px]:gap-x-[80px] min-[1201px]:gap-y-[80px]"
        >
          <div>
            <div
              class="eyebrow text-[12px] font-[650] tracking-[.09em] mb-[19px] min-[701px]:text-[13px] min-[701px]:mb-[24px]"
            >
              词汇量与实践，应该一起往前走
            </div>
            <h2
              class="text-[31px] font-bold tracking-[-.045em] leading-[1.35] mb-0 ml-0 mr-0 mt-0 min-[701px]:text-[38px] min-[701px]:leading-[1.25] min-[1201px]:text-[44px]"
            >
              约 2,000 个词，<br />可以开始实践了吗？
            </h2>
          </div>
          <div class="goal-answer">
            <strong class="text-[21px] leading-[1.5] min-[701px]:text-[24px]"
              >可以。选对材料，就能开始。</strong
            >
            <p
              class="[color:#665d44] text-[14px] leading-[1.9] mb-0 ml-0 mr-0 mt-[18px] min-[701px]:text-[15px]"
            >
              1,000–2,000
              个高频词可以作为基础，然后围绕兴趣继续扩展。更早也能用已学词练短句；开始阅读和听力时，选择能借助语境理解的分级材料或短片段。
            </p>
            <p
              class="[color:#665d44] text-[14px] leading-[1.9] mb-0 ml-0 mr-0 mt-[18px] min-[701px]:text-[15px]"
            >
              词汇数量不是统一门槛，也不能保证读懂普通小说或听懂整部电影。遇到太多生词，就降低难度、缩短片段，并补上反复出现的词。
            </p>
          </div>
        </div>
        <div
          class="goal-path gap-x-[28px] grid grid-cols-[1fr] mt-[36px] gap-y-[28px] min-[701px]:gap-x-[24px] min-[701px]:grid-cols-[repeat(3,1fr)] min-[701px]:gap-y-[24px] min-[961px]:gap-x-[40px] min-[961px]:mt-[52px] min-[961px]:gap-y-[40px]"
        >
          <article class="[border-top:1px_solid_#c5b58e] pt-[22px]">
            <span
              class="small-label [color:#685e47] text-[12px] tracking-[.06em]"
              >起步 · 同时实践</span
            >
            <strong
              class="block text-[40px] font-semibold tracking-[-.055em] mt-[12px] min-[701px]:text-[30px] min-[701px]:mt-[18px] min-[961px]:text-[36px] min-[1201px]:text-[43px]"
              >1,000–2,000</strong
            >
            <h3
              class="text-[23px] tracking-[-.045em] leading-[1.25] mb-0 ml-0 mr-0 mt-[12px] min-[701px]:text-[20px] min-[961px]:text-[23px]"
            >
              补齐高频基础
            </h3>
            <p
              class="[color:#665d44] text-[14px] leading-[1.9] mb-0 ml-0 mr-0 mt-[14px]"
            >
              结合基础语法，开始短句、分级阅读和短时听力。把自己关心的话题带进来。
            </p>
          </article>
          <article class="[border-top:1px_solid_#c5b58e] pt-[22px]">
            <span
              class="small-label [color:#685e47] text-[12px] tracking-[.06em]"
              >阶段方向 · 扩大理解</span
            >
            <strong
              class="block text-[40px] font-semibold tracking-[-.055em] mt-[12px] min-[701px]:text-[30px] min-[701px]:mt-[18px] min-[961px]:text-[36px] min-[1201px]:text-[43px]"
              >10,000</strong
            >
            <h3
              class="text-[23px] tracking-[-.045em] leading-[1.25] mb-0 ml-0 mr-0 mt-[12px] min-[701px]:text-[20px] min-[961px]:text-[23px]"
            >
              逐步扩大认读范围
            </h3>
            <p
              class="[color:#665d44] text-[14px] leading-[1.9] mb-0 ml-0 mr-0 mt-[14px]"
            >
              沿用《英语自学手册》的阶段方向，持续阅读和听说，不把背词表当成全部学习。
            </p>
          </article>
          <article class="[border-top:1px_solid_#c5b58e] pt-[22px]">
            <span
              class="small-label [color:#685e47] text-[12px] tracking-[.06em]"
              >长期拓展 · 按需积累</span
            >
            <strong
              class="block text-[40px] font-semibold tracking-[-.055em] mt-[12px] min-[701px]:text-[30px] min-[701px]:mt-[18px] min-[961px]:text-[36px] min-[1201px]:text-[43px]"
              >20,000+</strong
            >
            <h3
              class="text-[23px] tracking-[-.045em] leading-[1.25] mb-0 ml-0 mr-0 mt-[12px] min-[701px]:text-[20px] min-[961px]:text-[23px]"
            >
              继续积累语境与新义
            </h3>
            <p
              class="[color:#665d44] text-[14px] leading-[1.9] mb-0 ml-0 mr-0 mt-[14px]"
            >
              根据工作、兴趣和阅读需求扩展。COCA 30000
              是可用的资源范围，不是必须背完的任务。
            </p>
          </article>
        </div>
        <div
          class="source-note items-start [border-color:#d4c5a0] [border-top:1px_solid_var(--line)] [color:#665d44] gap-x-[14px] flex flex-wrap text-[11px] mt-[28px] pt-[20px] gap-y-[8px] min-[701px]:gap-x-[18px] min-[701px]:[flex-wrap:unset] min-[701px]:text-[12px] min-[701px]:mt-[44px] min-[701px]:pt-[22px] min-[701px]:gap-y-[18px]"
        >
          <span class="[color:var(--ink)] font-semibold whitespace-nowrap"
            >数字怎么理解</span
          >
          <p
            class="flex-[1] mb-0 ml-0 mr-0 mt-0 min-w-[220px] min-[701px]:min-w-[unset]"
          >
            1,000–2,000 来自 Gabriel Wyner
            的高频词基础建议；一万至两万是《英语自学手册》§2.1
            的学习方向，非统一科学门槛。不同计数口径不可直接换算。
          </p>
          <a
            class="[-webkit-tap-highlight-color:transparent] items-center [color:inherit] flex ml-auto mt-0 max-w-[none] min-h-[36px] underline [text-underline-offset:4px] whitespace-nowrap min-[701px]:ml-[unset] min-[701px]:mt-[-10px] min-[701px]:max-w-[230px] min-[701px]:min-h-[44px]"
            href="https://blog.fluent-forever.com/vocabulary/"
            rel="noopener noreferrer"
            target="_blank"
            >阅读作者说明 ↗</a
          >
        </div>
      </div>
    </section>
    <section
      class="section download-section bg-white pb-[56px] pl-0 pr-0 pt-[56px] min-[701px]:pb-[72px] min-[701px]:pt-[72px] min-[961px]:pb-[96px] min-[961px]:pt-[96px]"
      id="download"
    >
      <div
        class="wrap download-grid items-center gap-x-[32px] grid grid-cols-[1fr] mb-auto ml-auto mr-auto mt-auto gap-y-[32px] w-[calc(100%_-_40px)] min-[701px]:gap-x-[40px] min-[701px]:grid-cols-[1.05fr_1fr] min-[701px]:gap-y-[40px] min-[701px]:w-[calc(100%_-_64px)] min-[961px]:gap-x-[60px] min-[961px]:gap-y-[60px] min-[1201px]:gap-x-[100px] min-[1201px]:gap-y-[100px] min-[1201px]:w-[min(1280px,calc(100%_-_112px))]"
      >
        <div class="download-copy">
          <div
            class="eyebrow text-[12px] font-[650] tracking-[.09em] mb-[19px] min-[701px]:text-[13px] min-[701px]:mb-[24px]"
          >
            把词汇库带走
          </div>
          <h2
            class="text-[31px] font-bold tracking-[-.045em] leading-[1.35] mb-0 ml-0 mr-0 mt-0 min-[701px]:text-[38px] min-[701px]:leading-[1.25] min-[1201px]:text-[44px]"
          >
            COCA 30000，<br />从这里开始积累。
          </h2>
          <p
            class="section-intro [color:var(--muted)] text-[15px] leading-[1.9] mb-[20px] ml-0 mr-0 mt-[20px] max-w-[450px] min-[701px]:text-[16px] min-[701px]:mb-[25px] min-[701px]:mt-[25px]"
          >
            导入基础词条，优先学习常用且不熟悉的词。以后每次遇见新的例句，都可以回来补上一笔。
          </p>
          <div
            class="deck-tags [color:#536350] gap-x-[16px] flex flex-wrap text-[12px] mb-[24px] gap-y-[8px] min-[701px]:gap-x-[20px] min-[701px]:text-[13px] min-[701px]:mb-[28px]"
          >
            <span class="items-center gap-x-[6px] inline-flex gap-y-[6px]"
              >词频排名</span
            >
            <span class="items-center gap-x-[6px] inline-flex gap-y-[6px]"
              >释义与音频</span
            >
            <span class="items-center gap-x-[6px] inline-flex gap-y-[6px]"
              >可补充个人例句</span
            >
          </div>
          <a
            class="btn btn-dark [-webkit-tap-highlight-color:transparent] items-center [background:var(--ink)] rounded-full text-white gap-x-[28px] inline-flex text-[15px] font-[650] justify-center min-h-[56px] pb-[14px] pl-[28px] pr-[28px] pt-[14px] gap-y-[28px] no-underline [transition:background_.18s,transform_.18s] min-[701px]:text-[16px]"
            download="英语自学指北-COCA30000.apkg"
            href="/assets/downloads/anki/coca-30000.apkg"
            >下载 COCA 30000 ↓</a
          >
          <p
            class="file-meta [color:var(--muted)] text-[11px] mb-0 ml-0 mr-0 mt-[12px] min-[701px]:text-[12px]"
          >
            Anki 卡组 · .apkg · 约 233.5 MB
          </p>
        </div>
        <div
          class="deck-summary [background:var(--sage)] pb-[26px] pl-[26px] pr-[26px] pt-[26px] min-[961px]:pb-[24px] min-[961px]:pl-[36px] min-[961px]:pr-[36px] min-[961px]:pt-[30px]"
        >
          <div
            class="deck-summary-top flex text-[11px] justify-between tracking-[.04em] min-[701px]:text-[12px]"
          >
            <span>英语自学指北 / COCA 30000</span>
            <span>词汇底库</span>
          </div>
          <div
            class="deck-count items-baseline gap-x-[18px] flex mt-[23px] gap-y-[18px] min-[701px]:mt-[26px]"
          >
            <strong
              class="text-[62px] font-[650] tracking-[-.065em] leading-[1] min-[701px]:text-[52px] min-[961px]:text-[63px] min-[1201px]:text-[77px]"
              >30,050</strong
            >
            <span class="text-[13px]">张卡片</span>
          </div>
          <p class="[color:#54644f] text-[13px] mb-[24px] ml-0 mr-0 mt-[16px]">
            这是当前下载包的实际卡片数。
          </p>
          <div class="deck-contents">
            <div
              class="[border-top:1px_solid_#b7c4ae] flex text-[12px] justify-between pb-[11px] pl-0 pr-0 pt-[11px] min-[701px]:text-[14px]"
            >
              <span>基础内容</span>
              <strong class="font-medium">词条、排名、释义、音频</strong>
            </div>
            <div
              class="[border-top:1px_solid_#b7c4ae] flex text-[12px] justify-between pb-[11px] pl-0 pr-0 pt-[11px] min-[701px]:text-[14px]"
            >
              <span>个人内容</span>
              <strong class="font-medium">例句栏待你补充</strong>
            </div>
            <div
              class="[border-top:1px_solid_#b7c4ae] flex text-[12px] justify-between pb-[11px] pl-0 pr-0 pt-[11px] min-[701px]:text-[14px]"
            >
              <span>学习进度</span>
              <strong class="font-medium">按自己的节奏开始</strong>
            </div>
          </div>
          <div
            class="deck-summary-bottom items-center [border-top:1px_solid_#b7c4ae] gap-x-[12px] flex text-[12px] mt-[10px] pt-[20px] gap-y-[12px]"
          >
            先建立底库，再把它变成自己的词汇库。
          </div>
        </div>
      </div>
      <div
        class="wrap mb-auto ml-auto mr-auto mt-auto w-[calc(100%_-_40px)] min-[701px]:w-[calc(100%_-_64px)] min-[1201px]:w-[min(1280px,calc(100%_-_112px))]"
      >
        <div
          class="extra-decks items-center [border-top:1px_solid_var(--line)] gap-x-[24px] grid grid-cols-[1fr] mt-[34px] pt-[25px] gap-y-[24px] min-[701px]:gap-x-[20px] min-[701px]:grid-cols-[1fr_1fr] min-[701px]:mt-[56px] min-[701px]:pt-[32px] min-[701px]:gap-y-[20px] min-[961px]:grid-cols-[1.1fr_1fr_1fr] min-[1201px]:gap-x-[32px] min-[1201px]:gap-y-[32px]"
        >
          <div class="[grid-column:1/-1] min-[961px]:[grid-column:unset]">
            <span
              class="small-label [color:var(--muted)] text-[12px] tracking-[.06em]"
              >补充工具</span
            >
            <h3
              class="text-[21px] tracking-[-.045em] leading-[1.25] mb-0 ml-0 mr-0 mt-[10px]"
            >
              底库之外，也有地方收好。
            </h3>
          </div>
          <a
            class="[-webkit-tap-highlight-color:transparent] [border-left:0] [border-top:1px_solid_var(--line)] [color:inherit] gap-x-[12px] flex flex-col min-h-[85px] pb-[10px] pl-0 pr-0 pt-[20px] gap-y-[12px] no-underline min-[701px]:min-h-[95px] min-[961px]:[border-left:1px_solid_var(--line)] min-[961px]:[border-top:unset] min-[961px]:pl-[30px] min-[961px]:pt-[10px]"
            download="英语自学指北-生词本.apkg"
            href="/assets/downloads/anki/wordbook.apkg"
          >
            <strong class="flex text-[18px] justify-between"
              >生词本 <span>↓</span>
            </strong>
            <span class="[color:var(--muted)] text-[12px]"
              >记录额外词汇 · 含 1 张示例 · 57 KB</span
            >
          </a>
          <a
            class="[-webkit-tap-highlight-color:transparent] [border-left:0] [border-top:1px_solid_var(--line)] [color:inherit] gap-x-[12px] flex flex-col min-h-[85px] pb-[10px] pl-0 pr-0 pt-[20px] gap-y-[12px] no-underline min-[701px]:min-h-[95px] min-[961px]:[border-left:1px_solid_var(--line)] min-[961px]:[border-top:unset] min-[961px]:pl-[30px] min-[961px]:pt-[10px]"
            download="英语自学指北-短语.apkg"
            href="/assets/downloads/anki/phrases.apkg"
          >
            <strong class="flex text-[18px] justify-between"
              >短语卡组 <span>↓</span>
            </strong>
            <span class="[color:var(--muted)] text-[12px]"
              >整块记住搭配 · 含 2 张示例 · 65 KB</span
            >
          </a>
        </div>
      </div>
      <div
        class="wrap import-help mb-auto ml-auto mr-auto mt-[34px] w-[calc(100%_-_40px)] min-[701px]:mt-[60px] min-[701px]:w-[calc(100%_-_64px)] min-[1201px]:w-[min(1280px,calc(100%_-_112px))]"
      >
        <details class="[border-top:1px_solid_var(--line)]">
          <summary
            class="gap-x-[20px] cursor-pointer flex text-[14px] font-semibold justify-between leading-[1.7] [list-style:none] min-h-[64px] pb-[18px] pl-0 pr-0 pt-[18px] gap-y-[20px] min-[701px]:text-[16px] min-[701px]:leading-[unset] min-[701px]:pb-[21px] min-[701px]:pt-[21px]"
          >
            导入之后，怎样把新例句加到同一个词条？<span class="font-normal"
              >＋</span
            >
          </summary>
          <div
            class="details-body [color:var(--muted)] text-[13px] leading-[1.9] max-w-[850px] pb-[24px] min-[701px]:text-[14px]"
          >
            <p class="mb-0 ml-0 mr-0 mt-0">
              打开 Anki，导入下载的
              .apkg。在「浏览」中搜索单词，核对词性与含义，选中已有笔记，把原句和来源补进
              Example
              字段。先保留已有内容，再追加新的语境；如果查不到这个词，可以加入生词本。
            </p>
            <p class="mb-0 ml-0 mr-0 mt-0">
              初次使用共享卡组时，不勾选「导入学习进度」。卡组内音频随包提供；部分配图使用在线链接，需要联网显示。
            </p>
            <a
              class="[-webkit-tap-highlight-color:transparent] items-center [color:var(--green)] inline-flex mb-0 ml-0 mr-[24px] mt-[12px] min-h-[44px] underline [text-underline-offset:4px]"
              href="https://docs.ankiweb.net/editing.html"
              rel="noopener noreferrer"
              target="_blank"
              >Anki 编辑笔记说明 ↗</a
            >
            <a
              class="[-webkit-tap-highlight-color:transparent] items-center [color:var(--green)] inline-flex mb-0 ml-0 mr-[24px] mt-[12px] min-h-[44px] underline [text-underline-offset:4px]"
              href="https://docs.ankiweb.net/importing/packaged-decks.html"
              rel="noopener noreferrer"
              target="_blank"
              >Anki 导入说明 ↗</a
            >
          </div>
        </details>
        <details class="[border-top:1px_solid_var(--line)]">
          <summary
            class="gap-x-[20px] cursor-pointer flex text-[14px] font-semibold justify-between leading-[1.7] [list-style:none] min-h-[64px] pb-[18px] pl-0 pr-0 pt-[18px] gap-y-[20px] min-[701px]:text-[16px] min-[701px]:leading-[unset] min-[701px]:pb-[21px] min-[701px]:pt-[21px]"
          >
            需要从第一张开始，把三万张都背完吗？<span class="font-normal"
              >＋</span
            >
          </summary>
          <div
            class="details-body [color:var(--muted)] text-[13px] leading-[1.9] max-w-[850px] pb-[24px] min-[701px]:text-[14px]"
          >
            <p class="mb-0 ml-0 mr-0 mt-0">
              不需要。先找到高频词中的缺口，把已经熟悉的词暂停学习，优先处理常见和有用的词。卡片数包含重复拼写的条目，不能当作你已经掌握的不同单词数，更不等于听说读写能力。
            </p>
          </div>
        </details>
        <details
          class="[border-bottom:1px_solid_var(--line)] [border-top:1px_solid_var(--line)]"
        >
          <summary
            class="gap-x-[20px] cursor-pointer flex text-[14px] font-semibold justify-between leading-[1.7] [list-style:none] min-h-[64px] pb-[18px] pl-0 pr-0 pt-[18px] gap-y-[20px] min-[701px]:text-[16px] min-[701px]:leading-[unset] min-[701px]:pb-[21px] min-[701px]:pt-[21px]"
          >
            Fluent Forever 是不是说，必须背到 2,000 词才能实践？<span
              class="font-normal"
              >＋</span
            >
          </summary>
          <div
            class="details-body [color:var(--muted)] text-[13px] leading-[1.9] max-w-[850px] pb-[24px] min-[701px]:text-[14px]"
          >
            <p class="mb-0 ml-0 mr-0 mt-0">
              不是。第 4 章用高频词说明基础词汇的重要性，但也展示了只有约 2,000
              高频词时仍会缺失文本信息；第 7
              章强调通过材料难度、时长和目标调整阅读与听力。作者官方文章建议以
              1,000–2,000 高频词打底，再按职业、兴趣补充。这里把约 2,000
              视为可参考的起点，而不是准入线。
            </p>
            <p class="mb-0 ml-0 mr-0 mt-0">
              《英语自学手册》「答疑篇
              02」也明确表示不必背完两万再阅读：有中学基础可以开始；基础不足时，可以考虑先补到两三千。两本书的数字是路线建议，不是对所有人都成立的硬性要求。
            </p>
          </div>
        </details>
      </div>
    </section>
    <section
      class="routine [background:var(--green)] text-white pb-[48px] pl-0 pr-0 pt-[48px] min-[701px]:pb-[76px] min-[701px]:pt-[72px]"
    >
      <div
        class="wrap mb-auto ml-auto mr-auto mt-auto w-[calc(100%_-_40px)] min-[701px]:w-[calc(100%_-_64px)] min-[1201px]:w-[min(1280px,calc(100%_-_112px))]"
      >
        <div
          class="eyebrow [color:#f7df75] text-[12px] font-[650] tracking-[.09em] mb-[20px] min-[701px]:text-[13px]"
        >
          词汇的终点，是你想理解和表达的生活
        </div>
        <h2
          class="text-[29px] font-bold tracking-[-.045em] leading-[1.4] mb-0 ml-0 mr-0 mt-0 min-[701px]:text-[33px] min-[701px]:leading-[1.25] min-[961px]:text-[38px]"
        >
          今天遇到的词，<br
            class="mobile-break block min-[701px]:hidden"
          />下次就多熟悉一点。
        </h2>
        <div
          class="routine-grid gap-x-[26px] grid grid-cols-[1fr] mb-[29px] ml-0 mr-0 mt-[29px] gap-y-[26px] min-[701px]:grid-cols-[repeat(3,1fr)] min-[701px]:mb-[32px] min-[701px]:mt-[40px] min-[961px]:gap-x-[40px] min-[961px]:gap-y-[40px]"
        >
          <article
            class="[border-top:1px_solid_#709185] pt-[17px] min-[701px]:pt-[20px]"
          >
            <span
              class="step-number [color:#dbe5cf] block text-[24px] mb-[11px] min-[701px]:text-[26px] min-[701px]:mb-[16px]"
              >01</span
            >
            <h3
              class="text-[22px] tracking-[-.045em] leading-[1.25] mb-0 ml-0 mr-0 mt-0 min-[701px]:text-[20px] min-[961px]:text-[23px]"
            >
              去读、去听
            </h3>
            <p
              class="[color:#d7e5dc] text-[14px] leading-[1.9] mb-0 ml-0 mr-0 mt-[10px] min-[701px]:text-[15px] min-[701px]:mt-[12px]"
            >
              选一个自己关心、难度合适的小片段。
            </p>
          </article>
          <article
            class="[border-top:1px_solid_#709185] pt-[17px] min-[701px]:pt-[20px]"
          >
            <span
              class="step-number [color:#dbe5cf] block text-[24px] mb-[11px] min-[701px]:text-[26px] min-[701px]:mb-[16px]"
              >02</span
            >
            <h3
              class="text-[22px] tracking-[-.045em] leading-[1.25] mb-0 ml-0 mr-0 mt-0 min-[701px]:text-[20px] min-[961px]:text-[23px]"
            >
              留下一次相遇
            </h3>
            <p
              class="[color:#d7e5dc] text-[14px] leading-[1.9] mb-0 ml-0 mr-0 mt-[10px] min-[701px]:text-[15px] min-[701px]:mt-[12px]"
            >
              把值得学习的原句，补进已有词条。
            </p>
          </article>
          <article
            class="[border-top:1px_solid_#709185] pt-[17px] min-[701px]:pt-[20px]"
          >
            <span
              class="step-number [color:#dbe5cf] block text-[24px] mb-[11px] min-[701px]:text-[26px] min-[701px]:mb-[16px]"
              >03</span
            >
            <h3
              class="text-[22px] tracking-[-.045em] leading-[1.25] mb-0 ml-0 mr-0 mt-0 min-[701px]:text-[20px] min-[961px]:text-[23px]"
            >
              回来，再想一遍
            </h3>
            <p
              class="[color:#d7e5dc] text-[14px] leading-[1.9] mb-0 ml-0 mr-0 mt-[10px] min-[701px]:text-[15px] min-[701px]:mt-[12px]"
            >
              在 Anki 中复习，也试着用它表达自己。
            </p>
          </article>
        </div>
        <a
          class="btn btn-yellow [-webkit-tap-highlight-color:transparent] items-center [background:var(--yellow)] rounded-full [color:var(--ink)] gap-x-[28px] inline-flex text-[14px] font-[650] justify-center min-h-[50px] pb-[11px] pl-[26px] pr-[26px] pt-[11px] gap-y-[28px] no-underline [transition:background_.18s,transform_.18s]"
          href="#download"
          >建立我的词汇库 ↓</a
        >
      </div>
    </section>
  </main>
</template>
