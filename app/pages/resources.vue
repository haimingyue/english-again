<script setup lang="ts">
import { androidSpeechResources, obsidianResource } from "~/data/resources";
usePageSeo(
  "资源下载",
  "下载英语自学指北 Obsidian 专栏笔记库，查找安卓文字转语音安装包与发音设置步骤。",
);
definePageMeta({ alias: "/resources.html" });
</script>

<template>
  <main id="main" data-page="resources" tabindex="-1">
    <section class="bg-forest py-12 text-white sm:py-20">
      <div class="page-shell">
        <p class="text-sm font-semibold tracking-wider text-sun">
          学习资源，放在手边
        </p>
        <h1 class="mt-5 text-[44px] font-bold sm:text-[64px]">资源下载</h1>
        <p class="mt-5 max-w-xl text-base leading-[1.9] text-[#dce9df]">
          把专栏带进自己的笔记库，也让学习工具准备就绪。<br
            class="hidden sm:block"
          />按需要选择，跟着步骤开始使用。
        </p>
        <nav aria-label="资源分类" class="mt-8 flex flex-wrap gap-3">
          <a
            href="#obsidian"
            class="min-h-11 border border-[#729887] px-5 py-2 text-sm hover:bg-white/10"
            >Obsidian 专栏笔记 ↓</a
          >
          <a
            href="#android-tts"
            class="min-h-11 border border-[#729887] px-5 py-2 text-sm hover:bg-white/10"
            >安卓发音工具 ↓</a
          >
          <NuxtLink
            to="/guides#guide-resources-title"
            class="min-h-11 border border-[#729887] px-5 py-2 text-sm hover:bg-white/10"
            >六套 Anki 卡牌 ↗</NuxtLink
          >
        </nav>
      </div>
    </section>
    <div class="page-shell py-12 sm:py-20">
      <section
        id="obsidian"
        aria-labelledby="obsidian-title"
        class="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:gap-16"
      >
        <div class="border border-[#d4cae4] bg-[#e9e3f2] p-7 sm:p-10">
          <div class="flex items-start justify-between gap-5">
            <span class="text-xs font-semibold tracking-[.12em] text-[#584075]"
              >01 / 专栏笔记库</span
            ><img
              src="/assets/images/resources/obsidian.png"
              width="447"
              height="447"
              alt="Obsidian 标志"
              class="size-20 rounded-xl sm:size-24"
            />
          </div>
          <h2
            id="obsidian-title"
            class="mt-8 text-3xl font-bold sm:text-[38px]"
          >
            你的专栏，<br />也可以是一座笔记库。
          </h2>
          <p class="mt-5 text-sm leading-[1.95] text-muted">
            英语自学指北专栏的 Obsidian
            文件，包含每周笔记、图文及配套附件。保留原有笔记和连接，在学习时加入自己的理解。
          </p>
          <a
            :href="obsidianResource.url"
            :download="obsidianResource.downloadName"
            class="mt-7 inline-flex min-h-12 items-center justify-center gap-5 rounded-full bg-forest px-6 py-3 text-sm font-semibold text-white hover:bg-ink"
            >下载专栏笔记库 <span aria-hidden="true">↓</span></a
          >
          <p class="mt-3 text-xs text-muted">
            ZIP 压缩包 · {{ obsidianResource.size }}
          </p>
        </div>
        <div class="self-center">
          <h3 class="text-2xl font-bold">三步，打开专栏笔记</h3>
          <ol class="mt-6 list-none space-y-6 p-0">
            <li class="flex gap-5">
              <span aria-hidden="true" class="text-xl font-semibold text-forest"
                >01</span
              >
              <div>
                <h4 class="font-semibold">先安装 Obsidian</h4>
                <p class="mt-1 text-sm leading-[1.9] text-muted">
                  从
                  <a
                    href="https://obsidian.md/download"
                    class="text-forest underline underline-offset-4"
                    target="_blank"
                    rel="noopener noreferrer"
                    >Obsidian 官网下载 ↗</a
                  >
                  适合自己设备的版本。
                </p>
              </div>
            </li>
            <li class="flex gap-5">
              <span aria-hidden="true" class="text-xl font-semibold text-forest"
                >02</span
              >
              <div>
                <h4 class="font-semibold">下载并解压专栏文件</h4>
                <p class="mt-1 text-sm leading-[1.9] text-muted">
                  将 ZIP
                  完整解压到一个固定文件夹，保留里面的笔记、附件和文件夹结构。
                </p>
              </div>
            </li>
            <li class="flex gap-5">
              <span aria-hidden="true" class="text-xl font-semibold text-forest"
                >03</span
              >
              <div>
                <h4 class="font-semibold">把文件夹作为仓库打开</h4>
                <p class="mt-1 text-sm leading-[1.9] text-muted">
                  在 Obsidian
                  选择“打开本地仓库”，选中解压后的“英语自学指北专栏Obsidian”文件夹。从
                  index 笔记或对应周次开始浏览。
                </p>
              </div>
            </li>
          </ol>
          <div
            class="mt-7 border-l-2 border-[#a390c1] bg-[#efebf4] p-5 text-sm leading-[1.9] text-muted"
          >
            部分图文使用 Excalidraw。仓库附有插件配置；如图文显示为源码，可在
            Obsidian 的第三方插件设置中查看并按需启用 Excalidraw。
          </div>
          <NuxtLink to="/columns" class="action-link mt-6 text-forest"
            >配合每周专栏学习 <span aria-hidden="true">↗</span></NuxtLink
          >
        </div>
      </section>

      <section
        id="android-tts"
        aria-labelledby="android-tts-title"
        class="mt-14 border-t border-line pt-12 sm:mt-20 sm:pt-16"
      >
        <p class="text-xs font-semibold tracking-[.12em] text-forest">
          02 / 安卓发音工具
        </p>
        <div class="mt-4 grid gap-5 lg:grid-cols-2 lg:gap-16">
          <h2 id="android-tts-title" class="text-3xl font-bold sm:text-[38px]">
            让手机读出<br class="hidden sm:block" />卡牌上的英文。
          </h2>
          <p class="self-end text-sm leading-[1.95] text-muted">
            如果卡牌依靠文字转语音（TTS）朗读，而安卓手机没有对应引擎或英语语音数据，可以从这里补齐。若卡牌使用的是录音文件，则需检查音频是否已同步下载。
          </p>
        </div>
        <div class="mt-8 grid gap-5 md:grid-cols-2">
          <article
            v-for="resource in androidSpeechResources"
            :key="resource.url"
            class="flex min-w-0 flex-col border border-line bg-white/60 p-6 sm:p-8"
          >
            <p class="text-xs font-semibold text-forest">
              {{ resource.label }}
            </p>
            <h3 class="mt-4 text-xl font-bold sm:text-2xl">
              {{ resource.title }}
            </h3>
            <p class="mt-3 text-sm text-muted">
              版本 {{ resource.version }} · {{ resource.size }} · APK
            </p>
            <a
              :href="resource.url"
              :download="resource.downloadName"
              class="action-link mt-6 self-start text-forest"
              >下载此安装包 <span aria-hidden="true">↓</span></a
            >
          </article>
        </div>
        <p class="mt-5 text-sm leading-[1.9] text-muted">
          这两份是同一个 Google 语音引擎的不同版本，选择一份安装即可。可先尝试
          103.12.8；如不兼容，再考虑备用版本。能否安装以手机系统提示为准。
        </p>
        <div
          class="mt-8 grid gap-8 border border-[#c4d2be] bg-sage p-6 sm:p-9 lg:grid-cols-[.8fr_1.2fr]"
        >
          <div>
            <h3 class="text-2xl font-bold">安装后，还要这样设置</h3>
            <p class="mt-3 text-sm leading-[1.9] text-muted">
              先让系统的试听正常发声，再回到 AnkiDroid
              测试。不同手机的菜单名称可能略有不同。
            </p>
            <a
              href="https://support.google.com/accessibility/android/answer/6006983?hl=zh-Hans"
              target="_blank"
              rel="noopener noreferrer"
              class="action-link mt-5 text-sm text-forest"
              >Google 文字转语音设置说明 ↗</a
            >
          </div>
          <ol class="list-decimal space-y-3 pl-5 text-sm leading-[1.95]">
            <li>
              在系统“设置”中搜索“文字转语音”或“TTS”，进入文字转语音输出设置。
            </li>
            <li>
              选择 Google
              语音引擎，并将朗读语言设为英语；按需安装英语语音数据包。
            </li>
            <li>
              点击系统提供的“播放”或“试听”，确认媒体音量已打开、手机可以读出英文。
            </li>
            <li>
              返回 AnkiDroid，重新打开卡牌并测试发音。若仍无声，检查卡牌使用的是
              TTS 还是需要同步的录音文件。
            </li>
          </ol>
        </div>
        <NuxtLink
          to="/guides/phonetics-practice"
          class="action-link mt-7 text-forest"
          >接着看第二期：美式音标练习
          <span aria-hidden="true">↗</span></NuxtLink
        >
      </section>
    </div>
  </main>
</template>
