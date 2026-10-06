<script setup lang="ts">
const level = ref(0);
</script>

<template>
  <section
    class="section sentence-section pb-[56px] pl-0 pr-0 pt-[56px] min-[701px]:pb-[72px] min-[701px]:pt-[72px] min-[961px]:pb-[96px] min-[961px]:pt-[96px]"
    id="try"
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
            01 / 先试一次，再看提示
          </div>
          <h2
            class="text-[29px] font-bold tracking-[-.045em] leading-[1.45] mb-0 ml-0 mr-0 mt-0 max-w-[760px] min-[701px]:text-[34px] min-[701px]:leading-[1.4] min-[961px]:text-[38px]"
          >
            每个词都认识，<br />整句的意思，接上了吗？
          </h2>
        </div>
        <p
          class="section-intro [color:var(--muted)] text-[14px] leading-[1.9] mb-0 ml-0 mr-0 mt-[18px] max-w-[640px] min-[701px]:mt-[24px] min-[961px]:mt-0 min-[961px]:max-w-[330px] min-[1201px]:max-w-[380px]"
        >
          先读原句，在心里回答：<br />什么回答了问题？什么没有被解释？<br />需要帮助时，再逐步打开提示。
        </p>
      </div>
      <div
        class="sentence-workbench [background:#fffdf8] [border:1px_solid_#c8d0bf] [box-shadow:5px_5px_0_#e5e7da] pb-[13px] pl-[20px] pr-[20px] pt-[20px] min-[701px]:[box-shadow:9px_9px_0_#e5e7da] min-[701px]:pb-[20px] min-[701px]:pl-[36px] min-[701px]:pr-[36px] min-[701px]:pt-[27px]"
      >
        <div
          class="workbench-head [color:#576b56] gap-x-[12px] flex text-[9px] justify-between tracking-[.05em] gap-y-[12px] min-[701px]:gap-x-[20px] min-[701px]:text-[11px] min-[701px]:gap-y-[20px]"
        >
          <span>READING LAB / 一句体验</span>
          <span>本站自编例句</span>
        </div>
        <p
          class="original-sentence [font-family:Georgia,serif] text-[25px] [font-style:normal] tracking-[-.025em] leading-[1.65] mb-[23px] ml-0 mr-0 mt-[23px] max-w-[1080px] min-[701px]:text-[28px] min-[701px]:leading-[1.75] min-[701px]:mb-[28px] min-[701px]:mt-[24px] min-[961px]:text-[32px]"
          lang="en"
        >
          The email that Maya sent after the meeting answered my question, but
          it did not explain why the schedule had changed.
        </p>
        <div
          aria-label="选择阅读提示层级"
          class="reading-levels [border-bottom:1px_solid_#c9cebe] gap-x-0 grid grid-cols-[repeat(4,1fr)] gap-y-0 min-[701px]:gap-x-[12px] min-[701px]:gap-y-[12px]"
          role="group"
        >
          <button
            :aria-pressed="level === 0"
            @click="level = 0"
            aria-controls="reading-hint"
            class="[-webkit-tap-highlight-color:transparent] items-center bg-transparent [border:0] [border-bottom:3px_solid_transparent] [color:inherit] gap-x-[5px] cursor-pointer flex flex-col text-[11px] justify-center mb-[-1px] min-h-[63px] pb-[10px] pl-[2px] pr-[2px] pt-[10px] gap-y-[5px] text-left min-[701px]:gap-x-[8px] min-[701px]:[flex-direction:unset] min-[701px]:text-[12px] min-[701px]:[justify-content:unset] min-[701px]:min-h-[53px] min-[701px]:pb-[12px] min-[701px]:pl-[10px] min-[701px]:pr-[10px] min-[701px]:pt-[12px] min-[701px]:gap-y-[8px] min-[961px]:gap-x-[12px] min-[961px]:text-[14px] min-[961px]:gap-y-[12px]"
            type="button"
          >
            <span
              class="[color:#637359] text-[10px] min-h-[21px] pb-[3px] pl-[6px] pr-[6px] pt-[3px] min-[701px]:text-[11px] min-[701px]:min-h-[unset] min-[701px]:pb-[unset] min-[701px]:pl-[unset] min-[701px]:pr-[unset] min-[701px]:pt-[unset]"
              >01</span
            >原句
          </button>
          <button
            :aria-pressed="level === 1"
            @click="level = 1"
            aria-controls="reading-hint"
            class="[-webkit-tap-highlight-color:transparent] items-center bg-transparent [border:0] [border-bottom:3px_solid_transparent] [color:inherit] gap-x-[5px] cursor-pointer flex flex-col text-[11px] justify-center mb-[-1px] min-h-[63px] pb-[10px] pl-[2px] pr-[2px] pt-[10px] gap-y-[5px] text-left min-[701px]:gap-x-[8px] min-[701px]:[flex-direction:unset] min-[701px]:text-[12px] min-[701px]:[justify-content:unset] min-[701px]:min-h-[53px] min-[701px]:pb-[12px] min-[701px]:pl-[10px] min-[701px]:pr-[10px] min-[701px]:pt-[12px] min-[701px]:gap-y-[8px] min-[961px]:gap-x-[12px] min-[961px]:text-[14px] min-[961px]:gap-y-[12px]"
            type="button"
          >
            <span
              class="[color:#637359] text-[10px] min-h-[21px] pb-[3px] pl-[6px] pr-[6px] pt-[3px] min-[701px]:text-[11px] min-[701px]:min-h-[unset] min-[701px]:pb-[unset] min-[701px]:pl-[unset] min-[701px]:pr-[unset] min-[701px]:pt-[unset]"
              >02</span
            >意群提示
          </button>
          <button
            :aria-pressed="level === 2"
            @click="level = 2"
            aria-controls="reading-hint"
            class="[-webkit-tap-highlight-color:transparent] items-center bg-transparent [border:0] [border-bottom:3px_solid_transparent] [color:inherit] gap-x-[5px] cursor-pointer flex flex-col text-[11px] justify-center mb-[-1px] min-h-[63px] pb-[10px] pl-[2px] pr-[2px] pt-[10px] gap-y-[5px] text-left min-[701px]:gap-x-[8px] min-[701px]:[flex-direction:unset] min-[701px]:text-[12px] min-[701px]:[justify-content:unset] min-[701px]:min-h-[53px] min-[701px]:pb-[12px] min-[701px]:pl-[10px] min-[701px]:pr-[10px] min-[701px]:pt-[12px] min-[701px]:gap-y-[8px] min-[961px]:gap-x-[12px] min-[961px]:text-[14px] min-[961px]:gap-y-[12px]"
            type="button"
          >
            <span
              class="[color:#637359] text-[10px] min-h-[21px] pb-[3px] pl-[6px] pr-[6px] pt-[3px] min-[701px]:text-[11px] min-[701px]:min-h-[unset] min-[701px]:pb-[unset] min-[701px]:pl-[unset] min-[701px]:pr-[unset] min-[701px]:pt-[unset]"
              >03</span
            >关系提示
          </button>
          <button
            :aria-pressed="level === 3"
            @click="level = 3"
            aria-controls="reading-hint"
            class="[-webkit-tap-highlight-color:transparent] items-center bg-transparent [border:0] [border-bottom:3px_solid_transparent] [color:inherit] gap-x-[5px] cursor-pointer flex flex-col text-[11px] justify-center mb-[-1px] min-h-[63px] pb-[10px] pl-[2px] pr-[2px] pt-[10px] gap-y-[5px] text-left min-[701px]:gap-x-[8px] min-[701px]:[flex-direction:unset] min-[701px]:text-[12px] min-[701px]:[justify-content:unset] min-[701px]:min-h-[53px] min-[701px]:pb-[12px] min-[701px]:pl-[10px] min-[701px]:pr-[10px] min-[701px]:pt-[12px] min-[701px]:gap-y-[8px] min-[961px]:gap-x-[12px] min-[961px]:text-[14px] min-[961px]:gap-y-[12px]"
            type="button"
          >
            <span
              class="[color:#637359] text-[10px] min-h-[21px] pb-[3px] pl-[6px] pr-[6px] pt-[3px] min-[701px]:text-[11px] min-[701px]:min-h-[unset] min-[701px]:pb-[unset] min-[701px]:pl-[unset] min-[701px]:pr-[unset] min-[701px]:pt-[unset]"
              >04</span
            >完整理解
          </button>
        </div>
        <div
          aria-live="polite"
          class="reading-hint min-h-[245px] pb-[21px] pl-0 pr-0 pt-[21px] min-[701px]:min-h-[240px] min-[701px]:pb-[25px] min-[701px]:pt-[25px] min-[961px]:min-h-[225px]"
          id="reading-hint"
        >
          <template v-if="level === 0">
            <span
              class="small-label [color:var(--muted)] text-[10px] tracking-[.06em] min-[701px]:text-[12px]"
              >先独立理解</span
            >
            <h3
              class="text-[21px] tracking-[-.045em] leading-[1.5] mb-[12px] ml-0 mr-0 mt-[12px] min-[701px]:text-[23px] min-[701px]:leading-[1.4]"
            >
              是谁“回答了我的问题”？
            </h3>
            <p
              class="[color:var(--muted)] text-[13px] leading-[1.9] mb-0 ml-0 mr-0 mt-0 max-w-[890px] min-[701px]:text-[14px]"
            >
              Maya 和 the email 都在句子里。先试着找到 answered
              对应的对象，再想想后半句的 not 否定了什么。
            </p>
          </template>
          <template v-if="level === 1">
            <span
              class="small-label [color:var(--muted)] text-[10px] tracking-[.06em] min-[701px]:text-[12px]"
              >意群提示 / 斜线表示参考停顿</span
            >
            <div
              class="chunk-sentence [font-family:Georgia,serif] text-[22px] [font-style:normal] leading-[2.1] mb-[10px] ml-0 mr-0 mt-[10px] min-[701px]:text-[24px] min-[701px]:leading-[2.2]"
              lang="en"
            >
              <span
                class="[-webkit-box-decoration-break:clone] [background:#e3ead8] [box-decoration-break:clone] [display:inline] pb-[3px] pl-[6px] pr-[6px] pt-[3px]"
                >The email</span
              >
              <b class="[color:#879276] font-normal pb-0 pl-[7px] pr-[7px] pt-0"
                >/</b
              >
              <span
                class="[-webkit-box-decoration-break:clone] [background:#e3ead8] [box-decoration-break:clone] [display:inline] pb-[3px] pl-[6px] pr-[6px] pt-[3px]"
                >that Maya sent after the meeting</span
              >
              <b class="[color:#879276] font-normal pb-0 pl-[7px] pr-[7px] pt-0"
                >/</b
              >
              <span
                class="[-webkit-box-decoration-break:clone] [background:#e3ead8] [box-decoration-break:clone] [display:inline] pb-[3px] pl-[6px] pr-[6px] pt-[3px]"
                >answered my question,</span
              >
              <b class="[color:#879276] font-normal pb-0 pl-[7px] pr-[7px] pt-0"
                >/</b
              >
              <span
                class="[-webkit-box-decoration-break:clone] [background:#e3ead8] [box-decoration-break:clone] [display:inline] pb-[3px] pl-[6px] pr-[6px] pt-[3px]"
                >but it did not explain</span
              >
              <b class="[color:#879276] font-normal pb-0 pl-[7px] pr-[7px] pt-0"
                >/</b
              >
              <span
                class="[-webkit-box-decoration-break:clone] [background:#e3ead8] [box-decoration-break:clone] [display:inline] pb-[3px] pl-[6px] pr-[6px] pt-[3px]"
                >why the schedule had changed.</span
              >
            </div>
            <p
              class="[color:var(--muted)] text-[13px] leading-[1.9] mb-0 ml-0 mr-0 mt-0 max-w-[890px] min-[701px]:text-[14px]"
            >
              读到 The
              email，先暂存“邮件”这个对象。后面交代是哪封邮件，主线仍在等待动作。停顿不等于整句结束。
            </p>
          </template>
          <template v-if="level === 2">
            <span
              class="small-label [color:var(--muted)] text-[10px] tracking-[.06em] min-[701px]:text-[12px]"
              >关系提示 / 把分开的信息接起来</span
            >
            <div
              class="relation-grid gap-x-[9px] grid grid-cols-[1fr] mb-0 ml-0 mr-0 mt-[14px] gap-y-[9px] min-[701px]:gap-x-[10px] min-[701px]:grid-cols-[repeat(3,1fr)] min-[701px]:gap-y-[10px] min-[961px]:gap-x-[18px] min-[961px]:gap-y-[18px]"
            >
              <div
                class="[background:#eef0e6] pb-[13px] pl-[16px] pr-[16px] pt-[13px] min-[701px]:pl-[13px] min-[701px]:pr-[13px] min-[961px]:pb-[16px] min-[961px]:pl-[18px] min-[961px]:pr-[18px] min-[961px]:pt-[16px]"
              >
                <span class="[color:#51634c] text-[11px]"
                  >主线 · 谁做了什么</span
                >
                <strong
                  class="block [font-family:Georgia,serif] text-[20px] [font-style:normal] leading-[1.5] mb-[5px] ml-0 mr-0 mt-[5px] min-[701px]:text-[18px] min-[961px]:text-[21px]"
                  lang="en"
                  >The email → answered</strong
                >
                <p
                  class="[color:var(--muted)] text-[12px] leading-[1.9] mb-0 ml-0 mr-0 mt-0 max-w-[890px]"
                >
                  回答问题的是邮件。Maya 发邮件的部分，是对邮件的说明。
                </p>
              </div>
              <div
                class="[background:#eef0e6] pb-[13px] pl-[16px] pr-[16px] pt-[13px] min-[701px]:pl-[13px] min-[701px]:pr-[13px] min-[961px]:pb-[16px] min-[961px]:pl-[18px] min-[961px]:pr-[18px] min-[961px]:pt-[16px]"
              >
                <span class="[color:#51634c] text-[11px]"
                  >指代 · 它指向什么</span
                >
                <strong
                  class="block [font-family:Georgia,serif] text-[20px] [font-style:normal] leading-[1.5] mb-[5px] ml-0 mr-0 mt-[5px] min-[701px]:text-[18px] min-[961px]:text-[21px]"
                  lang="en"
                  >it → the email</strong
                >
                <p
                  class="[color:var(--muted)] text-[12px] leading-[1.9] mb-0 ml-0 mr-0 mt-0 max-w-[890px]"
                >
                  it 指这封邮件；but 表示前后转折。
                </p>
              </div>
              <div
                class="[background:#eef0e6] pb-[13px] pl-[16px] pr-[16px] pt-[13px] min-[701px]:pl-[13px] min-[701px]:pr-[13px] min-[961px]:pb-[16px] min-[961px]:pl-[18px] min-[961px]:pr-[18px] min-[961px]:pt-[16px]"
              >
                <span class="[color:#51634c] text-[11px]"
                  >否定 · 什么没有发生</span
                >
                <strong
                  class="block [font-family:Georgia,serif] text-[20px] [font-style:normal] leading-[1.5] mb-[5px] ml-0 mr-0 mt-[5px] min-[701px]:text-[18px] min-[961px]:text-[21px]"
                  lang="en"
                  >did not explain → why</strong
                >
                <p
                  class="[color:var(--muted)] text-[12px] leading-[1.9] mb-0 ml-0 mr-0 mt-0 max-w-[890px]"
                >
                  没有解释的是变动的原因。不是说“日程没有变化”。
                </p>
              </div>
            </div>
          </template>
          <template v-if="level === 3">
            <span
              class="small-label [color:var(--muted)] text-[10px] tracking-[.06em] min-[701px]:text-[12px]"
              >完整理解 / 再与自己的答案核对</span
            >
            <h3
              class="text-[21px] tracking-[-.045em] leading-[1.5] mb-[12px] ml-0 mr-0 mt-[12px] min-[701px]:text-[23px] min-[701px]:leading-[1.4]"
            >
              Maya 在会后发来的邮件回答了我的问题，<br />但没有说明日程为什么发生了变动。
            </h3>
            <p
              class="[color:var(--muted)] text-[13px] leading-[1.9] mb-0 ml-0 mr-0 mt-0 max-w-[890px] min-[701px]:text-[14px]"
            >
              检查三件事：answered 是否接回邮件；it 是否指邮件；not 是否只否定
              explain。核对后回到原句，再顺着英文读一遍。
            </p>
          </template>
        </div>
        <div
          class="workbench-foot items-start [border-top:1px_solid_#d9ddce] [color:var(--muted)] gap-x-[2px] flex flex-col text-[10px] justify-between pt-[13px] gap-y-[2px] min-[701px]:items-center min-[701px]:gap-x-[20px] min-[701px]:[flex-direction:unset] min-[701px]:text-[11px] min-[701px]:pt-[10px] min-[701px]:gap-y-[20px]"
        >
          <span>原句一直保留，可以随时回看。</span>
          <a
            class="text-link [-webkit-tap-highlight-color:transparent] items-center bg-transparent [color:inherit] gap-x-[18px] inline-flex text-[11px] font-[650] min-h-[44px] pb-0 pl-0 pr-0 pt-0 gap-y-[18px] no-underline min-[701px]:text-[12px]"
            href="#practice"
            >换一句，自己试试 ↗</a
          >
        </div>
      </div>
    </div>
  </section>
</template>
