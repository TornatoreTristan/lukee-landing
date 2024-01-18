import { defineConfig } from "astro/config";
import vue from "@astrojs/vue";
import partytown from "@astrojs/partytown";

import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  site: "https://www.lukee.io/",
  integrations: [
    vue(),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
    robotsTxt(),
    sitemap(),
  ],
});
