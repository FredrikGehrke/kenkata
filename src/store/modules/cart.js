export default {
  state: {
    cart: []
  },
  getters: {
    
    // shoppingCart: state => state.cart = JSON.parse(sessionStorage.getItem('cart')),
    shoppingCart: state => state.cart,
  
    shoppingCartTotal: state => {
      let totalAmount = 0;
      let price = 0;
      state.cart.forEach(item => {
        if (item.product.sale.sale) {
          price = item.product.sale.price
        } else {
          price = item.product.price
        }
        let sum = price * item.quantity;
        totalAmount += sum;
      })
      return totalAmount;
    },
    shoppingCartTotalNumberOfProducts: state => {
      let totalProducts = 0;
      state.cart.forEach(item => {
        totalProducts += item.quantity;
      })
      return totalProducts;
    }
  },
  mutations: {
    ADD_PRODUCT_TO_CART(state, {product, quantity}) {
      let exists = state.cart.find(item => {
      // Produkter kan ha allt lika, men de har olika id. Denna fungerar.
        return item.product.id === product.id;
      }) 
      if(exists) {
        exists.quantity += quantity;
        sessionStorage.setItem('cart', JSON.stringify(state.cart)) // Ny
        return;
      }

      state.cart.push({product, quantity})
      sessionStorage.setItem('cart', JSON.stringify(state.cart)) // Ny
      return
    },
    MAKE_QUANTITY_ADJUSTMENT(state, {id, adjustment}) {
      let productToAdjust = state.cart.find(item => {
        return item.product.id === id; 
      })
      
      if (adjustment === "+1") {
        productToAdjust.quantity ++
        sessionStorage.setItem('cart', JSON.stringify(state.cart)) // Ny

      } else if (adjustment === "-1") {
        productToAdjust.quantity --,
        sessionStorage.setItem('cart', JSON.stringify(state.cart)) // Ny

        if (productToAdjust.quantity <= 0) {
          state.cart = state.cart.filter(item => {
            return item.product.id !== id;
          });
        }

      } else {
        state.cart = state.cart.filter(item => {
          return item.product.id !== id;
          
        });
        
        sessionStorage.setItem('cart', JSON.stringify(state.cart)) // Ny
      }
    },
    CHECK_CART(state, cart) {
      state.cart = cart
    }
  },
  actions: {
    addProductToCart({commit}, {product, quantity}) {
      commit("ADD_PRODUCT_TO_CART", {product, quantity})
    },
    adjustQuantity({commit}, {id, adjustment}) {
      commit("MAKE_QUANTITY_ADJUSTMENT", {id, adjustment})
    },
    checkCart({commit}) {
      let _cart = JSON.parse(sessionStorage.getItem('cart'))
      if(_cart != null) {
        commit("CHECK_CART", _cart)
      }
    }
  }
}