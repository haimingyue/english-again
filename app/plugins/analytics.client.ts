import {
  normalizeAnalyticsPath,
  classifyAnalyticsLink,
} from "~/utils/analytics";

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();
  if (!config.public.analyticsEnabled) return;
  const titles = useState<Record<string, string>>("page-titles", () => ({}));
  let visitor: string = crypto.randomUUID();
  let session: string = crypto.randomUUID();
  let lastActivity = 0;
  let previousPath = "";
  let previousUrl = document.referrer;
  try {
    visitor = localStorage.getItem("ea-visitor") || visitor;
    localStorage.setItem("ea-visitor", visitor);
  } catch {
    /* Private mode: keep an in-memory identifier. */
  }

  function send(kind: string, target = "", label = "") {
    const now = Date.now();
    try {
      const saved = JSON.parse(sessionStorage.getItem("ea-session") || "null");
      if (saved && now - saved.at < 30 * 60 * 1000) session = saved.id;
      else if (now - lastActivity >= 30 * 60 * 1000)
        session = crypto.randomUUID();
      sessionStorage.setItem(
        "ea-session",
        JSON.stringify({ id: session, at: now }),
      );
    } catch {
      if (now - lastActivity >= 30 * 60 * 1000) session = crypto.randomUUID();
    }
    lastActivity = now;
    const payload = {
      event_id: crypto.randomUUID(),
      visitor_id: visitor,
      session_id: session,
      kind,
      path: normalizeAnalyticsPath(location.pathname),
      title:
        titles.value[normalizeAnalyticsPath(location.pathname)] ||
        document.title,
      referrer: previousUrl,
      target,
      label,
      language: navigator.language,
      screen: `${screen.width}x${screen.height}`,
    };
    // Tracking must never delay a navigation or a download.
    void fetch("/api/analytics/collect", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      keepalive: true,
      credentials: "omit",
    }).catch(() => {});
  }
  function pageview() {
    const path = normalizeAnalyticsPath(location.pathname);
    if (
      path === previousPath ||
      path.startsWith("/admin") ||
      path.startsWith("/api/")
    )
      return;
    send("pageview");
    previousUrl = location.origin + path;
    previousPath = path;
  }
  // Wait for the destination page and its head tags, not only the route change.
  const schedulePageview = () =>
    void nextTick(() => requestAnimationFrame(pageview));
  nuxtApp.hook("page:finish", schedulePageview);
  nuxtApp.hook("app:mounted", () => {
    schedulePageview();
    document.addEventListener(
      "click",
      (event) => {
        const anchor =
          event.target instanceof Element
            ? event.target.closest("a[href]")
            : null;
        if (!(anchor instanceof HTMLAnchorElement)) return;
        const kind = classifyAnalyticsLink(
          anchor.href,
          location.origin,
          anchor.hasAttribute("download"),
        );
        if (kind)
          send(
            kind,
            anchor.href,
            (anchor.textContent || anchor.getAttribute("aria-label") || "")
              .trim()
              .slice(0, 150),
          );
      },
      { capture: true },
    );
  });
});
