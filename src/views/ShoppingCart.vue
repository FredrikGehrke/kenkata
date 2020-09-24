<template>
  <div
    class="wrapper container d-flex justify-content-xl-between justify-content-center flex-wrap flex-md-nowrap"
  >
    <div class="product-list-wrapper">
      <div class="headlines product d-flex">
        <div class="delete-product-headline d-none d-xl-block"></div>
        <h6 class="img-box-header m-0 mb-1">Product</h6>
        <p class="m-0 margin-box"></p>
        <h6 class="price m-0 mb-1 mr-4 ml-xl-3 mr-xl-3">Price</h6>

        <h6 class="m-0 ml-2 ml-xl-4 mr-xl-3">Quantity</h6>

        <h6 class="sub-total-num m-0 ml-4 mr-xl-3 mr-2 d-flex">Subtotal</h6>
      </div>
      <div class="product-box">
        <!-- products from here -->
        <ShoppingCartProduct v-for="item in shoppingCart" :key="item.product.id" :item="item" />
      </div>

      <div
        class="d-flex coupon-and-updatecart-wrapper justify-content-xl-between justify-content-center flex-wrap"
      >
        <!-- couponBox -->
        <couponBox v-on:onSubmit="onSubmit" class="mt-3" />
        <div class="mt-3 order-1 order-xl-2">
          <button class="btn updatecart-btn text-light special-btn">UPDATE CART</button>
        </div>
      </div>
    </div>
    <!-- Cart total box -->
    <div class="cart-totals-wrapper mt-5 mt-md-0 ml-0 ml-md-5">
      <div class="text-center blue-box">
        <h4 class="p-2 m-0 turquoise-text">CART TOTAL</h4>
      </div>
      <div class="summary-text-wrapper px-4">
        <div class="d-flex justify-content-between gray-border-bottom">
          <p class="font-weight-bold">Subtotal</p>
          <p class="turquoise-text">$910.00</p>
        </div>
        <div class="d-flex justify-content-between gray-border-bottom">
          <div :style="{marginTop: '30px'}" class="d-flex align-items-center font-weight-bold">
            <p>Shipping</p>
          </div>
          <div class="text-right">
            <div class>
              <div class="d-flex justify-content-end mt-3">
                <p class="mr-1">Flat rate:</p>
                <p class="turquoise-text mr-3">20.00$</p>
                <div>
                  <input
                    type="radio"
                    name="Flat rate"
                    value="Flat rate: 20 $"
                    v-model="shippingMethod"
                  />
                </div>
              </div>

              <div class="d-flex justify-content-end">
                <p class="mr-3">Free shipping</p>
                <div>
                  <input
                    type="radio"
                    name="Free shipping"
                    value="Free shipping: 0 $"
                    v-model="shippingMethod"
                  />
                </div>
              </div>
              <div class="d-flex justify-content-end">
                <p class="mr-1">Local pickup:</p>
                <p class="turquoise-text mr-3">$25.00</p>
                <div>
                  <input
                    type="radio"
                    name="Local pickup"
                    value="Local pickup: 25 $"
                    v-model="shippingMethod"
                  />
                </div>
              </div>

              <div>
                <div>
                  <div class="d-flex justify-content-end">
                    <p class="inline mr-1 m-0">Shipping to</p>
                    <p class="gray-text m-0">AL</p>
                  </div>

                  <p>Change adress</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-4 d-flex justify-content-between">
          <h6 class="font-weight-bold">TOTAL</h6>
          <h6 class="turquoise-text font-weight-bold">930.00&nbsp;kr</h6>
        </div>
        <div class="d-flex justify-content-center">
          <button class="btn checkout-btn mt-2 special-btn">PROCEED TO CHECKOUT</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import couponBox from "@/components/couponBox.vue";
import ShoppingCartProduct from "@/components/ShoppingCartProduct.vue";
import { mapGetters } from "vuex";
export default {
  name: "shoppingCart",
  components: {
    couponBox,
    ShoppingCartProduct,
  },
  data() {
    return {
      cart: [],
      couponCode: "",
      shippingMethod: "",
    };
  },
  methods: {
    onSubmit: function (enteredCoupon) {
      this.couponCode = enteredCoupon;
      console.log(this.couponCode);
      console.log(this.shippingMethod);
    },
  },
  computed: {
    ...mapGetters(["shoppingCart", "shoppingCartTotal"]),
  },
};
</script>

<style lang="scss" scooped>
.wrapper {
  margin-top: 9vh;
  .turquoise-text {
    color: var(--ownBlue);
  }
  .gray-text {
    color: #aaaaaa;
  }
  .gray-border-bottom {
    border-bottom: solid 1px #e3e3e3;
  }
  .special-btn:hover {
    background-color: var(--btnHover) !important;
  }
  .product-list-wrapper {
    width: 350px;
    height: auto;
    .headlines {
      border-bottom: 1px solid var(--ownBlue);
    }
    .product {
      &:nth-last-child(2) {
        border-bottom: none;
      }
      font-size: 14px;
      .delete-product {
        font-size: 20px;
        width: 30px;
        color: var(--ownLightGray);
      }
      .img-box-header {
        width: 65px;
      }
      .img-box {
        width: 65px;
        height: 65px;
        background-color: #eeeeee;
      }
      .name {
        width: 100px;
      }
      .margin-box {
        width: 67px;
      }
      .price {
        width: 40px;
      }
      .sub-total-num {
        width: 50px;
      }
      .quantity-buttons {
        .btn {
          border: solid 1px #aaaaaa;
          width: 30px;
          &:hover {
            background-color: var(--ownBlue);
          }
        }
        .minus {
          border-radius: 6px 0 0 6px;
        }
        .plus {
          border-radius: 0 6px 6px 0;
        }
        .quantity-number {
          width: 28px;
          border: solid 1px #aaaaaa;
          border-left: 0;
          border-right: 0;
          height: 38px;
        }
      }
      .sub-total {
        font-weight: 500;
      }
    }
    .coupon-and-updatecart-wrapper {
      .updatecart-btn {
        background-color: var(--darkerBlue);
        border-radius: 30px;
        height: 50px;
        width: 178px;
      }
    }
  }

  @media (min-width: 1200px) {
    .product-list-wrapper {
      width: 685px;
      .product-box {
        overflow: scroll;
        overflow-x: hidden;
        height: 420px;
        border-bottom: 1px solid var(--ownBlue);
      }
      .product {
        font-size: 16px;
      }
      .product {
        .delete-product-headline {
          width: 70px;
        }
        .delete-product {
          width: 50px;
        }
        .margin-box {
          width: 278px;
        }
        .name {
          width: 250px;
        }
        .price {
          width: 40px;
        }
        .sub-total-num {
          width: 50px;
        }
      }
    }
  }

  .cart-totals-wrapper {
    height: 445px;
    width: 350px;
    min-width: 350px;
    border: 2px dashed var(--darkerBlue);
    position: relative;
    border-radius: 5px;
    margin-top: 2px;
    .blue-box {
      background-color: var(--darkerBlue);
      position: absolute;
      border-radius: 5px 5px 0 0;
      left: -2px;
      top: -2px;
      width: 350px;
    }
    .summary-text-wrapper {
      margin-top: 70px;
      input[type="radio"]:after {
        width: 17px;
        height: 17px;
        border-radius: 50%;
        top: -2px;
        left: -1px;
        position: relative;
        background-color: #fff;
        content: "";
        display: inline-block;
        border: 2px solid #d1d3d1;
      }

      input[type="radio"]:checked:after {
        width: 17px;
        height: 17px;
        border-radius: 50%;
        top: -2px;
        left: -1px;
        position: relative;
        background-color: var(--ownBlue);
        content: "";
        display: inline-block;
      }
      .checkout-btn {
        background-color: var(--ownBlue);
        border-radius: 25px;
        width: 100%;
        height: 50px;
        color: #fff;
      }
    }
  }
}
</style>
