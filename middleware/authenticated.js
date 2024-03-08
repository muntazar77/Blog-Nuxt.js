



export default function ({ store, redirect }) {
  // If the user is not authenticated
  if (store.state.userToken === null) {
    return redirect('/admin')
  }
}




// export default ({ app, store   }) => {
//   // Every time the route changes (fired on initialization too)
//   app.router.beforeEach(async (to, from , next) => {
//       console.log('reening')
//       // const isAuthenticated= this.$store.getters.isLogged
//       if (to.matched.some(record => record.meta.secure)) {
//         // if no token
//         if (!store.getters.isLogged) {
//           //console.log("no token");
//           next('/admin');
//         } else {
//           next();
//         }
//       }
//       else if (to.matched.some(record => record.meta.guest)) {
//         if (!store.getters.isLogged) {
//           next();
//         } else {
//           //console.log("no token");
//           next('/admin/dashboard');
//         }
//       }
//       else if (to.matched.some(record => record.meta.admin)) {
//         // if no token
//         if (!store.getters.isLogged ||!store.getters.isAdmin) {
//           //console.log("no token");
//           next('/admin');
//         } else {
//           next();
//         }
//       }
//        else {
//         next();
//       }

//   })
// }




