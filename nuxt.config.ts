// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/icon"],
  runtimeConfig: {
    public: {
      googleCloudApiKey: process.env.GOOGLE_CLOUD_API_KEY,
    },
  },
  app: {
    baseURL: process.env.NODE_ENV === "production" ? "/Moi/" : "/",
    buildAssetsDir: "assets",
    head: {
      title: "Moi",
      meta: [{ name: "apple-mobile-web-app-capable", content: "yes" }],
    },
  },
});
