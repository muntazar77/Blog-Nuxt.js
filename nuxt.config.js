
export default {


  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: ' %s | مهد الحضارات',
    title: "dashboard",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'مهد الحضارات هو موقع عراقي مختص بالتاريخ العراقي القديم هو احد المواقع التاريخية في العراق' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/images/77.png' },

    //   {
    //     rel="stylesheet",
    //      href :"https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700"
    //  },
      {
        rel: 'stylesheet',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'
      },
      {
        rel: "stylesheet",
        href:
          "https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
      },
      //  {
      //   rel: 'stylesheet',
      //   href: 'https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.1/css/bulma.min.css'
      // }


    ],
    script: [
      // {
      //   // src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js'
      // },

      {
        src: "https://code.jquery.com/jquery-3.3.1.slim.min.js",
        type: "text/javascript"
      },
      {
        src:
          "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js",
        type: "text/javascript"
      },
      {
        src:
          "https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js",
        type: "text/javascript"
      },
      {
        src: '/js/bootstrap.bundle.min.js'
      },
      {
        src: '/vendors/js-cookie/js.cookie.js'
      },
      {
        src: '/js/owl.carousel.min.js'
      },

      {
        src: '/js/jquery.waypoints.min.js'
      },
      {
        src: '/js/argon.js?v=1.2.0'
      },
      {
        src: '/js/main.js'
      },

    ],
  },




  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '~/assets/css/argon.css',
     '~/assets/css/style.css',
     '~/assets/vendors/nucleo/css/nucleo.css'

  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    // { src: '~/plugins/router', ssr: false },

    { src: '~/plugins/vuex-persist', ssr: false },
    // { src: '~/plugins/vue2-editor',   ssr: false  },
    { src: "@/plugins/vue2-editor.js", ssr: false },

    {
      src: '~/plugins/sweetalert2.js',
      ssr: false
    },
    // { src: '~plugins/ga.js', mode: 'client' },
    { src: '~/plugins/ga.js', mode: 'client' },
    {src:'~/plugins/filters.js' },
    // '~/plugins/auth'
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  // components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // '@nuxtjs/google-analytics'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    // '@nuxt/content',
    '~/modules/routes.js',
    // 'nuxt-maintenance-mode'
  ],

  axios: {
    baseURL: 'http://127.0.0.1:8000/api'
  },
  // router: {middleware:'authenticated'},

  // googleAnalytics: {
  //   id: 'UA-108465917-1',
    // dev: false,
  // autoTracking : {
  //   screenview : true,
  //   pageviewOnLoad: false

  // autoTracking: {
  //   screenview: true
  // },
  // }
  //
  // },

  // وضع الصيانة
  // maintenance: {

  //   enabled: !!process.env.MAINTENANCE_MODE, // If given truthy value, activation maintenance mode on startup your nuxt application.
  //   // enabled: !!process.env.MAINTENANCE_MODE, // If given truthy value, activation maintenance mode on startup your nuxt application.
  //   path: '/about', // maintenance fallback content routing.
  //   matcher: /^\/admin/ // Path to be in maintenance mode (regex).
  // },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    // transpile: ['vuetify/lib', "tiptap-vuetify"]
    },

    auth: {
      redirect: { login: '/admin', logout: '/admin', callback: '/admin', home: '/' },
      strategies: {
        local: {
          endpoints: {
            login: { url: 'http://127.0.0.1:8000/api/auth/login', method: 'post', propertyName: 'access_token' },
            logout: { url: 'http://127.0.0.1:8000/api/auth/logout', method: 'post' },
            user:{ url: 'http://127.0.0.1:8000/api/auth/user', method: 'get', propertyName: false }
            //  { url: '/auth/me', method: 'get', propertyName: 'data' }
          },
          // tokenRequired: false,
          // tokenType: false
          // globalToken: true,
          // autoFetchUser: false
        },

      },

    },

  }

