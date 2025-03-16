import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  css: ["~/assets/app.css"],
  imports: { dirs: ["queries", "mutations"] },
  devtools: { enabled: true },
  runtimeConfig: { JWT_SECRET: process.env.JWT_SECRET },
  vite: { plugins: [tailwindcss()] },
  modules: [
    "@nuxtjs/i18n",
    "@pinia/colada-nuxt",
    "@pinia/nuxt",
    "nuxt-mongoose",
  ],
  i18n: {
    locales: [{ code: "en", file: "ru.yaml" }],
    defaultLocale: "en",
    lazy: true,
    langDir: "../locales/",
    strategy: "no_prefix",
  },

  mongoose: { uri: process.env.DB_URI },
  compatibilityDate: "2025-03-16",
});
