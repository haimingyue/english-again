import { fileURLToPath } from "node:url";
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2026-10-06",
  devtools: { enabled: false },
  runtimeConfig: {
    public: {
      analyticsEnabled: process.env.NUXT_PUBLIC_ANALYTICS_ENABLED
        ? process.env.NUXT_PUBLIC_ANALYTICS_ENABLED === "true"
        : process.env.NODE_ENV === "production",
    },
  },
  css: ["~/assets/css/main.css"],
  components: [{ path: "~/components", pathPrefix: false }],
  vite: { plugins: [tailwindcss()] },
  typescript: { strict: true },
  // Inline the small payload so legacy .html files never request file/child URLs.
  experimental: { payloadExtraction: false },
  app: {
    head: {
      htmlAttrs: { lang: "zh-CN" },
      title: "英语自学指北 · English Again",
      meta: [{ name: "theme-color", content: "#172820" }],
      link: [
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/brand/favicon-32.png",
        },
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/brand/apple-touch-icon.png",
        },
      ],
    },
  },
  nitro: {
    publicAssets: [
      {
        dir: fileURLToPath(new URL("./site/assets", import.meta.url)),
        baseURL: "/assets",
        maxAge: 86400,
      },
    ],
    prerender: {
      crawlLinks: true,
      failOnError: true,
      routes: [
        "/index.html",
        "/about.html",
        "/phonetics.html",
        "/grammar.html",
        "/vocabulary.html",
        "/reading.html",
        "/columns.html",
        "/fluent-forever.html",
        "/make-it-stick.html",
        "/little-prince.html",
        "/tools.html",
        "/guides.html",
        "/guides/anki-setup.html",
        "/guides/phonetics-practice.html",
        "/guides/reading-and-viewing.html",
        "/resources.html",
      ],
    },
  },
});
