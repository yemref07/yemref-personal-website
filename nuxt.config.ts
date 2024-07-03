// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  compatibilityDate: "2024-07-04",
  css: ['~/assets/css/main.css'],
  modules: ["@nuxtjs/i18n", "@nuxt/image","vue-sweetalert2/nuxt"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})