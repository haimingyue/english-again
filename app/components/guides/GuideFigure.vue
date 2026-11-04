<script setup lang="ts">
const props = defineProps<{
  src: string;
  previewSrc?: string;
  alt: string;
  caption?: string;
  width: number;
  height: number;
}>();
const { openImage } = useImagePreview();
</script>

<template>
  <figure class="mx-auto my-7 max-w-[596px]">
    <button
      type="button"
      :aria-label="`放大查看：${caption || alt}`"
      title="点击图片可放大"
      class="block w-full cursor-zoom-in bg-transparent p-0"
      @click="
        openImage({
          src: props.previewSrc || props.src,
          alt: props.alt,
          title: props.caption || props.alt,
        })
      "
    >
      <img
        :src="src"
        :alt="alt"
        :width="width"
        :height="height"
        loading="lazy"
        decoding="async"
        class="h-auto w-full"
      />
    </button>
    <figcaption
      v-if="caption"
      class="mt-3 text-center text-sm leading-relaxed text-muted"
    >
      {{ caption }}
    </figcaption>
  </figure>
</template>
