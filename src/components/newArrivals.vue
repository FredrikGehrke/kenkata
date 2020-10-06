<template>
  <div>
    <div class="container pl-0 pr-0 pb-5">
      <div class="row">
        <div class="col-12">
          <div class="d-flex flex-row justify-content-center text-center">
            <h1 class="pr-2 font-weight-bold">
              NEW
              <span class="my-blue-color">ARRIVALS</span>
            </h1>
          </div>
          <div class="d-flex justify-content-center">
            <img src="../assets/wave.png" alt />
          </div>
          <div class="d-flex justify-content-center pt-3 text-center">
            <p>Check out our latest products from top fashion designers</p>
          </div>
        </div>
      </div>

      <carousel
        v-if="products.length"
        class="carousel mx-auto position-relative"
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
  mounted() {},
};
</script>

<style lang="scss">
.next {
  font-size: 2em;
  color: #e3e3e3;
  cursor: pointer;
  position: absolute;
  top: 35%;
  right: -55px;
  z-index: 10;
  &:hover {
    background-color: #20d3c2;
    color: #fff;
  }
}
.prev {
  font-size: 2em;
  color: #e3e3e3;
  cursor: pointer;
  position: absolute;
  top: 35%;
  left: -55px;
  z-index: 10;

  &:hover {
    background-color: #20d3c2;
    color: #fff;
  }
}
.new-box {
  background-color: var(--ownBlue);
  padding: 0.8rem 0.8rem 1.1rem 0.8rem;
  border-radius: 50px;
  position: absolute;
  top: 20px;
  left: 20px;
}

.pt-p {
  padding-top: 5px;
}

.white-bg {
  background-color: white;
  border-radius: 25px;
  padding: 10px;
  height: 48%;
}

.white-bg i:hover {
  color: var(--ownBlue);
}

.grey {
  color: #8f8f8f;
}

.bigger {
  font-size: 22px;
  font-weight: 100;
}
.bigger-red {
  font-size: 22px;
  color: red;
}

.line-through {
  text-decoration: line-through;
  font-size: 15px;
}

.my-width-p {
  width: 75px;
}

.my-mt-box {
  margin-top: 14rem;
}

.my-show {
  background-color: #0e153de5;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  display: none;
  position: absolute;
  top: 0;
  height: 112%;
  width: 100%;
}
/* hover */
.hover-me:hover + .my-show {
  display: block;
}
.hover-me:hover + .new-box {
  display: none;
}
.hover-me:hover + .new-box + .my-show {
  display: block;
}
.hover-me:hover + .new-box + .my-show + p {
  display: none;
}

.bg-grey {
  background-color: #eeeeee;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

.bgCBlue {
  background-color: #0e153d;
  padding: 0.5rem;
  padding-left: 1rem;
  color: white;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}
</style>
