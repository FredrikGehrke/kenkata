<template>
  <router-link
    :to="{name: 'product id', params: {id: product.id}}"
    class="card rounded-top position-relative"
  >
    <span
      v-if="product.badge[0]"
      class="rounded-circle badge-size bg-danger text-white position-absolute mark d-flex justify-content-center align-items-center"
    >{{product.badge[0]}}</span>
    <span
      v-if="product.badge[1]"
      class="rounded-circle badge-size bg-success margin-topp-badge-2 text-white position-absolute mark d-flex justify-content-center align-items-center"
    >{{product.badge[1]}}</span>
    <img :src="product.img" class="card-img-top img-fluid" alt="..." />

    <div class="buttons position-absolute d-flex flex-column p-2 rounded-pill align-items-center">
      <a
        href="#"
        data-placement="left"
        data-html="true"
        data-toggle="tooltip"
        title="<i class='fas fa-circle circle-green mr-1'></i><i class='fas fa-circle circle-purple mr-1'></i><i class='fas fa-circle circle-red mr-1'></i><i class='fas fa-circle circle-black'></i>"
      >
        <i class="fas fa-circle red mt-2"></i>
      </a>
      <i class="far fa-heart py-1 pt-2 grey"></i>
      <i class="fas fa-random py-1 grey"></i>
      <i class="fas fa-search py-1 grey"></i>
      <a
        v-on:click.prevent="addProduct"
        data-toggle="tooltip"
        data-placement="left"
        title="Add to cart"
      >
        <i class="fas fa-shopping-cart py-1 grey"></i>
      </a>
    </div>

    <div class="card-bodyy pl-3 pt-2 rounded-bottom position-absolute">
      <div class="card-text text-white">
        <p class="pb-4">{{ product.short }}</p>
        <!-- <p class="mt-1 border d-inline-block px-2 small">Fashion</p> -->
        <!-- <tag :text="'Fashion'" /> -->
        <p v-if="product.sale.price" class="small text-decoration-line-through">{{product.price}}:-</p>
        <p v-if="product.sale.price" class="my-blue-color font-weight-bold">{{product.sale.price}}:-</p>
        <p
          v-if="!product.sale.price"
          class="my-blue-color padding-bottom-fix font-weight-bold"
        >{{product.price}}:-</p>
        <starRating :rewiews="product.rewiews" class="starRating" />
      </div>
    </div>
    <div class="card-body position-absolute"></div>
  </router-link>
</template>

<script>
import starRating from "@/components/starRating.vue";
import { mapActions, mapGetters } from 'vuex'

export default {
  props: { product: Object },
  components: {
    starRating,
  },
  methods: {
    addProduct: function () {
      this.$store.dispatch("addProductToCart", {
        product: this.product,
        quantity: 1,
      });
    },
  },
  // ...mapActions(['getProductById']),
  // created() { 
  //   this.getProductById(this.id)
  // },
  // computed: {
  //     ...mapGetters(['product']) 
  // }
};
</script>

<style lang="scss" scoped>
.grey {
  color: #aaaaaa;
}
.red {
  color: #fe6c6c;
}
.text-decoration-line-through {
  text-decoration: line-through;
}

.badge-size {
  height: 48px;
  width: 48px;
}
.card {
  overflow: hidden;
  border: none;
  .starRating {
    position: absolute;
    right: 20px;
    bottom: 20px;
  }
  .padding-bottom-fix {
    padding-bottom: 36px;
  }
  .margin-topp-badge-2 {
    margin-top: 56px;
  }
  &:hover {
    .card-body {
      opacity: 0.8;
      transform: translateY(0);
    }
    .buttons {
      opacity: 1;
    }
    .mark {
      opacity: 0;
    }
    .card-bodyy {
      background: none;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 10;
      transform: translateY(0);
    }
  }
}

.card-body {
  background: #0e153d;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transform: translateY(100%);
  transition: all 0.5s ease;
}
.card-bodyy {
  background: #0e153d;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;
  transform: translateY(75%);
  transition: all 0.5s ease;
}
.mark {
  top: 20px;
  left: 20px;
  transition: all 0.4s ease;
}
.card-text {
  transition: all 0.5s ease;
}
.buttons {
  top: 10px;
  right: 10px;
  background: #fff;
  z-index: 20;
  opacity: 0;
  transition: all 0.5s ease 0.2s;

  i {
    cursor: pointer;
  }
}
.font-weight-bold {
  font-size: 1.2em;
}
</style>