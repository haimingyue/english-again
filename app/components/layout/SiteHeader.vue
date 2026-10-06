<script setup lang="ts">
const route = useRoute();
const open = ref(false);
const menu = useTemplateRef<HTMLButtonElement>("menu");
const links = [
  { to: "/", label: "首页" },
  { to: "/about", label: "介绍" },
  { to: "/phonetics", label: "音标" },
  { to: "/grammar", label: "语法" },
  { to: "/vocabulary", label: "词汇" },
  { to: "/reading", label: "阅读" },
  { to: "/columns", label: "专栏" },
  { to: "/tools", label: "工具" },
];
const seriesRoutes = ["/fluent-forever", "/make-it-stick", "/little-prince"];
const normalizedPath = computed(
  () =>
    route.path
      .replace(/\.html$/, "")
      .replace(/\/$/, "")
      .replace(/^\/index$/, "") || "/",
);
function active(to: string) {
  return (
    normalizedPath.value === to ||
    (to === "/columns" && seriesRoutes.includes(normalizedPath.value))
  );
}
watch(
  () => route.fullPath,
  () => {
    open.value = false;
  },
);
function escape() {
  if (open.value) {
    open.value = false;
    menu.value?.focus();
  }
}
</script>
<template>
  <a
    href="#main"
    class="absolute -top-24 left-5 z-50 bg-white p-3 text-ink focus:top-4"
    >跳到主要内容</a
  >
  <header
    class="relative z-20 h-18 bg-ink text-white min-[961px]:h-20"
    @keydown.esc="escape"
  >
    <div class="page-shell flex h-full items-center gap-5 min-[1201px]:gap-8">
      <NuxtLink
        to="/"
        aria-label="英语自学指北首页"
        class="inline-flex shrink-0 items-center gap-3 text-xl font-bold tracking-[.015em] whitespace-nowrap min-[1201px]:text-[22px]"
      >
        <BrandMark class="size-10 min-[961px]:size-11" />英语自学指北
      </NuxtLink>
      <button
        ref="menu"
        type="button"
        aria-controls="site-navigation"
        :aria-expanded="open"
        class="ml-auto min-h-11 rounded-full border border-[#819487] bg-transparent px-[18px] py-2 min-[961px]:hidden"
        @click="open = !open"
      >
        菜单
      </button>
      <nav
        id="site-navigation"
        aria-label="主导航"
        class="absolute top-18 right-0 left-0 flex-wrap items-center gap-x-7 gap-y-3 border-t border-[#607866] bg-ink px-8 py-[18px] min-[961px]:static min-[961px]:ml-auto min-[961px]:flex-nowrap min-[961px]:gap-[18px] min-[961px]:border-0 min-[961px]:p-0 min-[1201px]:gap-7"
        :class="open ? 'flex' : 'hidden min-[961px]:flex'"
      >
        <NuxtLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          :aria-current="active(link.to) ? 'page' : undefined"
          class="flex min-h-11 items-center text-[15px] whitespace-nowrap hover:text-sun"
          :class="active(link.to) ? 'text-sun' : 'text-[#e8eee9]'"
          @click="open = false"
          >{{ link.label }}</NuxtLink
        >
      </nav>
      <NuxtLink
        to="/phonetics"
        class="hidden min-h-11 shrink-0 items-center justify-center rounded-full bg-sun px-5 py-2.5 text-sm font-semibold text-ink hover:bg-[#ffe271] min-[961px]:inline-flex"
        >开始学习</NuxtLink
      >
    </div>
  </header>
</template>
