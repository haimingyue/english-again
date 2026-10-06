export function usePageSeo(title: string, description: string) {
  const fullTitle = `${title} · 英语自学指北 English Again`;
  useSeoMeta({
    title: fullTitle,
    description,
    ogTitle: fullTitle,
    ogDescription: description,
    ogType: "website",
    twitterCard: "summary_large_image",
  });
}
