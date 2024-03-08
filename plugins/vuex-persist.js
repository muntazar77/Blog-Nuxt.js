import VuexPersistence from 'vuex-persist'

export default ({ store }) => {
  new VuexPersistence({

    storage: window.localStorage
    // saveState:false
  }).plugin(store);
}
