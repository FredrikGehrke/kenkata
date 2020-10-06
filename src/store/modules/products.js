import { db } from '../../main'

export default {
  state: {
    products: [],
    product: {},
  },
  getters: {
    products: state => state.products,
    product: state => state.product,
  },
  mutations: {
    SET_PRODUCTS : (state, products) => {
      state.products = products
      sessionStorage.setItem('products', state.product)
    },
    SET_PRODUCT_BYID(state, product) {
      console.log(product)
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
      // Detta blir id för dokumentet inte för produkten tror jag.
      let product = await db.collection("products").doc(id).get();
      commit('SET_PRODUCT_BYID', product.data())

    }
  }
}