import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  build: { format: "file" },
  integrations: [sitemap()],
  site: "https://stichtingsticky.nl/",
  vite: { plugins: [tailwindcss()] },
});
