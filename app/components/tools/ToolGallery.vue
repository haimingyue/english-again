<script setup lang="ts">
import { toolsContent } from "~/data/tools";
type ShotKey = keyof typeof toolsContent.shots;
const open = defineModel<boolean>({ default: false });
const props = defineProps<{ initialShot: ShotKey }>();
const keys = Object.keys(toolsContent.shots) as ShotKey[];
const index = ref(0);
const key = computed(() => keys[index.value] ?? "bookshelf");
const shot = computed(() => toolsContent.shots[key.value]);
watch([open, () => props.initialShot], () => {
  if (open.value) index.value = Math.max(0, keys.indexOf(props.initialShot));
});
function move(direction: number) {
  index.value = (index.value + direction + keys.length) % keys.length;
}
</script>
<template>
  <UiDialog
    v-model="open"
    :title="'读书会 · ' + shot.title"
    wide
    @navigate="move"
  >
    <div>
      <img
        :src="`/assets/images/tools/originals/${key}.png`"
        :alt="shot.alt"
        class="mx-auto max-h-[68dvh] w-full object-contain"
      />
      <p class="mt-3 text-sm text-muted">{{ shot.alt }}</p>
      <div class="mt-3 flex items-center justify-between gap-5">
        <button type="button" class="action-link" @click="move(-1)">
          ← 上一张</button
        ><span aria-live="polite" class="text-sm text-muted"
          >{{ index + 1 }} / {{ keys.length }}</span
        ><button type="button" class="action-link" @click="move(1)">
          下一张 →
        </button>
      </div>
    </div>
  </UiDialog>
</template>
