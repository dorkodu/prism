import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  alias: {
    '~~': '/<rootDir>',
    '@@': '/<rootDir>',
    '~': '/<rootDir>',
    '@': '/<rootDir>',
    assets: '/<rootDir>/assets',
    public: '/<rootDir>/public',
    images: '/<rootDir>/public/images',
    style: '/<rootDir>/assets/style',
  },
  css: ['~/assets/style/style.scss'],
  // modules
  modules: ['@nuxtjs/color-mode'],
  colorMode: {
    preference: 'system', // default value of $colorMode.preference
    fallback: 'light', // fallback value if not system preference found
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '-mode',
    storageKey: 'nuxt-color-mode',
  },
})
