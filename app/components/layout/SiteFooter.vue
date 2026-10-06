<template>
  <footer class="bg-ink pt-[38px] pb-7 text-white min-[701px]:pt-[54px]">
    <div class="page-shell">
      <div
        class="grid grid-cols-2 gap-[30px] min-[701px]:grid-cols-[2fr_1fr_1fr] min-[701px]:gap-[72px]"
      >
        <div class="col-span-full min-[701px]:col-span-1">
          <NuxtLink
            to="/"
            class="inline-flex items-center gap-3 text-[22px] font-bold"
            ><BrandMark class="size-12" />英语自学指北</NuxtLink
          >
          <p class="mt-4 text-sm text-[#b6c2b7]">按自己的节奏，持续学习。</p>
        </div>
        <div>
          <h2 class="mb-3.5 text-[15px] font-semibold tracking-normal">
            学习内容
          </h2>
          <NuxtLink
            v-for="link in [
              { to: '/phonetics', text: '音标与发音' },
              { to: '/grammar', text: '基础语法' },
              { to: '/columns', text: '每周专栏' },
              { to: '/vocabulary', text: '词汇与记忆' },
              { to: '/reading', text: '阅读与理解' },
            ]"
            :key="link.to"
            :to="link.to"
            class="flex min-h-11 items-center text-sm text-[#cbd5ce] hover:text-sun"
            >{{ link.text }}</NuxtLink
          >
        </div>
        <div>
          <h2 class="mb-3.5 text-[15px] font-semibold tracking-normal">
            了解项目
          </h2>
          <NuxtLink
            v-for="link in [
              { to: '/about', text: '项目介绍' },
              { to: '/about#sources', text: '学习依据' },
              { to: '/tools', text: '自研工具' },
            ]"
            :key="link.to"
            :to="link.to"
            class="flex min-h-11 items-center text-sm text-[#cbd5ce] hover:text-sun"
            >{{ link.text }}</NuxtLink
          >
        </div>
      </div>
      <div
        class="mt-7 flex flex-col gap-2 border-t border-[#44574a] pt-5 text-xs text-[#b6c2b7] min-[701px]:mt-[38px] min-[701px]:flex-row min-[701px]:justify-between"
      >
        <span>英语自学指北 · English Again</span
        ><span>从基础出发，把英语用起来。</span>
      </div>
    </div>
  </footer>
</template>
