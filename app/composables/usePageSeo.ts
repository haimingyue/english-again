import { normalizeAnalyticsPath } from "~/utils/analytics";

export function usePageSeo(title: string, description: string) {
  const fullTitle = `${title} · 英语自学指北 English Again`;
  // Share the resolved title with analytics before Unhead updates the DOM.
  const titles = useState<Record<string, string>>("page-titles", () => ({}));
  titles.value[normalizeAnalyticsPath(useRouter().currentRoute.value.path)] =
    fullTitle;
  useSeoMeta({
    title: fullTitle,
    description,
    ogTitle: fullTitle,
    ogDescription: description,
    ogType: "website",
    twitterCard: "summary_large_image",
  });
}
