<script setup lang="ts">
import { toolsContent } from "~/data/tools";
const selected = defineModel<string>({ default: "reading" });
type ShotKey = keyof typeof toolsContent.shots;
const shots = toolsContent.shots;
const emit = defineEmits<{ gallery: [key: ShotKey] }>();
const feature = computed(
  () =>
    toolsContent.features[
      selected.value as keyof typeof toolsContent.features
    ] ?? toolsContent.features.reading,
);
const activeShot = ref<ShotKey>("plan");
const shot = computed(() => shots[activeShot.value]);
watch(selected, () => {
  activeShot.value = feature.value.shots[0];
});
const tabs = [
  { value: "reading", label: "01 阅读原著", id: "feature-reading" },
  { value: "movies", label: "02 影视学习", id: "feature-movies" },
  { value: "words", label: "03 词汇与 Anki", id: "feature-words" },
  { value: "shadow", label: "04 本地跟读", id: "feature-shadow" },
  { value: "data", label: "05 阅读数据", id: "feature-data" },
];
</script>

<template>
  <section
    class="section feature-section pb-[56px] pl-0 pr-0 pt-[56px] min-[701px]:pb-[72px] min-[701px]:pt-[72px] min-[961px]:pb-[96px] min-[961px]:pt-[96px]"
    id="features"
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
            01 / 从真实内容出发
          </div>
          <h2
            class="text-[29px] font-bold tracking-[-.045em] leading-[1.4] mb-0 ml-0 mr-0 mt-0 max-w-[760px] min-[601px]:text-[34px] min-[961px]:text-[38px]"
          >
            学英语的几个场景，<br />在这里连起来。
          </h2>
        </div>
        <p
          class="section-intro [color:var(--muted)] text-[14px] leading-[1.9] mb-0 ml-0 mr-0 mt-[18px] max-w-[640px] min-[601px]:text-[15px] min-[701px]:mt-[24px] min-[961px]:mt-0 min-[961px]:max-w-[330px] min-[1201px]:max-w-[380px]"
        >
          把时间留给自己想读、想看的内容。<br />需要理解、记录或练习时，工具就在旁边。
        </p>
      </div>
      <UiTabs
        :items="tabs"
        button-class="[-webkit-tap-highlight-color:transparent] items-center bg-transparent [border:0] [border-bottom:3px_solid_transparent] [color:inherit] gap-x-[7px] cursor-pointer flex shrink-0 text-[12px] mb-[-1px] min-h-[51px] pb-[14px] pl-[3px] pr-[3px] pt-[12px] gap-y-[7px] min-[601px]:gap-x-[8px] min-[601px]:[flex-shrink:unset] min-[601px]:min-h-[58px] min-[601px]:pb-[18px] min-[601px]:pl-[4px] min-[601px]:pr-[4px] min-[601px]:pt-[15px] min-[601px]:gap-y-[8px] min-[961px]:gap-x-[12px] min-[961px]:text-[13px] min-[961px]:gap-y-[12px] min-[1201px]:text-[14px]"
        class="feature-tabs [border-bottom:1px_solid_#bbc6b3] gap-x-[17px] flex grid-cols-[repeat(5,1fr)] mb-[25px] [overflow-x:auto] pb-[2px] pl-0 pr-0 pt-0 gap-y-[17px] whitespace-nowrap min-[601px]:gap-x-[12px] min-[601px]:grid min-[601px]:mb-[27px] min-[601px]:[overflow-x:unset] min-[601px]:pb-[unset] min-[601px]:pl-[unset] min-[601px]:pr-[unset] min-[601px]:pt-[unset] min-[601px]:gap-y-[12px] min-[601px]:[white-space:unset] min-[961px]:gap-x-[20px] min-[961px]:mb-[37px] min-[961px]:gap-y-[20px]"
        label="选择工具功能"
        panel-id="feature-panel"
        v-model="selected"
      ></UiTabs>
      <div
        :aria-labelledby="'feature-' + selected"
        class="feature-layout [align-items:start] gap-x-[25px] grid grid-cols-[1fr] gap-y-[25px] min-[961px]:gap-x-[30px] min-[961px]:grid-cols-[.8fr_1.75fr] min-[961px]:gap-y-[30px] min-[1201px]:gap-x-[48px] min-[1201px]:grid-cols-[.78fr_2fr] min-[1201px]:gap-y-[48px]"
        id="feature-panel"
        role="tabpanel"
      >
        <div
          class="feature-copy gap-x-[35px] block grid-cols-[1fr_1fr] pb-0 pl-0 pr-0 pt-0 gap-y-[12px] min-[601px]:grid min-[961px]:gap-x-[unset] min-[961px]:[display:unset] min-[961px]:grid-cols-[unset] min-[961px]:pb-[unset] min-[961px]:pl-[unset] min-[961px]:pr-[unset] min-[961px]:pt-[17px] min-[961px]:gap-y-[unset]"
        >
          <span
            class="small-label [color:var(--muted)] text-[12px] [grid-column:1/-1] tracking-[.06em] min-[961px]:[grid-column:unset]"
            id="feature-kicker"
            >{{ feature.kicker }}</span
          >
          <h3
            class="text-[27px] [grid-column:1] [grid-row:2/4] tracking-[-.045em] leading-[1.45] mb-[15px] ml-0 mr-0 mt-[13px] whitespace-pre-line min-[601px]:text-[30px] min-[601px]:leading-[1.5] min-[601px]:mb-0 min-[601px]:mt-0 min-[961px]:text-[26px] min-[961px]:[grid-column:unset] min-[961px]:[grid-row:unset] min-[961px]:mb-[20px] min-[961px]:mt-[16px] min-[1201px]:text-[29px] whitespace-pre-line"
            id="feature-title"
          >
            {{ feature.title }}
          </h3>
          <p
            class="[color:var(--muted)] text-[14px] leading-[1.9] mb-0 ml-0 mr-0 mt-0 min-[961px]:text-[13px] min-[1201px]:text-[14px]"
            id="feature-description"
          >
            {{ feature.description }}
          </p>
          <ul
            class="[grid-column:2] [grid-row:3/5] [list-style:none] mb-[15px] ml-0 mr-0 mt-[18px] pb-0 pl-0 pr-0 pt-0 min-[601px]:mb-0 min-[601px]:mt-0 min-[961px]:[grid-column:unset] min-[961px]:[grid-row:unset] min-[961px]:mb-[24px] min-[961px]:mt-[24px]"
            id="feature-points"
          >
            <li
              :key="point"
              class="[border-top:1px_solid_#d5dacb] text-[12px] pb-[10px] pl-[20px] pr-0 pt-[10px] relative min-[601px]:pb-[11px] min-[601px]:pt-[11px] min-[1201px]:text-[13px]"
              v-for="point in feature.points"
            >
              {{ point }}
            </li>
          </ul>
          <p
            class="feature-detail [color:#67735f] text-[11px] [grid-column:1] [grid-row:4] leading-[1.9] mb-0 ml-0 mr-0 mt-0 max-w-[none] min-[601px]:max-w-[320px] min-[961px]:[grid-column:unset] min-[961px]:[grid-row:unset] min-[961px]:max-w-[unset]"
            id="feature-detail"
          >
            {{ feature.detail }}
          </p>
          <NuxtLink
            :to="feature.link"
            class="text-link [-webkit-tap-highlight-color:transparent] items-center bg-transparent [color:inherit] gap-x-[18px] inline-flex text-[12px] font-[650] [grid-column:1] [grid-row:5] mb-0 ml-0 mr-0 mt-[8px] min-h-[44px] pb-0 pl-0 pr-0 pt-0 gap-y-[18px] no-underline min-[601px]:mt-0 min-[961px]:[grid-column:unset] min-[961px]:[grid-row:unset] min-[961px]:mb-[unset] min-[961px]:ml-[unset] min-[961px]:mr-[unset] min-[961px]:mt-[17px]"
            id="feature-related"
            >{{ feature.linkText }}</NuxtLink
          >
        </div>
        <div class="feature-visual">
          <button
            :aria-label="'放大' + shot.title + '截图'"
            @click="emit('gallery', activeShot)"
            class="feature-screen image-button [-webkit-tap-highlight-color:transparent] [aspect-ratio:16/10] [background:#eeece2] [border:1px_solid_#c7cebe] rounded-[4px] [box-shadow:4px_4px_0_#e3e7d8] [color:inherit] cursor-pointer block overflow-hidden pb-0 pl-0 pr-0 pt-0 relative text-left w-full min-[601px]:[box-shadow:7px_7px_0_#e3e7d8]"
            id="feature-screen"
            type="button"
          >
            <img
              :alt="shot.alt"
              :src="'/assets/images/tools/' + activeShot + '.webp'"
              class="block h-full max-w-[100%] object-contain w-full"
              height="1050"
              id="feature-image"
              loading="lazy"
              width="1680"
            />
            <span
              class="zoom-hint [background:#172820eb] rounded-[30px] bottom-[9px] [box-shadow:0_2px_8px_#0002] text-white text-[9px] pb-[5px] pl-[10px] pr-[10px] pt-[5px] absolute right-[9px] min-[601px]:bottom-[14px] min-[601px]:text-[10px] min-[601px]:pb-[7px] min-[601px]:pl-[13px] min-[601px]:pr-[13px] min-[601px]:pt-[7px] min-[601px]:right-[14px]"
              >查看完整截图 ↗</span
            >
          </button>
          <div
            aria-label="选择功能截图"
            class="screenshot-choices gap-x-[8px] flex flex-wrap mt-[17px] gap-y-[8px] min-[601px]:gap-x-[14px] min-[601px]:mt-[22px] min-[601px]:gap-y-[14px]"
            id="screenshot-choices"
            role="group"
          >
            <button
              :aria-label="'查看' + shots[key].title + '截图'"
              :aria-pressed="activeShot === key"
              :key="key"
              @click="activeShot = key"
              class="screenshot-choice flex min-h-[57px] items-center gap-3 rounded border border-[#d1d7c6] bg-transparent py-[5px] pr-2.5 pl-[5px] text-[11px]"
              type="button"
              v-for="key in feature.shots"
            >
              <img
                :src="'/assets/images/tools/' + key + '-thumb.webp'"
                alt=""
                class="h-[42px] w-[66px] rounded-[2px] bg-[#eeece2] object-cover"
                loading="lazy"
              /><span>{{ shots[key].title }}</span>
            </button>
          </div>
          <p
            class="screenshot-caption [color:#59634f] text-[10px] leading-[1.9] mb-0 ml-0 mr-0 mt-[13px] min-[601px]:leading-[unset]"
            id="screenshot-caption"
          >
            {{ "产品界面实拍 · " + shot.title }}
          </p>
        </div>
      </div>
      <p
        class="feature-scope [border-top:1px_solid_var(--line)] [color:#68735f] text-[10px] leading-[1.8] mb-0 ml-0 mr-0 mt-[25px] pt-[18px] min-[601px]:text-[11px] min-[601px]:mt-[35px] min-[601px]:pt-[22px]"
      >
        截图展示当前开发界面；可用功能、系统要求与权益以正式发布版本为准。
      </p>
      <noscript>
        启用 JavaScript 后可以切换查看影视、词汇、跟读和阅读数据截图。
      </noscript>
    </div>
  </section>
</template>
