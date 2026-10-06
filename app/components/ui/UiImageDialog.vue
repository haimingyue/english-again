<script setup lang="ts">
const { image, closeImage } = useImagePreview();
const open = computed({
  get: () => image.value !== null,
  set: (value) => {
    if (!value) closeImage();
  },
});
const route = useRoute();
watch(() => route.fullPath, closeImage);
</script>
<template>
  <UiDialog v-model="open" :title="image?.title ?? '图片预览'" wide>
    <template v-if="image">
      <img
        :src="image.src"
        :alt="image.alt"
        class="mx-auto max-h-[72dvh] max-w-full object-contain"
      />
      <p v-if="image.caption" class="mt-3 text-sm text-muted">
        {{ image.caption }}
      </p>
      <a
        :href="image.src"
        target="_blank"
        rel="noopener noreferrer"
        class="action-link mt-2"
        >查看原图 ↗</a
      >
    </template>
  </UiDialog>
</template>
