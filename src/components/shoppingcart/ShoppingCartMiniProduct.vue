<template>
  <div class="cart-item">
    <div class="p-2 d-flex justify-content-between align-items-center">
      <div class="d-flex align-items-center">
        <img :src="item.product.img" alt class="img-fluid image-width mr-4" />
        <div>
          <div>
            <strong>{{ item.product.short }}</strong>
          </div>
          <div class="d-flex">
            <div class="mr-md-5">
              <small
                v-if="item.product.sale.sale"
              >{{ item.quantity }} x {{ item.product.sale.price }} kr</small>
              <small v-if="!item.product.sale.sale">{{ item.quantity }} x {{ item.product.price }} kr</small>
            </div>
            <div class="ml-3">
              <small v-if="item.product.sale.sale">{{ item.quantity * item.product.sale.price }} kr</small>
              <small v-if="!item.product.sale.sale">{{ item.quantity * item.product.price }} kr</small>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="btn-group btn-group-sm mr-2" role="group" aria-label="Basic example">
          <button v-on:click.stop="remove1" type="button" class="btn btn-grey px-3">-</button>
          <button v-on:click.stop="add1" type="button" class="btn btn-grey px-3">+</button>
        </div>

        <div class="btn-group btn-group-sm" role="group" aria-label="trash">
          <button class="btn btn-danger px-3" v-on:click.stop="deleteProduct(item.product.id)">
            <i class="fas fa-trash"></i>
          </button>
        </div>
      </div>
    </div>
    <div class="dropdown-divider"></div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: { item: Object },
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

<style lang="scss" scoped>
img {
  width: 50px;
  height: 50px;
}

.btn-grey {
  background: rgb(54, 54, 54);
  color: white;
}

</style>

