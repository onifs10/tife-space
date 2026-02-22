// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import mdx from "@astrojs/mdx";

import icon from "astro-icon";

import sitemap from "@astrojs/sitemap";

import pagefind from "astro-pagefind";

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [mdx(), icon(), sitemap(), pagefind()],
  site: "https://tife.me/",
  experimental: {
    fonts: [
      {
        provider: fontProviders.fontsource(),
        name: "Space Grotesk",
        cssVariable: "--font-sans",
      },
      {
        provider: fontProviders.fontsource(),
        name: "IBM Plex Mono",
        cssVariable: "--font-mono",
      },
      {
        provider: fontProviders.google(),
        name: "Roboto Mono",
        cssVariable: "--font-roboto-mono",
      },
      {
        provider: fontProviders.google(),
        name: "Fira Code",
        cssVariable: "--font-fira-code",
      },
    ],
  },
});
