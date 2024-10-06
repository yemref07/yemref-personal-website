// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr:true,
  devtools: { enabled: true },
  compatibilityDate: "2024-07-04",
  components: {
    dirs: ['components/UI', 'components/layouts','components/dropdowns']
  },
  css: ['~/assets/css/main.css'],
  modules: ["@nuxtjs/i18n", "@nuxt/image", "@nuxt/icon",'@pinia/nuxt',],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  image: {
    dir: 'assets/images'
  },
  i18n: {
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root'
    },
    defaultLocale: 'tr',
    lazy: false,
    langDir: 'lang',
    locales: [
      {
        code: 'tr',
        name: 'Türkçe',
        file: 'tr-TR.json',
        flag:"turkey",
        iso: 'tr-TR',
      },
      {
        code: 'en',
        name: 'English',
        file: 'en-EN.ts',
        flag:"england",
        iso: 'en-US',
      },
    ],
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/sass/_colors.scss" as *;'
        }
      }
    }
  }

})