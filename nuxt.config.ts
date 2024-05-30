import istanbul from "vite-plugin-istanbul";

export default defineNuxtConfig({
  ssr: false,
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  css: ["@/assets/main.css"],
  modules: ["@nuxt/test-utils/module"],
  devServer: {
    port: 4173,
  },
  sourcemap: {
    client: true,
    server: true,
  },
  vite: {
    plugins: [
      istanbul({
        exclude: ["node_modules", "cypress/"],
        include: ["pages/*", "utils/*"],
        extension: [".vue", ".ts"],
        cypress: true,
        forceBuildInstrument: true,
      }),
    ],
  },
});
