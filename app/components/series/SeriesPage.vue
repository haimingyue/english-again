<script setup lang="ts">
import { videoSeries, type SeriesId, type VideoSeries } from "~/data/series";
import { filterVideos } from "~/utils/catalog";
const props = defineProps<{ seriesId: SeriesId }>();
const series = computed<VideoSeries>(() => videoSeries[props.seriesId]);
const related = computed(() =>
  Object.values(videoSeries).filter((item) => item.id !== series.value.id),
);
const query = ref("");
const category = ref("全部");
const order = ref("asc");
const search = useTemplateRef<HTMLInputElement>("search");
const filtered = computed(() =>
  filterVideos(series.value.videos, query.value, category.value, order.value),
);
function reset() {
  query.value = "";
  category.value = "全部";
  order.value = "asc";
  search.value?.focus();
}
watch(() => props.seriesId, reset);
</script>

<template>
  <main :data-page="series.route.slice(1)" id="main" tabindex="-1">
    <section
      class="series-hero [background:var(--green)] text-white pb-[32px] pl-0 pr-0 pt-[35px] min-[601px]:pb-[54px] min-[601px]:pt-[58px] min-[851px]:pb-[36px] min-[851px]:pt-[38px]"
    >
      <div
        class="wrap series-hero-grid items-center gap-x-[27px] grid grid-cols-[1fr] mb-auto ml-auto mr-auto mt-auto gap-y-[27px] w-[calc(100%_-_40px)] min-[601px]:gap-x-[35px] min-[601px]:grid-cols-[1.3fr_.8fr] min-[601px]:gap-y-[35px] min-[701px]:w-[calc(100%_-_64px)] min-[851px]:grid-cols-[1.45fr_1fr] min-[1101px]:gap-x-[75px] min-[1101px]:gap-y-[75px] min-[1201px]:w-[min(1280px,calc(100%_-_112px))]"
      >
        <div>
          <div
            class="eyebrow [color:var(--yellow)] text-[10px] font-[650] tracking-[.09em] mb-[19px] min-[601px]:text-[12px] min-[601px]:mb-[22px] min-[851px]:mb-[16px]"
          >
            {{ series.eyebrow }}
          </div>
          <h1
            class="text-[36px] font-[750] tracking-[-.045em] leading-[1.3] mb-0 ml-0 mr-0 mt-0 min-[601px]:text-[39px] min-[851px]:text-[44px] min-[851px]:leading-[1.25] whitespace-pre-line"
          >
            {{ series.title }}
          </h1>
          <p
            class="series-lede [color:#e0e9dd] text-[14px] leading-[1.9] mb-[23px] ml-0 mr-0 mt-[19px] min-[601px]:mb-[25px] min-[601px]:mt-[22px] min-[851px]:text-[15px] min-[851px]:leading-[1.8] min-[851px]:mb-[20px] min-[851px]:mt-[17px] whitespace-pre-line"
          >
            {{ series.lede }}
          </p>
          <div
            class="series-hero-actions items-center gap-x-[19px] flex gap-y-[19px] min-[601px]:gap-x-[17px] min-[601px]:gap-y-[17px] min-[851px]:gap-x-[26px] min-[851px]:gap-y-[26px]"
          >
            <a
              :href="series.startUrl"
              class="btn btn-yellow [-webkit-tap-highlight-color:transparent] items-center [background:var(--yellow)] rounded-full [color:var(--ink)] gap-x-[20px] inline-flex text-[13px] font-[650] justify-center min-h-[48px] pb-[12px] pl-[20px] pr-[20px] pt-[12px] gap-y-[20px] no-underline [transition:background_.18s,transform_.18s] min-[601px]:min-h-[50px] min-[851px]:gap-x-[28px] min-[851px]:text-[14px] min-[851px]:pl-[25px] min-[851px]:pr-[25px] min-[851px]:gap-y-[28px]"
              rel="noopener noreferrer"
              target="_blank"
              >{{ series.startLabel }}</a
            >
            <NuxtLink
              class="text-link [-webkit-tap-highlight-color:transparent] items-center bg-transparent text-white gap-x-[18px] inline-flex text-[11px] font-[650] min-h-[44px] pb-0 pl-0 pr-0 pt-0 gap-y-[18px] no-underline min-[601px]:text-[12px] min-[851px]:text-[13px]"
              :to="seriesId === 'prince' ? '/reading' : '/about'"
              >{{
                seriesId === "prince" ? "先了解阅读方法 ↗" : "先了解学习方法 ↗"
              }}</NuxtLink
            >
          </div>
          <p
            class="series-hero-note [color:#d0ddce] text-[10px] leading-[1.9] mb-0 ml-0 mr-0 mt-[20px] min-[601px]:text-[11px] min-[601px]:leading-[unset] min-[601px]:mt-[22px] min-[851px]:mt-[17px]"
          >
            {{ series.note }}
          </p>
        </div>
        <div
          class="weekly-number items-center [border-left:0] [border-top:1px_solid_#5e8370] gap-x-[23px] flex pb-0 pl-0 pr-0 pt-[16px] gap-y-[23px] min-[601px]:[align-items:unset] min-[601px]:[border-left:1px_solid_#5e8370] min-[601px]:[border-top:unset] min-[601px]:gap-x-[unset] min-[601px]:[display:unset] min-[601px]:pb-[20px] min-[601px]:pl-[30px] min-[601px]:pt-[20px] min-[601px]:gap-y-[unset] min-[1101px]:pl-[40px]"
          v-if="seriesId === 'weekly'"
        >
          <span
            class="[color:#d3e2cc] hidden text-[8px] tracking-[.15em] min-[601px]:[display:unset] min-[851px]:text-[10px]"
            >ONE WEEK AT A TIME</span
          >
          <div
            class="items-center gap-x-[14px] flex shrink-0 mb-0 ml-0 mr-0 mt-0 gap-y-[14px] min-[601px]:gap-x-[18px] min-[601px]:[flex-shrink:unset] min-[601px]:mb-[8px] min-[601px]:mt-[4px] min-[601px]:gap-y-[18px] min-[851px]:gap-x-[28px] min-[851px]:gap-y-[28px]"
          >
            <strong
              class="[color:var(--yellow)] text-[66px] font-semibold tracking-[-.075em] leading-[1.2] min-[601px]:text-[115px] min-[851px]:text-[145px]"
              >25</strong
            >
            <span
              class="text-[11px] leading-[1.7] min-[601px]:text-[14px] min-[851px]:text-[19px]"
              >周<br />循序学习</span
            >
          </div>
          <p
            class="[color:#e0e8d9] gap-x-[9px] block text-[11px] leading-[2.1] mb-0 ml-0 mr-0 mt-0 max-w-[140px] gap-y-[9px] min-[601px]:max-w-[unset] min-[851px]:flex min-[851px]:leading-[unset] min-[1101px]:gap-x-[16px] min-[1101px]:text-[12px] min-[1101px]:gap-y-[16px]"
          >
            观看视频
            <b
              class="[color:var(--yellow)] font-normal pb-0 pl-[5px] pr-[5px] pt-0 min-[851px]:pb-[unset] min-[851px]:pl-[unset] min-[851px]:pr-[unset] min-[851px]:pt-[unset]"
              >→</b
            >
            Anki 复习
            <b
              class="[color:var(--yellow)] font-normal pb-0 pl-[5px] pr-[5px] pt-0 min-[851px]:pb-[unset] min-[851px]:pl-[unset] min-[851px]:pr-[unset] min-[851px]:pt-[unset]"
              >→</b
            >
            真实运用
          </p>
        </div>
        <PrinceHeroArt v-else-if="seriesId === 'prince'" />
        <div
          class="series-book items-center hidden justify-center max-w-[420px] pb-[10px] pl-[10px] pr-[10px] pt-[10px] relative min-[601px]:flex"
          v-else=""
        >
          <img
            :alt="series.bookAlt"
            :src="series.book ?? ''"
            class="[box-shadow:15px_15px_0_#1c463b] block h-[220px] max-w-[100%] [transform:rotate(-7deg)] w-auto min-[851px]:h-[235px]"
            loading="eager"
          />
          <span
            class="series-stamp items-center [background:var(--yellow)] rounded-full bottom-[20px] [color:var(--ink)] flex flex-col text-[10px] h-[80px] justify-center absolute right-[-7px] [transform:rotate(7deg)] w-[80px] min-[851px]:text-[12px] min-[851px]:h-[90px] min-[851px]:right-[5px] min-[851px]:w-[90px] min-[1101px]:h-[105px] min-[1101px]:w-[105px]"
            ><b class="text-[22px] font-bold">{{ series.videos.length }}</b
            ><span>集读书视频</span></span
          >
        </div>
      </div>
    </section>
    <nav
      aria-label="选择视频专栏"
      class="series-navigation [background:var(--sage)] [border-bottom:1px_solid_#d4dbcb]"
    >
      <div
        class="wrap series-nav-grid grid grid-cols-[1fr_1fr] mb-auto ml-auto mr-auto mt-auto pb-0 pl-[20px] pr-[20px] pt-0 w-full min-[601px]:pb-[unset] min-[601px]:pl-[unset] min-[601px]:pr-[unset] min-[601px]:pt-[unset] min-[601px]:w-[calc(100%_-_40px)] min-[701px]:w-[calc(100%_-_64px)] min-[851px]:grid-cols-[repeat(4,minmax(0,1fr))] min-[1201px]:w-[min(1280px,calc(100%_-_112px))]"
      >
        <NuxtLink
          :aria-current="series.route === '/columns' ? 'page' : undefined"
          class="[-webkit-tap-highlight-color:transparent] items-center [border-bottom:3px_solid_transparent] [color:inherit] gap-x-[9px] flex pb-[14px] pl-[6px] pr-[6px] pt-[14px] gap-y-[9px] no-underline [transition:background_.2s] min-[601px]:pb-[22px] min-[601px]:pl-0 min-[601px]:pr-[12px] min-[601px]:pt-[22px] min-[851px]:pb-[20px] min-[851px]:pt-[20px] min-[1101px]:gap-x-[12px] min-[1101px]:pr-[18px] min-[1101px]:gap-y-[12px]"
          to="/columns"
        >
          <span class="series-index [color:#596e57] hidden text-[11px]"
            >01</span
          >
          <span>
            <strong
              class="block text-[13px] font-[650] tracking-[-.025em] leading-[1.5] min-[601px]:text-[15px] min-[601px]:tracking-[unset] min-[851px]:text-[14px] min-[1101px]:text-[16px]"
              >每周课程</strong
            >
            <small
              class="text-muted hidden text-[10px] mt-[4px] min-[601px]:block min-[851px]:text-[9px] min-[1101px]:text-[10px]"
              >按周推进 · 发音到语法</small
            >
          </span>
          <span
            class="series-count [border:0] rounded-[20px] [color:#5c6b56] inline-block text-[10px] mb-0 ml-auto mr-0 mt-0 pb-[3px] pl-[6px] pr-[6px] pt-[3px] whitespace-nowrap min-[601px]:[border:1px_solid_#b8c3b0] min-[601px]:[color:unset] min-[601px]:[display:unset] min-[601px]:mb-[unset] min-[601px]:mr-[unset] min-[601px]:mt-[unset] min-[851px]:text-[9px] min-[1101px]:text-[10px] min-[1101px]:pb-[4px] min-[1101px]:pl-[9px] min-[1101px]:pr-[9px] min-[1101px]:pt-[4px]"
            >25 集</span
          >
        </NuxtLink>
        <NuxtLink
          :aria-current="
            series.route === '/fluent-forever' ? 'page' : undefined
          "
          class="[-webkit-tap-highlight-color:transparent] items-center [border-bottom:3px_solid_transparent] [color:inherit] gap-x-[9px] flex pb-[14px] pl-[6px] pr-0 pt-[14px] gap-y-[9px] no-underline [transition:background_.2s] min-[601px]:pb-[22px] min-[601px]:pl-[12px] min-[601px]:pt-[22px] min-[851px]:pb-[20px] min-[851px]:pr-[12px] min-[851px]:pt-[20px] min-[1101px]:gap-x-[12px] min-[1101px]:pl-[18px] min-[1101px]:pr-[18px] min-[1101px]:gap-y-[12px]"
          to="/fluent-forever"
        >
          <span class="series-index [color:#596e57] hidden text-[11px]"
            >02</span
          >
          <span>
            <strong
              class="block text-[13px] font-[650] tracking-[-.025em] leading-[1.5] min-[601px]:text-[15px] min-[601px]:tracking-[unset] min-[851px]:text-[14px] min-[1101px]:text-[16px]"
              >Fluent Forever</strong
            >
            <small
              class="text-muted hidden text-[10px] mt-[4px] min-[601px]:block min-[851px]:text-[9px] min-[1101px]:text-[10px]"
              >语言学习 · 从声音到表达</small
            >
          </span>
          <span
            class="series-count [border:0] rounded-[20px] [color:#5c6b56] inline-block text-[10px] mb-0 ml-auto mr-0 mt-0 pb-[3px] pl-[6px] pr-[6px] pt-[3px] whitespace-nowrap min-[601px]:[border:1px_solid_#b8c3b0] min-[601px]:[color:unset] min-[601px]:[display:unset] min-[601px]:mb-[unset] min-[601px]:mr-[unset] min-[601px]:mt-[unset] min-[851px]:text-[9px] min-[1101px]:text-[10px] min-[1101px]:pb-[4px] min-[1101px]:pl-[9px] min-[1101px]:pr-[9px] min-[1101px]:pt-[4px]"
            >8 集</span
          >
        </NuxtLink>
        <NuxtLink
          :aria-current="series.route === '/make-it-stick' ? 'page' : undefined"
          class="[-webkit-tap-highlight-color:transparent] items-center [border-bottom:3px_solid_transparent] [color:inherit] gap-x-[9px] flex pb-[14px] pl-[6px] pr-[6px] pt-[14px] gap-y-[9px] no-underline [transition:background_.2s] min-[601px]:pb-[22px] min-[601px]:pl-0 min-[601px]:pr-[12px] min-[601px]:pt-[22px] min-[851px]:pb-[20px] min-[851px]:pl-[12px] min-[851px]:pt-[20px] min-[1101px]:gap-x-[12px] min-[1101px]:pl-[18px] min-[1101px]:pr-[18px] min-[1101px]:gap-y-[12px]"
          to="/make-it-stick"
        >
          <span class="series-index [color:#596e57] hidden text-[11px]"
            >03</span
          >
          <span>
            <strong
              class="block text-[13px] font-[650] tracking-[-.025em] leading-[1.5] min-[601px]:text-[15px] min-[601px]:tracking-[unset] min-[851px]:text-[14px] min-[1101px]:text-[16px]"
              >Make It Stick</strong
            >
            <small
              class="text-muted hidden text-[10px] mt-[4px] min-[601px]:block min-[851px]:text-[9px] min-[1101px]:text-[10px]"
              >学习科学 · 从回忆到应用</small
            >
          </span>
          <span
            class="series-count [border:0] rounded-[20px] [color:#5c6b56] inline-block text-[10px] mb-0 ml-auto mr-0 mt-0 pb-[3px] pl-[6px] pr-[6px] pt-[3px] whitespace-nowrap min-[601px]:[border:1px_solid_#b8c3b0] min-[601px]:[color:unset] min-[601px]:[display:unset] min-[601px]:mb-[unset] min-[601px]:mr-[unset] min-[601px]:mt-[unset] min-[851px]:text-[9px] min-[1101px]:text-[10px] min-[1101px]:pb-[4px] min-[1101px]:pl-[9px] min-[1101px]:pr-[9px] min-[1101px]:pt-[4px]"
            >7 集</span
          >
        </NuxtLink>
        <NuxtLink
          :aria-current="series.route === '/little-prince' ? 'page' : undefined"
          class="[-webkit-tap-highlight-color:transparent] items-center [border-bottom:3px_solid_transparent] [color:inherit] gap-x-[9px] flex pb-[14px] pl-[6px] pr-[6px] pt-[14px] gap-y-[9px] no-underline [transition:background_.2s] min-[601px]:pb-[22px] min-[601px]:pl-[12px] min-[601px]:pr-0 min-[601px]:pt-[22px] min-[851px]:pb-[20px] min-[851px]:pt-[20px] min-[1101px]:gap-x-[12px] min-[1101px]:pl-[18px] min-[1101px]:gap-y-[12px]"
          to="/little-prince"
        >
          <span class="series-index [color:#596e57] hidden text-[11px]"
            >04</span
          >
          <span>
            <strong
              class="block text-[13px] font-[650] tracking-[-.025em] leading-[1.5] min-[601px]:text-[15px] min-[601px]:tracking-[unset] min-[851px]:text-[14px] min-[1101px]:text-[16px]"
              >小王子共读</strong
            >
            <small
              class="text-muted hidden text-[10px] mt-[4px] min-[601px]:block min-[851px]:text-[9px] min-[1101px]:text-[10px]"
              >连载中 · 原著阅读实践</small
            >
          </span>
          <span
            class="series-count [border:0] rounded-[20px] [color:#5c6b56] inline-block text-[10px] mb-0 ml-auto mr-0 mt-0 pb-[3px] pl-[6px] pr-[6px] pt-[3px] whitespace-nowrap min-[601px]:[border:1px_solid_#b8c3b0] min-[601px]:[color:unset] min-[601px]:[display:unset] min-[601px]:mb-[unset] min-[601px]:mr-[unset] min-[601px]:mt-[unset] min-[851px]:text-[9px] min-[1101px]:text-[10px] min-[1101px]:pb-[4px] min-[1101px]:pl-[9px] min-[1101px]:pr-[9px] min-[1101px]:pt-[4px]"
            >7 集</span
          >
        </NuxtLink>
      </div>
    </nav>
    <section
      class="section video-section pb-[42px] pl-0 pr-0 pt-[38px] min-[601px]:pb-[70px] min-[601px]:pt-[65px] min-[851px]:pt-[48px]"
      id="videos"
    >
      <div
        class="wrap mb-auto ml-auto mr-auto mt-auto w-[calc(100%_-_40px)] min-[701px]:w-[calc(100%_-_64px)] min-[1201px]:w-[min(1280px,calc(100%_-_112px))]"
      >
        <div
          class="section-heading items-end gap-x-[25px] block justify-between mb-[23px] gap-y-[25px] min-[601px]:mb-[29px] min-[851px]:mb-[24px] min-[961px]:flex"
        >
          <div>
            <div
              class="eyebrow text-[10px] font-[650] tracking-[.09em] mb-[14px] min-[601px]:text-[11px] min-[601px]:mb-[17px]"
            >
              {{ series.sectionEyebrow }}
            </div>
            <h2
              class="text-[27px] font-bold tracking-[-.045em] leading-[1.4] mb-0 ml-0 mr-0 mt-0 max-w-[760px] min-[601px]:text-[30px] min-[601px]:leading-[1.35] min-[701px]:leading-[1.25] min-[1101px]:text-[34px] whitespace-pre-line"
            >
              {{ series.sectionTitle }}
            </h2>
          </div>
          <p
            class="section-intro [color:var(--muted)] text-[12px] leading-[1.9] mb-0 ml-0 mr-0 mt-[15px] max-w-[none] min-[601px]:text-[13px] min-[601px]:leading-[1.8] min-[601px]:mt-[16px] min-[851px]:mt-[24px] min-[851px]:max-w-[270px] min-[961px]:mt-0 min-[1101px]:max-w-[330px] whitespace-pre-line"
          >
            {{ series.sectionIntro }}
          </p>
        </div>
        <div
          class="library-tools items-center gap-x-[10px] flex mb-[17px] gap-y-[10px] min-[601px]:gap-x-[20px] min-[601px]:mb-[20px] min-[601px]:gap-y-[20px] min-[851px]:mb-[14px]"
        >
          <label
            class="search-field items-center [background:#fffdf8] [border:1px_solid_#c9cec2] rounded-[6px] gap-x-[7px] flex flex-[1] max-w-[480px] min-h-[46px] pb-0 pl-[11px] pr-[11px] pt-0 gap-y-[7px] min-[601px]:gap-x-[12px] min-[601px]:min-h-[50px] min-[601px]:pl-[16px] min-[601px]:pr-[16px] min-[601px]:gap-y-[12px]"
          >
            <span
              aria-hidden="true"
              class="text-[23px] leading-[1] min-[601px]:text-[26px]"
              >⌕</span
            >
            <span
              class="sr-only [clip:rect(0,0,0,0)] h-[1px] overflow-hidden absolute whitespace-nowrap w-[1px]"
              >搜索本专栏视频</span
            >
            <input
              :placeholder="
                seriesId === 'weekly'
                  ? '搜索周次、标题或主题'
                  : '搜索标题或主题'
              "
              autocomplete="off"
              class="bg-transparent [border:0] [color:var(--ink)] text-[12px] min-w-0 [outline:none] w-full min-[601px]:text-[14px]"
              id="video-search"
              ref="search"
              type="search"
              v-model="query"
            />
            <kbd
              aria-hidden="true"
              class="[border:1px_solid_#d8dccf] rounded-[3px] [color:#606959] hidden [font-family:inherit] text-[10px] [font-style:normal] leading-[normal] pb-[1px] pl-[5px] pr-[5px] pt-[1px] whitespace-nowrap min-[601px]:[display:unset]"
              >搜索</kbd
            >
          </label>
          <label class="sort-field ml-auto">
            <span
              class="sr-only [clip:rect(0,0,0,0)] h-[1px] overflow-hidden absolute whitespace-nowrap w-[1px]"
              >排列顺序</span
            >
            <select
              class="bg-transparent [border:1px_solid_#c9cec2] rounded-[6px] [color:var(--ink)] cursor-pointer text-[11px] max-w-[116px] min-h-[46px] pb-[9px] pl-[9px] pr-[19px] pt-[9px] min-[601px]:text-[13px] min-[601px]:max-w-[unset] min-[601px]:min-h-[50px] min-[601px]:pb-[10px] min-[601px]:pl-[15px] min-[601px]:pr-[35px] min-[601px]:pt-[10px]"
              id="video-sort"
              v-model="order"
            >
              <option value="asc">按集数正序</option>
              <option value="desc">按集数倒序</option>
            </select>
          </label>
        </div>
        <div
          class="filter-row items-center gap-x-[10px] flex flex-wrap justify-between mb-[22px] min-h-[44px] gap-y-[10px] min-[601px]:gap-x-[20px] min-[601px]:[flex-wrap:unset] min-[601px]:mb-[30px] min-[601px]:gap-y-[20px] min-[851px]:mb-[24px]"
        >
          <div
            aria-label="筛选课程主题"
            class="topic-filters gap-x-[2px] flex justify-between gap-y-[2px] w-full min-[601px]:gap-x-[8px] min-[601px]:[justify-content:unset] min-[601px]:gap-y-[8px] min-[601px]:w-[unset]"
            role="group"
            v-if="seriesId === 'weekly'"
          >
            <button
              :aria-pressed="category === '全部'"
              @click="category = '全部'"
              class="[-webkit-tap-highlight-color:transparent] bg-transparent [border:0] rounded-[25px] [color:inherit] cursor-pointer text-[12px] min-h-[44px] min-w-[50px] pb-[8px] pl-[15px] pr-[15px] pt-[8px] min-[601px]:text-[13px] min-[601px]:min-w-[63px] min-[601px]:pb-[9px] min-[601px]:pl-[18px] min-[601px]:pr-[18px] min-[601px]:pt-[9px]"
              type="button"
            >
              全部
            </button>
            <button
              :aria-pressed="category === '发音'"
              @click="category = '发音'"
              class="[-webkit-tap-highlight-color:transparent] bg-transparent [border:0] rounded-[25px] [color:inherit] cursor-pointer text-[12px] min-h-[44px] min-w-[50px] pb-[8px] pl-[15px] pr-[15px] pt-[8px] min-[601px]:text-[13px] min-[601px]:min-w-[63px] min-[601px]:pb-[9px] min-[601px]:pl-[18px] min-[601px]:pr-[18px] min-[601px]:pt-[9px]"
              type="button"
            >
              发音
            </button>
            <button
              :aria-pressed="category === '词汇'"
              @click="category = '词汇'"
              class="[-webkit-tap-highlight-color:transparent] bg-transparent [border:0] rounded-[25px] [color:inherit] cursor-pointer text-[12px] min-h-[44px] min-w-[50px] pb-[8px] pl-[15px] pr-[15px] pt-[8px] min-[601px]:text-[13px] min-[601px]:min-w-[63px] min-[601px]:pb-[9px] min-[601px]:pl-[18px] min-[601px]:pr-[18px] min-[601px]:pt-[9px]"
              type="button"
            >
              词汇
            </button>
            <button
              :aria-pressed="category === '语法'"
              @click="category = '语法'"
              class="[-webkit-tap-highlight-color:transparent] bg-transparent [border:0] rounded-[25px] [color:inherit] cursor-pointer text-[12px] min-h-[44px] min-w-[50px] pb-[8px] pl-[15px] pr-[15px] pt-[8px] min-[601px]:text-[13px] min-[601px]:min-w-[63px] min-[601px]:pb-[9px] min-[601px]:pl-[18px] min-[601px]:pr-[18px] min-[601px]:pt-[9px]"
              type="button"
            >
              语法
            </button>
            <button
              :aria-pressed="category === '导览'"
              @click="category = '导览'"
              class="[-webkit-tap-highlight-color:transparent] bg-transparent [border:0] rounded-[25px] [color:inherit] cursor-pointer text-[12px] min-h-[44px] min-w-[50px] pb-[8px] pl-[15px] pr-[15px] pt-[8px] min-[601px]:text-[13px] min-[601px]:min-w-[63px] min-[601px]:pb-[9px] min-[601px]:pl-[18px] min-[601px]:pr-[18px] min-[601px]:pt-[9px]"
              type="button"
            >
              导览
            </button>
          </div>
          <p
            class="book-filter-note [color:var(--muted)] text-[12px] mb-0 ml-0 mr-0 mt-0 min-[601px]:text-[13px]"
            v-else=""
          >
            {{ series.filterNote }}
          </p>
          <span
            aria-live="polite"
            class="[color:var(--muted)] text-[11px] whitespace-nowrap min-[601px]:text-[12px]"
            id="result-count"
            role="status"
            >{{
              `${filtered.length === series.videos.length ? "共" : "找到"} ${filtered.length} 集`
            }}</span
          >
        </div>
        <div
          class="video-grid gap-x-[29px] grid grid-cols-[1fr] gap-y-[29px] min-[601px]:gap-x-[24px] min-[601px]:grid-cols-[repeat(2,minmax(0,1fr))] min-[601px]:gap-y-[32px] min-[851px]:gap-x-[22px] min-[851px]:grid-cols-[repeat(3,minmax(0,1fr))] min-[1101px]:gap-x-[28px] min-[1101px]:gap-y-[40px]"
          id="video-grid"
        >
          <VideoCard
            :eager="index < 3"
            :fallback="series.fallback"
            :key="video.url"
            :series-label="series.label"
            :video="video"
            v-for="(video, index) in filtered"
          ></VideoCard>
        </div>
        <div
          class="empty-state [background:#eeefe5] rounded-[7px] pb-[40px] pl-[18px] pr-[18px] pt-[40px] text-center min-[601px]:pb-[65px] min-[601px]:pl-[20px] min-[601px]:pr-[20px] min-[601px]:pt-[65px]"
          id="empty-state"
          v-if="filtered.length === 0"
        >
          <span aria-hidden="true" class="text-[45px]">⌕</span>
          <h3
            class="text-[23px] tracking-[-.045em] leading-[1.25] mb-[12px] ml-0 mr-0 mt-[7px] min-[601px]:text-[26px]"
          >
            还没找到这个主题。
          </h3>
          <p
            class="[color:var(--muted)] text-[13px] mb-[23px] ml-0 mr-0 mt-0 min-[601px]:text-[14px]"
          >
            换一个关键词，或清除筛选看看全部视频。
          </p>
          <button
            @click="reset"
            class="btn btn-dark [-webkit-tap-highlight-color:transparent] items-center [background:var(--ink)] [border:0] rounded-full text-white gap-x-[28px] cursor-pointer inline-flex text-[16px] font-[650] justify-center min-h-[56px] pb-[14px] pl-[28px] pr-[28px] pt-[14px] gap-y-[28px] [transition:background_.18s,transform_.18s]"
            id="reset-filters"
            type="button"
          >
            查看全部视频
          </button>
        </div>
        <p
          class="library-end [border-top:1px_solid_var(--line)] [color:var(--muted)] gap-x-[20px] flex text-[11px] justify-between mb-0 ml-0 mr-0 mt-[30px] pt-[20px] gap-y-[20px] min-[601px]:text-[12px] min-[601px]:mt-[40px] min-[601px]:pt-[26px]"
        >
          {{ series.videos.length }} 集，按自己的节奏看。<a
            class="[-webkit-tap-highlight-color:transparent] items-center [color:inherit] inline-flex mt-[-9px] min-h-[44px] no-underline"
            href="#videos"
            >回到目录 ↑</a
          >
        </p>
        <noscript>
          当前显示全部视频。筛选和图片预览需要启用
          JavaScript，视频链接仍可直接打开。
        </noscript>
      </div>
    </section>
    <section
      class="related-section [background:var(--lavender)] pb-[42px] pl-0 pr-0 pt-[38px] min-[601px]:pb-[60px] min-[601px]:pt-[55px]"
    >
      <div
        class="wrap mb-auto ml-auto mr-auto mt-auto w-[calc(100%_-_40px)] min-[701px]:w-[calc(100%_-_64px)] min-[1201px]:w-[min(1280px,calc(100%_-_112px))]"
      >
        <div
          class="related-heading items-baseline gap-x-[40px] block mb-[22px] gap-y-[40px] min-[601px]:mb-[30px] min-[851px]:flex"
        >
          <span
            class="eyebrow block text-[12px] font-[650] tracking-[.09em] mb-[16px] ml-0 mr-0 mt-0 min-[851px]:[display:unset] min-[851px]:mb-0"
            >继续探索</span
          >
          <h2
            class="text-[26px] font-bold tracking-[-.045em] leading-[1.35] mb-0 ml-0 mr-0 mt-0 min-[601px]:text-[29px] min-[701px]:leading-[1.25]"
          >
            一边学英语，一边学方法。
          </h2>
        </div>
        <div
          class="related-grid gap-x-[16px] grid grid-cols-[1fr] gap-y-[16px] min-[601px]:gap-x-[28px] min-[601px]:gap-y-[28px] min-[851px]:grid-cols-[repeat(3,minmax(0,1fr))]"
        >
          <NuxtLink
            class="related-link [-webkit-tap-highlight-color:transparent] [background:#eeeaf7] [border:1px_solid_#c9c4dc] [color:inherit] gap-x-[8px] grid grid-cols-[1fr_auto] pb-[19px] pl-[23px] pr-[23px] pt-[19px] gap-y-[8px] no-underline min-[601px]:gap-x-[11px] min-[601px]:pb-[22px] min-[601px]:pl-[26px] min-[601px]:pr-[26px] min-[601px]:pt-[22px] min-[601px]:gap-y-[11px]"
            :to="item.route"
            v-for="item in related"
            :key="item.id"
          >
            <span class="text-[11px] [grid-column:1/-1]"
              >{{ item.videos.length }} 集 · 视频专栏</span
            >
            <strong
              class="text-[24px] tracking-[-.03em] min-[601px]:text-[21px] min-[1101px]:text-[23px]"
              >{{ item.label }}</strong
            >
            <span aria-hidden="true" class="text-[24px]">↗</span>
          </NuxtLink>
        </div>
      </div>
    </section>
  </main>
</template>
