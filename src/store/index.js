import Vue from 'vue'
import Vuex from 'vuex'
import { db } from '../main'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: []
  },
  getters: {
    
  },
  mutations: {
    SET_PRODUCTS : (state, products) => {
      state.products = products
    }
  },
  actions: {
    getProducts: async ({commit}) => {
      let snapshot = await db.collection("products").get();
      let products = [];
      snapshot.forEach(doc => {
        let product = doc.data();
        product.id = doc.id;
        products.push(product);
      })
      commit('SET_PRODUCTS', products)
    }
  },
  modules: {
  }
})
