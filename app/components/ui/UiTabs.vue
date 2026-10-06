<script setup lang="ts">
import { moveTab } from "~/utils/tabs";
export interface TabOption {
  value: string;
  label: string;
  id?: string;
}
const selected = defineModel<string>({ required: true });
const props = defineProps<{
  items: readonly TabOption[];
  label: string;
  panelId: string;
  buttonClass?: string;
}>();
const id = useId();
function select(index: number) {
  const item = props.items[index];
  if (item) selected.value = item.value;
}
</script>
<template>
  <div role="tablist" :aria-label="label">
    <button
      v-for="(item, index) in items"
      :id="item.id ?? `${id}-${item.value}`"
      :key="item.value"
      type="button"
      role="tab"
      :aria-selected="selected === item.value"
      :aria-controls="panelId"
      :tabindex="selected === item.value ? 0 : -1"
      :class="buttonClass"
      @click="selected = item.value"
      @keydown="moveTab($event, index, items.length, select)"
    >
      <span v-if="/^\d{2} /.test(item.label)" class="text-[10px] text-muted">{{
        item.label.slice(0, 2)
      }}</span
      >{{ item.label.replace(/^\d{2} /, "") }}
    </button>
  </div>
</template>
