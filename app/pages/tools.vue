<script setup lang="ts">
import { toolsContent } from "~/data/tools";
const selectedFeature = ref("reading");
const galleryOpen = ref(false);
const galleryShot = ref<keyof typeof toolsContent.shots>("bookshelf");
function openGallery(key: keyof typeof toolsContent.shots) {
  galleryShot.value = key;
  galleryOpen.value = true;
}

usePageSeo(
  "读书会 · 自研学习工具",
  "了解读书会的原著阅读、影视学习、语境查词、跟读与学习数据功能，以及 Windows 和 macOS 客户端下载。",
);
definePageMeta({ alias: "/tools.html" });
</script>

<template>
  <main data-page="tools" id="main" tabindex="-1">
    <section
      class="tool-hero [background:var(--green)] text-white overflow-hidden pb-[40px] pl-0 pr-0 pt-[31px] min-[601px]:pb-[52px] min-[601px]:pt-[44px] min-[961px]:pb-[64px] min-[961px]:pt-[60px]"
    >
      <div
        class="wrap tool-hero-grid items-center gap-x-[33px] grid grid-cols-[1fr] mb-auto ml-auto mr-auto mt-auto gap-y-[33px] w-[calc(100%_-_40px)] min-[601px]:gap-x-[42px] min-[601px]:gap-y-[42px] min-[701px]:w-[calc(100%_-_64px)] min-[961px]:gap-x-[35px] min-[961px]:grid-cols-[.95fr_1.2fr] min-[961px]:gap-y-[35px] min-[1201px]:gap-x-[60px] min-[1201px]:grid-cols-[.95fr_1.3fr] min-[1201px]:gap-y-[60px] min-[1201px]:w-[min(1280px,calc(100%_-_112px))]"
      >
        <div>
          <div
            class="product-mark items-center gap-x-[12px] flex mb-[24px] gap-y-[12px] min-[961px]:mb-[27px]"
          >
            <img
              alt="读书会应用图标"
              class="block h-[43px] max-w-[100%] w-[43px] min-[601px]:h-[47px] min-[601px]:w-[47px]"
              height="48"
              loading="eager"
              src="/assets/images/tools/app-icon.png"
              width="48"
            />
            <div>
              <strong
                class="block text-[17px] leading-[1.4] min-[601px]:text-[18px]"
                >读书会</strong
              >
              <span
                class="[color:#d4e3d7] block text-[8px] tracking-[.09em] mt-[3px] min-[601px]:text-[9px]"
                >ENGLISH CLUB · 自研学习工具</span
              >
            </div>
          </div>
          <h1
            class="text-[40px] font-[750] tracking-[-.045em] leading-[1.35] mb-0 ml-0 mr-0 mt-0 min-[601px]:text-[48px] min-[601px]:leading-[1.3] min-[961px]:text-[45px] min-[961px]:leading-[1.34] min-[1201px]:text-[52px]"
          >
            把喜欢的故事，<br />变成每天的<br
              class="block min-[601px]:hidden min-[961px]:[display:unset]"
            />
            <span class="design-underline relative whitespace-nowrap"
              >英语练习。</span
            >
          </h1>
          <p
            class="tool-lede [color:#e1ecdf] text-[14px] leading-[1.9] mb-[23px] ml-0 mr-0 mt-[23px] max-w-[510px] min-[601px]:text-[15px] min-[601px]:mb-[27px] min-[601px]:mt-[27px] min-[961px]:text-[14px] min-[961px]:max-w-[unset] min-[1201px]:text-[15px]"
          >
            读一段原著，看一段对白，留下想记住的表达。<br
              class="hidden min-[1201px]:[display:unset]"
            />让阅读、观影、跟读和 Anki 复习接在一起。
          </p>
          <div
            class="actions items-center gap-x-[18px] flex flex-wrap gap-y-[18px] min-[601px]:gap-x-[17px] min-[601px]:gap-y-[17px] min-[1201px]:gap-x-[23px] min-[1201px]:gap-y-[23px]"
          >
            <a
              class="btn btn-yellow [-webkit-tap-highlight-color:transparent] items-center [background:var(--yellow)] rounded-full [color:var(--ink)] gap-x-[28px] inline-flex text-[13px] font-[650] justify-center min-h-[48px] pb-[12px] pl-[20px] pr-[20px] pt-[12px] gap-y-[28px] no-underline [transition:background_.18s,transform_.18s] min-[601px]:text-[14px] min-[601px]:min-h-[50px] min-[601px]:pl-[23px] min-[601px]:pr-[23px]"
              href="#download"
              >查看下载版本 <span aria-hidden="true">↓</span>
            </a>
            <a
              class="text-link light-link [-webkit-tap-highlight-color:transparent] items-center bg-transparent text-white gap-x-[18px] inline-flex text-[11px] font-[650] min-h-[44px] pb-0 pl-0 pr-0 pt-0 gap-y-[18px] no-underline min-[601px]:text-[13px] min-[961px]:text-[12px] min-[1201px]:text-[13px]"
              href="#features"
              >看看它能做什么 ↗</a
            >
          </div>
          <p
            class="tool-hero-note [color:#d1e0d1] text-[10px] mb-0 ml-0 mr-0 mt-[20px] min-[601px]:text-[11px] min-[601px]:mt-[24px]"
          >
            Windows x64 / macOS · 0.4.19 现已开放下载
          </p>
        </div>
        <div
          class="hero-product [background:#fffaf2] [border:1px_solid_#778e78] rounded-[7px] [box-shadow:6px_6px_0_#173f34] [color:var(--ink)] mr-[5px] max-w-[800px] overflow-hidden [transform:none] min-[601px]:[box-shadow:14px_14px_0_#173f34] min-[601px]:mr-[14px] min-[601px]:[transform:rotate(-1deg)] min-[961px]:mr-[8px] min-[961px]:max-w-[unset] min-[961px]:[transform:rotate(-1.5deg)]"
        >
          <div
            class="product-window-top items-center [background:#ecede4] [color:#52644f] gap-x-[10px] flex text-[9px] justify-between pb-[10px] pl-[12px] pr-[12px] pt-[10px] gap-y-[10px] min-[601px]:gap-x-[20px] min-[601px]:text-[10px] min-[601px]:pb-[13px] min-[601px]:pl-[16px] min-[601px]:pr-[16px] min-[601px]:pt-[13px] min-[601px]:gap-y-[20px]"
          >
            <span
              aria-hidden="true"
              class="window-dots gap-x-[4px] flex gap-y-[4px] min-[601px]:gap-x-[5px] min-[601px]:gap-y-[5px]"
            >
              <i
                class="[background:#ce8f75] rounded-full h-[5px] w-[5px] min-[601px]:h-[7px] min-[601px]:w-[7px]"
              >
              </i>
              <i
                class="[background:#d6bc6b] rounded-full h-[5px] w-[5px] min-[601px]:h-[7px] min-[601px]:w-[7px]"
              >
              </i>
              <i
                class="[background:#a4ad98] rounded-full h-[5px] w-[5px] min-[601px]:h-[7px] min-[601px]:w-[7px]"
              >
              </i>
            </span>
            <span>读书会 / 我的书架</span>
            <span class="text-[8px] min-[601px]:text-[9px]">产品实拍</span>
          </div>
          <button
            @click="openGallery('bookshelf')"
            aria-label="放大读书会书架截图"
            class="hero-shot image-button [-webkit-tap-highlight-color:transparent] bg-transparent [border:0] [color:inherit] cursor-pointer block pb-0 pl-0 pr-0 pt-0 relative text-left w-full"
            type="button"
          >
            <img
              alt="读书会的我的书架：最近阅读、书籍列表和阅读进度"
              class="block h-auto max-w-[100%] w-full"
              fetchpriority="high"
              height="1050"
              loading="eager"
              src="/assets/images/tools/bookshelf.webp"
              width="1680"
            />
            <span
              class="zoom-hint [background:#172820eb] rounded-[30px] bottom-[9px] [box-shadow:0_2px_8px_#0002] text-white text-[9px] pb-[5px] pl-[10px] pr-[10px] pt-[5px] absolute right-[9px] min-[601px]:bottom-[14px] min-[601px]:text-[10px] min-[601px]:pb-[7px] min-[601px]:pl-[13px] min-[601px]:pr-[13px] min-[601px]:pt-[7px] min-[601px]:right-[14px]"
              >放大查看 ↗</span
            >
          </button>
          <div
            class="hero-product-bottom items-center [border-top:1px_solid_#dce0d2] flex text-[10px] justify-between pb-[13px] pl-[15px] pr-[15px] pt-[13px] min-[601px]:text-[12px] min-[601px]:pb-[18px] min-[601px]:pl-[21px] min-[601px]:pr-[21px] min-[601px]:pt-[18px]"
          >
            <span>一本书，一部剧，一点点积累。</span>
            <span aria-hidden="true" class="text-[18px] min-[601px]:text-[23px]"
              >↗</span
            >
          </div>
        </div>
      </div>
    </section>
    <nav aria-label="本页内容" class="page-route [background:var(--sage)]">
      <div
        class="wrap route-grid gap-x-0 grid grid-cols-[repeat(3,1fr)] mb-auto ml-auto mr-auto mt-auto pb-[16px] pl-[10px] pr-[10px] pt-[16px] gap-y-0 w-full min-[701px]:gap-x-[20px] min-[701px]:pb-[23px] min-[701px]:pl-0 min-[701px]:pr-0 min-[701px]:pt-[23px] min-[701px]:gap-y-[20px] min-[701px]:w-[calc(100%_-_64px)] min-[961px]:gap-x-[32px] min-[961px]:gap-y-[32px] min-[1201px]:w-[min(1280px,calc(100%_-_112px))]"
      >
        <a
          class="[-webkit-tap-highlight-color:transparent] items-center [color:inherit] gap-x-[4px] flex flex-col text-[11px] font-semibold justify-center leading-[1.6] min-h-[52px] gap-y-[4px] no-underline min-[701px]:gap-x-[12px] min-[701px]:[flex-direction:unset] min-[701px]:text-[13px] min-[701px]:[justify-content:unset] min-[701px]:leading-[unset] min-[701px]:min-h-[44px] min-[701px]:gap-y-[12px] min-[961px]:gap-x-[20px] min-[961px]:text-[15px] min-[961px]:gap-y-[20px]"
          href="#features"
        >
          <span
            class="[color:#52644f] text-[11px] font-normal min-[701px]:text-[13px]"
            >01</span
          >认识读书会
          <span
            aria-hidden="true"
            class="route-arrow [color:#52644f] hidden ml-auto min-[701px]:[display:unset]"
            >↘</span
          >
        </a>
        <a
          class="[-webkit-tap-highlight-color:transparent] items-center [border-left:1px_solid_#bac4b3] [color:inherit] gap-x-[4px] flex flex-col text-[11px] font-semibold justify-center leading-[1.6] min-h-[52px] pl-0 gap-y-[4px] no-underline min-[701px]:gap-x-[12px] min-[701px]:[flex-direction:unset] min-[701px]:text-[13px] min-[701px]:[justify-content:unset] min-[701px]:leading-[unset] min-[701px]:min-h-[44px] min-[701px]:pl-[22px] min-[701px]:gap-y-[12px] min-[961px]:gap-x-[20px] min-[961px]:text-[15px] min-[961px]:pl-[40px] min-[961px]:gap-y-[20px]"
          href="#workflow"
        >
          <span
            class="[color:#52644f] text-[11px] font-normal min-[701px]:text-[13px]"
            >02</span
          >连接每天的练习
          <span
            aria-hidden="true"
            class="route-arrow [color:#52644f] hidden ml-auto min-[701px]:[display:unset]"
            >↘</span
          >
        </a>
        <a
          class="[-webkit-tap-highlight-color:transparent] items-center [border-left:1px_solid_#bac4b3] [color:inherit] gap-x-[4px] flex flex-col text-[11px] font-semibold justify-center leading-[1.6] min-h-[52px] pl-0 gap-y-[4px] no-underline min-[701px]:gap-x-[12px] min-[701px]:[flex-direction:unset] min-[701px]:text-[13px] min-[701px]:[justify-content:unset] min-[701px]:leading-[unset] min-[701px]:min-h-[44px] min-[701px]:pl-[22px] min-[701px]:gap-y-[12px] min-[961px]:gap-x-[20px] min-[961px]:text-[15px] min-[961px]:pl-[40px] min-[961px]:gap-y-[20px]"
          href="#download"
        >
          <span
            class="[color:#52644f] text-[11px] font-normal min-[701px]:text-[13px]"
            >03</span
          >选择下载版本
          <span
            aria-hidden="true"
            class="route-arrow [color:#52644f] hidden ml-auto min-[701px]:[display:unset]"
            >↘</span
          >
        </a>
      </div>
    </nav>
    <ToolFeatures
      @gallery="openGallery"
      v-model="selectedFeature"
    ></ToolFeatures>
    <section
      class="section tool-workflow [background:var(--sage)] pb-[56px] pl-0 pr-0 pt-[56px] min-[701px]:pb-[72px] min-[701px]:pt-[72px] min-[961px]:pb-[96px] min-[961px]:pt-[96px]"
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
              02 / 从输入，到下一次想起来
            </div>
            <h2
              class="text-[29px] font-bold tracking-[-.045em] leading-[1.4] mb-0 ml-0 mr-0 mt-0 max-w-[760px] min-[601px]:text-[34px] min-[961px]:text-[38px]"
            >
              故事继续，<br />学到的表达也留下来。
            </h2>
          </div>
          <p
            class="section-intro [color:var(--muted)] text-[15px] leading-[1.9] mb-0 ml-0 mr-0 mt-[18px] max-w-[640px] min-[701px]:text-[16px] min-[701px]:mt-[24px] min-[961px]:mt-0 min-[961px]:max-w-[330px] min-[1201px]:max-w-[380px]"
          >
            先理解内容，再选择值得留下的词句。<br />把一次相遇，接到之后的回忆和使用。
          </p>
        </div>
        <div
          class="tool-loop gap-x-[25px] grid grid-cols-[1fr] gap-y-[25px] min-[601px]:gap-x-[24px] min-[601px]:grid-cols-[repeat(3,1fr)] min-[601px]:gap-y-[24px] min-[961px]:gap-x-[30px] min-[961px]:gap-y-[30px] min-[1201px]:gap-x-[45px] min-[1201px]:gap-y-[45px]"
        >
          <article
            class="[border-top:1px_solid_#b4c1a8] pb-0 pl-[47px] pr-0 pt-[18px] relative min-[601px]:pb-[unset] min-[601px]:pl-[unset] min-[601px]:pr-[unset] min-[601px]:pt-[20px] min-[601px]:[position:unset]"
          >
            <span
              class="loop-index [color:#748468] [font-family:Georgia,serif] text-[26px] [font-style:normal] left-0 leading-[1.4] absolute top-[16px] min-[601px]:text-[32px] min-[601px]:left-[unset] min-[601px]:[position:unset] min-[601px]:top-[unset]"
              >01</span
            >
            <h3
              class="text-[22px] tracking-[-.045em] leading-[1.25] mb-[12px] ml-0 mr-0 mt-0 min-[601px]:text-[21px] min-[601px]:mb-[15px] min-[601px]:mt-[20px] min-[961px]:text-[24px]"
            >
              在原文里，理解它
            </h3>
            <p
              class="[color:#4e6048] text-[13px] leading-[1.9] mb-0 ml-0 mr-0 mt-0 min-[961px]:text-[14px]"
            >
              阅读正文或观看字幕时查词，结合当前例句查看含义，留意它在这里的用法。
            </p>
            <button
              @click="
                selectedFeature = 'words';
                navigateTo({ hash: '#features' });
              "
              class="text-link [-webkit-tap-highlight-color:transparent] items-center bg-transparent [border:0] [color:inherit] gap-x-[18px] cursor-pointer inline-flex text-[12px] font-[650] mt-[8px] min-h-[44px] pb-0 pl-0 pr-0 pt-0 gap-y-[18px] min-[601px]:mt-[15px]"
              type="button"
            >
              看看语境查词 ↗
            </button>
          </article>
          <article
            class="[border-top:1px_solid_#b4c1a8] pb-0 pl-[47px] pr-0 pt-[18px] relative min-[601px]:pb-[unset] min-[601px]:pl-[unset] min-[601px]:pr-[unset] min-[601px]:pt-[20px] min-[601px]:[position:unset]"
          >
            <span
              class="loop-index [color:#748468] [font-family:Georgia,serif] text-[26px] [font-style:normal] left-0 leading-[1.4] absolute top-[16px] min-[601px]:text-[32px] min-[601px]:left-[unset] min-[601px]:[position:unset] min-[601px]:top-[unset]"
              >02</span
            >
            <h3
              class="text-[22px] tracking-[-.045em] leading-[1.25] mb-[12px] ml-0 mr-0 mt-0 min-[601px]:text-[21px] min-[601px]:mb-[15px] min-[601px]:mt-[20px] min-[961px]:text-[24px]"
            >
              把这一句，练熟一点
            </h3>
            <p
              class="[color:#4e6048] text-[13px] leading-[1.9] mb-0 ml-0 mr-0 mt-0 min-[961px]:text-[14px]"
            >
              从阅读选句或影视字幕进入跟读，听原声、录下自己，再交替对比。原音片段可以微调。
            </p>
            <button
              @click="
                selectedFeature = 'shadow';
                navigateTo({ hash: '#features' });
              "
              class="text-link [-webkit-tap-highlight-color:transparent] items-center bg-transparent [border:0] [color:inherit] gap-x-[18px] cursor-pointer inline-flex text-[12px] font-[650] mt-[8px] min-h-[44px] pb-0 pl-0 pr-0 pt-0 gap-y-[18px] min-[601px]:mt-[15px]"
              type="button"
            >
              看看本地跟读 ↗
            </button>
          </article>
          <article
            class="[border-top:1px_solid_#b4c1a8] pb-0 pl-[47px] pr-0 pt-[18px] relative min-[601px]:pb-[unset] min-[601px]:pl-[unset] min-[601px]:pr-[unset] min-[601px]:pt-[20px] min-[601px]:[position:unset]"
          >
            <span
              class="loop-index [color:#748468] [font-family:Georgia,serif] text-[26px] [font-style:normal] left-0 leading-[1.4] absolute top-[16px] min-[601px]:text-[32px] min-[601px]:left-[unset] min-[601px]:[position:unset] min-[601px]:top-[unset]"
              >03</span
            >
            <h3
              class="text-[22px] tracking-[-.045em] leading-[1.25] mb-[12px] ml-0 mr-0 mt-0 min-[601px]:text-[21px] min-[601px]:mb-[15px] min-[601px]:mt-[20px] min-[961px]:text-[24px]"
            >
              到 Anki，再回忆一次
            </h3>
            <p
              class="[color:#4e6048] text-[13px] leading-[1.9] mb-0 ml-0 mr-0 mt-0 min-[961px]:text-[14px]"
            >
              把原句补进 COCA
              主卡，或发送到生词本。连接配置完成后，将选中的学习内容带到 Anki。
            </p>
            <NuxtLink
              class="text-link [-webkit-tap-highlight-color:transparent] items-center bg-transparent [color:inherit] gap-x-[18px] inline-flex text-[12px] font-[650] mt-[8px] min-h-[44px] pb-0 pl-0 pr-0 pt-0 gap-y-[18px] no-underline min-[601px]:mt-[15px]"
              to="/vocabulary#capture"
              >了解两种发送方式 ↗</NuxtLink
            >
          </article>
        </div>
        <div
          class="anki-bridge items-start [border-top:1px_solid_#bbc8b0] gap-x-[15px] flex flex-wrap mt-[29px] pb-0 pl-0 pr-0 pt-[24px] gap-y-[15px] min-[601px]:items-center min-[601px]:gap-x-[22px] min-[601px]:mt-[37px] min-[601px]:pt-[25px] min-[601px]:gap-y-[22px] min-[961px]:[flex-wrap:unset]"
        >
          <img
            alt="Anki 标志"
            class="rounded-[12px] block h-[43px] max-w-[100%] object-contain w-[43px] min-[601px]:h-[52px] min-[601px]:w-[52px]"
            height="52"
            loading="lazy"
            src="/assets/images/about/anki-logo.png"
            width="52"
          />
          <div class="flex-[1]">
            <h3
              class="text-[15px] tracking-[-.045em] leading-[1.7] mb-0 ml-0 mr-0 mt-0 min-[601px]:text-[17px]"
            >
              读书会负责遇见，Anki 帮你安排复习。
            </h3>
            <p
              class="[color:#53634c] text-[11px] leading-[1.9] mb-0 ml-0 mr-0 mt-[7px] max-w-[820px] min-[601px]:text-[12px]"
            >
              发送前需要在电脑上启动 Anki、安装并启用
              AnkiConnect，配置牌组与字段。未发送的内容可在“待发送中心”检查处理。
            </p>
          </div>
          <NuxtLink
            class="text-link [-webkit-tap-highlight-color:transparent] items-center bg-transparent [color:inherit] gap-x-[18px] inline-flex text-[11px] font-[650] ml-[58px] min-h-[44px] pb-0 pl-0 pr-0 pt-0 gap-y-[18px] no-underline [white-space:normal] min-[601px]:text-[12px] min-[601px]:ml-[74px] min-[601px]:whitespace-nowrap min-[961px]:ml-[unset]"
            to="/about#recall"
            >为什么要主动回忆 ↗</NuxtLink
          >
        </div>
      </div>
    </section>
    <ToolDownloads></ToolDownloads>
    <section
      class="section tool-start pb-[56px] pl-0 pr-0 pt-[15px] min-[601px]:pt-[40px] min-[701px]:pb-[72px] min-[961px]:pb-[96px]"
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
              从一个小目标开始
            </div>
            <h2
              class="text-[29px] font-bold tracking-[-.045em] leading-[1.4] mb-0 ml-0 mr-0 mt-0 max-w-[760px] min-[601px]:text-[34px] min-[961px]:text-[38px]"
            >
              准备好之后，<br />先读一段，或听懂一句。
            </h2>
          </div>
          <p
            class="section-intro [color:var(--muted)] text-[15px] leading-[1.9] mb-0 ml-0 mr-0 mt-[18px] max-w-[640px] min-[701px]:text-[16px] min-[701px]:mt-[24px] min-[961px]:mt-0 min-[961px]:max-w-[330px] min-[1201px]:max-w-[380px]"
          >
            不必一次用完所有功能。<br />围绕今天想读、想看的内容，走完一个小循环。
          </p>
        </div>
        <div
          class="start-pair gap-x-[18px] grid grid-cols-[1fr] gap-y-[18px] min-[601px]:gap-x-[28px] min-[601px]:grid-cols-[1fr_1fr] min-[601px]:gap-y-[28px]"
        >
          <NuxtLink
            class="[-webkit-tap-highlight-color:transparent] [background:var(--green)] text-white block pb-[26px] pl-[26px] pr-[26px] pt-[26px] relative no-underline min-[601px]:pb-[27px] min-[601px]:pl-[27px] min-[601px]:pr-[27px] min-[601px]:pt-[27px] min-[961px]:pb-[32px] min-[961px]:pl-[32px] min-[961px]:pr-[32px] min-[961px]:pt-[32px]"
            to="/little-prince"
          >
            <span class="text-[11px] tracking-[.06em]">开始阅读</span>
            <h3
              class="text-[23px] tracking-[-.045em] leading-[1.4] mb-[13px] ml-0 mr-0 mt-[17px] max-w-[95%] min-[601px]:text-[24px] min-[601px]:max-w-[90%] min-[961px]:text-[26px]"
            >
              从《小王子》共读开始。
            </h3>
            <p
              class="text-[12px] leading-[1.8] mb-0 ml-0 mr-0 mt-0 max-w-[88%] opacity-[.8] min-[601px]:text-[13px] min-[961px]:max-w-[unset]"
            >
              跟着视频，试着读懂第一段英文。
            </p>
            <span
              aria-hidden="true"
              class="start-arrow bottom-[28px] text-[25px] absolute right-[27px]"
              >↗</span
            >
          </NuxtLink>
          <NuxtLink
            class="[-webkit-tap-highlight-color:transparent] [background:var(--lavender)] [color:var(--ink)] block pb-[26px] pl-[26px] pr-[26px] pt-[26px] relative no-underline min-[601px]:pb-[27px] min-[601px]:pl-[27px] min-[601px]:pr-[27px] min-[601px]:pt-[27px] min-[961px]:pb-[32px] min-[961px]:pl-[32px] min-[961px]:pr-[32px] min-[961px]:pt-[32px]"
            to="/vocabulary"
          >
            <span class="text-[11px] tracking-[.06em]">建立积累</span>
            <h3
              class="text-[23px] tracking-[-.045em] leading-[1.4] mb-[13px] ml-0 mr-0 mt-[17px] max-w-[95%] min-[601px]:text-[24px] min-[601px]:max-w-[90%] min-[961px]:text-[26px]"
            >
              让单词带着语境进入记忆。
            </h3>
            <p
              class="text-[12px] leading-[1.8] mb-0 ml-0 mr-0 mt-0 max-w-[88%] opacity-[.8] min-[601px]:text-[13px] min-[961px]:max-w-[unset]"
            >
              了解 COCA、真实例句与 Anki 的配合。
            </p>
            <span
              aria-hidden="true"
              class="start-arrow bottom-[28px] text-[25px] absolute right-[27px]"
              >↗</span
            >
          </NuxtLink>
        </div>
      </div>
    </section>
    <section
      class="section tool-faq [background:#eceee2] pb-[48px] pl-0 pr-0 pt-[48px] min-[601px]:pb-[65px] min-[601px]:pt-[65px]"
      id="faq"
    >
      <div
        class="wrap tool-faq-grid gap-x-[32px] grid grid-cols-[1fr] mb-auto ml-auto mr-auto mt-auto gap-y-[32px] w-[calc(100%_-_40px)] min-[701px]:w-[calc(100%_-_64px)] min-[961px]:gap-x-[55px] min-[961px]:grid-cols-[1fr_1.5fr] min-[961px]:gap-y-[55px] min-[1201px]:gap-x-[80px] min-[1201px]:gap-y-[80px] min-[1201px]:w-[min(1280px,calc(100%_-_112px))]"
      >
        <div>
          <div
            class="eyebrow text-[12px] font-[650] tracking-[.09em] mb-[19px] min-[701px]:text-[13px] min-[701px]:mb-[24px]"
          >
            下载与使用
          </div>
          <h2
            class="text-[29px] font-bold tracking-[-.045em] leading-[1.4] mb-0 ml-0 mr-0 mt-0 min-[601px]:text-[34px] min-[961px]:text-[38px]"
          >
            你可能还想知道。
          </h2>
          <p
            class="[color:var(--muted)] text-[13px] leading-[1.9] mb-0 ml-0 mr-0 mt-[18px] min-[601px]:text-[14px] min-[601px]:mt-[22px]"
          >
            先了解运行方式，<br />再安排适合自己的学习环境。
          </p>
        </div>
        <div>
          <details
            class="[border-bottom:1px_solid_#c9d0bc] [border-top:1px_solid_#c9d0bc]"
          >
            <summary
              class="gap-x-[20px] cursor-pointer flex text-[14px] font-semibold justify-between leading-[1.8] [list-style:none] min-h-[62px] pb-[18px] pl-0 pr-0 pt-[18px] gap-y-[20px] min-[601px]:text-[15px] min-[601px]:min-h-[65px] min-[701px]:pb-[21px] min-[701px]:pt-[21px]"
            >
              现在可以下载安装了吗？
            </summary>
            <p
              class="[color:var(--muted)] text-[12px] leading-[1.9] mb-0 ml-0 mr-0 mt-0 pb-[22px] min-[601px]:text-[13px]"
            >
              可以。0.4.19 版本已提供 Windows 64 位（x64）、macOS Apple
              芯片（ARM64）与 macOS Intel
              芯片（x64）安装包，请在上方选择与你的电脑匹配的版本。不提供
              Windows 32 位安装包。
            </p>
          </details>
          <details class="[border-bottom:1px_solid_#c9d0bc]">
            <summary
              class="gap-x-[20px] cursor-pointer flex text-[14px] font-semibold justify-between leading-[1.8] [list-style:none] min-h-[62px] pb-[18px] pl-0 pr-0 pt-[18px] gap-y-[20px] min-[601px]:text-[15px] min-[601px]:min-h-[65px] min-[701px]:pb-[21px] min-[701px]:pt-[21px]"
            >
              为什么没有自动选中我的 Mac 芯片？
            </summary>
            <p
              class="[color:var(--muted)] text-[12px] leading-[1.9] mb-0 ml-0 mr-0 mt-0 pb-[22px] min-[601px]:text-[13px]"
            >
              部分浏览器只会告诉我们你在使用 Mac，无法可靠区分 Intel 和 Apple
              芯片。可以在“关于本机”中确认，再手动选择。我们不会仅凭浏览器显示的“Intel
              Mac”就推断你的处理器。
            </p>
          </details>
          <details class="[border-bottom:1px_solid_#c9d0bc]">
            <summary
              class="gap-x-[20px] cursor-pointer flex text-[14px] font-semibold justify-between leading-[1.8] [list-style:none] min-h-[62px] pb-[18px] pl-0 pr-0 pt-[18px] gap-y-[20px] min-[601px]:text-[15px] min-[601px]:min-h-[65px] min-[701px]:pb-[21px] min-[701px]:pt-[21px]"
            >
              影片、音频和录音会上传吗？
            </summary>
            <p
              class="[color:var(--muted)] text-[12px] leading-[1.9] mb-0 ml-0 mr-0 mt-0 pb-[22px] min-[601px]:text-[13px]"
            >
              本地影视与跟读使用你选择的媒体文件，跟读录音和相关练习记录保存在本机。账户、在线阅读、查词或
              AI 等服务仍按各自功能联网处理，不等同于整个软件都离线运行。
            </p>
          </details>
          <details class="[border-bottom:1px_solid_#c9d0bc]">
            <summary
              class="gap-x-[20px] cursor-pointer flex text-[14px] font-semibold justify-between leading-[1.8] [list-style:none] min-h-[62px] pb-[18px] pl-0 pr-0 pt-[18px] gap-y-[20px] min-[601px]:text-[15px] min-[601px]:min-h-[65px] min-[701px]:pb-[21px] min-[701px]:pt-[21px]"
            >
              网页与客户端的跟读记录会自动同步吗？
            </summary>
            <p
              class="[color:var(--muted)] text-[12px] leading-[1.9] mb-0 ml-0 mr-0 mt-0 pb-[22px] min-[601px]:text-[13px]"
            >
              目前不会。网页与客户端分别保存本地练习，可通过支持的备份导出、导入方式迁移。清理浏览器站点数据前，请先保存需要保留的跟读记录。
            </p>
          </details>
          <details class="[border-bottom:1px_solid_#c9d0bc]">
            <summary
              class="gap-x-[20px] cursor-pointer flex text-[14px] font-semibold justify-between leading-[1.8] [list-style:none] min-h-[62px] pb-[18px] pl-0 pr-0 pt-[18px] gap-y-[20px] min-[601px]:text-[15px] min-[601px]:min-h-[65px] min-[701px]:pb-[21px] min-[701px]:pt-[21px]"
            >
              使用 Anki 需要准备什么？
            </summary>
            <p
              class="[color:var(--muted)] text-[12px] leading-[1.9] mb-0 ml-0 mr-0 mt-0 pb-[22px] min-[601px]:text-[13px]"
            >
              需要在电脑上安装并启动 Anki，启用
              AnkiConnect，并在读书会中配置连接、牌组和字段。发送失败时，检查本地连接，再到待发送中心查看处理状态。
            </p>
          </details>
          <details class="[border-bottom:1px_solid_#c9d0bc]">
            <summary
              class="gap-x-[20px] cursor-pointer flex text-[14px] font-semibold justify-between leading-[1.8] [list-style:none] min-h-[62px] pb-[18px] pl-0 pr-0 pt-[18px] gap-y-[20px] min-[601px]:text-[15px] min-[601px]:min-h-[65px] min-[701px]:pb-[21px] min-[701px]:pt-[21px]"
            >
              跟读会自动评分或纠正发音吗？
            </summary>
            <p
              class="[color:var(--muted)] text-[12px] leading-[1.9] mb-0 ml-0 mr-0 mt-0 pb-[22px] min-[601px]:text-[13px]"
            >
              这里展示的是听原声、录音和交替对比的练习方式，不提供自动发音评分。阅读原音需要自行添加；自动定位的候选片段需要试听确认，也可以手动调整。跟读功能仍需完成目标平台的实机验收。
            </p>
          </details>
        </div>
      </div>
    </section>
    <ToolGallery
      :initial-shot="galleryShot"
      v-model="galleryOpen"
    ></ToolGallery>
  </main>
</template>
