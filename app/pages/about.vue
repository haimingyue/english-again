<script setup lang="ts">
const { openImage } = useImagePreview();
const selectedMethod = ref("spacing");
usePageSeo(
  "学习方法与项目介绍",
  "从主动回忆、间隔练习和真实使用出发，了解英语自学指北的学习方法与参考依据。",
);
definePageMeta({ alias: "/about.html" });
</script>

<template>
  <main data-page="about" id="main" tabindex="-1">
    <section
      class="hero about-hero [background:var(--green)] text-white pb-[50px] pl-0 pr-0 pt-[40px] min-[701px]:pb-[72px] min-[701px]:pt-[68px] min-[1600px]:pb-[88px] min-[1600px]:pt-[88px]"
    >
      <div
        class="wrap about-hero-grid items-center gap-x-[38px] grid grid-cols-[1fr] mb-auto ml-auto mr-auto mt-auto gap-y-[38px] w-[calc(100%_-_40px)] min-[701px]:gap-x-[35px] min-[701px]:grid-cols-[1.15fr_1fr] min-[701px]:gap-y-[35px] min-[701px]:w-[calc(100%_-_64px)] min-[961px]:gap-x-[50px] min-[961px]:gap-y-[50px] min-[1201px]:gap-x-[80px] min-[1201px]:gap-y-[80px] min-[1201px]:w-[min(1280px,calc(100%_-_112px))]"
      >
        <div class="hero-copy">
          <div
            class="eyebrow items-center [color:#f7df75] gap-x-[12px] flex text-[12px] font-[650] tracking-[.09em] mb-[20px] gap-y-[12px] min-[701px]:text-[13px] min-[701px]:mb-[24px]"
          >
            <span
              aria-hidden="true"
              class="tiny-line bg-current h-[2px] w-[22px]"
            >
            </span
            >关于这套方法 · 学会怎样学习
          </div>
          <h1
            class="text-[44px] font-[750] tracking-[-.045em] leading-[1.3] mb-0 ml-0 mr-0 mt-0 max-w-[680px] min-[701px]:text-[46px] min-[961px]:text-[55px] min-[1201px]:text-[64px] min-[1600px]:text-[70px]"
          >
            学过的英语，<br />记得住，<br />也能<span
              class="design-underline relative whitespace-nowrap"
              >用起来。</span
            >
          </h1>
          <p
            class="hero-lede [color:#dce9df] text-[15px] leading-[1.9] mb-[25px] ml-0 mr-0 mt-[23px] min-[701px]:mb-[34px] min-[701px]:mt-[30px] min-[961px]:text-[17px]"
          >
            从 Make It Stick 出发，把学习科学变成每天的小练习。<br
              class="desktop-break hidden min-[961px]:[display:unset]"
            />先理解，再回忆；隔一阵子，再换个场景用一次。
          </p>
          <div
            class="actions items-center gap-x-[23px] flex flex-wrap gap-y-[14px] min-[701px]:gap-x-[14px] min-[961px]:gap-x-[26px] min-[961px]:gap-y-[26px]"
          >
            <a
              class="btn btn-yellow [-webkit-tap-highlight-color:transparent] items-center [background:var(--yellow)] rounded-full [color:var(--ink)] gap-x-[28px] inline-flex text-[14px] font-[650] justify-center min-h-[50px] pb-[12px] pl-[22px] pr-[22px] pt-[12px] gap-y-[28px] no-underline [transition:background_.18s,transform_.18s] min-[961px]:text-[16px] min-[961px]:min-h-[56px] min-[961px]:pb-[14px] min-[961px]:pl-[28px] min-[961px]:pr-[28px] min-[961px]:pt-[14px]"
              href="#recall"
              >体验一次主动回忆 <span aria-hidden="true">↓</span>
            </a>
            <a
              class="text-link light-link [-webkit-tap-highlight-color:transparent] items-center bg-transparent text-white gap-x-[18px] inline-flex text-[13px] font-[650] min-h-[44px] pb-0 pl-0 pr-0 pt-0 gap-y-[18px] no-underline min-[701px]:text-[14px] min-[961px]:text-[15px]"
              href="#sources"
              >方法从哪里来 ↗</a
            >
          </div>
          <div
            class="hero-note items-center [color:#d8e3d4] gap-x-[9px] flex text-[11px] leading-[1.8] mt-[22px] gap-y-[9px] min-[701px]:text-[10px] min-[701px]:leading-[unset] min-[701px]:mt-[26px] min-[961px]:text-[12px] min-[961px]:mt-[40px]"
          >
            25 周打基础 · Anki 帮助复习 · 在真实生活里继续学
          </div>
        </div>
        <aside
          aria-label="Make It Stick 学习方法"
          class="hero-editorial [background:#e4e8d6] [box-shadow:11px_12px_0_#194538] [color:var(--ink)] mb-0 ml-auto mr-auto mt-0 max-w-[410px] pb-[20px] pl-[25px] pr-[25px] pt-[20px] relative [transform:rotate(2deg)] w-[calc(100%_-_14px)] min-[701px]:mb-[unset] min-[701px]:ml-[unset] min-[701px]:mr-[unset] min-[701px]:mt-[unset] min-[701px]:max-w-[unset] min-[701px]:pl-[20px] min-[701px]:pr-[20px] min-[701px]:w-[unset] min-[961px]:pb-[22px] min-[961px]:pl-[22px] min-[961px]:pr-[22px] min-[961px]:pt-[22px] min-[1201px]:pb-[25px] min-[1201px]:pl-[30px] min-[1201px]:pr-[30px] min-[1201px]:pt-[24px]"
        >
          <div
            class="editorial-top [border-bottom:1px_solid_#a8b4a3] flex text-[9px] justify-between tracking-[.07em] pb-[15px] min-[701px]:text-[8px] min-[961px]:text-[10px] min-[961px]:tracking-[.13em]"
          >
            <span>THE SCIENCE OF LEARNING</span>
            <span>01—04</span>
          </div>
          <div
            class="hero-book-stage items-center flex justify-center pb-[25px] pl-[30px] pr-[30px] pt-[25px] relative min-[701px]:pb-[26px] min-[701px]:pl-[15px] min-[701px]:pr-[15px] min-[701px]:pt-[26px] min-[961px]:pb-[28px] min-[961px]:pl-[30px] min-[961px]:pr-[30px] min-[961px]:pt-[28px] min-[1201px]:pb-[22px] min-[1201px]:pl-[35px] min-[1201px]:pr-[35px] min-[1201px]:pt-[27px]"
          >
            <span
              class="book-side-note text-[11px] left-0 tracking-[.15em] leading-[1.8] absolute top-[38px] [writing-mode:vertical-rl] min-[701px]:text-[10px] min-[701px]:top-[44px] min-[961px]:text-[12px]"
              >从「熟悉」<br />走向「掌握」</span
            >
            <img
              alt="Make It Stick: The Science of Successful Learning 书封"
              class="hero-book [box-shadow:9px_12px_20px_#17282030] block h-auto max-w-[100%] [transform:rotate(-7deg)] w-[164px] min-[701px]:w-[155px] min-[961px]:w-[185px] min-[1201px]:w-[205px] min-[1600px]:w-[220px]"
              height="539"
              loading="eager"
              src="/assets/images/books/make-it-stick.png"
              width="371"
            />
            <span
              class="book-sticker items-center [background:var(--yellow)] rounded-full bottom-[26px] flex flex-col text-[13px] h-[94px] justify-center leading-[1.6] absolute right-0 [transform:rotate(-10deg)] w-[94px] min-[701px]:bottom-[28px] min-[701px]:h-[85px] min-[701px]:right-[-8px] min-[701px]:w-[85px] min-[961px]:bottom-[36px] min-[961px]:h-[95px] min-[961px]:right-[-6px] min-[961px]:w-[95px] min-[1201px]:text-[15px] min-[1201px]:h-[112px] min-[1201px]:w-[112px]"
              >先试着<br />
              <b class="text-[19px] min-[1201px]:text-[22px]">想起来</b>
              <span aria-hidden="true" class="text-[22px] leading-[1]">↗</span>
            </span>
          </div>
          <div
            class="editorial-bottom [border-top:1px_solid_#a8b4a3] gap-x-[3px] flex flex-col text-[12px] pt-[16px] gap-y-[3px]"
          >
            <span
              class="text-[11px] min-[701px]:text-[10px] min-[961px]:text-[unset]"
              >学习不是只把内容再看一遍。</span
            >
            <strong
              class="text-[18px] tracking-[-.02em] min-[701px]:text-[16px] min-[961px]:text-[19px]"
              >给记忆一次工作的机会。</strong
            >
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
          href="#principle"
        >
          <span
            class="[color:#52644f] text-[11px] font-normal min-[701px]:text-[13px]"
            >01</span
          >理解学习原理
          <span
            aria-hidden="true"
            class="route-arrow [color:#52644f] hidden ml-auto min-[701px]:[display:unset]"
            >↘</span
          >
        </a>
        <a
          class="[-webkit-tap-highlight-color:transparent] items-center [border-left:1px_solid_#bac4b3] [color:inherit] gap-x-[4px] flex flex-col text-[11px] font-semibold justify-center leading-[1.6] min-h-[52px] pl-0 gap-y-[4px] no-underline min-[701px]:gap-x-[12px] min-[701px]:[flex-direction:unset] min-[701px]:text-[13px] min-[701px]:[justify-content:unset] min-[701px]:leading-[unset] min-[701px]:min-h-[44px] min-[701px]:pl-[22px] min-[701px]:gap-y-[12px] min-[961px]:gap-x-[20px] min-[961px]:text-[15px] min-[961px]:pl-[40px] min-[961px]:gap-y-[20px]"
          href="#recall"
        >
          <span
            class="[color:#52644f] text-[11px] font-normal min-[701px]:text-[13px]"
            >02</span
          >体验卡片复习
          <span
            aria-hidden="true"
            class="route-arrow [color:#52644f] hidden ml-auto min-[701px]:[display:unset]"
            >↘</span
          >
        </a>
        <a
          class="[-webkit-tap-highlight-color:transparent] items-center [border-left:1px_solid_#bac4b3] [color:inherit] gap-x-[4px] flex flex-col text-[11px] font-semibold justify-center leading-[1.6] min-h-[52px] pl-0 gap-y-[4px] no-underline min-[701px]:gap-x-[12px] min-[701px]:[flex-direction:unset] min-[701px]:text-[13px] min-[701px]:[justify-content:unset] min-[701px]:leading-[unset] min-[701px]:min-h-[44px] min-[701px]:pl-[22px] min-[701px]:gap-y-[12px] min-[961px]:gap-x-[20px] min-[961px]:text-[15px] min-[961px]:pl-[40px] min-[961px]:gap-y-[20px]"
          href="#everyday"
        >
          <span
            class="[color:#52644f] text-[11px] font-normal min-[701px]:text-[13px]"
            >03</span
          >安排每天的学习
          <span
            aria-hidden="true"
            class="route-arrow [color:#52644f] hidden ml-auto min-[701px]:[display:unset]"
            >↘</span
          >
        </a>
      </div>
    </nav>
    <section
      class="section principle-section pb-[56px] pl-0 pr-0 pt-[56px] min-[701px]:pb-[72px] min-[701px]:pt-[72px] min-[961px]:pb-[96px] min-[961px]:pt-[96px]"
      id="principle"
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
              先换一个判断标准
            </div>
            <h2
              class="text-[31px] font-bold tracking-[-.045em] leading-[1.35] mb-0 ml-0 mr-0 mt-0 max-w-[760px] min-[701px]:text-[38px] min-[701px]:leading-[1.25] min-[1201px]:text-[44px]"
            >
              现在看得懂，<br />过几天，还能想起来吗？
            </h2>
          </div>
          <p
            class="section-intro [color:var(--muted)] text-[15px] leading-[1.9] mb-0 ml-0 mr-0 mt-[18px] max-w-[640px] min-[701px]:text-[16px] min-[701px]:mt-[24px] min-[961px]:mt-0 min-[961px]:max-w-[330px] min-[1201px]:max-w-[380px]"
          >
            反复阅读会让内容越来越熟悉。但要知道自己是否掌握，可以合上材料试一次，再隔一段时间、换一个情境试一次。
          </p>
        </div>
        <div
          class="familiarity-grid items-center gap-x-[26px] grid grid-cols-[1fr] gap-y-[26px] min-[701px]:gap-x-[30px] min-[701px]:grid-cols-[.9fr_1.1fr] min-[701px]:gap-y-[30px] min-[961px]:gap-x-[45px] min-[961px]:grid-cols-[.8fr_1.2fr] min-[961px]:gap-y-[45px] min-[1201px]:gap-x-[75px] min-[1201px]:gap-y-[75px]"
        >
          <div
            class="familiarity-copy items-center gap-x-[10px] grid grid-cols-[1fr_22px_1fr] gap-y-[10px] min-[701px]:[align-items:unset] min-[701px]:gap-x-[unset] min-[701px]:[display:unset] min-[701px]:grid-cols-[unset] min-[701px]:gap-y-[unset]"
          >
            <div
              class="learning-shift [color:var(--muted)] gap-x-[5px] flex flex-col gap-y-[5px]"
            >
              <span class="text-[11px] min-[701px]:text-[12px]">看着答案</span>
              <strong
                class="text-[19px] font-medium tracking-[-.035em] leading-[1.5] min-[701px]:text-[23px] min-[701px]:leading-[unset] min-[961px]:text-[26px]"
                >“这个我知道。”</strong
              >
            </div>
            <span
              aria-hidden="true"
              class="shift-arrow [color:#869480] block text-[22px] mb-0 ml-0 mr-0 mt-0 [transform:rotate(-90deg)] min-[701px]:text-[30px] min-[701px]:mb-[8px] min-[701px]:mt-[8px] min-[701px]:[transform:unset]"
              >↓</span
            >
            <div
              class="learning-shift active [color:var(--ink)] gap-x-[5px] flex flex-col gap-y-[5px]"
            >
              <span class="text-[11px] min-[701px]:text-[12px]">合上答案</span>
              <strong
                class="text-[19px] font-bold tracking-[-.035em] leading-[1.5] min-[701px]:text-[23px] min-[701px]:leading-[unset] min-[961px]:text-[26px]"
                >“我能自己说出来。”</strong
              >
            </div>
            <p
              class="[color:var(--muted)] text-[13px] [grid-column:1/-1] leading-[1.9] mb-0 ml-0 mr-0 mt-[12px] min-[701px]:[grid-column:unset] min-[701px]:mt-[25px] min-[961px]:text-[14px]"
            >
              有一点费力的回忆，可能正是练习的价值。<br />想不起来时，及时核对、补足理解，再回来练。
            </p>
            <a
              class="text-link [-webkit-tap-highlight-color:transparent] items-center bg-transparent [color:inherit] gap-x-[18px] inline-flex text-[13px] font-[650] [grid-column:1/-1] [justify-self:start] min-h-[44px] pb-0 pl-0 pr-0 pt-0 gap-y-[18px] no-underline min-[701px]:[grid-column:unset] min-[701px]:[justify-self:unset]"
              href="#practice"
              >看看如何把练习分散开 ↓</a
            >
          </div>
          <figure class="diagram-figure mb-0 ml-0 mr-0 mt-0">
            <button
              @click="
                openImage({
                  src: '/assets/images/about/massed-spaced.jpg',
                  alt: '手绘图比较把练习集中在一天和分散在多天的安排，配有记忆变化示意曲线',
                  title: '集中练习与间隔练习',
                })
              "
              aria-label="放大集中练习与间隔练习示意图"
              class="zoom-image [-webkit-tap-highlight-color:transparent] bg-transparent [border:0] [color:var(--ink)] [cursor:zoom-in] block pb-0 pl-0 pr-0 pt-0 relative text-left w-full"
              type="button"
            >
              <img
                alt="手绘图比较把练习集中在一天和分散在多天的安排，配有记忆变化示意曲线"
                class="bg-white block max-h-[435px] max-w-[100%] object-contain w-full"
                loading="lazy"
                src="/assets/images/about/massed-spaced.jpg"
              />
              <span
                class="[background:var(--paper)] [border:1px_solid_var(--line)] rounded-[20px] bottom-[12px] [box-shadow:0_2px_8px_#00000009] text-[11px] pb-[7px] pl-[12px] pr-[12px] pt-[7px] absolute right-[12px]"
                >查看原图 ↗</span
              >
            </button>
            <figcaption
              class="[color:var(--muted)] text-[10px] mt-[12px] min-[701px]:text-[11px]"
            >
              学习方法手绘笔记 · 曲线为示意，不代表个人记忆预测
            </figcaption>
          </figure>
        </div>
        <div
          aria-label="四种学习实践"
          class="principle-strip [border-top:1px_solid_#c6cebf] gap-x-[20px] grid grid-cols-[1fr_1fr] mt-[30px] pt-[23px] gap-y-[23px] min-[701px]:gap-x-[24px] min-[701px]:grid-cols-[repeat(4,1fr)] min-[701px]:mt-[48px] min-[701px]:gap-y-[24px]"
        >
          <a
            class="[-webkit-tap-highlight-color:transparent] [color:inherit] gap-x-[7px] flex flex-col min-h-[54px] gap-y-[7px] no-underline min-[701px]:gap-x-[10px] min-[701px]:min-h-[64px] min-[701px]:gap-y-[10px]"
            href="#recall"
          >
            <span
              class="[color:var(--muted)] text-[9px] tracking-[.09em] min-[961px]:text-[10px]"
              >01 / RETRIEVE</span
            >
            <strong
              class="text-[20px] min-[701px]:text-[18px] min-[961px]:text-[21px]"
              >先自己回忆</strong
            >
          </a>
          <a
            @click="selectedMethod = 'spacing'"
            class="[-webkit-tap-highlight-color:transparent] [color:inherit] gap-x-[7px] flex flex-col min-h-[54px] gap-y-[7px] no-underline min-[701px]:gap-x-[10px] min-[701px]:min-h-[64px] min-[701px]:gap-y-[10px]"
            href="#practice"
          >
            <span
              class="[color:var(--muted)] text-[9px] tracking-[.09em] min-[961px]:text-[10px]"
              >02 / SPACE</span
            >
            <strong
              class="text-[20px] min-[701px]:text-[18px] min-[961px]:text-[21px]"
              >隔一阵再练</strong
            >
          </a>
          <a
            @click="selectedMethod = 'interleaving'"
            class="[-webkit-tap-highlight-color:transparent] [color:inherit] gap-x-[7px] flex flex-col min-h-[54px] gap-y-[7px] no-underline min-[701px]:gap-x-[10px] min-[701px]:min-h-[64px] min-[701px]:gap-y-[10px]"
            href="#practice"
          >
            <span
              class="[color:var(--muted)] text-[9px] tracking-[.09em] min-[961px]:text-[10px]"
              >03 / INTERLEAVE</span
            >
            <strong
              class="text-[20px] min-[701px]:text-[18px] min-[961px]:text-[21px]"
              >混合着辨别</strong
            >
          </a>
          <a
            @click="selectedMethod = 'variation'"
            class="[-webkit-tap-highlight-color:transparent] [color:inherit] gap-x-[7px] flex flex-col min-h-[54px] gap-y-[7px] no-underline min-[701px]:gap-x-[10px] min-[701px]:min-h-[64px] min-[701px]:gap-y-[10px]"
            href="#practice"
          >
            <span
              class="[color:var(--muted)] text-[9px] tracking-[.09em] min-[961px]:text-[10px]"
              >04 / VARY</span
            >
            <strong
              class="text-[20px] min-[701px]:text-[18px] min-[961px]:text-[21px]"
              >换个情境用</strong
            >
          </a>
        </div>
      </div>
    </section>
    <RecallDemo></RecallDemo>
    <PracticeMethods v-model="selectedMethod"></PracticeMethods>
    <section
      class="section everyday-section [background:#e7ebde] pb-[56px] pl-0 pr-0 pt-[56px] min-[701px]:pb-[72px] min-[701px]:pt-[72px] min-[961px]:pb-[96px] min-[961px]:pt-[96px]"
      id="everyday"
    >
      <div
        class="wrap everyday-grid [align-items:start] gap-x-[33px] grid grid-cols-[1fr] mb-auto ml-auto mr-auto mt-auto gap-y-[33px] w-[calc(100%_-_40px)] min-[701px]:gap-x-[36px] min-[701px]:grid-cols-[1.1fr_1fr] min-[701px]:gap-y-[36px] min-[701px]:w-[calc(100%_-_64px)] min-[961px]:gap-x-[60px] min-[961px]:gap-y-[60px] min-[1201px]:gap-x-[100px] min-[1201px]:gap-y-[100px] min-[1201px]:w-[min(1280px,calc(100%_-_112px))]"
      >
        <div>
          <div
            class="eyebrow text-[12px] font-[650] tracking-[.09em] mb-[19px] min-[701px]:text-[13px] min-[701px]:mb-[24px]"
          >
            让方法成为习惯
          </div>
          <h2
            class="text-[31px] font-bold tracking-[-.045em] leading-[1.35] mb-0 ml-0 mr-0 mt-0 min-[701px]:text-[38px] min-[701px]:leading-[1.25] min-[1201px]:text-[44px]"
          >
            每天走一小圈，<br />让英语留在生活里。
          </h2>
          <p
            class="everyday-lede [color:var(--muted)] text-[14px] leading-[1.9] mb-[24px] ml-0 mr-0 mt-[20px] min-[701px]:text-[15px] min-[701px]:mb-[28px] min-[701px]:mt-[25px]"
          >
            从第一周就开始小范围使用英语。<br />25
            周之后，把更多时间投入自己感兴趣的内容。
          </p>
          <ol
            class="daily-loop gap-x-0 grid [list-style:none] mb-0 ml-0 mr-0 mt-0 pb-0 pl-0 pr-0 pt-0 gap-y-0"
          >
            <li
              class="[border-top:1px_solid_#c1cab8] gap-x-[18px] flex pb-[18px] pl-0 pr-0 pt-[18px] gap-y-[18px] min-[701px]:gap-x-[23px] min-[701px]:pb-[21px] min-[701px]:pt-[21px] min-[701px]:gap-y-[23px]"
            >
              <span class="[color:#53664e] text-[14px] pt-[2px]">01</span>
              <div>
                <h3
                  class="text-[21px] tracking-[-.045em] leading-[1.25] mb-0 ml-0 mr-0 mt-0"
                >
                  先回忆一点旧的
                </h3>
                <p
                  class="[color:var(--muted)] text-[13px] leading-[1.85] mb-0 ml-0 mr-0 mt-[9px] min-[701px]:text-[14px]"
                >
                  完成到期复习，先回答再看答案。复习负担大时，减少新增内容。
                </p>
              </div>
            </li>
            <li
              class="[border-top:1px_solid_#c1cab8] gap-x-[18px] flex pb-[18px] pl-0 pr-0 pt-[18px] gap-y-[18px] min-[701px]:gap-x-[23px] min-[701px]:pb-[21px] min-[701px]:pt-[21px] min-[701px]:gap-y-[23px]"
            >
              <span class="[color:#53664e] text-[14px] pt-[2px]">02</span>
              <div>
                <h3
                  class="text-[21px] tracking-[-.045em] leading-[1.25] mb-0 ml-0 mr-0 mt-0"
                >
                  再理解一点新的
                </h3>
                <p
                  class="[color:var(--muted)] text-[13px] leading-[1.85] mb-0 ml-0 mr-0 mt-[9px] min-[701px]:text-[14px]"
                >
                  观看每周视频，学一个发音、句型或词语。遇到不懂的，先解决理解。
                </p>
              </div>
            </li>
            <li
              class="[border-top:1px_solid_#c1cab8] gap-x-[18px] flex pb-[18px] pl-0 pr-0 pt-[18px] gap-y-[18px] min-[701px]:gap-x-[23px] min-[701px]:pb-[21px] min-[701px]:pt-[21px] min-[701px]:gap-y-[23px]"
            >
              <span class="[color:#53664e] text-[14px] pt-[2px]">03</span>
              <div>
                <h3
                  class="text-[21px] tracking-[-.045em] leading-[1.25] mb-0 ml-0 mr-0 mt-0"
                >
                  在真实内容里用一次
                </h3>
                <p
                  class="[color:var(--muted)] text-[13px] leading-[1.85] mb-0 ml-0 mr-0 mt-[9px] min-[701px]:text-[14px]"
                >
                  读一段、听一段，或说写几句话。留下与自己有关、值得再练的表达。
                </p>
              </div>
            </li>
            <li
              class="[border-top:1px_solid_#c1cab8] gap-x-[18px] flex pb-[18px] pl-0 pr-0 pt-[18px] gap-y-[18px] min-[701px]:gap-x-[23px] min-[701px]:pb-[21px] min-[701px]:pt-[21px] min-[701px]:gap-y-[23px]"
            >
              <span class="[color:#53664e] text-[14px] pt-[2px]">04</span>
              <div>
                <h3
                  class="text-[21px] tracking-[-.045em] leading-[1.25] mb-0 ml-0 mr-0 mt-0"
                >
                  核对反馈，下次再来
                </h3>
                <p
                  class="[color:var(--muted)] text-[13px] leading-[1.85] mb-0 ml-0 mr-0 mt-[9px] min-[701px]:text-[14px]"
                >
                  查证表达、修正错误。反复答错的卡片，拆小问题或补充明确的提示。
                </p>
              </div>
            </li>
          </ol>
        </div>
        <aside
          class="habit-panel [background:var(--paper)] [box-shadow:10px_10px_0_#cdd5c4] mb-0 ml-0 mr-[7px] mt-0 pb-[22px] pl-[24px] pr-[24px] pt-[22px] [transform:rotate(1deg)] min-[701px]:mb-[unset] min-[701px]:ml-[unset] min-[701px]:mr-[unset] min-[701px]:mt-[7px] min-[701px]:pb-[23px] min-[701px]:pl-[22px] min-[701px]:pr-[22px] min-[701px]:pt-[23px] min-[961px]:pl-[30px] min-[961px]:pr-[30px] min-[961px]:pt-[28px]"
        >
          <div
            class="habit-heading [border-bottom:1px_solid_var(--line)] flex text-[11px] justify-between pb-[19px]"
          >
            <span>一份真实的学习记录</span>
            <span aria-hidden="true">↗</span>
          </div>
          <h3
            class="text-[28px] tracking-[-.045em] leading-[1.4] mb-[21px] ml-0 mr-0 mt-[21px] min-[701px]:text-[27px] min-[701px]:mb-[22px] min-[701px]:mt-[22px] min-[961px]:text-[31px]"
          >
            让每次回来，<br />都留下痕迹。
          </h3>
          <button
            @click="
              openImage({
                src: '/assets/images/about/anki-calendar.png',
                alt: '个人 Anki 统计中的 2026 年学习日历，蓝色方格记录不同日期的复习情况',
                title: 'Anki 学习日历与复习记录',
              })
            "
            aria-label="查看 Anki 学习日历完整截图"
            class="calendar-crop zoom-image [-webkit-tap-highlight-color:transparent] [aspect-ratio:2.35] bg-white [border:0] rounded-[5px] [color:var(--ink)] [cursor:zoom-in] block overflow-hidden pb-0 pl-0 pr-0 pt-0 relative text-left w-full"
            type="button"
          >
            <img
              alt="个人 Anki 统计中的 2026 年学习日历，蓝色方格记录不同日期的复习情况"
              class="block ml-[-15.5%] mt-[-23%] max-w-[none] w-[131%]"
              loading="lazy"
              src="/assets/images/about/anki-calendar.png"
            />
            <span
              class="[background:var(--paper)] [border:1px_solid_var(--line)] rounded-[20px] bottom-[8px] [box-shadow:0_2px_8px_#00000009] text-[10px] pb-[7px] pl-[12px] pr-[12px] pt-[7px] absolute right-[8px]"
              >查看学习记录 ↗</span
            >
          </button>
          <p
            class="text-[14px] leading-[2] mb-[18px] ml-0 mr-0 mt-[24px] min-[701px]:text-[15px]"
          >
            方格记录了练习的发生。<br />真正的检验，是过一阵子还能回忆，<br />换一个场景也能运用。
          </p>
          <div
            class="habit-footnote [border-top:1px_solid_var(--line)] [color:var(--muted)] text-[11px] pt-[17px]"
          >
            个人使用示例，不是每日任务量或学习效果承诺。
          </div>
          <button
            @click="
              openImage({
                src: '/assets/images/about/anki-schedule.png',
                alt: 'Anki 未来到期复习安排',
                title: 'Anki 未来到期复习安排',
              })
            "
            class="text-link [-webkit-tap-highlight-color:transparent] items-center bg-transparent [border:0] [color:inherit] gap-x-[18px] cursor-pointer inline-flex text-[12px] font-[650] mt-[7px] min-h-[44px] pb-0 pl-0 pr-0 pt-0 gap-y-[18px]"
            type="button"
          >
            再看看复习如何排到之后 ↗
          </button>
        </aside>
      </div>
    </section>
    <section
      class="section sources-section pb-[56px] pl-0 pr-0 pt-[56px] min-[701px]:pb-[72px] min-[701px]:pt-[72px] min-[961px]:pb-[96px] min-[961px]:pt-[96px]"
      id="sources"
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
              学习原理、语言方法，<br />和一条能走下去的路。
            </h2>
          </div>
          <p
            class="section-intro [color:var(--muted)] text-[15px] leading-[1.9] mb-0 ml-0 mr-0 mt-[18px] max-w-[380px] min-[701px]:text-[16px] min-[701px]:mt-[24px] min-[961px]:mt-0"
          >
            以 Make It Stick
            的学习原则为主线，结合语言学习方法与成人自学经验，整理成这个项目的实践安排。
          </p>
        </div>
        <div
          class="source-books gap-x-[35px] grid grid-cols-[1fr] gap-y-[35px] min-[701px]:gap-x-[22px] min-[701px]:grid-cols-[repeat(3,1fr)] min-[701px]:gap-y-[22px] min-[961px]:gap-x-[32px] min-[961px]:gap-y-[32px]"
        >
          <article class="source-book">
            <div
              class="source-book-visual mint items-center bg-sage flex h-[220px] justify-center mb-[22px] min-[701px]:h-[218px] min-[701px]:mb-[25px] min-[961px]:h-[252px]"
            >
              <img
                alt="Make It Stick 书封"
                class="[box-shadow:7px_7px_12px_#17282020] block h-[180px] max-w-[70%] object-contain [transform:rotate(-4deg)] w-auto min-[701px]:h-[175px] min-[961px]:h-[202px]"
                loading="lazy"
                src="/assets/images/books/make-it-stick.png"
              />
            </div>
            <span
              class="small-label [color:var(--muted)] block text-[11px] tracking-[.06em]"
              >01 / 理解学习与记忆</span
            >
            <h3
              class="text-[25px] tracking-[-.045em] leading-[1.25] mb-[10px] ml-0 mr-0 mt-[10px] min-[701px]:text-[21px] min-[701px]:mb-[14px] min-[701px]:mt-[13px] min-[961px]:text-[23px] min-[1201px]:text-[26px]"
            >
              Make It Stick
            </h3>
            <p
              class="[color:var(--muted)] text-[14px] leading-[1.9] mb-[10px] ml-0 mr-0 mt-0 min-[701px]:text-[13px] min-[961px]:text-[14px]"
            >
              提取、间隔与交织练习，以及如何检验“我真的学会了吗”。为这个页面提供主要的学习原则。
            </p>
            <NuxtLink
              class="text-link [-webkit-tap-highlight-color:transparent] items-center bg-transparent [color:inherit] gap-x-[18px] inline-flex text-[13px] font-[650] min-h-[44px] pb-0 pl-0 pr-0 pt-0 gap-y-[18px] no-underline"
              to="/make-it-stick"
              >观看读书视频 ↗</NuxtLink
            >
          </article>
          <article class="source-book">
            <div
              class="source-book-visual lilac items-center bg-lavender flex h-[220px] justify-center mb-[22px] min-[701px]:h-[218px] min-[701px]:mb-[25px] min-[961px]:h-[252px]"
            >
              <img
                alt="Gabriel Wyner 的 Fluent Forever 书封"
                class="[box-shadow:7px_7px_12px_#17282020] block h-[180px] max-w-[70%] object-contain [transform:rotate(-4deg)] w-auto min-[701px]:h-[175px] min-[961px]:h-[202px]"
                loading="lazy"
                src="/assets/images/books/fluent-forever.png"
              />
            </div>
            <span
              class="small-label [color:var(--muted)] block text-[11px] tracking-[.06em]"
              >02 / 把原理放进语言学习</span
            >
            <h3
              class="text-[25px] tracking-[-.045em] leading-[1.25] mb-[10px] ml-0 mr-0 mt-[10px] min-[701px]:text-[21px] min-[701px]:mb-[14px] min-[701px]:mt-[13px] min-[961px]:text-[23px] min-[1201px]:text-[26px]"
            >
              Fluent Forever
            </h3>
            <p
              class="[color:var(--muted)] text-[14px] leading-[1.9] mb-[10px] ml-0 mr-0 mt-0 min-[701px]:text-[13px] min-[961px]:text-[14px]"
            >
              从声音入手，用画面和语境建立联系，把词汇与语法拆成可以回忆的小问题，再用间隔复习巩固。
            </p>
            <NuxtLink
              class="text-link [-webkit-tap-highlight-color:transparent] items-center bg-transparent [color:inherit] gap-x-[18px] inline-flex text-[13px] font-[650] min-h-[44px] pb-0 pl-0 pr-0 pt-0 gap-y-[18px] no-underline"
              to="/fluent-forever"
              >观看读书视频 ↗</NuxtLink
            >
          </article>
          <article class="source-book">
            <div
              class="source-book-visual yellow items-center [background:#f1dfb7] flex h-[220px] justify-center mb-[22px] min-[701px]:h-[218px] min-[701px]:mb-[25px] min-[961px]:h-[252px]"
            >
              <img
                alt="郝海龙《英语自学手册》封面，橙色背景，英文副标题 A Self-Study Guide to English"
                class="[box-shadow:7px_7px_12px_#17282020] block h-[180px] max-w-[70%] object-contain [transform:rotate(-4deg)] w-auto min-[701px]:h-[175px] min-[961px]:h-[202px]"
                loading="lazy"
                src="/assets/images/books/english-self-study-guide.png"
              />
            </div>
            <span
              class="small-label [color:var(--muted)] block text-[11px] tracking-[.06em]"
              >03 / 自学路径参考 · 郝海龙</span
            >
            <h3
              class="text-[25px] tracking-[-.045em] leading-[1.25] mb-[10px] ml-0 mr-0 mt-[10px] min-[701px]:text-[21px] min-[701px]:mb-[14px] min-[701px]:mt-[13px] min-[961px]:text-[23px] min-[1201px]:text-[26px]"
            >
              英语自学手册
            </h3>
            <p
              class="[color:var(--muted)] text-[14px] leading-[1.9] mb-[10px] ml-0 mr-0 mt-0 min-[701px]:text-[13px] min-[961px]:text-[14px]"
            >
              从自己的目标和基础出发。结合本页的方法，选择合适的材料与工具，把练习带到阅读、听力和实际交流中。
            </p>
            <NuxtLink
              class="text-link [-webkit-tap-highlight-color:transparent] items-center bg-transparent [color:inherit] gap-x-[18px] inline-flex text-[13px] font-[650] min-h-[44px] pb-0 pl-0 pr-0 pt-0 gap-y-[18px] no-underline"
              to="/columns"
              >看看 25 周学习安排 ↗</NuxtLink
            >
          </article>
        </div>
        <div
          class="reference-footnote items-center [border-top:1px_solid_var(--line)] [color:var(--muted)] gap-x-[40px] block text-[11px] mt-[25px] pt-[20px] gap-y-[40px] min-[701px]:flex min-[701px]:mt-[33px] min-[701px]:pt-[25px]"
        >
          <p class="flex-[1] leading-[1.8] mb-0 ml-0 mr-0 mt-0">
            本页为学习方法的整理与英语学习应用，不是书籍原文。成人自学路径的整理另参考张奕源
            Nick 的手册，与上图郝海龙《英语自学手册》为不同资料。
          </p>
          <a
            class="[-webkit-tap-highlight-color:transparent] items-center [color:inherit] flex mt-[11px] min-h-[44px] underline [text-underline-offset:4px] min-[701px]:mt-[unset]"
            href="https://docs.ankiweb.net/background.html"
            rel="noopener noreferrer"
            target="_blank"
            >Anki 官方：主动回忆与间隔复习 ↗</a
          >
        </div>
      </div>
    </section>
    <section
      class="routine start-section [background:var(--green)] text-white pb-[48px] pl-0 pr-0 pt-[48px] min-[701px]:pb-[76px] min-[701px]:pt-[72px]"
    >
      <div
        class="wrap mb-auto ml-auto mr-auto mt-auto w-[calc(100%_-_40px)] min-[701px]:w-[calc(100%_-_64px)] min-[1201px]:w-[min(1280px,calc(100%_-_112px))]"
      >
        <div
          class="start-heading items-start gap-x-[25px] flex flex-col justify-between gap-y-[25px] min-[961px]:items-center min-[961px]:gap-x-[40px] min-[961px]:[flex-direction:unset] min-[961px]:gap-y-[40px]"
        >
          <div>
            <div
              class="eyebrow [color:#e1e7d6] text-[12px] font-[650] tracking-[.09em] mb-[20px] min-[701px]:text-[13px]"
            >
              从一个小练习开始
            </div>
            <h2
              class="text-[29px] font-bold tracking-[-.045em] leading-[1.4] mb-0 ml-0 mr-0 mt-0 min-[701px]:text-[33px] min-[701px]:leading-[1.25] min-[1201px]:text-[38px]"
            >
              把方法，放到今天的英语里。
            </h2>
          </div>
          <NuxtLink
            class="btn btn-yellow [-webkit-tap-highlight-color:transparent] items-center [background:var(--yellow)] rounded-full [color:var(--ink)] gap-x-[28px] inline-flex text-[14px] font-[650] justify-center min-h-[50px] pb-[14px] pl-[28px] pr-[28px] pt-[14px] gap-y-[28px] no-underline [transition:background_.18s,transform_.18s] min-[701px]:text-[16px] min-[701px]:min-h-[56px]"
            to="/columns"
            >观看每周视频 <span aria-hidden="true">↗</span>
          </NuxtLink>
        </div>
        <div
          class="start-links gap-x-[25px] grid grid-cols-[1fr] mt-[30px] gap-y-[25px] min-[701px]:gap-x-[24px] min-[701px]:grid-cols-[repeat(3,1fr)] min-[701px]:mt-[38px] min-[701px]:gap-y-[24px] min-[961px]:gap-x-[36px] min-[961px]:gap-y-[36px]"
        >
          <NuxtLink
            class="[-webkit-tap-highlight-color:transparent] [border-top:1px_solid_#638773] [color:inherit] gap-x-[10px] grid grid-cols-[1fr_auto] pt-[18px] gap-y-[10px] no-underline min-[701px]:gap-x-[8px] min-[701px]:pt-[22px] min-[701px]:gap-y-[15px]"
            to="/phonetics"
          >
            <span class="[color:#d6e2d1] text-[11px] [grid-column:1/-1]"
              >01 / 音标</span
            >
            <strong
              class="text-[18px] font-medium min-[701px]:text-[16px] min-[961px]:text-[18px]"
              >听出区别，再试着发音</strong
            >
            <span aria-hidden="true">↗</span>
          </NuxtLink>
          <NuxtLink
            class="[-webkit-tap-highlight-color:transparent] [border-top:1px_solid_#638773] [color:inherit] gap-x-[10px] grid grid-cols-[1fr_auto] pt-[18px] gap-y-[10px] no-underline min-[701px]:gap-x-[8px] min-[701px]:pt-[22px] min-[701px]:gap-y-[15px]"
            to="/grammar"
          >
            <span class="[color:#d6e2d1] text-[11px] [grid-column:1/-1]"
              >02 / 语法</span
            >
            <strong
              class="text-[18px] font-medium min-[701px]:text-[16px] min-[961px]:text-[18px]"
              >看懂句子，再回忆变化</strong
            >
            <span aria-hidden="true">↗</span>
          </NuxtLink>
          <NuxtLink
            class="[-webkit-tap-highlight-color:transparent] [border-top:1px_solid_#638773] [color:inherit] gap-x-[10px] grid grid-cols-[1fr_auto] pt-[18px] gap-y-[10px] no-underline min-[701px]:gap-x-[8px] min-[701px]:pt-[22px] min-[701px]:gap-y-[15px]"
            to="/vocabulary"
          >
            <span class="[color:#d6e2d1] text-[11px] [grid-column:1/-1]"
              >03 / 词汇</span
            >
            <strong
              class="text-[18px] font-medium min-[701px]:text-[16px] min-[961px]:text-[18px]"
              >在语境中遇见，再回来复习</strong
            >
            <span aria-hidden="true">↗</span>
          </NuxtLink>
        </div>
      </div>
    </section>
  </main>
</template>
