<script setup lang="ts">
const props = defineProps<{
  src: string;
  alt: string;
  fallback?: string;
  loading?: "eager" | "lazy";
}>();
const image = useTemplateRef<HTMLImageElement>("image");
const failed = ref(false);
let timeout: ReturnType<typeof setTimeout> | undefined;
let observer: IntersectionObserver | undefined;
function clear() {
  clearTimeout(timeout);
}
function fallback() {
  clear();
  if (props.fallback) failed.value = true;
}
function observe() {
  clear();
  observer?.disconnect();
  if (!props.fallback || !/^https?:/.test(props.src) || !image.value) return;
  // Bound third-party image loading only once the image is near the viewport.
  observer = new IntersectionObserver(
    (entries) => {
      if (!entries.some((entry) => entry.isIntersecting)) return;
      observer?.disconnect();
      if (!image.value?.complete || !image.value?.naturalWidth)
        timeout = setTimeout(fallback, 6000);
    },
    { rootMargin: "500px" },
  );
  observer.observe(image.value);
}
watch(
  () => props.src,
  () => {
    failed.value = false;
    nextTick(observe);
  },
);
onMounted(observe);
onBeforeUnmount(() => {
  clear();
  observer?.disconnect();
});
const source = computed(() =>
  failed.value && props.fallback ? props.fallback : props.src,
);
</script>
<template>
  <img
    ref="image"
    :src="source"
    :alt="alt"
    :loading="loading ?? 'lazy'"
    decoding="async"
    referrerpolicy="no-referrer"
    @load="clear"
    @error="fallback"
  />
</template>
