<script setup lang="ts">
import { guideEpisodes } from "~/data/guides";
const episode = guideEpisodes.find((guide) => guide.slug === "anki-setup")!;
usePageSeo(episode.title, episode.description);
definePageMeta({ alias: "/guides/anki-setup.html" });
</script>

<template>
  <GuideArticle :episode="episode">
    <section id="before-start" aria-labelledby="before-start-title">
      <h2 id="before-start-title">本期要完成的准备</h2>
      <p>
        这期带大家把 Anki
        用起来：下载安装，从英语自学指北网站下载并导入卡牌，再把电脑上的内容同步到手机。完成后，就可以在电脑上整理卡牌，用手机利用零碎时间复习。
      </p>
      <p>
        本期用 Mac 和 iPhone 实际演示，Windows
        和安卓通过图片介绍对应的下载入口。
      </p>
      <GuideFigure
        src="/assets/images/guides/anki-01-overview-2x.webp"
        preview-src="/assets/images/guides/anki-01-overview-hd.webp"
        alt="Anki 下载：Mac、Windows、iPhone 和安卓"
        :width="1192"
        :height="791"
      />
    </section>

    <section id="install" aria-labelledby="install-title">
      <h2 id="install-title">下载和安装 Anki</h2>
      <p>
        下载链接：<a
          class="inline-link"
          href="https://apps.ankiweb.net/"
          target="_blank"
          rel="noopener noreferrer"
          >Anki 官网</a
        >
      </p>
      <p>
        电脑端的 Mac 和 Windows
        版本都免费。从官网选择自己使用的系统，再按页面提示下载安装。Mac
        如果需要区分芯片版本，可以在“关于本机”中查看是 Apple 芯片还是 Intel。
      </p>
      <GuideFigure
        src="/assets/images/guides/anki-02-desktop-2x.webp"
        preview-src="/assets/images/guides/anki-02-desktop-hd.webp"
        alt="电脑版下载入口：在 Anki 官网选择 Mac 或 Windows 版本，电脑端免费"
        :width="1192"
        :height="791"
      />
      <p>
        手机端需要认准应用名称：iPhone 使用
        <strong>AnkiMobile Flashcards</strong>，需要付费购买，价格以 App Store
        显示为准；安卓使用免费的 <strong>AnkiDroid Flashcards</strong>。可以从
        Anki 官网进入对应的下载页面。
      </p>
      <p>
        AnkiDroid 的 GitHub 下载地址：<a
          class="inline-link"
          href="https://github.com/ankidroid/Anki-Android/releases/tag/v2.25.2"
          target="_blank"
          rel="noopener noreferrer"
          >2.25.2 版本</a
        >
        ·
        <a
          class="inline-link"
          href="https://github.com/ankidroid/Anki-Android/releases/latest"
          target="_blank"
          rel="noopener noreferrer"
          >最新正式版</a
        >
      </p>
      <div
        id="android-download"
        class="my-4 flex flex-wrap items-center gap-x-4 gap-y-2"
      >
        <a
          href="/assets/downloads/android/AnkiDroid-2.25.2-arm64-v8a.apk"
          download="AnkiDroid-2.25.2-arm64-v8a.apk"
          class="inline-flex min-h-11 items-center gap-3 rounded-full bg-forest px-5 py-2 text-sm font-semibold text-white hover:bg-ink"
          >下载安卓版本 <span aria-hidden="true">↓</span></a
        >
        <span class="text-sm text-muted">AnkiDroid 2.25.2 · ARM64</span>
      </div>
      <p>
        以图中的 2.25.2 为例，展开 Assets 后，优先下载
        <code>AnkiDroid-2.25.2-arm64-v8a.apk</code
        >，适合大多数现代安卓手机。如果安装失败，可按该版本的发布说明尝试
        <code>AnkiDroid-2.25.2.parallel.A.apk</code>。Parallel.A
        可以与原版并存，需要重新配置同步，原来的本地数据不会自动迁入。其他测试包和源代码，新手不用逐个尝试。
      </p>
      <p>
        安卓卡牌无法发音时，可以查看
        <NuxtLink class="inline-link" to="/resources#android-tts"
          >安卓发音工具与设置步骤</NuxtLink
        >，先确认系统的文字转语音试听是否正常。
      </p>
      <GuideFigure
        src="/assets/images/guides/anki-03-mobile-2x.webp"
        preview-src="/assets/images/guides/anki-03-mobile-hd.webp"
        alt="手机版应用：iPhone 使用 AnkiMobile Flashcards，安卓使用免费的 AnkiDroid Flashcards"
        caption="图中价格为演示时价格，以 App Store 实际显示为准。"
        :width="1192"
        :height="791"
      />
    </section>

    <section id="import" aria-labelledby="import-title">
      <h2 id="import-title">从网站下载并导入一副卡牌</h2>
      <p>
        打开英语自学指北网站，在
        <NuxtLink class="inline-link" to="/phonetics#download"
          >音标卡牌</NuxtLink
        >、<NuxtLink class="inline-link" to="/grammar#download"
          >语法卡牌</NuxtLink
        >或
        <NuxtLink class="inline-link" to="/vocabulary#download"
          >词汇卡牌</NuxtLink
        >的下载区，找到当前学习内容对应的卡牌并下载到电脑。Anki 牌组文件通常以
        <code>.apkg</code> 结尾；如果下载的是 ZIP 压缩包，先解压，再找到里面的
        <code>.apkg</code> 文件。
      </p>
      <p>
        在电脑版 Anki 中选择“文件 →
        导入”或“导入文件”，打开下载好的牌组文件，按提示完成导入。也可以像图中一样，把
        <code>.apkg</code> 文件拖进 Anki 窗口。
      </p>
      <p>
        导入后回到牌组列表，打开几张卡牌，确认文字、图片和音频都能正常显示或播放，再进行同步。
      </p>
      <GuideFigure
        src="/assets/images/guides/anki-04-import-2x.webp"
        preview-src="/assets/images/guides/anki-04-import-hd.webp"
        alt="导入 Anki 卡牌：将下载好的 apkg 牌组文件拖进电脑版 Anki 窗口"
        :width="1192"
        :height="791"
      />
    </section>

    <section id="sync" aria-labelledby="sync-title">
      <h2 id="sync-title">注册账号并同步到手机</h2>
      <p>
        AnkiWeb
        负责在电脑和手机之间同步卡牌与学习进度，账号可以免费注册。注册地址：<a
          class="inline-link"
          href="https://ankiweb.net/about"
          target="_blank"
          rel="noopener noreferrer"
          >AnkiWeb</a
        >。
      </p>
      <p>
        先在电脑上点击“同步”。如果还没有账号，进入注册页面，使用常用邮箱完成注册和邮箱验证。之后，电脑和手机都登录同一个
        AnkiWeb 账号。如果出现图中的邮箱未确认提示，先完成邮箱验证，再重新同步。
      </p>
      <GuideFigure
        src="/assets/images/guides/anki-05-sync-login-2x.webp"
        preview-src="/assets/images/guides/anki-05-sync-login-hd.webp"
        alt="点击同步后登录 AnkiWeb 账号；提示邮箱未确认时，先完成邮箱验证"
        :width="1192"
        :height="791"
      />
      <GuideFigure
        src="/assets/images/guides/anki-06-register-2x.webp"
        preview-src="/assets/images/guides/anki-06-register-hd.webp"
        alt="AnkiWeb 免费账号注册页面，地址为 ankiweb.net/about"
        :width="1192"
        :height="791"
      />
      <p>
        <strong>首次同步要看清上传和下载的方向。</strong
        >本期演示的是“电脑已导入卡牌，新账号和手机里还没有内容”：
      </p>
      <ol class="steps">
        <li>电脑端选择“上传到 AnkiWeb”，把刚导入的内容传到云端。</li>
        <li>
          等电脑同步完成，再在手机端同步；如提示选择方向，选择“从 AnkiWeb
          下载”。
        </li>
        <li>等待图片和音频也同步完成，在手机上打开卡牌检查效果。</li>
      </ol>
      <p>
        上传和下载是相对于当前设备而言的。如果之前已经在其他设备上学习过，要先确认哪一端的数据完整，不能照着演示直接覆盖。详细说明见
        <a
          class="inline-link"
          href="https://docs.ankiweb.net/manual/syncing"
          target="_blank"
          rel="noopener noreferrer"
          >Anki 官方同步指南</a
        >。
      </p>
      <GuideFigure
        src="/assets/images/guides/anki-07-sync-flow-2x.webp"
        preview-src="/assets/images/guides/anki-07-sync-flow-hd.webp"
        alt="Anki 同步示意图：电脑和手机通过 Anki 服务器上传、下载卡牌与学习进度"
        :width="1192"
        :height="791"
      />
      <p>
        日常使用时，养成“开始学习前同步一次，结束后再同步一次”的习惯。切换设备前先把当前进度同步上去，另一台设备再同步，就能接着上次的进度继续学。
      </p>
    </section>

    <section id="suspend" aria-labelledby="suspend-title">
      <h2 id="suspend-title">暂停暂时不学的卡牌</h2>
      <p>
        导入整副卡牌后，可以先暂停当前阶段用不到的内容，只保留正在学习的部分。在电脑版的“浏览”中选中目标卡牌，使用“切换暂停”或“暂停
        / 取消暂停”功能即可。
      </p>
      <p>
        暂停后，卡牌仍保留在牌组里，但不会进入学习和复习队列；等学到对应内容，再手动取消暂停。操作时留意选中的范围，避免把当前要学的卡牌一起暂停。功能说明见
        <a
          class="inline-link"
          href="https://docs.ankiweb.net/manual/studying"
          target="_blank"
          rel="noopener noreferrer"
          >Anki 学习指南</a
        >。
      </p>
      <GuideFigure
        src="/assets/images/guides/anki-08-suspend-2x.webp"
        preview-src="/assets/images/guides/anki-08-suspend-hd.webp"
        alt="暂停卡牌：进入浏览窗口，选中暂时不学的卡牌，再选择暂停或取消暂停"
        :width="1192"
        :height="791"
      />
      <p>
        准备完成后，在手机上实际复习几张卡牌并同步，再回到电脑同步，确认学习进度也能传回来，整个流程就走通了。
      </p>
    </section>
  </GuideArticle>
</template>
