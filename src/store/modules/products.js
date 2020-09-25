import { db } from '../../main'

export default {
  state: {
    products: null,
    product: null,

  },
  getters: {
    products: state => state.products,
    product: state => state.product,
  },
  mutations: {
    SET_PRODUCTS : (state, products) => {
      state.products = products
    },
    SET_PRODUCT_BYID(state, product) {
      state.product = product                                                                  
      sessionStorage.setItem('product', state.product)
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
    },
    getProductById: async ({commit}, id) =>  {
      let product = await db.collection("products").doc(id).get();
      // console.log(product.data())
      commit('SET_PRODUCT_BYID', product)

    }
  }
}