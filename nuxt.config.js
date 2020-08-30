
export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'spa',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'static',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/dotenv',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: "AIzaSyB4X5Vj5GI1NdZ0JsLY0P5ROtiL2eUKdLY",
          authDomain: "rails-container-prototype.firebaseapp.com",
          databaseURL: "https://rails-container-prototype.firebaseio.com",
          projectId: "rails-container-prototype",
          storageBucket: "rails-container-prototype.appspot.com",
          messagingSenderId: "902276587803",
          appId: "1:902276587803:web:97def297c35af3fc1373be"
        },
        services: {
          auth: true
        },
        onFirebaseHosting: true
      }
    ]
  ],
  axios: {
    baseURL: process.env.NODE_ENV == 'production' ? 'https://railsproto-uiqhtbcbda-an.a.run.app' : 'http://localhost:3000'
  },
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
    babel: {
      "compact": false
    }
  }
}
