const pkg = require('./package')

module.exports = {
  mode: 'universal',

  generate: {
    routes: [
      
    ]
  },
  /*
   ** Headers of the page
   */
  head: {
    title: 'Mock YouTuber',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
      }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   ** Global CSS
   */
  css: ['~assets/app.styl'],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~plugins/vuetify.js', '~/plugins/bus'],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/vuetify'
  ],
  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    vendor: ['axios, vuetify'],
    extend(config, ctx) {}
  },
  env: {
    apiKey: process.env.API_KEY
  }
}
