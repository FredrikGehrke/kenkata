<template>
  <div v-on:mouseleave="onHover = false" class="item hej bg-grey mx-auto">
    <router-link :to="{name: 'product', params: {id: product.id }}">
    <div v-on:mouseenter="onHover = true" class="">
      <img class="rounded" :src="product.img" alt="" width="267.33px" />
    </div>

    <div
      :class="{ displayBlock: onHover, displayNone: !onHover }"
      class="my-show white pl-3 position-absolute"
    >
      <div class="d-flex">
        <div class="my-mt-box mr-auto">
          <p class="mb-2">{{ product.short }}</p>
          <!-- <p class="border pl-2 my-width-p">Fashion</p> -->
          <p class="mt-1 border d-inline-block px-2 small">{{ product.type }}</p>
          <div v-if="!product.sale.sale" class="own-mt"></div>
          <p v-if="product.sale.sale" class="line-through mb-2">
            {{ product.price }}kr
          </p>
          <h4 v-if="product.sale.sale" class="my-blue-color">
            {{ product.sale.price }}kr
          </h4>
          <h4 v-if="!product.sale.sale" class="my-blue-color">
            {{ product.price }}kr
          </h4>
        </div>
        <div class="mr-4 mt-4 white-bg">
          <i class="fas fa-circle bigger-red mt-2 d-flex"></i>
          <i class="far fa-heart bigger mt-2 grey d-flex"></i>
          <i class="fas fa-random bigger mt-2 grey d-flex"></i>
          <i class="fas fa-search bigger mt-2 grey d-flex"></i>
          <a
            class="cart-icon"
            v-on:click.prevent="addProduct"
            href="#"
            data-toggle="tooltip"
            data-placement="left"
            title="Add to cart"
          >
            <i class="fas fa-shopping-cart mt-2 grey bigger"></i>
          </a>
        </div>
      </div>
    </div>
    <p class="bgCBlue">{{ product.short }}</p>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "mainShopProduct",
  props: {
    product: Object,
  },
  data() {
    return {
      onHover: false,
    };
  },
  methods: {
    addProduct: function () {
      this.$store.dispatch("addProductToCart", {
        product: this.product,
        quantity: 1,
      });
    },
  },
};
</script>

<style scoped>
.my-show {
  background-color: #0e153de5;
  position: absolute;
  top: 0;
  height: 307px;
  width: 100%;
}
.my-show:hover {
  height: 307px;
}
.displayBlock {
  display: block;
}
.displayNone {
  display: none;
}
.badge-size {
  height: 40px;
  width: 40px;
}
.my-mt-box {
  margin-top: 10rem;
}

.own-mt {
  margin-top: 2rem;
}
</style>