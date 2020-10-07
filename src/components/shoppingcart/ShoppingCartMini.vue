<template>
  <div class="background">
    <shoppingCartMiniProduct v-for="item in shoppingCart" :key="item.product.id" :item="item" />

    <div class="cart-item">
      <div
        v-if="shoppingCart.length < 1"
        class="p-2 d-flex justify-content-center align-items-center"
      >
        <div class="d-flex align-items-center">Your cart is empty</div>
      </div>
      <div class="dropdown-divider"></div>
    </div>

    <div class="p-2 d-flex justify-content-between align-items-center">
      <div>
        <div class="total-price">
          Total:
          <span class="ml-1">{{ shoppingCartTotal }}&nbsp; kr</span>
        </div>
        <small class="text-muted">including VAT</small>
      </div>
      <router-link to="/shoppingcart" class="btn checkout-btn" tag="button" v-on:click.stop>GO TO CART</router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import shoppingCartMiniProduct from "./ShoppingCartMiniProduct";

export default {
  name: "ShoppingCartMini",
  components: {
    shoppingCartMiniProduct,
  },
  computed: {
    ...mapGetters(["shoppingCart", "shoppingCartTotal"]),
  },
};
</script>

<style scoped>
.background {
  background: #36333311;
}

.checkout-btn {
  background-color: var(--ownBlue);
  border-radius: 25px;
  height: 50px;
  width: 30%;
  color: #fff;
}

.total-price {
  font-size: 1.1em;
}
</style>