<script setup lang="ts">
const emit = defineEmits<{ navigate: [direction: number] }>();
const open = defineModel<boolean>({ default: false });
defineProps<{ title: string; wide?: boolean }>();
const dialog = useTemplateRef<HTMLDialogElement>("dialog");
const titleId = useId();
let trigger: HTMLElement | null = null;
watch(
  open,
  (value) => {
    if (!dialog.value) return;
    if (value && !dialog.value.open) {
      trigger =
        document.activeElement instanceof HTMLElement
          ? document.activeElement
          : null;
      dialog.value.showModal();
    } else if (!value && dialog.value.open) dialog.value.close();
  },
  { flush: "post" },
);
onMounted(() => {
  if (open.value) dialog.value?.showModal();
});
function close() {
  open.value = false;
}
function onClose() {
  open.value = false;
  if (trigger?.isConnected) trigger.focus({ preventScroll: true });
}
function backdrop(event: MouseEvent) {
  if (event.target !== dialog.value || !dialog.value) return;
  const { left, right, top, bottom } = dialog.value.getBoundingClientRect();
  if (
    event.clientX < left ||
    event.clientX > right ||
    event.clientY < top ||
    event.clientY > bottom
  )
    close();
}
onBeforeUnmount(() => dialog.value?.close());
</script>
<template>
  <Teleport to="body">
    <dialog
      ref="dialog"
      :aria-labelledby="titleId"
      class="max-h-[90dvh] w-[calc(100%-32px)] overflow-auto rounded-md border-0 bg-paper p-5 text-ink md:p-6"
      :class="wide ? 'max-w-[1280px]' : 'max-w-[740px]'"
      @close="onClose"
      @cancel="close"
      @click="backdrop"
      @keydown.right="emit('navigate', 1)"
      @keydown.left="emit('navigate', -1)"
    >
      <div
        class="sticky -top-6 z-10 flex items-center justify-between gap-6 bg-paper pb-3"
      >
        <h2 :id="titleId" class="text-lg font-bold md:text-xl">{{ title }}</h2>
        <button
          type="button"
          autofocus
          class="action-link shrink-0"
          @click="close"
        >
          关闭 <span aria-hidden="true">×</span>
        </button>
      </div>
      <slot />
    </dialog>
  </Teleport>
</template>
