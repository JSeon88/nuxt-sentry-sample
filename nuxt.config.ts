import { getRunTypeConfig } from './package/config/run-type';
import { sentry } from './nuxt-configs';

const RUN_TYPE = process.env.RUN_TYPE || 'live';
export default {
  ssr: false,
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-sentry-sample',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],
  // 환경 변수 설정
  publicRuntimeConfig: getRunTypeConfig({ RUN_TYPE }),
  // 클라이언트에도 사용하기 위해서는 다음과 같이 env에도 같은 값을 설정
  env: getRunTypeConfig({ RUN_TYPE }),
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/sentry'],
  sentry,
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
