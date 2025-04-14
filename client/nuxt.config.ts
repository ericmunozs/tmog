// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: 'src/',
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    '@nuxt/image',
    '@pinia/nuxt',
    '@nuxt/test-utils/module'
  ],
  css: ['~/assets/css/main.css'],
  ssr: true,
  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.API_BASE_URL || 'http://localhost:3001',
      useMockService: process.env.USE_MOCK_SERVICE || 'false',
    },
  }
  // extends:[
  //       '~/layers/task-list'
  //     ]
})
