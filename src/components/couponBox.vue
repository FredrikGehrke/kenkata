<template>
  <div class="coupon-box-wrapper order-2 order-xl-1">
    <div class="coupon-input-box  d-flex flex-column align-items-center">
      <p class="mt-3">If you have a coupon code, please apply it below.</p>
      <div class="input-group d-flex align-items-center mt-2">
        <input type="text" v-model="couponCode" class="form-control border-0" placeholder="Coupon code" />
        <span class="input-group-btn">
          <button class="btn m-1 text-light special-btn" v-on:click="onSubmit" type="submit">Apply Coupon</button>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "couponBox",
  data() {
    return {
      couponCode: "",
    };
  },
  methods: {
    onSubmit: function(event) {
      this.$emit("onSubmit", this.couponCode);
      this.couponCode = "";
    },
  },
};
</script>

<style lang="scss">
.coupon-box-wrapper {
  height: 150px;
  width: 445px;
  border: 2px dashed #e3e3e3;
  .coupon-input-box {
    .input-group {
      width: 385px;
      border-radius: 25px;
      border: 1px solid #aaaaaa;
      input {
        border-radius: 25px 0 0 25px;
        &::placeholder {
          color: #aaaaaa;
          font-size: 14px;
        }
      }

      .btn {
        border-radius: 25px;
        background-color: var(--ownBlue);
      }
      .special-btn:hover {
        background-color: var(--btnHover) !important;
      }
    }
  }
}
@media (max-width: 1198px) {
  .coupon-box-wrapper {
    width: 350px;
    .coupon-input-box {
      font-size: 14px;
      .input-group {
        width: 330px;
      }
    }
  }
}
</style>
