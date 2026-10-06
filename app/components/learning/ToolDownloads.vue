<script setup lang="ts">
import manifest from "~/data/downloads.json";
import {
  availableDownload,
  detectPlatform,
  type PlatformKey,
  type PlatformResult,
} from "~/utils/platform";
const selected = ref<PlatformKey | null>(null);
const manual = ref(false);
const downloadBase = useRequestURL().origin;
const detection = ref<PlatformResult>({
  family: "unknown",
  key: null,
  message: "正在识别系统；也可以直接选择下方版本。",
});
const detectedTitle = computed(
  () =>
    ({
      windows: "检测到 Windows",
      mac: "检测到 macOS",
      mobile: "请在电脑上获取客户端",
      unknown: "手动选择你的电脑版本",
    })[detection.value.family],
);
const downloadUrl = computed(() =>
  availableDownload(
    selected.value ? manifest[selected.value] : null,
    downloadBase,
  ),
);
const releaseDetail = computed(() => {
  if (!downloadUrl.value || !selected.value)
    return selected.value ? "该版本暂不可下载。" : "选择版本后查看下载信息。";
  const entry = manifest[selected.value];
  return (
    [
      entry.version && `版本 ${entry.version}`,
      entry.minimumSystem && `系统要求：${entry.minimumSystem}`,
    ]
      .filter(Boolean)
      .join(" · ") || "请查看安装包附带的版本与系统要求说明。"
  );
});
let alive = true;
onMounted(async () => {
  const result = await detectPlatform(navigator);
  if (!alive) return;
  detection.value = result;
  if (result.key && !manual.value) selected.value = result.key;
});
onBeforeUnmount(() => {
  alive = false;
});
</script>

<template>
  <section
    class="section tool-download [background:var(--paper)] pb-[56px] pl-0 pr-0 pt-[56px] min-[701px]:pb-[72px] min-[701px]:pt-[72px] min-[961px]:pb-[96px] min-[961px]:pt-[96px]"
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
            03 / 把工具放进自己的电脑
          </div>
          <h2
            class="text-[29px] font-bold tracking-[-.045em] leading-[1.4] mb-0 ml-0 mr-0 mt-0 max-w-[760px] min-[601px]:text-[34px] min-[961px]:text-[38px]"
          >
            选择适合你的版本。
          </h2>
        </div>
        <p
          class="section-intro [color:var(--muted)] text-[15px] leading-[1.9] mb-0 ml-0 mr-0 mt-[18px] max-w-[640px] min-[701px]:text-[16px] min-[701px]:mt-[24px] min-[961px]:mt-0 min-[961px]:max-w-[330px] min-[1201px]:max-w-[380px]"
        >
          Windows 64 位与 macOS 均已开放下载。<br />选择与你的电脑处理器匹配的版本。
        </p>
      </div>
      <div
        class="download-detection items-start [background:#ebeedd] [border:1px_solid_#d0d7c1] gap-x-[13px] flex flex-wrap mb-[20px] pb-[18px] pl-[18px] pr-[18px] pt-[18px] gap-y-[13px] min-[601px]:gap-x-[18px] min-[601px]:[flex-wrap:unset] min-[601px]:mb-[24px] min-[601px]:pb-[20px] min-[601px]:pl-[24px] min-[601px]:pr-[24px] min-[601px]:pt-[20px] min-[601px]:gap-y-[18px] min-[961px]:items-center"
      >
        <span
          aria-hidden="true"
          class="detection-symbol [background:#d7dfc6] rounded-full grid shrink-0 text-[21px] h-[33px] place-items-center w-[33px] min-[601px]:text-[24px] min-[601px]:h-[41px] min-[601px]:w-[41px]"
          >↓</span
        >
        <div class="flex-[1]">
          <strong
            class="text-[14px] min-[601px]:text-[16px]"
            id="detected-title"
            >{{ detectedTitle }}</strong
          >
          <p
            aria-live="polite"
            class="[color:#59684f] text-[11px] leading-[1.8] mb-0 ml-0 mr-0 mt-[5px] min-[601px]:text-[12px]"
            id="detected-description"
            role="status"
          >
            {{ detection.message }}
          </p>
        </div>
        <a
          class="text-link [-webkit-tap-highlight-color:transparent] items-center bg-transparent [color:inherit] gap-x-[18px] inline-flex text-[11px] font-[650] ml-[46px] min-h-[35px] pb-0 pl-0 pr-0 pt-0 gap-y-[18px] no-underline whitespace-nowrap min-[601px]:ml-[unset] min-[601px]:min-h-[44px] min-[961px]:text-[12px]"
          href="#system-help"
          >怎么确认版本？ ↓</a
        >
      </div>
      <fieldset
        class="download-options [border:0] gap-x-[12px] grid grid-cols-[1fr] mb-0 ml-0 mr-0 mt-0 pb-0 pl-0 pr-0 pt-0 gap-y-[12px] min-[601px]:grid-cols-[repeat(3,minmax(0,1fr))] min-[601px]:gap-x-[20px] min-[601px]:gap-y-[20px] min-[961px]:gap-x-[15px] min-[961px]:gap-y-[15px] min-[1201px]:gap-x-[19px] min-[1201px]:gap-y-[19px]"
      >
        <legend
          class="sr-only [border:0] [clip:rect(0,0,0,0)] h-[1px] mb-[-1px] ml-[-1px] mr-[-1px] mt-[-1px] overflow-hidden pb-0 pl-0 pr-0 pt-0 absolute whitespace-nowrap w-[1px]"
        >
          选择客户端系统和处理器版本
        </legend>
        <label
          :class="{ 'is-family': detection.family === 'windows' }"
          class="download-option [background:#fffdf8] [border:1px_solid_#c7ccbf] rounded-[5px] cursor-pointer flex flex-col min-w-0 pb-[17px] pl-[15px] pr-[15px] pt-[17px] relative [transition:background_.18s,border-color_.18s] min-[601px]:pb-[25px] min-[601px]:pl-[25px] min-[601px]:pr-[25px] min-[601px]:pt-[25px] min-[961px]:pb-[21px] min-[961px]:pl-[21px] min-[961px]:pr-[21px] min-[961px]:pt-[21px] min-[1201px]:pb-[24px] min-[1201px]:pl-[24px] min-[1201px]:pr-[24px] min-[1201px]:pt-[24px]"
          data-platform="win-x64"
        >
          <input
            @change="manual = true"
            class="[accent-color:var(--green)] bottom-[18px] h-[16px] mb-0 ml-0 mr-0 mt-0 absolute right-[13px] w-[16px] min-[601px]:bottom-[24px] min-[601px]:h-[17px] min-[601px]:right-[24px] min-[601px]:w-[17px] min-[961px]:bottom-[23px] min-[961px]:right-[21px]"
            name="platform"
            type="radio"
            v-model="selected"
            value="win-x64"
          />
          <span
            class="option-top items-center gap-x-[7px] flex justify-between mb-[17px] min-h-[36px] gap-y-[7px] min-[601px]:gap-x-[10px] min-[601px]:mb-[18px] min-[601px]:gap-y-[10px] min-[961px]:mb-[24px]"
          >
            <span
              aria-hidden="true"
              class="platform-symbol windows-symbol [color:var(--green)] gap-x-[2px] grid shrink-0 grid-cols-[1fr_1fr] h-[25px] gap-y-[2px] w-[25px] min-[601px]:gap-x-[3px] min-[601px]:[flex-shrink:unset] min-[601px]:h-[30px] min-[601px]:gap-y-[3px] min-[601px]:w-[30px]"
            >
              <i class="bg-current"> </i>
              <i class="bg-current"> </i>
              <i class="bg-current"> </i>
              <i class="bg-current"> </i>
            </span>
            <span
              class="recommend-label [background:var(--yellow)] rounded-[20px] text-[8px] pb-[3px] pl-[5px] pr-[5px] pt-[3px] whitespace-nowrap min-[601px]:text-[9px] min-[601px]:pb-[4px] min-[601px]:pl-[8px] min-[601px]:pr-[8px] min-[601px]:pt-[4px]"
              v-show="detection.key === 'win-x64'"
              >当前系统</span
            >
          </span>
          <strong
            class="text-[22px] font-[650] leading-[1.4] min-[601px]:text-[25px] min-[1201px]:text-[26px]"
            >Windows</strong
          >
          <span
            class="platform-architecture text-[11px] font-semibold mb-[13px] ml-0 mr-0 mt-[7px] min-h-[37px] min-[601px]:text-[12px] min-[601px]:mb-[16px] min-[601px]:mt-[8px] min-[601px]:min-h-[unset] min-[1201px]:text-[13px]"
            >64 位 · x64</span
          >
          <span
            class="platform-explainer [color:#64715c] text-[10px] leading-[1.8] min-h-[38px] min-[601px]:text-[11px] min-[601px]:leading-[1.9] min-[601px]:min-h-0 min-[961px]:min-h-[42px]"
            >适用于 x64 架构的 Windows 电脑</span
          >
          <span
            class="package-status [color:#64705b] text-[10px] mt-[19px] min-h-[20px] pr-[24px] min-[601px]:text-[11px] min-[601px]:mt-[25px] min-[601px]:min-h-[unset]"
            >{{
              availableDownload(manifest["win-x64"], downloadBase)
                ? "可下载"
                : "安装包待发布"
            }}</span
          >
        </label>

        <label
          :class="{ 'is-family': detection.family === 'mac' }"
          class="download-option [background:#fffdf8] [border:1px_solid_#c7ccbf] rounded-[5px] cursor-pointer flex flex-col min-w-0 pb-[17px] pl-[15px] pr-[15px] pt-[17px] relative [transition:background_.18s,border-color_.18s] min-[601px]:pb-[25px] min-[601px]:pl-[25px] min-[601px]:pr-[25px] min-[601px]:pt-[25px] min-[961px]:pb-[21px] min-[961px]:pl-[21px] min-[961px]:pr-[21px] min-[961px]:pt-[21px] min-[1201px]:pb-[24px] min-[1201px]:pl-[24px] min-[1201px]:pr-[24px] min-[1201px]:pt-[24px]"
          data-platform="mac-arm64"
        >
          <input
            @change="manual = true"
            class="[accent-color:var(--green)] bottom-[18px] h-[16px] mb-0 ml-0 mr-0 mt-0 absolute right-[13px] w-[16px] min-[601px]:bottom-[24px] min-[601px]:h-[17px] min-[601px]:right-[24px] min-[601px]:w-[17px] min-[961px]:bottom-[23px] min-[961px]:right-[21px]"
            name="platform"
            type="radio"
            v-model="selected"
            value="mac-arm64"
          />
          <span
            class="option-top items-center gap-x-[7px] flex justify-between mb-[17px] min-h-[36px] gap-y-[7px] min-[601px]:gap-x-[10px] min-[601px]:mb-[18px] min-[601px]:gap-y-[10px] min-[961px]:mb-[24px]"
          >
            <span
              aria-hidden="true"
              class="platform-symbol mac-symbol [border:1px_solid_#9fab90] rounded-[6px] [color:var(--green)] grid shrink-0 [font-family:Georgia,serif] text-[21px] font-bold h-[28px] leading-[1] place-items-center w-[28px] min-[601px]:[flex-shrink:unset] min-[601px]:text-[25px] min-[601px]:h-[34px] min-[601px]:w-[34px]"
              >M</span
            >
            <span
              class="recommend-label [background:var(--yellow)] rounded-[20px] text-[8px] pb-[3px] pl-[5px] pr-[5px] pt-[3px] whitespace-nowrap min-[601px]:text-[9px] min-[601px]:pb-[4px] min-[601px]:pl-[8px] min-[601px]:pr-[8px] min-[601px]:pt-[4px]"
              v-show="detection.key === 'mac-arm64'"
              >当前系统</span
            >
          </span>
          <strong
            class="text-[22px] font-[650] leading-[1.4] min-[601px]:text-[25px] min-[1201px]:text-[26px]"
            >macOS</strong
          >
          <span
            class="platform-architecture text-[11px] font-semibold mb-[13px] ml-0 mr-0 mt-[7px] min-h-[37px] min-[601px]:text-[12px] min-[601px]:mb-[16px] min-[601px]:mt-[8px] min-[601px]:min-h-[unset] min-[1201px]:text-[13px]"
            >Apple 芯片 · ARM64</span
          >
          <span
            class="platform-explainer [color:#64715c] text-[10px] leading-[1.8] min-h-[38px] min-[601px]:text-[11px] min-[601px]:leading-[1.9] min-[601px]:min-h-0 min-[961px]:min-h-[42px]"
            >适用于 Apple M 系列芯片的 Mac</span
          >
          <span
            class="package-status [color:#64705b] text-[10px] mt-[19px] min-h-[20px] pr-[24px] min-[601px]:text-[11px] min-[601px]:mt-[25px] min-[601px]:min-h-[unset]"
            >{{
              availableDownload(manifest["mac-arm64"], downloadBase)
                ? "可下载"
                : "安装包待发布"
            }}</span
          >
        </label>
        <label
          :class="{ 'is-family': detection.family === 'mac' }"
          class="download-option [background:#fffdf8] [border:1px_solid_#c7ccbf] rounded-[5px] cursor-pointer flex flex-col min-w-0 pb-[17px] pl-[15px] pr-[15px] pt-[17px] relative [transition:background_.18s,border-color_.18s] min-[601px]:pb-[25px] min-[601px]:pl-[25px] min-[601px]:pr-[25px] min-[601px]:pt-[25px] min-[961px]:pb-[21px] min-[961px]:pl-[21px] min-[961px]:pr-[21px] min-[961px]:pt-[21px] min-[1201px]:pb-[24px] min-[1201px]:pl-[24px] min-[1201px]:pr-[24px] min-[1201px]:pt-[24px]"
          data-platform="mac-x64"
        >
          <input
            @change="manual = true"
            class="[accent-color:var(--green)] bottom-[18px] h-[16px] mb-0 ml-0 mr-0 mt-0 absolute right-[13px] w-[16px] min-[601px]:bottom-[24px] min-[601px]:h-[17px] min-[601px]:right-[24px] min-[601px]:w-[17px] min-[961px]:bottom-[23px] min-[961px]:right-[21px]"
            name="platform"
            type="radio"
            v-model="selected"
            value="mac-x64"
          />
          <span
            class="option-top items-center gap-x-[7px] flex justify-between mb-[17px] min-h-[36px] gap-y-[7px] min-[601px]:gap-x-[10px] min-[601px]:mb-[18px] min-[601px]:gap-y-[10px] min-[961px]:mb-[24px]"
          >
            <span
              aria-hidden="true"
              class="platform-symbol mac-symbol intel-symbol [border:1px_solid_#9fab90] rounded-[6px] [color:var(--green)] grid shrink-0 [font-family:Georgia,serif] text-[21px] [font-style:italic] font-bold h-[28px] leading-[1] place-items-center w-[28px] min-[601px]:[flex-shrink:unset] min-[601px]:text-[25px] min-[601px]:h-[34px] min-[601px]:w-[34px]"
              >i</span
            >
            <span
              class="recommend-label [background:var(--yellow)] rounded-[20px] text-[8px] pb-[3px] pl-[5px] pr-[5px] pt-[3px] whitespace-nowrap min-[601px]:text-[9px] min-[601px]:pb-[4px] min-[601px]:pl-[8px] min-[601px]:pr-[8px] min-[601px]:pt-[4px]"
              v-show="detection.key === 'mac-x64'"
              >当前系统</span
            >
          </span>
          <strong
            class="text-[22px] font-[650] leading-[1.4] min-[601px]:text-[25px] min-[1201px]:text-[26px]"
            >macOS</strong
          >
          <span
            class="platform-architecture text-[11px] font-semibold mb-[13px] ml-0 mr-0 mt-[7px] min-h-[37px] min-[601px]:text-[12px] min-[601px]:mb-[16px] min-[601px]:mt-[8px] min-[601px]:min-h-[unset] min-[1201px]:text-[13px]"
            >Intel 芯片 · x64</span
          >
          <span
            class="platform-explainer [color:#64715c] text-[10px] leading-[1.8] min-h-[38px] min-[601px]:text-[11px] min-[601px]:leading-[1.9] min-[601px]:min-h-0 min-[961px]:min-h-[42px]"
            >适用于 Intel 处理器的 Mac</span
          >
          <span
            class="package-status [color:#64705b] text-[10px] mt-[19px] min-h-[20px] pr-[24px] min-[601px]:text-[11px] min-[601px]:mt-[25px] min-[601px]:min-h-[unset]"
            >{{
              availableDownload(manifest["mac-x64"], downloadBase)
                ? "可下载"
                : "安装包待发布"
            }}</span
          >
        </label>
      </fieldset>
      <div
        class="download-selection items-center [background:#e7e1f0] [border:1px_solid_#c7bed4] rounded-[4px] gap-x-[25px] block justify-between mt-[20px] pb-[22px] pl-[22px] pr-[22px] pt-[22px] gap-y-[25px] min-[601px]:flex min-[601px]:mt-[25px] min-[601px]:pb-[25px] min-[601px]:pl-[25px] min-[601px]:pr-[25px] min-[601px]:pt-[25px] min-[961px]:gap-x-[40px] min-[961px]:pb-[29px] min-[961px]:pl-[30px] min-[961px]:pr-[30px] min-[961px]:pt-[29px] min-[961px]:gap-y-[40px]"
      >
        <div aria-live="polite">
          <span class="small-label [color:#696071] text-[10px] tracking-[.06em]"
            >当前选择</span
          >
          <h3
            class="text-[23px] tracking-[-.045em] leading-[1.4] mb-[12px] ml-0 mr-0 mt-[9px] min-[601px]:text-[22px] min-[601px]:mb-[9px] min-[601px]:mt-[10px] min-[961px]:text-[24px]"
            id="selected-title"
          >
            {{ selected ? manifest[selected].label : "请选择一个版本" }}
          </h3>
          <p
            class="[color:#645c6b] text-[11px] leading-[1.8] mb-0 ml-0 mr-0 mt-0 min-[601px]:text-[12px]"
            id="selected-detail"
          >
            {{
              downloadUrl
                ? "请确认系统与处理器类型后下载。"
                : selected
                  ? "该版本暂不可下载，请选择其他版本。"
                  : "请先选择 Windows 64 位、Mac Apple 芯片或 Mac Intel 芯片版本。"
            }}
          </p>
        </div>
        <div
          class="download-action mt-[22px] min-w-0 text-left min-[601px]:mt-[unset] min-[601px]:min-w-[220px] min-[601px]:text-center min-[961px]:min-w-[245px]"
        >
          <button
            class="btn btn-dark [-webkit-tap-highlight-color:transparent] items-center [background:var(--ink)] [border:0] rounded-full text-white gap-x-[28px] cursor-pointer inline-flex text-[13px] font-[650] justify-center min-h-[51px] min-w-0 pb-[14px] pl-[28px] pr-[28px] pt-[14px] gap-y-[28px] [transition:background_.18s,transform_.18s] w-full min-[601px]:text-[14px] min-[601px]:min-w-[220px] min-[601px]:w-[unset]"
            disabled
            id="download-unavailable"
            type="button"
            v-if="!downloadUrl"
          >
            {{ selected ? "暂不可下载" : "请先选择版本" }}
          </button>
          <a
            :href="downloadUrl ?? undefined"
            class="btn btn-dark [-webkit-tap-highlight-color:transparent] items-center [background:var(--ink)] rounded-full text-white gap-x-[28px] inline-flex text-[13px] font-[650] justify-center min-h-[51px] min-w-0 pb-[14px] pl-[28px] pr-[28px] pt-[14px] gap-y-[28px] no-underline [transition:background_.18s,transform_.18s] w-full min-[601px]:text-[14px] min-[601px]:min-w-[220px] min-[601px]:w-[unset]"
            id="download-link"
            v-else=""
            >{{
              "下载 " + (selected ? manifest[selected].label : "客户端") + " ↓"
            }}</a
          >
          <p
            class="[color:#645c6b] text-[10px] leading-[1.8] mb-0 ml-0 mr-0 mt-[10px] max-w-[none] min-[601px]:max-w-[280px]"
            id="release-detail"
          >
            {{ releaseDetail }}
          </p>
        </div>
      </div>
      <noscript>
        启用 JavaScript 后可识别系统、选择版本并下载客户端。
      </noscript>
      <details
        class="system-help [border-bottom:1px_solid_var(--line)] [border-top:1px_solid_var(--line)] mt-[26px]"
        id="system-help"
      >
        <summary
          class="gap-x-[20px] cursor-pointer flex text-[13px] font-semibold justify-between leading-[1.8] [list-style:none] min-h-[62px] pb-[17px] pl-0 pr-0 pt-[17px] gap-y-[20px] min-[601px]:text-[14px] min-[601px]:leading-[1.7] min-[601px]:pb-[18px] min-[601px]:pt-[18px] min-[701px]:leading-[unset] min-[701px]:pb-[21px] min-[701px]:pt-[21px]"
        >
          不确定选哪一个？查看自己的系统与芯片
        </summary>
        <div
          class="system-help-grid gap-x-[21px] grid grid-cols-[1fr] pb-[22px] gap-y-[21px] min-[601px]:gap-x-[50px] min-[601px]:grid-cols-[1fr_1fr] min-[601px]:gap-y-[50px]"
        >
          <div>
            <strong class="text-[16px]">Windows</strong>
            <p
              class="[color:var(--muted)] text-[11px] leading-[1.9] mb-0 ml-0 mr-0 mt-[8px] min-[601px]:text-[12px]"
            >
              打开“设置 → 系统 → 关于”，找到“系统类型”。请选择 x64 架构的 64
              位系统版本；不提供 Windows 32 位安装包。ARM 电脑请等待兼容性说明。
            </p>
          </div>
          <div>
            <strong class="text-[16px]">Mac</strong>
            <p
              class="[color:var(--muted)] text-[11px] leading-[1.9] mb-0 ml-0 mr-0 mt-[8px] min-[601px]:text-[12px]"
            >
              打开苹果菜单中的“关于本机”。显示“芯片 Apple M…”选择 Apple
              芯片版；显示“处理器 Intel…”选择 Intel 版。
            </p>
          </div>
        </div>
        <p
          class="[color:var(--muted)] text-[11px] leading-[1.9] mb-0 ml-0 mr-0 mt-0 pb-[20px] min-[601px]:text-[12px]"
        >
          自动识别仅作为选择参考。部分浏览器无法提供处理器信息，请以电脑的系统信息为准。
        </p>
      </details>
    </div>
  </section>
</template>
