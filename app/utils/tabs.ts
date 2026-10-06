/** Roving tabindex for horizontal tablists; native Tab moves into the panel. */
export function moveTab(
  event: KeyboardEvent,
  index: number,
  count: number,
  select: (index: number) => void,
) {
  let next: number;
  switch (event.key) {
    case "ArrowRight":
      next = (index + 1) % count;
      break;
    case "ArrowLeft":
      next = (index + count - 1) % count;
      break;
    case "Home":
      next = 0;
      break;
    case "End":
      next = count - 1;
      break;
    default:
      return;
  }
  event.preventDefault();
  const list = (event.currentTarget as HTMLElement).closest('[role="tablist"]');
  select(next);
  list?.querySelectorAll<HTMLButtonElement>('[role="tab"]')[next]?.focus();
}
