<script setup lang="ts">
usePageSeo(
  "阅读与理解",
  "顺着英文语序理解词义、主线、指代和关系，用句子练习与持续阅读把英语用起来。",
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
            阅读方法与实践 / READ FOR MEANING
          </div>
          <h1
            class="text-[42px] font-[750] tracking-[-.045em] leading-[1.32] mb-0 ml-0 mr-0 mt-0 min-[701px]:text-[43px] min-[961px]:text-[51px] min-[1201px]:text-[58px]"
          >
            顺着英文语序，<br />读懂句子，<br />也读进<span
              class="design-underline relative whitespace-nowrap"
              >故事里。</span
            >
          </h1>
          <p
            class="reading-lede [color:#e0e9df] text-[14px] leading-[1.9] mb-[23px] ml-0 mr-0 mt-[23px] min-[701px]:text-[15px] min-[701px]:mb-[30px] min-[701px]:mt-[25px] min-[1201px]:text-[16px]"
          >
            把长句分成意群，接住前后的人物、动作和逻辑。<br
              class="hidden min-[961px]:[display:unset]"
            />从读懂一句开始，慢慢读完你想读的第一本书。
          </p>
          <div
            class="actions items-center gap-x-[18px] flex flex-row flex-wrap gap-y-[18px] min-[701px]:items-start min-[701px]:gap-x-[10px] min-[701px]:flex-col min-[701px]:gap-y-[10px] min-[961px]:items-center min-[961px]:gap-x-[19px] min-[961px]:[flex-direction:unset] min-[961px]:gap-y-[19px] min-[1201px]:gap-x-[25px] min-[1201px]:gap-y-[25px]"
          >
            <a
              class="btn btn-yellow [-webkit-tap-highlight-color:transparent] items-center [background:var(--yellow)] rounded-full [color:var(--ink)] gap-x-[28px] inline-flex text-[13px] font-[650] justify-center min-h-[48px] pb-[12px] pl-[21px] pr-[21px] pt-[12px] gap-y-[28px] no-underline [transition:background_.18s,transform_.18s] min-[701px]:text-[14px] min-[701px]:min-h-[52px] min-[701px]:pl-[23px] min-[701px]:pr-[23px] min-[1201px]:pb-[14px] min-[1201px]:pl-[28px] min-[1201px]:pr-[28px] min-[1201px]:pt-[14px]"
              href="#try"
              >跟着读一句 <span aria-hidden="true">↓</span>
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
            理解 → 核对 → 再读一段。按自己的节奏往前走。
          </p>
        </div>
        <aside
          class="reading-book-panel [border:1px_solid_#709280] gap-x-[23px] grid grid-cols-[86px_1fr] max-w-[none] pb-[20px] pl-[20px] pr-[20px] pt-[20px] gap-y-[14px] min-[701px]:gap-x-[unset] min-[701px]:[display:unset] min-[701px]:grid-cols-[unset] min-[701px]:max-w-[470px] min-[701px]:gap-y-[unset] min-[1201px]:pb-[24px] min-[1201px]:pl-[27px] min-[1201px]:pr-[27px] min-[1201px]:pt-[22px]"
        >
          <div
            class="reading-panel-top [color:#dae7d9] gap-x-[20px] flex text-[10px] [grid-column:1/-1] justify-between tracking-[.05em] gap-y-[20px] min-[701px]:text-[9px] min-[701px]:[grid-column:unset] min-[961px]:text-[11px]"
          >
            <span>从阅读方法，到真实阅读</span>
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
              >先读懂<br />
              <strong class="text-[15px] min-[961px]:text-[18px]"
                >再往前</strong
              >
              <span aria-hidden="true" class="text-[22px]">↗</span>
            </span>
          </div>
          <div
            class="reading-panel-bottom [align-self:center] [border:0] [border-top:1px_solid_#709280] pb-0 pl-0 pr-0 pt-0 min-[701px]:[align-self:unset] min-[701px]:[border:unset] min-[701px]:pb-[unset] min-[701px]:pl-[unset] min-[701px]:pr-[unset] min-[701px]:pt-[20px]"
          >
            <strong
              class="block text-[14px] leading-[1.7] min-[701px]:[display:unset] min-[701px]:leading-[unset] min-[961px]:text-[17px]"
              >读到的每一块，都接得起来。</strong
            >
            <p
              class="[color:#d3e1d2] text-[10px] leading-[1.9] mb-0 ml-0 mr-0 mt-[8px]"
            >
              本页参考书中方法，结合阅读研究与学习原则整理。<br
                class="hidden min-[701px]:[display:unset]"
              />“8 天”为书名，学习进度因人而异。
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
          href="#try"
        >
          <span
            class="[color:#52644f] text-[11px] font-normal min-[701px]:text-[13px]"
            >01</span
          >跟着读一句
          <span
            aria-hidden="true"
            class="route-arrow [color:#52644f] hidden ml-auto min-[701px]:[display:unset]"
            >↘</span
          >
        </a>
        <a
          class="[-webkit-tap-highlight-color:transparent] items-center [border-left:1px_solid_#bac4b3] [color:inherit] gap-x-[4px] flex flex-col text-[11px] font-semibold justify-center leading-[1.6] min-h-[52px] pl-0 gap-y-[4px] no-underline min-[701px]:gap-x-[12px] min-[701px]:[flex-direction:unset] min-[701px]:text-[13px] min-[701px]:[justify-content:unset] min-[701px]:leading-[unset] min-[701px]:min-h-[44px] min-[701px]:pl-[22px] min-[701px]:gap-y-[12px] min-[961px]:gap-x-[20px] min-[961px]:text-[15px] min-[961px]:pl-[40px] min-[961px]:gap-y-[20px]"
          href="#methods"
        >
          <span
            class="[color:#52644f] text-[11px] font-normal min-[701px]:text-[13px]"
            >02</span
          >掌握阅读方法
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
    <ReadingHints></ReadingHints>
    <section
      class="section reading-methods [background:var(--sage)] pb-[56px] pl-0 pr-0 pt-[56px] min-[701px]:pb-[72px] min-[701px]:pt-[72px] min-[961px]:pb-[96px] min-[961px]:pt-[96px]"
      id="methods"
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
              02 / 四个可以练习的动作
            </div>
            <h2
              class="text-[29px] font-bold tracking-[-.045em] leading-[1.45] mb-0 ml-0 mr-0 mt-0 max-w-[760px] min-[701px]:text-[34px] min-[701px]:leading-[1.4] min-[961px]:text-[38px]"
            >
              一块一块地读，<br />也记得它们的联系。
            </h2>
          </div>
          <p
            class="section-intro [color:var(--muted)] text-[15px] leading-[1.9] mb-0 ml-0 mr-0 mt-[18px] max-w-[640px] min-[701px]:text-[16px] min-[701px]:mt-[24px] min-[961px]:mt-0 min-[961px]:max-w-[330px] min-[1201px]:max-w-[380px]"
          >
            分段让信息更好处理；语境与句子结构，帮助我们核对理解。四个方法可以在同一次阅读中配合使用。
          </p>
        </div>
        <div
          class="reading-method-grid gap-x-0 grid grid-cols-[1fr] gap-y-0 min-[701px]:gap-x-[40px] min-[701px]:grid-cols-[1fr_1fr] min-[1201px]:gap-x-[64px]"
        >
          <article
            class="[border-top:1px_solid_#aebda4] pb-[28px] pl-0 pr-0 pt-[20px] min-[701px]:pb-[32px] min-[701px]:pt-[22px]"
          >
            <div
              class="method-heading items-center [color:#50614b] flex text-[10px] justify-between tracking-[.08em]"
            >
              <span>01 / CONTEXT</span>
              <span aria-hidden="true" class="text-[23px]">↗</span>
            </div>
            <div
              class="reading-example items-center gap-x-[8px] flex flex-wrap [font-family:Georgia,serif] text-[28px] [font-style:normal] tracking-[-.02em] leading-[1.4] min-h-[85px] pb-[20px] pl-0 pr-0 pt-[20px] gap-y-[8px] min-[701px]:text-[24px] min-[701px]:min-h-[92px] min-[961px]:text-[27px] min-[1201px]:text-[30px]"
              lang="en"
            >
              cut
              <mark
                class="[background:var(--yellow)] [color:inherit] pb-0 pl-[5px] pr-[5px] pt-0"
                >prices</mark
              >
            </div>
            <h3
              class="text-[23px] tracking-[-.045em] leading-[1.25] mb-0 ml-0 mr-0 mt-0 min-[701px]:text-[22px] min-[961px]:text-[24px]"
            >
              结合语境，确定词义
            </h3>
            <p
              class="[color:#4a5b47] text-[14px] leading-[1.9] mb-[13px] ml-0 mr-0 mt-[13px] min-[701px]:mb-[16px] min-[701px]:mt-[16px]"
            >
              cut 在这里是“降低”，prices
              给出了线索。先看搭配和前后文，再选词义；推测不通时，查证相关义项。
            </p>
            <div class="method-takeaway text-[12px] font-semibold mt-[18px]">
              看这个词，在这里怎么用。
            </div>
          </article>
          <article
            class="[border-top:1px_solid_#aebda4] pb-[28px] pl-0 pr-0 pt-[20px] min-[701px]:pb-[32px] min-[701px]:pt-[22px]"
          >
            <div
              class="method-heading items-center [color:#50614b] flex text-[10px] justify-between tracking-[.08em]"
            >
              <span>02 / CHUNKS</span>
              <span aria-hidden="true" class="text-[23px]">/</span>
            </div>
            <div
              class="reading-example items-center gap-x-[8px] flex flex-wrap [font-family:Georgia,serif] text-[28px] [font-style:normal] tracking-[-.02em] leading-[1.4] min-h-[85px] pb-[20px] pl-0 pr-0 pt-[20px] gap-y-[8px] min-[701px]:text-[24px] min-[701px]:min-h-[92px] min-[961px]:text-[27px] min-[1201px]:text-[30px]"
              lang="en"
            >
              The email <span class="[color:#61725b]">/</span> that Maya sent…
            </div>
            <h3
              class="text-[23px] tracking-[-.045em] leading-[1.25] mb-0 ml-0 mr-0 mt-0 min-[701px]:text-[22px] min-[961px]:text-[24px]"
            >
              按意群分段
            </h3>
            <p
              class="[color:#4a5b47] text-[14px] leading-[1.9] mb-[13px] ml-0 mr-0 mt-[13px] min-[701px]:mb-[16px] min-[701px]:mt-[16px]"
            >
              把相关的词放在一起读。一个短暂停顿不等于句子结束：读到“邮件”，仍要记着它后面会做什么。
            </p>
            <div class="method-takeaway text-[12px] font-semibold mt-[18px]">
              停顿可以有，前后联系不能丢。
            </div>
          </article>
          <article
            class="[border-top:1px_solid_#aebda4] pb-[28px] pl-0 pr-0 pt-[24px] min-[701px]:pb-[32px]"
          >
            <div
              class="method-heading items-center [color:#50614b] flex text-[10px] justify-between tracking-[.08em]"
            >
              <span>03 / CONNECTIONS</span>
              <span aria-hidden="true" class="text-[23px]">↔</span>
            </div>
            <div
              class="reading-example items-center gap-x-[8px] flex flex-wrap [font-family:Georgia,serif] text-[28px] [font-style:normal] tracking-[-.02em] leading-[1.4] min-h-[85px] pb-[20px] pl-0 pr-0 pt-[20px] gap-y-[8px] min-[701px]:text-[24px] min-[701px]:min-h-[92px] min-[961px]:text-[27px] min-[1201px]:text-[30px]"
              lang="en"
            >
              it <span class="[color:#61725b]">→</span> the email
            </div>
            <h3
              class="text-[23px] tracking-[-.045em] leading-[1.25] mb-0 ml-0 mr-0 mt-0 min-[701px]:text-[22px] min-[961px]:text-[24px]"
            >
              “加词”：补明关系
            </h3>
            <p
              class="[color:#4a5b47] text-[14px] leading-[1.9] mb-[13px] ml-0 mr-0 mt-[13px] min-[701px]:mb-[16px] min-[701px]:mt-[16px]"
            >
              把 it
              理解为“这封邮件”，补明指代和省略的对象。补充必须有原文依据，不能凭空加上原因或结论。
            </p>
            <div class="method-takeaway text-[12px] font-semibold mt-[18px]">
              把“它”指明白，让意思接得上。
            </div>
          </article>
          <article
            class="[border-top:1px_solid_#aebda4] pb-[28px] pl-0 pr-0 pt-[24px] min-[701px]:pb-[32px]"
          >
            <div
              class="method-heading items-center [color:#50614b] flex text-[10px] justify-between tracking-[.08em]"
            >
              <span>04 / FOLLOW THE THREAD</span>
              <span aria-hidden="true" class="text-[23px]">→</span>
            </div>
            <div
              class="reading-example items-center gap-x-[8px] flex flex-wrap [font-family:Georgia,serif] text-[28px] [font-style:normal] tracking-[-.02em] leading-[1.4] min-h-[85px] pb-[20px] pl-0 pr-0 pt-[20px] gap-y-[8px] min-[701px]:text-[24px] min-[701px]:min-h-[92px] min-[961px]:text-[27px] min-[1201px]:text-[30px]"
              lang="en"
            >
              The email <span class="[color:#61725b]">…</span> answered
            </div>
            <h3
              class="text-[23px] tracking-[-.045em] leading-[1.25] mb-0 ml-0 mr-0 mt-0 min-[701px]:text-[22px] min-[961px]:text-[24px]"
            >
              顺着语序，接回主线
            </h3>
            <p
              class="[color:#4a5b47] text-[14px] leading-[1.9] mb-[13px] ml-0 mr-0 mt-[13px] min-[701px]:mb-[16px] min-[701px]:mt-[16px]"
            >
              先接收邮件的信息，再处理 Maya 发邮件的说明，最后把 answered
              接回邮件。留意主线有没有说完。
            </p>
            <div class="method-takeaway text-[12px] font-semibold mt-[18px]">
              说明可以插进来，主线要接回去。
            </div>
          </article>
        </div>
        <p
          class="reading-method-note [border-top:1px_solid_#bdc8b1] [color:#50614b] text-[11px] leading-[1.9] mb-0 ml-0 mr-0 mt-0 pt-[21px] min-[701px]:text-[12px]"
        >
          顺读允许有目的地回看。分段也可能有不同的合理方式，核对标准是：人物、动作、修饰与逻辑关系有没有改变。
        </p>
      </div>
    </section>
    <section
      class="section word-section pb-[56px] pl-0 pr-0 pt-[56px] min-[701px]:pb-[72px] min-[701px]:pt-[72px] min-[961px]:pb-[96px] min-[961px]:pt-[96px]"
      id="words"
    >
      <div
        class="wrap word-layout gap-x-[32px] grid grid-cols-[1fr] mb-auto ml-auto mr-auto mt-auto gap-y-[32px] w-[calc(100%_-_40px)] min-[701px]:gap-x-[35px] min-[701px]:grid-cols-[1fr_1.15fr] min-[701px]:gap-y-[35px] min-[701px]:w-[calc(100%_-_64px)] min-[961px]:gap-x-[55px] min-[961px]:grid-cols-[1fr_1.3fr] min-[961px]:gap-y-[55px] min-[1201px]:gap-x-[90px] min-[1201px]:gap-y-[90px] min-[1201px]:w-[min(1280px,calc(100%_-_112px))]"
      >
        <div>
          <div
            class="eyebrow text-[12px] font-[650] tracking-[.09em] mb-[19px] min-[701px]:text-[13px] min-[701px]:mb-[24px]"
          >
            03 / 遇到生词时
          </div>
          <h2
            class="text-[29px] font-bold tracking-[-.045em] leading-[1.45] mb-0 ml-0 mr-0 mt-0 min-[701px]:text-[34px] min-[701px]:leading-[1.4] min-[961px]:text-[38px]"
          >
            先判断，<br />它挡住主线了吗？
          </h2>
          <p
            class="section-intro [color:var(--muted)] text-[14px] leading-[1.9] mb-0 ml-0 mr-0 mt-[18px] max-w-[640px] min-[701px]:text-[15px] min-[701px]:mt-[25px] min-[961px]:max-w-[330px] min-[1201px]:max-w-[380px]"
          >
            不是每个生词都要立刻查。<br />也别把“猜到大概”，当成已经确定。
          </p>
          <p
            class="word-small-note [border-left:3px_solid_#c5cbb8] [color:#65705e] text-[11px] leading-[1.9] mb-0 ml-0 mr-0 mt-[22px] pl-[17px] min-[701px]:text-[12px] min-[701px]:mt-[30px]"
          >
            尤其留意 hardly、only、unless、before。<br />这些“小词”可能改变否定、条件或时间。
          </p>
        </div>
        <div class="word-decisions">
          <article
            class="[border-top:0] gap-x-[18px] flex pb-[22px] pl-0 pr-0 pt-0 gap-y-[18px] min-[701px]:gap-x-[25px] min-[701px]:pb-[24px] min-[701px]:gap-y-[25px]"
          >
            <span
              class="decision-number [color:#7b886f] [font-family:Georgia,serif] text-[25px] [font-style:normal] leading-[1.3] min-w-[29px]"
              >01</span
            >
            <div>
              <h3
                class="text-[21px] tracking-[-.045em] leading-[1.25] mb-0 ml-0 mr-0 mt-0 min-[701px]:text-[22px]"
              >
                主线清楚，可以暂缓
              </h3>
              <p
                class="[color:var(--muted)] text-[13px] leading-[1.9] mb-[12px] ml-0 mr-0 mt-[12px] min-[701px]:text-[14px]"
              >
                陌生的人名、地名或次要细节，先保留原词，继续读。需要时再回头核对。
              </p>
              <span
                class="decision-action [color:var(--green)] text-[11px] font-[650]"
                >先读下去 →</span
              >
            </div>
          </article>
          <article
            class="[border-top:1px_solid_#c7cebd] gap-x-[18px] flex pb-[22px] pl-0 pr-0 pt-[22px] gap-y-[18px] min-[701px]:gap-x-[25px] min-[701px]:pb-[24px] min-[701px]:pt-[24px] min-[701px]:gap-y-[25px]"
          >
            <span
              class="decision-number [color:#7b886f] [font-family:Georgia,serif] text-[25px] [font-style:normal] leading-[1.3] min-w-[29px]"
              >02</span
            >
            <div>
              <h3
                class="text-[21px] tracking-[-.045em] leading-[1.25] mb-0 ml-0 mr-0 mt-0 min-[701px]:text-[22px]"
              >
                影响关键事实，需要核对
              </h3>
              <p
                class="[color:var(--muted)] text-[13px] leading-[1.9] mb-[12px] ml-0 mr-0 mt-[12px] min-[701px]:text-[14px]"
              >
                这个词决定谁做什么、是否发生、赞成还是反对？查词或回看上下文，再继续。
              </p>
              <span
                class="decision-action [color:var(--green)] text-[11px] font-[650]"
                >查词，再放回原句 →</span
              >
            </div>
          </article>
          <article
            class="[border-top:1px_solid_#c7cebd] gap-x-[18px] flex pb-0 pl-0 pr-0 pt-[22px] gap-y-[18px] min-[701px]:gap-x-[25px] min-[701px]:pb-[24px] min-[701px]:pt-[24px] min-[701px]:gap-y-[25px]"
          >
            <span
              class="decision-number [color:#7b886f] [font-family:Georgia,serif] text-[25px] [font-style:normal] leading-[1.3] min-w-[29px]"
              >03</span
            >
            <div>
              <h3
                class="text-[21px] tracking-[-.045em] leading-[1.25] mb-0 ml-0 mr-0 mt-0 min-[701px]:text-[22px]"
              >
                每句都卡住，调整难度
              </h3>
              <p
                class="[color:var(--muted)] text-[13px] leading-[1.9] mb-[12px] ml-0 mr-0 mt-[12px] min-[701px]:text-[14px]"
              >
                查了很多词仍说不出大意，可以换更容易的材料，或只选一小段做精读。
              </p>
              <span
                class="decision-action [color:var(--green)] text-[11px] font-[650]"
                >让材料适合现在的自己 →</span
              >
            </div>
          </article>
        </div>
      </div>
    </section>
    <ReadingExercises></ReadingExercises>
    <section
      class="section reading-routine pb-[56px] pl-0 pr-0 pt-[56px] min-[701px]:pb-[72px] min-[701px]:pt-[72px] min-[961px]:pb-[96px] min-[961px]:pt-[96px]"
      id="routine"
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
              05 / 从一句，走向一本
            </div>
            <h2
              class="text-[29px] font-bold tracking-[-.045em] leading-[1.45] mb-0 ml-0 mr-0 mt-0 max-w-[760px] min-[701px]:text-[34px] min-[701px]:leading-[1.4] min-[961px]:text-[38px]"
            >
              用少量精读解决障碍，<br />用持续阅读走进内容。
            </h2>
          </div>
          <p
            class="section-intro [color:var(--muted)] text-[15px] leading-[1.9] mb-0 ml-0 mr-0 mt-[18px] max-w-[640px] min-[701px]:text-[16px] min-[701px]:mt-[24px] min-[961px]:mt-0 min-[961px]:max-w-[330px] min-[1201px]:max-w-[380px]"
          >
            挑自己愿意读、能说出主要内容的材料。读完一个片段后，再处理最值得解决的问题。
          </p>
        </div>
        <ol
          class="reading-loop gap-x-[25px] grid grid-cols-[1fr] [list-style:none] mb-0 ml-0 mr-0 mt-0 pb-0 pl-0 pr-0 pt-0 gap-y-[25px] min-[701px]:gap-x-[30px] min-[701px]:grid-cols-[1fr_1fr] min-[701px]:gap-y-[30px] min-[961px]:gap-x-[24px] min-[961px]:grid-cols-[repeat(4,1fr)] min-[961px]:gap-y-[24px] min-[1201px]:gap-x-[30px] min-[1201px]:gap-y-[30px]"
        >
          <li
            class="[border-top:1px_solid_#bac5af] gap-x-[15px] grid grid-cols-[37px_1fr] pt-[18px] gap-y-[8px] min-[701px]:gap-x-[unset] min-[701px]:[display:unset] min-[701px]:grid-cols-[unset] min-[701px]:pt-[22px] min-[701px]:gap-y-[unset]"
          >
            <span
              class="[color:#76836c] [font-family:Georgia,serif] text-[25px] [font-style:normal] [grid-row:1/3] leading-[1.2] min-[701px]:text-[32px] min-[701px]:[grid-row:unset] min-[701px]:leading-[1.5]"
              >01</span
            >
            <h3
              class="text-[21px] tracking-[-.045em] leading-[1.25] mb-0 ml-0 mr-0 mt-0 min-[701px]:mb-[13px] min-[701px]:mt-[17px]"
            >
              先读一个片段
            </h3>
            <p
              class="[color:var(--muted)] text-[13px] leading-[1.9] mb-0 ml-0 mr-0 mt-0"
            >
              顺着内容往前读。保留暂时不确定的地方，关键障碍当场核对。
            </p>
          </li>
          <li
            class="[border-top:1px_solid_#bac5af] gap-x-[15px] grid grid-cols-[37px_1fr] pt-[18px] gap-y-[8px] min-[701px]:gap-x-[unset] min-[701px]:[display:unset] min-[701px]:grid-cols-[unset] min-[701px]:pt-[22px] min-[701px]:gap-y-[unset]"
          >
            <span
              class="[color:#76836c] [font-family:Georgia,serif] text-[25px] [font-style:normal] [grid-row:1/3] leading-[1.2] min-[701px]:text-[32px] min-[701px]:[grid-row:unset] min-[701px]:leading-[1.5]"
              >02</span
            >
            <h3
              class="text-[21px] tracking-[-.045em] leading-[1.25] mb-0 ml-0 mr-0 mt-0 min-[701px]:mb-[13px] min-[701px]:mt-[17px]"
            >
              解决一两个卡点
            </h3>
            <p
              class="[color:var(--muted)] text-[13px] leading-[1.9] mb-0 ml-0 mr-0 mt-0"
            >
              是词义、指代，还是漏了条件？挑真正影响理解的句子精读。
            </p>
          </li>
          <li
            class="[border-top:1px_solid_#bac5af] gap-x-[15px] grid grid-cols-[37px_1fr] pt-[18px] gap-y-[8px] min-[701px]:gap-x-[unset] min-[701px]:[display:unset] min-[701px]:grid-cols-[unset] min-[701px]:pt-[22px] min-[701px]:gap-y-[unset]"
          >
            <span
              class="[color:#76836c] [font-family:Georgia,serif] text-[25px] [font-style:normal] [grid-row:1/3] leading-[1.2] min-[701px]:text-[32px] min-[701px]:[grid-row:unset] min-[701px]:leading-[1.5]"
              >03</span
            >
            <h3
              class="text-[21px] tracking-[-.045em] leading-[1.25] mb-0 ml-0 mr-0 mt-0 min-[701px]:mb-[13px] min-[701px]:mt-[17px]"
            >
              合上材料，说说大意
            </h3>
            <p
              class="[color:var(--muted)] text-[13px] leading-[1.9] mb-0 ml-0 mr-0 mt-0"
            >
              谁做了什么？这段在解释、举例还是转折？再回原文核对。
            </p>
          </li>
          <li
            class="[border-top:1px_solid_#bac5af] gap-x-[15px] grid grid-cols-[37px_1fr] pt-[18px] gap-y-[8px] min-[701px]:gap-x-[unset] min-[701px]:[display:unset] min-[701px]:grid-cols-[unset] min-[701px]:pt-[22px] min-[701px]:gap-y-[unset]"
          >
            <span
              class="[color:#76836c] [font-family:Georgia,serif] text-[25px] [font-style:normal] [grid-row:1/3] leading-[1.2] min-[701px]:text-[32px] min-[701px]:[grid-row:unset] min-[701px]:leading-[1.5]"
              >04</span
            >
            <h3
              class="text-[21px] tracking-[-.045em] leading-[1.25] mb-0 ml-0 mr-0 mt-0 min-[701px]:mb-[13px] min-[701px]:mt-[17px]"
            >
              留下少量值得再见的
            </h3>
            <p
              class="[color:var(--muted)] text-[13px] leading-[1.9] mb-0 ml-0 mr-0 mt-0"
            >
              保存有用的原句、义项和出处。之后通过复习与新阅读再次遇见。
            </p>
          </li>
        </ol>
        <div
          class="reading-anki-note items-start [border-top:1px_solid_var(--line)] gap-x-[15px] flex flex-wrap mt-[30px] pt-[25px] gap-y-[15px] min-[701px]:items-center min-[701px]:gap-x-[20px] min-[701px]:mt-[43px] min-[701px]:gap-y-[20px] min-[961px]:[flex-wrap:unset]"
        >
          <img
            alt="Anki 标志"
            class="rounded-[11px] block h-[48px] max-w-[100%] object-contain w-[48px]"
            height="48"
            loading="lazy"
            src="/assets/images/about/anki-logo.png"
            width="48"
          />
          <p
            class="[color:var(--muted)] flex-[1] text-[11px] leading-[1.9] mb-0 ml-0 mr-0 mt-0 min-[701px]:text-[12px]"
          >
            <strong
              class="[color:var(--ink)] text-[13px] min-[701px]:text-[14px]"
              >把词放回原句，也把记忆带回阅读。</strong
            >
            <br />理解后再制卡或补充已有词条，按安排复习。持续阅读，让记住的内容在新语境中用得上。
          </p>
          <NuxtLink
            class="text-link [-webkit-tap-highlight-color:transparent] items-center bg-transparent [color:inherit] gap-x-[18px] inline-flex text-[11px] font-[650] ml-[63px] max-w-[none] min-h-[44px] pb-0 pl-0 pr-0 pt-0 gap-y-[18px] no-underline min-[701px]:text-[12px] min-[701px]:ml-[68px] min-[961px]:ml-[unset] min-[961px]:max-w-[230px]"
            to="/vocabulary#capture"
            >看看如何保存阅读中的词 ↗</NuxtLink
          >
        </div>
      </div>
    </section>
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
              带着刚才的问题，<br />再听一遍完整的讲解。
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
            从开篇导读到每天的一段英文。<br />先自己读，再听讲解，把刚学的方法放进故事里。
          </p>
          <NuxtLink
            class="btn btn-yellow [-webkit-tap-highlight-color:transparent] items-center [background:var(--yellow)] rounded-full [color:var(--ink)] gap-x-[28px] inline-flex text-[13px] font-[650] justify-center min-h-[50px] pb-[12px] pl-[22px] pr-[22px] pt-[12px] gap-y-[28px] no-underline [transition:background_.18s,transform_.18s] min-[701px]:text-[14px] min-[701px]:pb-[14px] min-[701px]:pl-[28px] min-[701px]:pr-[28px] min-[701px]:pt-[14px]"
            to="/little-prince"
            >进入《小王子》共读专栏 <span aria-hidden="true">↗</span>
          </NuxtLink>
          <p
            class="prince-note [color:#dce9d8] text-[10px] leading-[1.9] mb-0 ml-0 mr-0 mt-[19px] max-w-[390px]"
          >
            词汇量不是统一的起点门槛，先试读一段，看看是否适合自己。
          </p>
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
      class="section reading-faq pb-[56px] pl-0 pr-0 pt-[56px] min-[701px]:pb-[72px] min-[701px]:pt-[72px] min-[961px]:pb-[96px] min-[961px]:pt-[96px]"
      id="sources"
    >
      <div
        class="wrap faq-layout gap-x-[30px] grid grid-cols-[1fr] mb-auto ml-auto mr-auto mt-auto gap-y-[30px] w-[calc(100%_-_40px)] min-[701px]:gap-x-[40px] min-[701px]:grid-cols-[1fr_1.1fr] min-[701px]:gap-y-[40px] min-[701px]:w-[calc(100%_-_64px)] min-[961px]:gap-x-[55px] min-[961px]:gap-y-[55px] min-[1201px]:gap-x-[90px] min-[1201px]:gap-y-[90px] min-[1201px]:w-[min(1280px,calc(100%_-_112px))]"
      >
        <div>
          <div
            class="eyebrow text-[12px] font-[650] tracking-[.09em] mb-[19px] min-[701px]:text-[13px] min-[701px]:mb-[24px]"
          >
            继续读之前
          </div>
          <h2
            class="text-[29px] font-bold tracking-[-.045em] leading-[1.35] mb-0 ml-0 mr-0 mt-0 min-[701px]:text-[36px] min-[701px]:leading-[1.25]"
          >
            几个常见问题。
          </h2>
          <div
            class="reading-source items-center gap-x-[20px] flex mb-[18px] ml-0 mr-0 mt-[24px] gap-y-[20px] min-[701px]:mt-[30px]"
          >
            <img
              alt="阅读方法参考书书封"
              class="[box-shadow:4px_4px_0_#e4e3d6] block h-auto max-w-[100%] w-[70px]"
              height="101"
              loading="lazy"
              src="/assets/images/reading/reading-book.png"
              width="70"
            />
            <div>
              <strong class="text-[14px]">方法从哪里来</strong>
              <p
                class="[color:var(--muted)] text-[12px] leading-[1.9] mb-0 ml-0 mr-0 mt-[7px]"
              >
                以《8天教你像读中文一样读英文》的方法为起点，结合阅读研究、泛读原则和本站学习方法整理。
              </p>
            </div>
          </div>
          <p
            class="source-boundary [color:#606b5b] text-[11px] leading-[1.9] mb-0 ml-0 mr-0 mt-0"
          >
            四项方法是教学整理，例句为本站自编。下列研究支持相应原则，不代表对这套四步练习整体效果的验证。
          </p>
          <div class="reading-source-links flex flex-col mt-[16px]">
            <a
              class="[-webkit-tap-highlight-color:transparent] items-center [color:inherit] flex text-[11px] min-h-[44px] underline [text-underline-offset:4px]"
              href="https://www.psychologicalscience.org/journals/psychological-science/0956797614531148/"
              rel="noopener noreferrer"
              target="_blank"
              >阅读研究：必要的回看与理解 ↗</a
            >
            <a
              class="[-webkit-tap-highlight-color:transparent] items-center [color:inherit] flex text-[11px] min-h-[44px] underline [text-underline-offset:4px]"
              href="https://erfoundation.org/wordpress/useful-resources/ertoolkit/"
              rel="noopener noreferrer"
              target="_blank"
              >ERF：选择容易、有兴趣的泛读材料 ↗</a
            >
            <NuxtLink
              class="[-webkit-tap-highlight-color:transparent] items-center [color:inherit] flex text-[11px] min-h-[44px] underline [text-underline-offset:4px]"
              to="/about"
              >主动回忆、间隔复习与学习判断 ↗</NuxtLink
            >
          </div>
        </div>
        <div class="reading-faq-list">
          <details
            class="[border-bottom:1px_solid_#c6cebd] [border-top:1px_solid_#c6cebd]"
          >
            <summary
              class="gap-x-[20px] cursor-pointer flex text-[14px] font-semibold justify-between leading-[1.7] [list-style:none] min-h-[66px] pb-[20px] pl-0 pr-[25px] pt-[20px] gap-y-[20px] min-[701px]:text-[15px] min-[701px]:leading-[unset]"
            >
              一定要一遍读懂，完全不回头吗？
            </summary>
            <p
              class="[color:var(--muted)] text-[13px] leading-[1.9] mb-0 ml-0 mr-0 mt-0 pb-[23px] pl-0 pr-0 pt-0"
            >
              可以练习提高首遍理解，但发现矛盾时应回看相关位置。先查明是词义、指代还是逻辑出了问题，修正后继续读。正确理解比强行不回头更重要。
            </p>
          </details>
          <details class="[border-bottom:1px_solid_#c6cebd]">
            <summary
              class="gap-x-[20px] cursor-pointer flex text-[14px] font-semibold justify-between leading-[1.7] [list-style:none] min-h-[66px] pb-[20px] pl-0 pr-[25px] pt-[20px] gap-y-[20px] min-[701px]:text-[15px] min-[701px]:leading-[unset]"
            >
              可以先用中文理解、复述吗？
            </summary>
            <p
              class="[color:var(--muted)] text-[13px] leading-[1.9] mb-0 ml-0 mr-0 mt-0 pb-[23px] pl-0 pr-0 pt-0"
            >
              可以。简短中文可以帮助核对意思，之后逐步减少中间翻译。检查理解时，先说清楚主要内容，不必追求出版物式的译文。
            </p>
          </details>
          <details class="[border-bottom:1px_solid_#c6cebd]">
            <summary
              class="gap-x-[20px] cursor-pointer flex text-[14px] font-semibold justify-between leading-[1.7] [list-style:none] min-h-[66px] pb-[20px] pl-0 pr-[25px] pt-[20px] gap-y-[20px] min-[701px]:text-[15px] min-[701px]:leading-[unset]"
            >
              这意味着不用学语法了吗？
            </summary>
            <p
              class="[color:var(--muted)] text-[13px] leading-[1.9] mb-0 ml-0 mr-0 mt-0 pb-[23px] pl-0 pr-0 pt-0"
            >
              阅读仍需要理解词句关系。熟练后可以少用术语标签；遇到歧义、修饰关系或长句主线不清时，语法分析依然是有效的核验工具。
            </p>
          </details>
          <details class="[border-bottom:1px_solid_#c6cebd]">
            <summary
              class="gap-x-[20px] cursor-pointer flex text-[14px] font-semibold justify-between leading-[1.7] [list-style:none] min-h-[66px] pb-[20px] pl-0 pr-[25px] pt-[20px] gap-y-[20px] min-[701px]:text-[15px] min-[701px]:leading-[unset]"
            >
              什么时候开始读《小王子》？
            </summary>
            <p
              class="[color:var(--muted)] text-[13px] leading-[1.9] mb-0 ml-0 mr-0 mt-0 pb-[23px] pl-0 pr-0 pt-0"
            >
              先看开篇导读，试读一小段。借助少量帮助就能理解主要内容、也愿意继续读，就可以开始。若持续依赖逐句翻译，可以先换更容易的分级读物，再回来。
            </p>
          </details>
          <details class="[border-bottom:1px_solid_#c6cebd]">
            <summary
              class="gap-x-[20px] cursor-pointer flex text-[14px] font-semibold justify-between leading-[1.7] [list-style:none] min-h-[66px] pb-[20px] pl-0 pr-[25px] pt-[20px] gap-y-[20px] min-[701px]:text-[15px] min-[701px]:leading-[unset]"
            >
              要把每个生词都做成 Anki 卡片吗？
            </summary>
            <p
              class="[color:var(--muted)] text-[13px] leading-[1.9] mb-0 ml-0 mr-0 mt-0 pb-[23px] pl-0 pr-0 pt-0"
            >
              不必。优先留下反复遇见、影响理解或自己会用到的表达。先弄懂，再保存有代表性的原句与义项；卡片复习和连续阅读互相补充。
            </p>
          </details>
        </div>
      </div>
    </section>
  </main>
</template>
