<script setup lang="ts">
import type { NuxtError } from "#app";
defineProps<{ error: NuxtError }>();
</script>
<template>
  <main
    class="page-shell flex min-h-screen flex-col items-center justify-center gap-6 py-16 text-center"
  >
    <BrandMark class="size-16" />
    <p class="text-sm tracking-widest text-muted">英语自学指北</p>
    <h1 class="text-4xl font-bold">
      {{
        error.statusCode === 404
          ? "这一页暂时没有找到。"
          : "页面遇到了一点问题。"
      }}
    </h1>
    <p class="text-muted">回到学习起点，继续下一步。</p>
    <button class="primary-button" @click="clearError({ redirect: '/' })">
      返回首页 →
    </button>
  </main>
</template>
