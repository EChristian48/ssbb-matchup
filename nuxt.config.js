import colors from 'vuetify/es5/util/colors'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  ssr: 'false',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - Super Smash Tools',
    title: 'Super Smash Tools',
    htmlAttrs: {
      lang: 'en'
    },
    headAttrs: {
      prefix: 'og: https://ogp.me/ns/website'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Tools for Super Smash Bros. Mostly matchup tools where you can see you character matchups with more coming soon!. Created to learn Vue and Nuxt.'
      },
      { name: 'format-detection', content: 'telephone=no' },

      // OpenGraph
      { hid: 'og:title', name: 'og:title', content: 'Super Smash Tools' },
      { hid: 'og:type', name: 'og:type', content: 'website' },
      {
        hid: 'og:url',
        name: 'og:url',
        content: 'https://smashtools.netlify.app'
      },
      {
        name: 'og:image',
        content: 'https://smashtools.netlify.app/logo.svg'
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content:
          'Tools for Super Smash Bros. Mostly matchup tools where you can see you character matchups with more coming soon!. Created to learn Vue and Nuxt.'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/global.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify'
    // https://google-fonts.nuxtjs.org
    // '@nuxtjs/google-fonts'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxt/content'],

  // Google fonts config: https://google-fonts.nuxtjs.org/options
  // googleFonts: {
  //   families: {
  //     Roboto: {
  //       wght: [100, 300, 400, 500, 700, 900],
  //       ital: [100, 300, 400, 500, 700, 900]
  //     },
  //     'Roboto+Condensed': [700]
  //   },
  //   display: 'swap',
  //   preconnect: true,
  //   useStylesheet: true
  // },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
}
