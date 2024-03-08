// export default function ({ store, redirect,route }) {
//   // If the user is authenticated redirect to home page
//   if (store.getters.isLogged) {
//     return redirect('/admin/dashboard')
//   }
//   //  else {
//   //   route.next()
//   // }

// }

export default function ({ store, redirect }) {
  // If the user is authenticated redirect to home page
  if (store.state.auth.loggedIn) {
    return redirect('/admin/dashboard')
  }
}
// else if (to.matched.some(record => record.meta.guest)) {
  // if (!store.getters.isLogged) {
  //   next();
  // } else {
  //   //console.log("no token");
  //   next({
  //     path: "/dashboard"
  //   });
  // }
// }
