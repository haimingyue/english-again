<template>
  <section
    id="learning-resources"
    class="page-shell py-14 sm:py-20"
    aria-labelledby="home-resources-title"
  >
    <div class="mb-8 flex flex-wrap items-end justify-between gap-5">
      <div>
        <p class="mb-3 text-xs font-semibold tracking-[.14em] text-forest">
          把学习资料带走
        </p>
        <h2 id="home-resources-title" class="text-3xl font-bold sm:text-[40px]">
          你的学习工具箱。
        </h2>
      </div>
      <NuxtLink to="/resources" class="action-link text-forest"
        >全部资源下载 <span aria-hidden="true">↗</span></NuxtLink
      >
    </div>
    <div class="grid gap-5 md:grid-cols-2">
      <NuxtLink
        to="/resources#obsidian"
        class="group relative flex min-w-0 flex-col justify-between gap-8 border border-[#cfc4e1] bg-[#e9e3f2] p-6 sm:p-9"
      >
        <div class="flex items-start justify-between gap-4">
          <span class="text-xs font-semibold tracking-wider text-[#584075]"
            >专栏配套 · OBSIDIAN</span
          >
          <img
            src="/assets/images/resources/obsidian.png"
            alt=""
            width="447"
            height="447"
            loading="lazy"
            class="size-16 rounded-xl sm:size-20"
          />
        </div>
        <div>
          <h3 class="text-2xl font-bold sm:text-[28px]">
            把专栏装进你的笔记库
          </h3>
          <p class="mt-3 max-w-md text-sm leading-[1.9] text-muted">
            每周笔记、图文与附件，打包带走。在 Obsidian 中边学、边连接、边记录。
          </p>
          <span
            class="mt-6 inline-flex min-h-11 items-center gap-4 text-sm font-semibold text-[#584075] group-hover:underline"
            >下载专栏笔记库 <span aria-hidden="true">↗</span></span
          >
        </div>
      </NuxtLink>
      <NuxtLink
        to="/resources#android-tts"
        class="group flex min-w-0 flex-col justify-between gap-8 border border-[#c4d2be] bg-sage p-6 sm:p-9"
      >
        <div class="flex items-start justify-between gap-4">
          <span class="text-xs font-semibold tracking-wider text-forest"
            >安卓支持 · TEXT TO SPEECH</span
          >
          <svg
            class="size-14 text-forest sm:size-16"
            viewBox="0 0 64 64"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            aria-hidden="true"
          >
            <rect x="6" y="22" width="12" height="20" rx="2" />
            <path
              d="M18 22 34 10v44L18 42M43 22c6 5 6 15 0 20M50 14c12 10 12 26 0 36"
            />
          </svg>
        </div>
        <div>
          <h3 class="text-2xl font-bold sm:text-[28px]">
            卡牌没声音？从这里排查
          </h3>
          <p class="mt-3 max-w-md text-sm leading-[1.9] text-muted">
            为缺少英语朗读引擎的安卓手机，准备了两份安装包和设置步骤。
          </p>
          <span
            class="mt-6 inline-flex min-h-11 items-center gap-4 text-sm font-semibold text-forest group-hover:underline"
            >查看安卓发音工具 <span aria-hidden="true">↗</span></span
          >
        </div>
      </NuxtLink>
    </div>
  </section>
</template>
