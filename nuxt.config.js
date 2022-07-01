import config from './config.js'

export default {
  server: {
    host: process.env.BASE_HOST || '0.0.0.0',
    port: process.env.BASE_PORT || 3000,
  },
  ssr: !(process.env.MODE && process.env.MODE.toLocaleUpperCase() == 'SPA'),
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: config.title,
    htmlAttrs: {
      lang: 'zh-CN',
    },
    meta: config.meta,
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico',
      },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: '//cdn.jsdelivr.net/npm/katex@0.10.1/dist/katex.min.css',
      },
      {
        rel: 'stylesheet',
        type: 'text/css',
        // href: '//cdn.jsdelivr.net/npm/@mdi/font@6.5.95/css/materialdesignicons.min.css',
        href: '//fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@48,400,1,0',
      },
    ],
    script: [
      {
        src: '//cdnjs.cloudflare.com/ajax/libs/color-thief/2.3.0/color-thief.umd.js',
      },
    ]
  },
  axios: {
    retry: {
      retries: 3,
    },
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['ress', '~/assets/styles/main.scss'],

  // Global variables, mixins and function
  styleResources: {
    scss: ['~/assets/styles/variables.scss', '~/assets/styles/mixins.scss'],
  },

  // Plugins to run before rendering pasge: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // '~/config.js',
    '~/plugins/inject.js',
    '~/plugins/services.js',
    '~/plugins/utils/utils.js',
    '~/plugins/utils/filter.js',
    '~/plugins/utils/ascii.client.js',
    '~/plugins/utils/markdown-renderer.client.js',
    '~/plugins/libs/lib-vue-lazyload.client.js',
    '~/plugins/libs/lib-vuex-persistedstate.client.js',
    '~/plugins/libs/lib-aos.client.js',
    '~/plugins/libs/lib-aplayer.client.js',
    '~/plugins/libs/lib-vssue.client.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/axios', '@nuxtjs/style-resources'],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel: {
      plugins: [['@babel/plugin-proposal-private-property-in-object', { loose: true }]],
    },
    extractCSS: {
      ignoreOrder: true,
    },
    // analyze: true,
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
  },
}
