export default {
  state: {
    cart: []
  },
  mutations: {
    ADD_PRODUCT_TO_CART(state, {product, quantity}) {
      
      let exists = state.cart.find(item => {
        return item.product.id === product.id;
      }) 
      
      if(exists) {
        exists.quantity += quantity;
        console.log(state.cart)
        return;
      }

      state.cart.push({product, quantity})
      console.log(state.cart)
      return
    }
  },
  actions: {
    addProductToCart({commit}, {product, quantity}) {
      commit("ADD_PRODUCT_TO_CART", {product, quantity})
    } 
  }
}