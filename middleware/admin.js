
  // export default function ({ store, redirect}) {
  //   if (!store.getters.isLogged ||!store.getters.isAdmin) {
  //     //console.log("this.$auth.loggedIn");
  //     return redirect('/admin')
  //   }
  // }
export default function ({ store, redirect }) {
  // If the user is not authenticated
  if (!store.state.auth.loggedIn ||!store.state.auth.user.type === 'admin') {
    return redirect('/admin')
  }
}

// export default function ({ store, redirect }) {
//   // If the user is not authenticated
//   if (!store.state.auth.loggedIn ||store.auth.user.type === 'admin') {
//     return redirect('/admin')
//   }
// }
