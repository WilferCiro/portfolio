import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import embeds from "astro-embed/integration";
// import AstroPWA from "@vite-pwa/astro";

export default defineConfig({
  integrations: [
    embeds(),
    mdx(),    
  ],
  markdown: {
    shikiConfig: {
      // Choose from Shiki's built-in themes (or add your own)
      // https://github.com/shikijs/shiki/blob/main/docs/themes.md
      theme: "material-theme-darker",
      // Add custom languages
      // Note: Shiki has countless langs built-in, including .astro!
      // https://github.com/shikijs/shiki/blob/main/docs/languages.md
      langs: [],
    },
  },
});

/*
AstroPWA({
      registerType: 'autoUpdate',
      base: '/',
      scope: '/',
      includeAssets: ['favicon.ico'],
      workbox: {
        navigateFallback: "/",
        globPatterns: ["**//*.{css,js,html,svg,png,jpg,jpeg,webp,ico,txt}"],
      },
      devOptions: {
        enabled: true,
        navigateFallbackAllowlist: [/^\//],
      },
      experimental: {
        directoryAndTrailingSlashHandler: true,
      },
    }),
     */