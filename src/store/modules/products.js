import { db } from '../../main'

export default {
  state: {
    products: null
  },
  getters: {
    products: state => state.products,
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
      console.log(products)
      commit('SET_PRODUCTS', products)
    }
  }
}