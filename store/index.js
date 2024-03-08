// import axios from "axios";
// export const state = () => ({
//   userToken: null,
//     user: null,
// })

// export const mutations = {
//   setUserToken(state, userToken) {
//     state.userToken = userToken;
//     localStorage.setItem('userToken', JSON.stringify(userToken));
//     axios.defaults.headers.common.Authorization = `Bearer ${userToken}`

// },

//   setUser(state, user) {
//     state.user = user
//     // localStorage.setItem('user', JSON.stringify(user));

// },

//   logout(state) {
//       state.userToken = null;
//       state.user = null;
//       localStorage.removeItem('userToken');

//       window.location.pathname = "/"
//   },
// }

// export const actions = {
//   LoginUser({ commit }, payload) {
//         return new Promise((resolve, reject) => {

//           axios.post('http://127.0.0.1:8000/api/auth/login', {
//                     email: payload.email,
//                     password: payload.password,
//                     token :payload.token
//                   })
//               .then(res => {
//                   commit('setUserToken', res.data.access_token),
//                   commit('setUser', res.data.user)
//                   resolve(res);
//               // this.$router.push("/dashboard")
//               })
//               .catch(err => {
//                 reject(err);
//               })
//             });
//       },
// }

// export const getters = {
//   isLogged(state) {
//     return  !!state.userToken;
// },
// isAdmin(state) {
//     if (state.user) {
//         return state.user.type === 'admin'
//     }
//     return null
// },

// isWriter(state) {
//   if (state.user) {
//       return state.user.type === 'writer'
//   }
//   return null
// },
// isUser(state){
// if (state.user) {
//   return state.user.type === 'user';
// }
// return null
// },
// isAdminOrWriter(state){
// if (state.user) {
// // return this.user.type === 'user';
// return state.user.type === 'admin' || state.user.type === 'writer'
// }
// return null

// },
// get_user(state) {
//   return this.$auth.user
// }
// }









// import Vue from "vue";
// import Vuex from "vuex";
// import VuexPersistence from "vuex-persist";
// // import createPersistedState from "vuex-persistedstate";
// import axios from "axios";

// Vue.use(Vuex);



// const createStore = () => {

//   return new Vuex.Store({
//     state: {
//       userToken: null,
//       user: null,
//       // EditedPost: {}
//   },
//   plugins: [new VuexPersistence().plugin],
//     mutations: {
//       setUserToken(state, userToken) {
//         state.userToken = userToken;
//         localStorage.setItem('userToken', JSON.stringify(userToken));
//         axios.defaults.headers.common.Authorization = `Bearer ${userToken}`
//     },
//       removeUserToken(state) {

//           state.userToken = null;
//           localStorage.removeItem('userToken')
//       },
//       setUser(state, user) {
//         state.user = user
//     },

//       logout(state) {
//           state.userToken = null;
//           state.user = null;
//           localStorage.removeItem('userToken');
//           window.location.pathname = "/admin"
//       },



//   },
//   actions: {

//     RegisterUser({ commit }, payload) {
//       return new Promise((resolve, reject) => {

//         axios.post('http://127.0.0.1:8000/api/auth/register', payload)
//             .then(res => {
//                 console.log(res)
//                 commit('setUserToken', res.data.access_token)
//                 commit('setUser', res.data.user)
//                 resolve(res);

//             })
//             .catch(err => {
//               reject(err);

//             })

//       });
//     },
//     LoginUser({ commit }, payload) {
//       return new Promise((resolve, reject) => {

//         axios.post('http://127.0.0.1:8000/api/auth/login', {
//                   email: payload.email,
//                   password: payload.password,
//                   token :payload.token
//                 })
//             .then(res => {
//                 console.log(res)
//                 commit('setUserToken', res.data.access_token),
//                 //  commit('setUser', res.data.user)
//                 // axios.get('http://127.0.0.1:8000/api/me')
//                 // .then(res => {
//                 //     //console.log(res.data)
//                 //     commit('setUser', res.data.user)
//                 // })

//                 commit('setUser', res.data.user)

//                 resolve(res);
//             // this.$router.push("/dashboard")

//             })
//             .catch(err => {
//               reject(err);

//             })


//           });
//     },



//     updateUserProfileAction({ commit, state }, payload) {
//       return new Promise((resolve, reject) => {
//         axios
//           .put("http://127.0.0.1:8000/api/auth/profile", {
//             name: payload.name,
//             email: payload.email,
//             token: state.userToken,
//             password:payload.password,
//             image:payload.image,
//             about:payload.about,
//             facebook :payload.facebook,
//             twitter:payload.twitter,
//             ins: payload.ins
//           })
//           .then(res => {
//             commit('setUser', res.data.user)

//             resolve(res);
//           })
//           .catch(err => {
//             reject(err);
//           });
//       });
//     }

//   },

//     getters: { //center
//       isLogged(state) {
//           return !!state.userToken;
//       },
//       isAdmin(state) {
//           if (state.user) {
//               return state.user.type === 'admin'
//           }
//           return null
//       },

//       isWriter(state) {
//         if (state.user) {
//             return state.user.type === 'writer'
//         }
//         return null
//     },
//     isUser(state){
//       if (state.user) {
//         return state.user.type === 'user';
//     }
//     return null
//   },
//   isAdminOrWriter(state){
//     if (state.user) {
//       // return this.user.type === 'user';
//      return state.user.type === 'admin' || state.user.type === 'writer'
//   }
//   return null

//   },
//       get_user(state) {
//         return state.user;
//       }

//   },
//   });
// }



// export default createStore








