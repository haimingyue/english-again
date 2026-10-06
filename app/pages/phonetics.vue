<script setup lang="ts">
const selectedCard = ref("0");
usePageSeo(
  "音标与听辨",
  "从最小对立体听辨开始，练习英语发音，理解音标与发音动作，下载真实 Anki 音标卡组。",
);
definePageMeta({ alias: "/phonetics.html" });
</script>

<template>
  <main data-page="phonetics" id="main" tabindex="-1">
    <section
      aria-labelledby="page-title"
      class="hero [background:var(--green)] text-white pb-[44px] pl-0 pr-0 pt-[40px] min-[701px]:pb-[56px] min-[701px]:pt-[56px] min-[961px]:pb-[76px] min-[961px]:pt-[72px] min-[1600px]:pb-[88px] min-[1600px]:pt-[88px]"
    >
      <div
        class="wrap hero-grid items-center gap-x-[36px] grid grid-cols-[1fr] mb-auto ml-auto mr-auto mt-auto gap-y-[36px] w-[calc(100%_-_40px)] min-[701px]:gap-x-[32px] min-[701px]:grid-cols-[1fr_1fr] min-[701px]:gap-y-[32px] min-[701px]:w-[calc(100%_-_64px)] min-[961px]:gap-x-[48px] min-[961px]:grid-cols-[1.15fr_1fr] min-[961px]:gap-y-[48px] min-[1201px]:gap-x-[80px] min-[1201px]:gap-y-[80px] min-[1201px]:w-[min(1280px,calc(100%_-_112px))]"
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
            >第 1–2 周 · 发音起步
          </div>
          <h1
            class="text-[42px] font-[750] tracking-[-.045em] leading-[1.34] mb-0 ml-0 mr-0 mt-0 max-w-[680px] min-[701px]:text-[48px] min-[961px]:text-[54px] min-[1201px]:text-[64px] min-[1600px]:text-[70px]"
            id="page-title"
          >
            先听见差别，<br />再把声音<span
              class="design-underline relative whitespace-nowrap"
              >说清楚。</span
            >
          </h1>
          <p
            class="hero-lede [color:#dce9df] text-[15px] leading-[1.9] mb-[25px] ml-0 mr-0 mt-[23px] min-[701px]:text-[16px] min-[701px]:mb-[34px] min-[701px]:mt-[30px] min-[961px]:text-[18px]"
          >
            从一组容易混淆的声音开始。<br />训练耳朵、理解发音动作，再用卡片反复练习。
          </p>
          <div
            class="actions items-center gap-x-[24px] flex flex-wrap gap-y-[24px] min-[701px]:gap-x-[14px] min-[701px]:gap-y-[14px] min-[961px]:gap-x-[26px] min-[961px]:gap-y-[26px]"
          >
            <a
              class="btn btn-yellow [-webkit-tap-highlight-color:transparent] items-center [background:var(--yellow)] rounded-full [color:var(--ink)] gap-x-[28px] inline-flex text-[14px] font-[650] justify-center min-h-[50px] pb-[12px] pl-[22px] pr-[22px] pt-[12px] gap-y-[28px] no-underline [transition:background_.18s,transform_.18s] min-[961px]:text-[16px] min-[961px]:min-h-[56px] min-[961px]:pb-[14px] min-[961px]:pl-[28px] min-[961px]:pr-[28px] min-[961px]:pt-[14px]"
              href="#download"
              >获取音标卡组 <span aria-hidden="true">↓</span>
            </a>
            <a
              class="text-link light-link [-webkit-tap-highlight-color:transparent] items-center bg-transparent text-white gap-x-[18px] inline-flex text-[13px] font-[650] min-h-[44px] pb-0 pl-0 pr-0 pt-0 gap-y-[18px] no-underline min-[701px]:text-[14px] min-[961px]:text-[15px]"
              href="#method"
              >了解学习方法 <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div
            class="hero-note items-center [color:#d5e2d9] gap-x-[9px] flex text-[11px] mt-[22px] gap-y-[9px] min-[701px]:mt-[26px] min-[961px]:text-[12px] min-[961px]:mt-[40px]"
          >
            <span
              aria-hidden="true"
              class="note-dot bg-current rounded-full inline-block shrink-0 h-[6px] w-[6px]"
            >
            </span
            >自制 Anki 卡牌 · 配套音频与发音图解
          </div>
        </div>
        <PhoneticsQuiz></PhoneticsQuiz>
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
          >学会怎么练
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
          >看看自制卡片
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
          >带到 Anki 里复习
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
      class="section method pb-[56px] pl-0 pr-0 pt-[56px] min-[701px]:pb-[72px] min-[701px]:pt-[72px] min-[961px]:pb-[96px] min-[961px]:pt-[96px]"
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
              让听到的、说出的、看到的，<br />连成同一个声音。
            </h2>
          </div>
          <p
            class="section-intro [color:var(--muted)] text-[15px] leading-[1.9] mb-0 ml-0 mr-0 mt-[18px] max-w-[640px] min-[701px]:text-[16px] min-[701px]:mt-[24px] min-[961px]:mt-0 min-[961px]:max-w-[330px] min-[1201px]:max-w-[380px]"
          >
            Fluent Forever
            将发音学习分为耳朵、嘴巴和文字三类训练。把它们放在一起练，让读过的词也能被听懂、说出来。
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
              <span>01 / EARS</span>
              <span aria-hidden="true">↗</span>
            </div>
            <div
              class="sound-example [font-family:Georgia,serif] text-[45px] [font-style:normal] tracking-[-.035em] leading-[1.35] pb-[17px] pl-0 pr-0 pt-[20px] whitespace-nowrap min-[701px]:text-[38px] min-[701px]:pb-[25px] min-[701px]:pt-[29px] min-[961px]:text-[46px] min-[1201px]:text-[52px]"
            >
              /ɪ/
              <span
                class="[color:#829376] text-[24px] pb-0 pl-[4px] pr-[4px] pt-0 min-[961px]:text-[30px] min-[961px]:pl-[8px] min-[961px]:pr-[8px]"
                >≠</span
              >
              /i/
            </div>
            <h3
              class="text-[24px] tracking-[-.025em] leading-[1.25] mb-0 ml-0 mr-0 mt-0 min-[701px]:text-[20px] min-[961px]:text-[23px]"
            >
              耳朵：先判断，再核对
            </h3>
            <p
              class="[color:var(--muted)] text-[15px] leading-[1.9] mb-[11px] ml-0 mr-0 mt-[13px] min-[701px]:text-[14px] min-[701px]:mb-[18px] min-[701px]:mt-[16px] min-[961px]:text-[15px]"
            >
              用最小对立体练习听辨：两个词只差一个声音。听完先选答案，再根据反馈重听，留意刚才忽略的差别。
            </p>
            <a
              class="text-link [-webkit-tap-highlight-color:transparent] items-center [align-self:flex-start] bg-transparent [color:inherit] gap-x-[18px] inline-flex text-[13px] font-[650] mt-auto min-h-[44px] pb-0 pl-0 pr-0 pt-0 gap-y-[18px] no-underline"
              href="#listen"
              >试一组听辨 <span aria-hidden="true">↑</span>
            </a>
          </article>
          <article
            class="method-item [border-top:1px_solid_#bfc6b8] flex flex-col pt-[17px] min-[701px]:pt-[20px]"
          >
            <div
              class="method-index [color:#60715e] flex text-[10px] justify-between tracking-[.12em] min-[701px]:text-[11px]"
            >
              <span>02 / MOUTH</span>
              <span aria-hidden="true">↗</span>
            </div>
            <div
              class="sound-example [font-family:Georgia,serif] text-[45px] [font-style:normal] tracking-[-.035em] leading-[1.35] pb-[17px] pl-0 pr-0 pt-[20px] whitespace-nowrap min-[701px]:text-[38px] min-[701px]:pb-[25px] min-[701px]:pt-[29px] min-[961px]:text-[46px] min-[1201px]:text-[52px]"
            >
              /f/
              <span
                class="[color:#829376] text-[24px] pb-0 pl-[4px] pr-[4px] pt-0 min-[961px]:text-[30px] min-[961px]:pl-[8px] min-[961px]:pr-[8px]"
                >↔</span
              >
              /v/
            </div>
            <h3
              class="text-[24px] tracking-[-.025em] leading-[1.25] mb-0 ml-0 mr-0 mt-0 min-[701px]:text-[20px] min-[961px]:text-[23px]"
            >
              嘴巴：知道声音怎么发出
            </h3>
            <p
              class="[color:var(--muted)] text-[15px] leading-[1.9] mb-[11px] ml-0 mr-0 mt-[13px] min-[701px]:text-[14px] min-[701px]:mb-[18px] min-[701px]:mt-[16px] min-[961px]:text-[15px]"
            >
              观察舌头、嘴唇与声带。对照发音图解模仿，也可以录下自己，再与范音比较；重点练习自己不熟悉的声音。
            </p>
            <button
              @click="
                selectedCard = '1';
                navigateTo({ hash: '#cards' });
              "
              class="text-link [-webkit-tap-highlight-color:transparent] items-center [align-self:flex-start] bg-transparent [border:0] [color:inherit] gap-x-[18px] cursor-pointer inline-flex text-[13px] font-[650] mt-auto min-h-[44px] pb-0 pl-0 pr-0 pt-0 gap-y-[18px]"
              type="button"
            >
              看看发音图解 <span aria-hidden="true">↓</span>
            </button>
          </article>
          <article
            class="method-item [border-top:1px_solid_#bfc6b8] flex flex-col pt-[17px] min-[701px]:pt-[20px]"
          >
            <div
              class="method-index [color:#60715e] flex text-[10px] justify-between tracking-[.12em] min-[701px]:text-[11px]"
            >
              <span>03 / EYES</span>
              <span aria-hidden="true">↗</span>
            </div>
            <div
              class="sound-example word-example [font-family:Georgia,serif] text-[38px] [font-style:normal] tracking-[-.035em] leading-[1.35] pb-[17px] pl-0 pr-0 pt-[20px] whitespace-nowrap min-[701px]:text-[32px] min-[701px]:pb-[25px] min-[701px]:pt-[29px] min-[961px]:text-[36px] min-[1201px]:text-[42px]"
            >
              de<span
                class="silent [color:#87937e] text-[24px] pb-0 pl-0 pr-0 pt-0 [text-decoration:line-through] [text-decoration-color:#947c37] [text-decoration-thickness:2px] min-[961px]:text-[30px]"
                >b</span
              >t
              <span
                class="[color:#829376] text-[24px] pb-0 pl-[4px] pr-[4px] pt-0 min-[961px]:text-[30px] min-[961px]:pl-[8px] min-[961px]:pr-[8px]"
                >→</span
              >
              /det/
            </div>
            <h3
              class="text-[24px] tracking-[-.025em] leading-[1.25] mb-0 ml-0 mr-0 mt-0 min-[701px]:text-[20px] min-[961px]:text-[23px]"
            >
              文字：把拼写与声音连起来
            </h3>
            <p
              class="[color:var(--muted)] text-[15px] leading-[1.9] mb-[11px] ml-0 mr-0 mt-[13px] min-[701px]:text-[14px] min-[701px]:mb-[18px] min-[701px]:mt-[16px] min-[961px]:text-[15px]"
            >
              学新词时，同时核对录音和音标。例如 debt 的 b
              不发音。通过具体单词建立联系，再到新句子里检查。
            </p>
            <a
              class="text-link [-webkit-tap-highlight-color:transparent] items-center [align-self:flex-start] bg-transparent [color:inherit] gap-x-[18px] inline-flex text-[13px] font-[650] mt-auto min-h-[44px] pb-0 pl-0 pr-0 pt-0 gap-y-[18px] no-underline"
              href="#routine"
              >安排一次练习 <span aria-hidden="true">↓</span>
            </a>
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
            Gabriel Wyner · <em>Fluent Forever</em>，第 3 章
            <em>Sound Play</em>。以上为本站整理的练习说明。
          </p>
          <a
            class="[-webkit-tap-highlight-color:transparent] items-center [color:inherit] flex ml-auto mt-0 min-h-[36px] underline [text-underline-offset:4px] whitespace-nowrap min-[701px]:ml-[unset] min-[701px]:mt-[-10px] min-[701px]:min-h-[44px]"
            href="https://fluentforeverbook.com/chapter3"
            rel="noopener noreferrer"
            target="_blank"
            >章节资源 <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
    <PhoneticsCards v-model="selectedCard"></PhoneticsCards>
    <section
      aria-labelledby="download-title"
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
            把练习带走
          </div>
          <h2
            class="text-[31px] font-bold tracking-[-.045em] leading-[1.35] mb-0 ml-0 mr-0 mt-0 min-[701px]:text-[38px] min-[701px]:leading-[1.25] min-[1201px]:text-[44px]"
            id="download-title"
          >
            这一套音标卡，<br />放进你的 Anki。
          </h2>
          <p
            class="section-intro [color:var(--muted)] text-[15px] leading-[1.9] mb-[20px] ml-0 mr-0 mt-[20px] max-w-[450px] min-[701px]:text-[16px] min-[701px]:mb-[25px] min-[701px]:mt-[25px]"
          >
            元音与辅音的发音线索，加上单词、音素的听辨练习。导入后，跟着自己的复习节奏继续练。
          </p>
          <div
            class="deck-tags [color:#536350] gap-x-[16px] flex flex-wrap text-[12px] mb-[24px] gap-y-[8px] min-[701px]:gap-x-[20px] min-[701px]:text-[13px] min-[701px]:mb-[28px]"
          >
            <span class="items-center gap-x-[6px] inline-flex gap-y-[6px]"
              >元音 IPA</span
            >
            <span class="items-center gap-x-[6px] inline-flex gap-y-[6px]"
              >辅音 IPA</span
            >
            <span class="items-center gap-x-[6px] inline-flex gap-y-[6px]"
              >单词听辨</span
            >
            <span class="items-center gap-x-[6px] inline-flex gap-y-[6px]"
              >音素听辨</span
            >
          </div>
          <a
            class="btn btn-dark [-webkit-tap-highlight-color:transparent] items-center [background:var(--ink)] rounded-full text-white gap-x-[28px] inline-flex text-[15px] font-[650] justify-center min-h-[56px] pb-[14px] pl-[28px] pr-[28px] pt-[14px] gap-y-[28px] no-underline [transition:background_.18s,transform_.18s] min-[701px]:text-[16px]"
            download="英语自学指北-音标.apkg"
            href="/assets/downloads/anki/phonetics.apkg"
            >下载音标卡组 <span aria-hidden="true">↓</span>
          </a>
          <p
            class="file-meta [color:var(--muted)] text-[11px] mb-0 ml-0 mr-0 mt-[12px] min-[701px]:text-[12px]"
          >
            Anki 卡组 · .apkg · 24.5 MB
          </p>
        </div>
        <div
          class="deck-summary [background:var(--sage)] pb-[26px] pl-[26px] pr-[26px] pt-[26px] min-[961px]:pb-[24px] min-[961px]:pl-[36px] min-[961px]:pr-[36px] min-[961px]:pt-[30px]"
        >
          <div
            class="deck-summary-top flex text-[11px] justify-between tracking-[.04em] min-[701px]:text-[12px]"
          >
            <span>英语自学指北 / 发音起步</span>
            <span aria-hidden="true">↗</span>
          </div>
          <div
            class="deck-count items-baseline gap-x-[16px] flex mt-[23px] gap-y-[16px] min-[701px]:mt-[26px] min-[961px]:gap-x-[22px] min-[961px]:gap-y-[22px]"
          >
            <strong
              class="text-[100px] font-[650] tracking-[-.065em] leading-[1] min-[701px]:text-[90px] min-[961px]:text-[112px]"
              >264</strong
            >
            <span
              class="text-[14px] min-[701px]:text-[13px] min-[961px]:text-[16px]"
              >张练习卡片</span
            >
          </div>
          <p class="[color:#54644f] text-[13px] mb-[24px] ml-0 mr-0 mt-[16px]">
            154 条笔记，生成四类练习卡片。
          </p>
          <div class="deck-contents">
            <div
              class="[border-top:1px_solid_#b7c4ae] flex text-[14px] justify-between pb-[11px] pl-0 pr-0 pt-[11px]"
            >
              <span>元音与辅音</span>
              <strong class="font-medium">44 条笔记</strong>
            </div>
            <div
              class="[border-top:1px_solid_#b7c4ae] flex text-[14px] justify-between pb-[11px] pl-0 pr-0 pt-[11px]"
            >
              <span>单词听辨</span>
              <strong class="font-medium">90 组</strong>
            </div>
            <div
              class="[border-top:1px_solid_#b7c4ae] flex text-[14px] justify-between pb-[11px] pl-0 pr-0 pt-[11px]"
            >
              <span>音素听辨</span>
              <strong class="font-medium">20 组</strong>
            </div>
          </div>
          <div
            class="deck-summary-bottom items-center [border-top:1px_solid_#b7c4ae] gap-x-[12px] flex text-[12px] mt-[10px] pt-[20px] gap-y-[12px]"
          >
            <span aria-hidden="true" class="text-[24px] leading-[1]">↻</span
            >听一次，想一想，再核对。
          </div>
        </div>
      </div>
      <div
        class="wrap import-help mb-auto ml-auto mr-auto mt-[34px] w-[calc(100%_-_40px)] min-[701px]:mt-[60px] min-[701px]:w-[calc(100%_-_64px)] min-[1201px]:w-[min(1280px,calc(100%_-_112px))]"
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
              文件，确认后导入。初次使用他人分享的卡组时，不勾选「导入学习进度」，按自己的节奏开始复习。
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
                >查看官方导入说明 ↗</a
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
            截图中的复习间隔，需要照着设置吗？<span
              aria-hidden="true"
              class="font-normal"
              >＋</span
            >
          </summary>
          <div
            class="details-body [color:var(--muted)] text-[13px] leading-[1.9] max-w-[850px] pb-[24px] min-[701px]:text-[14px]"
          >
            <p class="mb-0 ml-0 mr-0 mt-0">
              不需要。截图中的间隔来自当时的个人复习情况。先独立回答，再查看答案，根据这一次的真实表现评分，交给
              Anki 安排后续复习。
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
            下一次，照着这样练
          </div>
          <h2
            class="text-[29px] font-bold tracking-[-.045em] leading-[1.4] mb-0 ml-0 mr-0 mt-0 min-[701px]:text-[33px] min-[701px]:leading-[1.25] min-[961px]:text-[38px]"
            id="routine-title"
          >
            每天回来，<br
              class="mobile-break block min-[701px]:hidden"
            />把不熟悉的声音再练一遍。
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
              听完，先自己判断
            </h3>
            <p
              class="[color:#d7e5dc] text-[14px] leading-[1.9] mb-0 ml-0 mr-0 mt-[10px] min-[701px]:text-[15px] min-[701px]:mt-[12px]"
            >
              播放卡片音频，选择听到的词或声音。先给出答案，再翻面核对。
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
              重听，再跟读一次
            </h3>
            <p
              class="[color:#d7e5dc] text-[14px] leading-[1.9] mb-0 ml-0 mr-0 mt-[10px] min-[701px]:text-[15px] min-[701px]:mt-[12px]"
            >
              选错了就比较两边的声音；发不出来，就结合图解调整口腔动作。
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
              隔一段时间，再试
            </h3>
            <p
              class="[color:#d7e5dc] text-[14px] leading-[1.9] mb-0 ml-0 mr-0 mt-[10px] min-[701px]:text-[15px] min-[701px]:mt-[12px]"
            >
              按 Anki
              的安排回来复习，也在新单词、不同说话者的录音中留意这些声音。
            </p>
          </article>
        </div>
        <a
          class="btn btn-yellow [-webkit-tap-highlight-color:transparent] items-center [background:var(--yellow)] rounded-full [color:var(--ink)] gap-x-[28px] inline-flex text-[14px] font-[650] justify-center min-h-[50px] pb-[11px] pl-[26px] pr-[26px] pt-[11px] gap-y-[28px] no-underline [transition:background_.18s,transform_.18s]"
          href="#listen"
          >现在听一组 <span aria-hidden="true">↑</span>
        </a>
      </div>
    </section>
  </main>
</template>
