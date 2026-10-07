export function normalizeAnalyticsPath(path: string): string {
  const normalized = path
    .split(/[?#]/)[0]!
    .replace(/\/+$/, "")
    .replace(/\.html$/, "");
  return normalized === "/index" ? "/" : normalized || "/";
}

export function classifyAnalyticsLink(
  href: string,
  origin: string,
  download = false,
): "download" | "video" | "outbound" | null {
  try {
    const url = new URL(href, origin);
    if (!["https:", "http:"].includes(url.protocol)) return null;
    if (
      download ||
      /\.(apkg|zip|exe|dmg|msi|pkg|pdf|mp3|mp4)$/i.test(url.pathname)
    )
      return "download";
    if (
      /(^|\.)(bilibili\.com|b23\.tv|youtube\.com|youtu\.be)$/.test(url.hostname)
    )
      return "video";
    return url.origin !== origin ? "outbound" : null;
  } catch {
    return null;
  }
}
