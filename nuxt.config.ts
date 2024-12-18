// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', "@nuxtjs/sanity", "@nuxt/fonts"],

  runtimeConfig: {
    public: {
      apiTrackingBaseUrl: process.env.NUXT_PUBLIC_API_TRACKING_BASE_URL || '',
    }
  },

  sanity: {
    projectId: "uwfz7mwm",
    dataset: "production",
  },

  css: ['@/assets/scss/main.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "@/assets/scss/foundations/normalize" as *;
            @use "@/assets/scss/foundations/variables" as *;
            @use "@/assets/scss/foundations/functions" as *;
            @use "@/assets/scss/foundations/mixins" as *;
          `,
        },
      },
    },
  },

  fonts: {
    families: [
      { name: 'Nunito', provider: 'google', weights: ['300', '400', '500', '600', '700', '800', '900'] },
    ]
  }
})