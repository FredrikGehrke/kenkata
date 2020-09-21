import Vue from 'vue'
import Vuex from 'vuex'
import { db } from '../main'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: null,
    product: null // ny
  },
  getters: {
    products: state => state.products,
    product: state => state.product // ny
  },
  mutations: {

    SET_PRODUCT_BYID(state, product) { // ny
      state.product = product                                                                  
      sessionStorage.setItem('product', state.product)
    },

    SET_PRODUCTS : (state, products) => {
      state.products = products
    }
  },
  actions: {

    getProductById: async ({commit}, id) =>  {     // ny
      let snapshot = await db.collection("products/" + id).get();       
      let product = [];
      snapshot.forEach(doc => {
        let product = doc.data();
        product.id = doc.id;
        product.push(product);
      })
      commit('SET_PRODUCT_BYID', product)
    },

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
