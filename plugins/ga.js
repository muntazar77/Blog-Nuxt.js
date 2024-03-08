/* eslint-disable */

export default ({ app }) => {
  /*
   ** Only run on client-side and only in production mode
   */
  if (process.env.NODE_ENV === 'production' )
    return /*
     ** Include Google Analytics Script
     */
  ;(function (i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r
    ;(i[r] =
      i[r] ||
      function () {
        ;(i[r].q = i[r].q || []).push(arguments)
      }),
      (i[r].l = 1 * new Date())
    ;(a = s.createElement(o)), (m = s.getElementsByTagName(o)[0])
    a.async = 1
    a.src = g
    m.parentNode.insertBefore(a, m)
  })(
    window,
    document,
    'script',
    'https://www.google-analytics.com/analytics.js',
    'ga'
  )
  /*
   ** Set the current page
   */
  ga('create', 'UA-108465917-1', 'auto')
  /*
   ** Every time the route changes (fired on initialization too)
   */
  app.router.afterEach((to, from) => {
    /*
     ** We tell Google Analytics to add a `pageview`
     */
    ga('set', 'page', to.fullPath)
    ga('send', 'pageview')
  })
}
// import Vue from "vue";
// import VueAnalytics from '@nuxtjs/google-analytics'



// Vue.use(VueAnalytics, {
//   id: 'UA-108465917-1',
//   router,
//   autoTracking: {
//     screenview: true
//   },

// })

// import Vue from 'vue'
// import VueAnalytics from '@nuxtjs/google-analytics'
// // import VueAnalytics from 'vue-analytics'
// import router from "~/router.js";



// Vue.use(VueAnalytics, {
//   id: 'UA-108465917-1',
//   // router,
//   autoTracking: {
//     screenview: true
//   },
// })
