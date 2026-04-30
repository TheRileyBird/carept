import { defineConfig } from "astro/config";
import alpine from "@astrojs/alpinejs";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://www.carephysicaltherapy.net",
  integrations: [
    tailwind(),
    sitemap(),
    alpine({
      entrypoint: "/src/alpine.ts",
    }),
  ],
});
