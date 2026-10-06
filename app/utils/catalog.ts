export interface Video {
  title: string;
  topic: string;
  url: string;
  thumbnail: string;
  category: string;
  label: string;
  duration_seconds?: number | null;
  original?: string | null;
  weeks?: number[];
  episode?: number;
  catalog_order?: number;
}
export function normalizeSearch(value: string) {
  return value
    .normalize("NFKC")
    .toLowerCase()
    .replace(/[–—]/g, "-")
    .replace(/\s+/g, "");
}
export function filterVideos<T extends Video>(
  videos: readonly T[],
  query: string,
  category: string,
  order: string,
): T[] {
  const terms = query.trim().split(/\s+/).filter(Boolean).map(normalizeSearch);
  const filtered = videos.filter(
    (video) =>
      (category === "全部" || video.category === category) &&
      terms.every((term) =>
        normalizeSearch(
          `${video.label} ${video.title} ${video.topic}`,
        ).includes(term),
      ),
  );
  return order === "desc" ? [...filtered].reverse() : filtered;
}
export function formatDuration(seconds?: number | null) {
  if (!seconds || seconds < 0) return "";
  return `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, "0")}`;
}
