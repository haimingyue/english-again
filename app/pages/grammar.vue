<script setup lang="ts">
const { openImage } = useImagePreview();
usePageSeo(
  "语法与句子练习",
  "在句子中理解词形与语序，通过语法卡组、例句和主动回忆，把规则变成自己的表达。",
);
definePageMeta({ alias: "/grammar.html" });
</script>

<template>
  <main data-page="grammar" id="main" tabindex="-1">
    <section
      aria-labelledby="page-title"
      class="hero grammar-hero [background:var(--green)] text-white pb-[45px] pl-0 pr-0 pt-[40px] min-[701px]:pb-[68px] min-[701px]:pt-[64px]"
    >
      <div
        class="wrap grammar-hero-grid items-center gap-x-[36px] grid grid-cols-[1fr] mb-auto ml-auto mr-auto mt-auto gap-y-[36px] w-[calc(100%_-_40px)] min-[701px]:gap-x-[30px] min-[701px]:grid-cols-[1.12fr_1fr] min-[701px]:gap-y-[30px] min-[701px]:w-[calc(100%_-_64px)] min-[961px]:gap-x-[48px] min-[961px]:grid-cols-[1.3fr_1fr] min-[961px]:gap-y-[48px] min-[1201px]:gap-x-[70px] min-[1201px]:grid-cols-[1.35fr_1fr] min-[1201px]:gap-y-[70px] min-[1201px]:w-[min(1280px,calc(100%_-_112px))]"
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
            >基础语法 · 从理解到运用
          </div>
          <h1
            class="text-[32px] font-[750] tracking-[-.055em] leading-[1.38] mb-0 ml-0 mr-0 mt-0 max-w-[680px] min-[371px]:text-[37px] min-[701px]:text-[40px] min-[701px]:tracking-[-.045em] min-[961px]:text-[49px] min-[1201px]:text-[58px]"
            id="page-title"
          >
            把语法放进句子，<br />把句子<span
              class="design-underline relative whitespace-nowrap"
              >变成自己的。</span
            >
          </h1>
          <p
            class="hero-lede [color:#dce9df] text-[15px] leading-[1.9] mb-[25px] ml-0 mr-0 mt-[22px] min-[701px]:text-[16px] min-[701px]:mb-[34px] min-[701px]:mt-[28px] min-[961px]:text-[18px]"
          >
            看懂一个例句，练会一个变化。<br />用有画面的卡片，把学过的语法一次次想起来。
          </p>
          <div
            class="actions items-center gap-x-[24px] flex flex-wrap gap-y-[24px] min-[701px]:gap-x-[14px] min-[701px]:gap-y-[14px] min-[961px]:gap-x-[26px] min-[961px]:gap-y-[26px]"
          >
            <a
              class="btn btn-yellow [-webkit-tap-highlight-color:transparent] items-center [background:var(--yellow)] rounded-full [color:var(--ink)] gap-x-[28px] inline-flex text-[14px] font-[650] justify-center min-h-[50px] pb-[12px] pl-[22px] pr-[22px] pt-[12px] gap-y-[28px] no-underline [transition:background_.18s,transform_.18s] min-[961px]:text-[16px] min-[961px]:min-h-[56px] min-[961px]:pb-[14px] min-[961px]:pl-[28px] min-[961px]:pr-[28px] min-[961px]:pt-[14px]"
              href="#cards"
              >看看语法卡片 <span aria-hidden="true">↓</span>
            </a>
            <a
              class="text-link light-link [-webkit-tap-highlight-color:transparent] items-center bg-transparent text-white gap-x-[18px] inline-flex text-[13px] font-[650] min-h-[44px] pb-0 pl-0 pr-0 pt-0 gap-y-[18px] no-underline min-[701px]:text-[14px] min-[961px]:text-[15px]"
              href="#method"
              >了解学习方法 <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div
            class="hero-note items-start [color:#d5e2d9] gap-x-[9px] flex text-[11px] leading-[1.9] mt-[22px] max-w-[none] gap-y-[9px] min-[701px]:mt-[26px] min-[701px]:max-w-[295px] min-[961px]:items-center min-[961px]:text-[12px] min-[961px]:leading-[unset] min-[961px]:mt-[40px] min-[961px]:max-w-[unset]"
          >
            <span
              aria-hidden="true"
              class="note-dot bg-current rounded-full inline-block shrink-0 h-[6px] mt-[8px] w-[6px] min-[961px]:mt-[unset]"
            >
            </span
            >教材串起内容 · 例句帮助理解 · Anki 安排复习
          </div>
        </div>
        <aside
          aria-labelledby="textbook-title"
          class="textbook [background:var(--sage)] rounded-[3px] [box-shadow:7px_7px_0_#173f34] [color:var(--ink)] pb-[23px] pl-[23px] pr-[23px] pt-[23px] min-[701px]:[box-shadow:10px_10px_0_#173f34] min-[701px]:pb-[22px] min-[701px]:pl-[22px] min-[701px]:pr-[22px] min-[701px]:pt-[22px] min-[1201px]:pb-[26px] min-[1201px]:pl-[28px] min-[1201px]:pr-[28px] min-[1201px]:pt-[24px]"
        >
          <div
            class="textbook-top [border-bottom:1px_solid_#b6c3af] gap-x-[12px] flex text-[11px] font-semibold justify-between pb-[18px] gap-y-[12px] min-[701px]:text-[10px] min-[961px]:text-[12px]"
          >
            <span>整个系列的语法，依照这本书设计</span>
            <span aria-hidden="true">↗</span>
          </div>
          <div
            class="book-stage items-center flex h-[290px] isolate justify-center relative min-[701px]:h-[270px] min-[961px]:h-[302px] min-[1201px]:h-[333px]"
          >
            <div
              aria-hidden="true"
              class="book-orbit [border:1px_solid_#bac6b0] rounded-full h-[240px] absolute w-[240px] z-[-1] min-[701px]:h-[210px] min-[701px]:w-[210px] min-[961px]:h-[250px] min-[961px]:w-[250px] min-[1201px]:h-[280px] min-[1201px]:w-[280px]"
            ></div>
            <img
              alt="Raymond Murphy 的 Essential Grammar in Use 教材封面，西班牙语第四版"
              class="[box-shadow:9px_14px_17px_#253a2c38] block h-auto max-w-[100%] [transform:rotate(-7deg)] w-[165px] min-[701px]:w-[150px] min-[961px]:w-[174px] min-[1201px]:w-[188px]"
              height="360"
              loading="eager"
              src="/assets/images/books/essential-grammar-in-use.png"
              width="255"
            />
            <span
              class="book-stamp [background:var(--yellow)] rounded-full bottom-[26px] grid text-[12px] font-semibold h-[73px] leading-[1.65] [place-content:center] absolute right-[9px] text-center [transform:rotate(10deg)] w-[73px] min-[701px]:bottom-[25px] min-[701px]:text-[11px] min-[701px]:h-[65px] min-[701px]:right-[-7px] min-[701px]:w-[65px] min-[961px]:bottom-[26px] min-[961px]:text-[13px] min-[961px]:h-[80px] min-[961px]:right-[3px] min-[961px]:w-[80px]"
              >从基础<br />一步步学</span
            >
          </div>
          <div class="book-caption [border-top:1px_solid_#b6c3af] pt-[18px]">
            <h2
              class="text-[20px] font-bold tracking-[-.035em] leading-[1.3] mb-0 ml-0 mr-0 mt-0 min-[371px]:text-[22px] min-[701px]:text-[19px] min-[961px]:text-[21px] min-[1201px]:text-[24px]"
              id="textbook-title"
            >
              Essential Grammar in Use
            </h2>
            <p
              class="[color:#52644e] text-[11px] mb-0 ml-0 mr-0 mt-[7px] min-[701px]:text-[10px] min-[961px]:text-[12px]"
            >
              Raymond Murphy · 系列语法内容依据
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
          href="#method"
        >
          <span
            class="[color:#52644f] text-[11px] font-normal min-[701px]:text-[13px]"
            >01</span
          >理解学习方法
          <span
            aria-hidden="true"
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
          >看看真实卡片
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
          >带到 Anki 里练
          <span
            aria-hidden="true"
            class="route-arrow [color:#52644f] hidden ml-auto min-[701px]:[display:unset]"
            >↘</span
          >
        </a>
      </div>
    </nav>
    <section
      aria-labelledby="method-title"
      class="section pb-[56px] pl-0 pr-0 pt-[56px] min-[701px]:pb-[72px] min-[701px]:pt-[72px] min-[961px]:pb-[96px] min-[961px]:pt-[96px]"
      id="method"
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
              id="method-title"
            >
              先理解它，<br />再试着把它想起来。
            </h2>
          </div>
          <p
            class="section-intro [color:var(--muted)] text-[15px] leading-[1.9] mb-0 ml-0 mr-0 mt-[18px] max-w-[640px] min-[701px]:text-[16px] min-[701px]:mt-[24px] min-[961px]:mt-0 min-[961px]:max-w-[330px] min-[1201px]:max-w-[380px]"
          >
            Fluent Forever
            提倡从能理解的句子入手，把复杂语法拆成小问题，再结合主动回忆与间隔复习，逐渐用到自己的表达中。
          </p>
        </div>
        <div
          class="method-grid grammar-methods gap-x-[30px] grid grid-cols-[1fr] gap-y-[30px] min-[701px]:gap-x-[24px] min-[701px]:grid-cols-[repeat(3,1fr)] min-[701px]:gap-y-[24px] min-[961px]:gap-x-[40px] min-[961px]:gap-y-[40px]"
        >
          <article
            class="method-item [border-top:1px_solid_#bfc6b8] flex flex-col pt-[17px] min-[701px]:pt-[20px]"
          >
            <div
              class="method-index [color:#60715e] flex text-[10px] justify-between tracking-[.12em] min-[701px]:text-[11px]"
            >
              <span>01 / UNDERSTAND</span>
              <span aria-hidden="true">↗</span>
            </div>
            <div
              aria-hidden="true"
              class="method-symbol text-[31px] font-semibold tracking-[-.045em] pb-[19px] pl-0 pr-0 pt-[22px] min-[701px]:text-[27px] min-[701px]:pb-[26px] min-[701px]:pt-[32px] min-[961px]:text-[33px]"
            >
              句子
              <span
                class="[color:#6c815f] text-[28px] font-normal pb-0 pl-[7px] pr-[7px] pt-0 min-[701px]:text-[24px] min-[701px]:pl-[2px] min-[701px]:pr-[2px] min-[961px]:text-[30px] min-[961px]:pl-[8px] min-[961px]:pr-[8px]"
                >＋</span
              >
              画面
            </div>
            <h3
              class="text-[24px] tracking-[-.025em] leading-[1.25] mb-0 ml-0 mr-0 mt-0 min-[701px]:text-[20px] min-[961px]:text-[23px]"
            >
              用情境，理解一句话
            </h3>
            <p
              class="[color:var(--muted)] text-[15px] leading-[1.9] mb-0 ml-0 mr-0 mt-[13px] min-[701px]:text-[14px] min-[701px]:mt-[16px] min-[961px]:text-[15px]"
            >
              先看懂句子在说什么，再借助教材解释理解结构。图片、具体场景和熟悉的词，能帮助你把陌生的句子变成可理解的输入。
            </p>
          </article>
          <article
            class="method-item [border-top:1px_solid_#bfc6b8] flex flex-col pt-[17px] min-[701px]:pt-[20px]"
          >
            <div
              class="method-index [color:#60715e] flex text-[10px] justify-between tracking-[.12em] min-[701px]:text-[11px]"
            >
              <span>02 / RECALL</span>
              <span aria-hidden="true">↗</span>
            </div>
            <div
              aria-hidden="true"
              class="method-symbol text-[31px] font-semibold tracking-[-.045em] pb-[19px] pl-0 pr-0 pt-[22px] min-[701px]:text-[27px] min-[701px]:pb-[26px] min-[701px]:pt-[32px] min-[961px]:text-[33px]"
            >
              理解
              <span
                class="[color:#6c815f] text-[28px] font-normal pb-0 pl-[7px] pr-[7px] pt-0 min-[701px]:text-[24px] min-[701px]:pl-[2px] min-[701px]:pr-[2px] min-[961px]:text-[30px] min-[961px]:pl-[8px] min-[961px]:pr-[8px]"
                >→</span
              >
              回想
            </div>
            <h3
              class="text-[24px] tracking-[-.025em] leading-[1.25] mb-0 ml-0 mr-0 mt-0 min-[701px]:text-[20px] min-[961px]:text-[23px]"
            >
              一次，只回忆一个重点
            </h3>
            <p
              class="[color:var(--muted)] text-[15px] leading-[1.9] mb-0 ml-0 mr-0 mt-[13px] min-[701px]:text-[14px] min-[701px]:mt-[16px] min-[961px]:text-[15px]"
            >
              把新词、词形或语序单独拿出来练。先自己回答，再翻面核对；给出答案的过程，让你看见哪些地方还不熟悉。
            </p>
          </article>
          <article
            class="method-item [border-top:1px_solid_#bfc6b8] flex flex-col pt-[17px] min-[701px]:pt-[20px]"
          >
            <div
              class="method-index [color:#60715e] flex text-[10px] justify-between tracking-[.12em] min-[701px]:text-[11px]"
            >
              <span>03 / REVISIT</span>
              <span aria-hidden="true">↗</span>
            </div>
            <div
              aria-hidden="true"
              class="method-symbol text-[31px] font-semibold tracking-[-.045em] pb-[19px] pl-0 pr-0 pt-[22px] min-[701px]:text-[27px] min-[701px]:pb-[26px] min-[701px]:pt-[32px] min-[961px]:text-[33px]"
            >
              复习
              <span
                class="[color:#6c815f] text-[28px] font-normal pb-0 pl-[7px] pr-[7px] pt-0 min-[701px]:text-[24px] min-[701px]:pl-[2px] min-[701px]:pr-[2px] min-[961px]:text-[30px] min-[961px]:pl-[8px] min-[961px]:pr-[8px]"
                >↗</span
              >
              运用
            </div>
            <h3
              class="text-[24px] tracking-[-.025em] leading-[1.25] mb-0 ml-0 mr-0 mt-0 min-[701px]:text-[20px] min-[961px]:text-[23px]"
            >
              隔一段时间，再用一次
            </h3>
            <p
              class="[color:var(--muted)] text-[15px] leading-[1.9] mb-0 ml-0 mr-0 mt-[13px] min-[701px]:text-[14px] min-[701px]:mt-[16px] min-[961px]:text-[15px]"
            >
              跟随 Anki
              的安排回来复习，并把例句换成与自己有关的表达。复习后还要在阅读、听力和交流中继续遇见这些结构。
            </p>
          </article>
        </div>
        <div
          class="sentence-lab [background:#ebece0] gap-x-[23px] grid grid-cols-[1fr] mt-[32px] pb-[23px] pl-[20px] pr-[20px] pt-[23px] gap-y-[23px] min-[701px]:gap-x-[26px] min-[701px]:mt-[50px] min-[701px]:pb-[32px] min-[701px]:pl-[32px] min-[701px]:pr-[32px] min-[701px]:pt-[32px] min-[701px]:gap-y-[26px] min-[961px]:gap-x-[28px] min-[961px]:grid-cols-[1fr_2fr] min-[961px]:gap-y-[28px] min-[1201px]:gap-x-[50px] min-[1201px]:gap-y-[50px]"
          id="practice"
        >
          <div class="lab-intro">
            <span
              class="small-label [color:var(--muted)] text-[12px] tracking-[.06em]"
              >把复杂的语法，拆成三个小问题</span
            >
            <h3
              class="text-[25px] tracking-[-.045em] leading-[1.25] mb-0 ml-0 mr-0 mt-[14px] min-[701px]:text-[26px]"
            >
              新词？词形？语序？
            </h3>
            <p
              class="[color:var(--muted)] text-[13px] leading-[1.9] mb-0 ml-0 mr-0 mt-[10px] min-[701px]:text-[14px] min-[961px]:mt-[16px]"
            >
              先在心里回答，再展开核对。<br
                class="hidden min-[961px]:[display:unset]"
              />每张卡只练一个变化。
            </p>
            <span
              class="lab-footnote [color:var(--muted)] block text-[11px] mt-[10px] min-[961px]:mt-[23px]"
              >本站练习示例</span
            >
          </div>
          <div class="lab-examples">
            <details class="[border-top:1px_solid_#bac5b4]">
              <summary
                class="items-center gap-x-[12px] cursor-pointer flex flex-wrap text-[16px] font-semibold justify-between leading-[1.7] [list-style:none] min-h-[64px] pb-[18px] pl-0 pr-0 pt-[18px] gap-y-[12px] min-[701px]:gap-x-[16px] min-[701px]:leading-[unset] min-[701px]:pb-[22px] min-[701px]:pt-[22px] min-[701px]:gap-y-[16px]"
              >
                <span
                  class="example-type [border:1px_solid_#acb8a4] rounded-[30px] text-[10px] font-normal pb-[2px] pl-[8px] pr-[8px] pt-[2px] whitespace-nowrap min-[701px]:text-[11px] min-[701px]:pb-[3px] min-[701px]:pl-[10px] min-[701px]:pr-[10px] min-[701px]:pt-[3px]"
                  >新词</span
                >
                <span
                  class="example-sentence flex-[1] [flex-basis:calc(100%_-_65px)] text-[18px] font-normal leading-[1.5] min-w-0 min-[701px]:[flex-basis:unset] min-[701px]:min-w-[230px] min-[1201px]:text-[20px]"
                  >I’d like a glass
                  <b class="[color:var(--green)] font-semibold tracking-[.07em]"
                    >___</b
                  >
                  water.</span
                >
                <span
                  class="example-action [color:#466340] text-[11px] font-normal ml-[58px] whitespace-nowrap min-[701px]:ml-[unset] group-open:text-forest"
                  >查看 / 收起答案</span
                >
              </summary>
              <div
                class="lab-answer pb-[20px] pl-0 pr-0 pt-0 min-[701px]:pl-[66px]"
              >
                <strong class="[color:var(--green)] text-[22px]">of</strong>
                <p
                  class="[color:var(--muted)] text-[13px] mb-0 ml-0 mr-0 mt-[8px] max-w-[550px]"
                >
                  a glass of water：在“一杯水”这个具体表达里学习 of。再试着把
                  water 换成自己常喝的饮品。
                </p>
              </div>
            </details>
            <details class="[border-top:1px_solid_#bac5b4]">
              <summary
                class="items-center gap-x-[12px] cursor-pointer flex flex-wrap text-[16px] font-semibold justify-between leading-[1.7] [list-style:none] min-h-[64px] pb-[18px] pl-0 pr-0 pt-[18px] gap-y-[12px] min-[701px]:gap-x-[16px] min-[701px]:leading-[unset] min-[701px]:pb-[22px] min-[701px]:pt-[22px] min-[701px]:gap-y-[16px]"
              >
                <span
                  class="example-type [border:1px_solid_#acb8a4] rounded-[30px] text-[10px] font-normal pb-[2px] pl-[8px] pr-[8px] pt-[2px] whitespace-nowrap min-[701px]:text-[11px] min-[701px]:pb-[3px] min-[701px]:pl-[10px] min-[701px]:pr-[10px] min-[701px]:pt-[3px]"
                  >词形</span
                >
                <span
                  class="example-sentence flex-[1] [flex-basis:calc(100%_-_65px)] text-[18px] font-normal leading-[1.5] min-w-0 min-[701px]:[flex-basis:unset] min-[701px]:min-w-[230px] min-[1201px]:text-[20px]"
                  >Yesterday, I
                  <b class="[color:var(--green)] font-semibold tracking-[.07em]"
                    >___</b
                  >
                  home.
                  <small
                    class="[color:var(--muted)] text-[13px] whitespace-nowrap"
                    >(walk)</small
                  >
                </span>
                <span
                  class="example-action [color:#466340] text-[11px] font-normal ml-[58px] whitespace-nowrap min-[701px]:ml-[unset] group-open:text-forest"
                  >查看 / 收起答案</span
                >
              </summary>
              <div
                class="lab-answer pb-[20px] pl-0 pr-0 pt-0 min-[701px]:pl-[66px]"
              >
                <strong class="[color:var(--green)] text-[22px]">walked</strong>
                <p
                  class="[color:var(--muted)] text-[13px] mb-0 ml-0 mr-0 mt-[8px] max-w-[550px]"
                >
                  Yesterday 提示过去的时间，walk 变成
                  walked。只回忆这一处词形变化，再读一遍完整句子。
                </p>
              </div>
            </details>
            <details
              class="[border-bottom:1px_solid_#bac5b4] [border-top:1px_solid_#bac5b4]"
            >
              <summary
                class="items-center gap-x-[12px] cursor-pointer flex flex-wrap text-[16px] font-semibold justify-between leading-[1.7] [list-style:none] min-h-[64px] pb-[18px] pl-0 pr-0 pt-[18px] gap-y-[12px] min-[701px]:gap-x-[16px] min-[701px]:leading-[unset] min-[701px]:pb-[22px] min-[701px]:pt-[22px] min-[701px]:gap-y-[16px]"
              >
                <span
                  class="example-type [border:1px_solid_#acb8a4] rounded-[30px] text-[10px] font-normal pb-[2px] pl-[8px] pr-[8px] pt-[2px] whitespace-nowrap min-[701px]:text-[11px] min-[701px]:pb-[3px] min-[701px]:pl-[10px] min-[701px]:pr-[10px] min-[701px]:pt-[3px]"
                  >语序</span
                >
                <span
                  class="example-sentence flex-[1] [flex-basis:calc(100%_-_65px)] text-[18px] font-normal leading-[1.5] min-w-0 min-[701px]:[flex-basis:unset] min-[701px]:min-w-[230px] min-[1201px]:text-[20px]"
                  >This is nice.
                  <span
                    class="change-hint [color:var(--muted)] block text-[11px] ml-0 min-[701px]:inline-block min-[701px]:text-[12px] min-[701px]:ml-[8px]"
                    >→ 改成一般疑问句</span
                  >
                </span>
                <span
                  class="example-action [color:#466340] text-[11px] font-normal ml-[58px] whitespace-nowrap min-[701px]:ml-[unset] group-open:text-forest"
                  >查看 / 收起答案</span
                >
              </summary>
              <div
                class="lab-answer pb-[20px] pl-0 pr-0 pt-0 min-[701px]:pl-[66px]"
              >
                <strong class="[color:var(--green)] text-[22px]"
                  >Is this nice?</strong
                >
                <p
                  class="[color:var(--muted)] text-[13px] mb-0 ml-0 mr-0 mt-[8px] max-w-[550px]"
                >
                  把 is 放到 this
                  前面。词还是这些词，顺序改变后，就从陈述变成了提问。
                </p>
              </div>
            </details>
          </div>
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
            Gabriel Wyner · <em>Fluent Forever</em>，第 5 章
            <em>Sentence Play</em>，以及第 2
            章关于记忆与复习的讨论。以上为本站整理的学习建议。
          </p>
        </div>
      </div>
    </section>
    <section
      aria-labelledby="cards-title"
      class="section cards-section grammar-cards [background:var(--lavender)] pb-[56px] pl-0 pr-0 pt-[56px] min-[701px]:pb-[72px] min-[701px]:pt-[72px] min-[961px]:pb-[96px] min-[961px]:pt-[96px]"
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
              自己做的卡片，自己每天用
            </div>
            <h2
              class="text-[31px] font-bold tracking-[-.045em] leading-[1.35] mb-0 ml-0 mr-0 mt-0 max-w-[760px] min-[701px]:text-[38px] min-[701px]:leading-[1.25] min-[1201px]:text-[44px]"
              id="cards-title"
            >
              每一张卡，<br />都是一句话的小练习。
            </h2>
          </div>
          <p
            class="section-intro [color:var(--muted)] text-[15px] leading-[1.9] mb-0 ml-0 mr-0 mt-[18px] max-w-[640px] min-[701px]:text-[16px] min-[701px]:mt-[24px] min-[961px]:mt-0 min-[961px]:max-w-[330px] min-[1201px]:max-w-[380px]"
          >
            保留完整的情境，只拿走想练的部分。<br
              class="hidden min-[701px]:[display:unset]"
            />先尝试回答，再看答案；用图片帮助回想，而不是只背中文释义。
          </p>
        </div>
        <div
          class="grammar-gallery gap-x-[38px] grid grid-cols-[1fr] gap-y-[38px] min-[701px]:gap-x-[20px] min-[701px]:grid-cols-[repeat(3,1fr)] min-[701px]:gap-y-[20px] min-[961px]:gap-x-[26px] min-[961px]:gap-y-[26px] min-[1201px]:gap-x-[32px] min-[1201px]:gap-y-[32px]"
        >
          <article class="grammar-example">
            <div
              class="example-heading [border-bottom:1px_solid_#b7b3c8] [color:#555067] gap-x-[15px] flex text-[11px] justify-between tracking-[.04em] pb-[14px] gap-y-[15px]"
            >
              <span>01 / 介词搭配</span>
              <span>正面</span>
            </div>
            <button
              @click="
                openImage({
                  src: '/assets/images/grammar/word-position.png',
                  alt: 'Anki 卡片正面：She is careful making conservative estimates. 提示词 about，配有估算费用的图片',
                  title: '一个词，放在哪里？',
                })
              "
              aria-label="放大查看介词 about 的语法卡片"
              class="screenshot-button [-webkit-tap-highlight-color:transparent] bg-transparent [border:0] rounded-[3px] [color:inherit] cursor-pointer block mb-[23px] ml-auto mr-auto mt-[15px] max-w-[350px] pb-0 pl-0 pr-0 pt-0 relative [transition:transform_.18s] w-full min-[701px]:mb-[22px] min-[701px]:ml-0 min-[701px]:mr-0 min-[701px]:mt-[16px] min-[701px]:max-w-[unset] min-[961px]:mb-[24px]"
              type="button"
            >
              <img
                alt="Anki 卡片正面：She is careful making conservative estimates. 提示词 about，配有估算费用的图片"
                class="[aspect-ratio:1024/1440] block [filter:drop-shadow(0_8px_10px_#211b3618)] h-auto max-w-[100%] object-contain w-full"
                height="1440"
                loading="lazy"
                src="/assets/images/grammar/word-position.png"
                width="1024"
              />
              <span
                class="zoom-label [background:var(--lavender)] [border:1px_solid_#b7b3c8] rounded-full bottom-[2px] [color:#514c64] text-[11px] left-[50%] pb-[6px] pl-[14px] pr-[14px] pt-[6px] absolute [transform:translateX(-50%)] whitespace-nowrap min-[701px]:bottom-[-6px] min-[701px]:text-[10px] min-[961px]:bottom-[3px] min-[961px]:text-[11px]"
                >放大查看 ↗</span
              >
            </button>
            <h3
              class="text-[25px] tracking-[-.045em] leading-[1.25] mb-[12px] ml-0 mr-0 mt-0 min-[701px]:text-[19px] min-[701px]:mb-[14px] min-[961px]:text-[22px] min-[1201px]:text-[24px]"
            >
              一个词，放在哪里？
            </h3>
            <p
              class="[color:#555466] text-[15px] leading-[1.9] mb-0 ml-0 mr-0 mt-0 max-w-[none] min-[701px]:text-[13px] min-[701px]:max-w-[365px] min-[961px]:text-[14px]"
            >
              根据提示把 about 放回句子，在语境中练习 careful about doing
              的搭配。
            </p>
          </article>
          <article class="grammar-example">
            <div
              class="example-heading [border-bottom:1px_solid_#b7b3c8] [color:#555067] gap-x-[15px] flex text-[11px] justify-between tracking-[.04em] pb-[14px] gap-y-[15px]"
            >
              <span>02 / 句子结构</span>
              <span>正面</span>
            </div>
            <button
              @click="
                openImage({
                  src: '/assets/images/grammar/sentence-pattern.png',
                  alt: 'Anki 卡片正面：After the experiment, they concluded that the idea worked. 提示词 finishing，配有实验场景',
                  title: '给动作，找到位置。',
                })
              "
              aria-label="放大查看 finishing 的语法卡片"
              class="screenshot-button [-webkit-tap-highlight-color:transparent] bg-transparent [border:0] rounded-[3px] [color:inherit] cursor-pointer block mb-[23px] ml-auto mr-auto mt-[15px] max-w-[350px] pb-0 pl-0 pr-0 pt-0 relative [transition:transform_.18s] w-full min-[701px]:mb-[22px] min-[701px]:ml-0 min-[701px]:mr-0 min-[701px]:mt-[16px] min-[701px]:max-w-[unset] min-[961px]:mb-[24px]"
              type="button"
            >
              <img
                alt="Anki 卡片正面：After the experiment, they concluded that the idea worked. 提示词 finishing，配有实验场景"
                class="[aspect-ratio:1024/1440] block [filter:drop-shadow(0_8px_10px_#211b3618)] h-auto max-w-[100%] object-contain w-full"
                height="1440"
                loading="lazy"
                src="/assets/images/grammar/sentence-pattern.png"
                width="1024"
              />
              <span
                class="zoom-label [background:var(--lavender)] [border:1px_solid_#b7b3c8] rounded-full bottom-[2px] [color:#514c64] text-[11px] left-[50%] pb-[6px] pl-[14px] pr-[14px] pt-[6px] absolute [transform:translateX(-50%)] whitespace-nowrap min-[701px]:bottom-[-6px] min-[701px]:text-[10px] min-[961px]:bottom-[3px] min-[961px]:text-[11px]"
                >放大查看 ↗</span
              >
            </button>
            <h3
              class="text-[25px] tracking-[-.045em] leading-[1.25] mb-[12px] ml-0 mr-0 mt-0 min-[701px]:text-[19px] min-[701px]:mb-[14px] min-[961px]:text-[22px] min-[1201px]:text-[24px]"
            >
              给动作，找到位置。
            </h3>
            <p
              class="[color:#555466] text-[15px] leading-[1.9] mb-0 ml-0 mr-0 mt-0 max-w-[none] min-[701px]:text-[13px] min-[701px]:max-w-[365px] min-[961px]:text-[14px]"
            >
              把 finishing 放在合适的位置，回忆 after finishing the experiment
              这个结构。
            </p>
          </article>
          <article class="grammar-example">
            <div
              class="example-heading [border-bottom:1px_solid_#b7b3c8] [color:#555067] gap-x-[15px] flex text-[11px] justify-between tracking-[.04em] pb-[14px] gap-y-[15px]"
            >
              <span>03 / 空间关系</span>
              <span>背面</span>
            </div>
            <button
              @click="
                openImage({
                  src: '/assets/images/grammar/spatial-relation.png',
                  alt: 'Anki 卡片背面：A is next to B，next to 用红色标出，配有 A 至 E 五人的位置示意图',
                  title: '看见关系，记住表达。',
                })
              "
              aria-label="放大查看 next to 的语法卡片"
              class="screenshot-button [-webkit-tap-highlight-color:transparent] bg-transparent [border:0] rounded-[3px] [color:inherit] cursor-pointer block mb-[23px] ml-auto mr-auto mt-[15px] max-w-[350px] pb-0 pl-0 pr-0 pt-0 relative [transition:transform_.18s] w-full min-[701px]:mb-[22px] min-[701px]:ml-0 min-[701px]:mr-0 min-[701px]:mt-[16px] min-[701px]:max-w-[unset] min-[961px]:mb-[24px]"
              type="button"
            >
              <img
                alt="Anki 卡片背面：A is next to B，next to 用红色标出，配有 A 至 E 五人的位置示意图"
                class="[aspect-ratio:1024/1440] block [filter:drop-shadow(0_8px_10px_#211b3618)] h-auto max-w-[100%] object-contain w-full"
                height="1440"
                loading="lazy"
                src="/assets/images/grammar/spatial-relation.png"
                width="1024"
              />
              <span
                class="zoom-label [background:var(--lavender)] [border:1px_solid_#b7b3c8] rounded-full bottom-[2px] [color:#514c64] text-[11px] left-[50%] pb-[6px] pl-[14px] pr-[14px] pt-[6px] absolute [transform:translateX(-50%)] whitespace-nowrap min-[701px]:bottom-[-6px] min-[701px]:text-[10px] min-[961px]:bottom-[3px] min-[961px]:text-[11px]"
                >放大查看 ↗</span
              >
            </button>
            <h3
              class="text-[25px] tracking-[-.045em] leading-[1.25] mb-[12px] ml-0 mr-0 mt-0 min-[701px]:text-[19px] min-[701px]:mb-[14px] min-[961px]:text-[22px] min-[1201px]:text-[24px]"
            >
              看见关系，记住表达。
            </h3>
            <p
              class="[color:#555466] text-[15px] leading-[1.9] mb-0 ml-0 mr-0 mt-0 max-w-[none] min-[701px]:text-[13px] min-[701px]:max-w-[365px] min-[961px]:text-[14px]"
            >
              把 next to
              与图中人物的位置联系起来，翻面后核对自己是否理解了关系。
            </p>
          </article>
        </div>
        <div
          class="gallery-note items-start [border-top:1px_solid_#c1bbd2] [color:#575368] gap-x-[10px] flex text-[10px] mt-[30px] pt-[18px] gap-y-[10px] min-[701px]:items-center min-[701px]:text-[11px] min-[701px]:mt-[34px]"
        >
          <span
            aria-hidden="true"
            class="note-dot bg-current rounded-full inline-block shrink-0 h-[6px] mt-[6px] w-[6px] min-[701px]:mt-[unset]"
          >
          </span
          >自制 Anki 卡片实拍 · 点击任一图片查看原图
        </div>
      </div>
    </section>
    <section
      aria-labelledby="download-title"
      class="section download-section bg-white pb-[56px] pl-0 pr-0 pt-[56px] min-[701px]:pb-[72px] min-[701px]:pt-[72px] min-[961px]:pb-[96px] min-[961px]:pt-[96px]"
      id="download"
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
              把练习带走
            </div>
            <h2
              class="text-[31px] font-bold tracking-[-.045em] leading-[1.35] mb-0 ml-0 mr-0 mt-0 max-w-[760px] min-[701px]:text-[38px] min-[701px]:leading-[1.25] min-[1201px]:text-[44px]"
              id="download-title"
            >
              两套卡组，<br />从语法走向完整表达。
            </h2>
          </div>
          <p
            class="section-intro [color:var(--muted)] text-[15px] leading-[1.9] mb-0 ml-0 mr-0 mt-[18px] max-w-[640px] min-[701px]:text-[16px] min-[701px]:mt-[24px] min-[961px]:mt-0 min-[961px]:max-w-[330px] min-[1201px]:max-w-[380px]"
          >
            跟着本周主题练语法，再到句子里回忆用法。把需要的卡组导入
            Anki，按自己的节奏复习。
          </p>
        </div>
        <div
          class="grammar-downloads gap-x-[22px] grid grid-cols-[1fr] gap-y-[22px] min-[701px]:gap-x-[24px] min-[701px]:grid-cols-[1fr_1fr] min-[701px]:gap-y-[24px] min-[961px]:gap-x-[32px] min-[961px]:gap-y-[32px]"
        >
          <article
            class="resource-card resource-primary [background:var(--sage)] pb-[24px] pl-[24px] pr-[24px] pt-[24px] min-[701px]:pb-[26px] min-[701px]:pl-[26px] min-[701px]:pr-[26px] min-[701px]:pt-[26px] min-[961px]:pb-[32px] min-[961px]:pl-[36px] min-[961px]:pr-[36px] min-[961px]:pt-[30px]"
          >
            <div
              class="resource-top [color:#576450] gap-x-[20px] flex text-[11px] justify-between tracking-[.05em] gap-y-[20px] min-[701px]:text-[12px]"
            >
              <span>01 / 基础语法</span>
              <span>.apkg</span>
            </div>
            <h3
              class="text-[28px] tracking-[-.045em] leading-[1.25] mb-0 ml-0 mr-0 mt-[24px] min-[701px]:mt-[29px] min-[961px]:text-[31px]"
            >
              语法卡组
            </h3>
            <p
              class="[color:var(--muted)] text-[14px] leading-[1.9] mb-0 ml-0 mr-0 mt-[14px] max-w-[440px] min-[701px]:text-[15px]"
            >
              练习词形、搭配与句子结构。先回忆提示中的变化，再对照完整答案。
            </p>
            <div
              class="resource-count items-baseline gap-x-[18px] flex mb-[22px] ml-0 mr-0 mt-[22px] gap-y-[18px] min-[701px]:mt-[26px]"
            >
              <strong
                class="text-[62px] font-semibold tracking-[-.05em] leading-[1.1] min-[701px]:text-[60px] min-[961px]:text-[66px]"
                >1,627</strong
              >
              <span class="[color:var(--muted)] text-[13px]">张卡片</span>
            </div>
            <div
              class="resource-bottom items-center [border-top:1px_solid_#bcc5b4] gap-x-[12px] flex flex-wrap justify-between pt-[22px] gap-y-[12px] min-[701px]:gap-x-[16px] min-[701px]:gap-y-[16px] min-[961px]:[flex-wrap:unset]"
            >
              <a
                class="btn btn-dark [-webkit-tap-highlight-color:transparent] items-center [background:var(--ink)] rounded-full text-white gap-x-[28px] inline-flex text-[14px] font-[650] justify-center min-h-[50px] pb-[12px] pl-[19px] pr-[19px] pt-[12px] gap-y-[28px] no-underline [transition:background_.18s,transform_.18s] min-[701px]:text-[13px] min-[961px]:text-[14px] min-[961px]:pl-[23px] min-[961px]:pr-[23px]"
                download="英语自学指北-语法.apkg"
                href="/assets/downloads/anki/grammar.apkg"
                >下载语法卡组 <span aria-hidden="true">↓</span>
              </a>
              <span class="[color:var(--muted)] text-[12px]">332 KB</span>
            </div>
          </article>
          <article
            class="resource-card [background:var(--paper)] pb-[24px] pl-[24px] pr-[24px] pt-[24px] min-[701px]:pb-[26px] min-[701px]:pl-[26px] min-[701px]:pr-[26px] min-[701px]:pt-[26px] min-[961px]:pb-[32px] min-[961px]:pl-[36px] min-[961px]:pr-[36px] min-[961px]:pt-[30px]"
          >
            <div
              class="resource-top [color:#576450] gap-x-[20px] flex text-[11px] justify-between tracking-[.05em] gap-y-[20px] min-[701px]:text-[12px]"
            >
              <span>02 / 句子练习</span>
              <span>.apkg</span>
            </div>
            <h3
              class="text-[28px] tracking-[-.045em] leading-[1.25] mb-0 ml-0 mr-0 mt-[24px] min-[701px]:mt-[29px] min-[961px]:text-[31px]"
            >
              句子卡组
            </h3>
            <p
              class="[color:var(--muted)] text-[14px] leading-[1.9] mb-0 ml-0 mr-0 mt-[14px] max-w-[440px] min-[701px]:text-[15px]"
            >
              在完整的语境里回忆空缺内容。结合答案与中文释义，理解整句话的意思。
            </p>
            <div
              class="resource-count items-baseline gap-x-[18px] flex mb-[22px] ml-0 mr-0 mt-[22px] gap-y-[18px] min-[701px]:mt-[26px]"
            >
              <strong
                class="text-[62px] font-semibold tracking-[-.05em] leading-[1.1] min-[701px]:text-[60px] min-[961px]:text-[66px]"
                >2,706</strong
              >
              <span class="[color:var(--muted)] text-[13px]">张卡片</span>
            </div>
            <div
              class="resource-bottom items-center [border-top:1px_solid_#bcc5b4] gap-x-[12px] flex flex-wrap justify-between pt-[22px] gap-y-[12px] min-[701px]:gap-x-[16px] min-[701px]:gap-y-[16px] min-[961px]:[flex-wrap:unset]"
            >
              <a
                class="btn btn-dark [-webkit-tap-highlight-color:transparent] items-center [background:var(--ink)] rounded-full text-white gap-x-[28px] inline-flex text-[14px] font-[650] justify-center min-h-[50px] pb-[12px] pl-[19px] pr-[19px] pt-[12px] gap-y-[28px] no-underline [transition:background_.18s,transform_.18s] min-[701px]:text-[13px] min-[961px]:text-[14px] min-[961px]:pl-[23px] min-[961px]:pr-[23px]"
                download="英语自学指北-句子.apkg"
                href="/assets/downloads/anki/sentences.apkg"
                >下载句子卡组 <span aria-hidden="true">↓</span>
              </a>
              <span class="[color:var(--muted)] text-[12px]">526 KB</span>
            </div>
          </article>
        </div>
        <p
          class="resource-note [color:var(--muted)] text-[11px] mb-0 ml-0 mr-0 mt-[19px] max-w-[none] min-[701px]:text-[12px]"
        >
          两套卡组中的配图使用在线链接，显示图片需要联网。
        </p>
      </div>
      <div
        class="wrap import-help mb-auto ml-auto mr-auto mt-[26px] w-[calc(100%_-_40px)] min-[701px]:mt-[38px] min-[701px]:w-[calc(100%_-_64px)] min-[1201px]:w-[min(1280px,calc(100%_-_112px))]"
      >
        <details class="[border-top:1px_solid_var(--line)]">
          <summary
            class="gap-x-[20px] cursor-pointer flex text-[14px] font-semibold justify-between leading-[1.7] [list-style:none] min-h-[64px] pb-[18px] pl-0 pr-0 pt-[18px] gap-y-[20px] min-[701px]:text-[16px] min-[701px]:leading-[unset] min-[701px]:pb-[21px] min-[701px]:pt-[21px]"
          >
            第一次使用 Anki，怎么导入？<span
              aria-hidden="true"
              class="font-normal"
              >＋</span
            >
          </summary>
          <div
            class="details-body [color:var(--muted)] text-[13px] leading-[1.9] max-w-[850px] pb-[24px] min-[701px]:text-[14px]"
          >
            <p class="mb-0 ml-0 mr-0 mt-0">
              安装并打开 Anki，选择「导入文件」，找到下载的 .apkg
              文件。初次使用他人分享的卡组时，不勾选「导入学习进度」，从自己的学习进度开始。
            </p>
            <div>
              <a
                class="[-webkit-tap-highlight-color:transparent] items-center [color:var(--green)] inline-flex mb-0 ml-0 mr-[24px] mt-[12px] min-h-[44px] underline [text-underline-offset:4px]"
                href="https://apps.ankiweb.net/"
                rel="noopener noreferrer"
                target="_blank"
                >获取 Anki ↗</a
              >
              <a
                class="[-webkit-tap-highlight-color:transparent] items-center [color:var(--green)] inline-flex mb-0 ml-0 mr-[24px] mt-[12px] min-h-[44px] underline [text-underline-offset:4px]"
                href="https://docs.ankiweb.net/importing/packaged-decks.html"
                rel="noopener noreferrer"
                target="_blank"
                >官方导入说明 ↗</a
              >
            </div>
          </div>
        </details>
        <details
          class="[border-bottom:1px_solid_var(--line)] [border-top:1px_solid_var(--line)]"
        >
          <summary
            class="gap-x-[20px] cursor-pointer flex text-[14px] font-semibold justify-between leading-[1.7] [list-style:none] min-h-[64px] pb-[18px] pl-0 pr-0 pt-[18px] gap-y-[20px] min-[701px]:text-[16px] min-[701px]:leading-[unset] min-[701px]:pb-[21px] min-[701px]:pt-[21px]"
          >
            想不起来，或发现还有别的正确答案，怎么办？<span
              aria-hidden="true"
              class="font-normal"
              >＋</span
            >
          </summary>
          <div
            class="details-body [color:var(--muted)] text-[13px] leading-[1.9] max-w-[850px] pb-[24px] min-[701px]:text-[14px]"
          >
            <p class="mb-0 ml-0 mr-0 mt-0">
              想不起来就先看懂答案，再按真实表现评分。一个句子可能有多种合理表达；如果卡片提示不够明确，就补充语境或修改提示，不必把其他正确表达当作错误。
            </p>
          </div>
        </details>
      </div>
    </section>
    <section
      aria-labelledby="routine-title"
      class="routine [background:var(--green)] text-white pb-[48px] pl-0 pr-0 pt-[48px] min-[701px]:pb-[76px] min-[701px]:pt-[72px]"
      id="routine"
    >
      <div
        class="wrap mb-auto ml-auto mr-auto mt-auto w-[calc(100%_-_40px)] min-[701px]:w-[calc(100%_-_64px)] min-[1201px]:w-[min(1280px,calc(100%_-_112px))]"
      >
        <div class="routine-heading">
          <div
            class="eyebrow [color:#f7df75] text-[12px] font-[650] tracking-[.09em] mb-[20px] min-[701px]:text-[13px]"
          >
            从本周学到的，走向自己想说的
          </div>
          <h2
            class="text-[29px] font-bold tracking-[-.045em] leading-[1.4] mb-0 ml-0 mr-0 mt-0 min-[701px]:text-[33px] min-[701px]:leading-[1.25] min-[961px]:text-[38px]"
            id="routine-title"
          >
            看懂了，还要试着说一句。
          </h2>
        </div>
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
              跟着教材，理解本周主题
            </h3>
            <p
              class="[color:#d7e5dc] text-[14px] leading-[1.9] mb-0 ml-0 mr-0 mt-[10px] min-[701px]:text-[15px] min-[701px]:mt-[12px]"
            >
              观看每周视频，对照 Essential Grammar in Use
              的相关内容，选出自己能看懂的例句。
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
              到 Anki，主动回忆
            </h3>
            <p
              class="[color:#d7e5dc] text-[14px] leading-[1.9] mb-0 ml-0 mr-0 mt-[10px] min-[701px]:text-[15px] min-[701px]:mt-[12px]"
            >
              先回答，再核对。一次只练一个重点，按自己的实际表现安排后续复习。
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
              换成自己，投入实践
            </h3>
            <p
              class="[color:#d7e5dc] text-[14px] leading-[1.9] mb-0 ml-0 mr-0 mt-[10px] min-[701px]:text-[15px] min-[701px]:mt-[12px]"
            >
              换一个人物、时间或场景，说一句与自己有关的话。核对表达后，再用到日常阅读和交流中。
            </p>
          </article>
        </div>
        <NuxtLink
          class="btn btn-yellow [-webkit-tap-highlight-color:transparent] items-center [background:var(--yellow)] rounded-full [color:var(--ink)] gap-x-[28px] inline-flex text-[14px] font-[650] justify-center min-h-[50px] pb-[11px] pl-[26px] pr-[26px] pt-[11px] gap-y-[28px] no-underline [transition:background_.18s,transform_.18s]"
          to="/columns"
          >去看每周视频 <span aria-hidden="true">↗</span>
        </NuxtLink>
      </div>
    </section>
  </main>
</template>
