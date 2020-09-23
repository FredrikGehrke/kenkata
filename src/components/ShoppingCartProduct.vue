<template>
  <div
    class="product d-flex align-items-center justify-content-between gray-border-bottom pb-2 mt-3"
  >
    <i tag="button" v-on:click="deleteProduct" class="delete-product fas fa-times-circle"></i>
    <div class="img-box rounded d-none d-xl-block">
      <img class="img-fluid" :src="item.product.img" alt="Product image" />
    </div>
    <p class="m-0 ml-1 name">{{item.product.short}}kr</p>
    <p v-if="!item.product.sale.sale" class="price m-0 price">{{item.product.price}}kr</p>
    <p v-if="item.product.sale.sale" class="price m-0 price">{{item.product.sale.price}}kr</p>
    <div class="quantity-buttons d-flex align-items-center mx-4">
      <button
        v-on:click="remove1"
        class="btn minus d-flex align-items-center justify-content-center"
      >-</button>
      <div
        class="quantity-number d-flex align-items-center justify-content-center"
      >{{item.quantity}}</div>
      <button v-on:click="add1" class="btn plus d-flex align-items-center justify-content-center">+</button>
    </div>
    <p
      class="sub-total-num turquoise-text m-0 d-flex justify-content-end"
      v-if="item.product.sale.sale"
    >{{ item.quantity * item.product.sale.price }}kr</p>
    <p
      class="sub-total-num turquoise-text m-0 d-flex justify-content-end"
      v-if="!item.product.sale.sale"
    >{{ item.quantity * item.product.price }}kr</p>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: {
    item: Object,
  },
  methods: {
    ...mapActions(["deleteProductFromCart", "adjustQuantity"]),
    add1: function () {
      console.log(this.item.product.id);
      this.adjustQuantity({
        id: this.item.product.id,
        adjustment: "+1",
      });
    },
    remove1: function () {
      this.adjustQuantity({
        id: this.item.product.id,
        adjustment: "-1",
      });
    },
    deleteProduct: function () {
      this.adjustQuantity({
        id: this.item.product.id,
        adjustment: "deleteAl",
      });
    },
  },
};
</script>

<style>
</style>