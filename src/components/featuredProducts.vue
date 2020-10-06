<template>
  <div>
    <div class="container pl-0 pr-0 pb-5">
      <div class="row">
        <div class="col-12">
          <div class="d-flex flex-row justify-content-center text-center">
            <h1 class="pr-2 font-weight-bold">
              FEATURED <span class="my-blue-color">PRODUCTS</span>
            </h1>
          </div>
          <div class="d-flex justify-content-center">
            <img src="@/assets/wave.png" alt="" />
          </div>
        </div>
      </div>
      <carousel
        v-if="products.length"
        class="carousel mx-auto position-relative mt-5 pt-3"
        :margin="15"
        :autoplay="true"
        :nav="false"
        :autoplayHoverPause="true"
        :responsive="{ 0: { items: 1 }, 768: { items: 3 } }"
      >
        <productCard
          class="w-auto"
          v-for="product in products"
          :key="product.id"
          :product="product"
        />

        <template slot="next">
          <span
            class="next position-absolute border px-3 rounded-circle d-none d-lg-block"
            ><i class="fas fa-angle-right"></i
          ></span>
        </template>
        <template slot="prev">
          <span
            class="prev position-absolute border px-3 rounded-circle d-none d-lg-block"
            ><i class="fas fa-angle-left"></i
          ></span>
        </template>
      </carousel>
    </div>
  </div>
</template>

<script>
import carousel from "vue-owl-carousel";
import { mapGetters } from "vuex";
import productCard from "./productCard";
export default {
  components: {
    carousel,
    productCard,
  },
  computed: {
    ...mapGetters(["products"]),
  },
};
</script>

<style>
</style>
