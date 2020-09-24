<template>
  <darkHeaderBox headline="Your order" class="col-md-6">
    <form id="checkout-yourorder-form" action="#" method="post">
      <!-- start product info -->
      <table class="d-flex flex-column">
        <thead>
          <tr class="d-flex justify-content-between">
            <th class="highlight">PRODUCT</th>
            <th>SUBTOTAL</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="product in shoppingCart"
            :key="product.id"
            class="d-flex justify-content-between"
          >
            <td>{{ product.name }}</td>
            <td>${{ product.price.toFixed(2) }}</td>
          </tr>
          <tr class="highlight d-flex justify-content-between">
            <td>Subtotal</td>
            <td>${{ shoppingCartTotal }}</td>
          </tr>
          <tr class="d-flex justify-content-between align-items-center">
            <td>Shipping</td>
            <td class="text-right">
              <div class>
                <label for="shippimg-flat-rate">
                  Flat rate:
                  <span class="highlight">$20.00</span>
                </label>
                <input
                  type="radio"
                  name="shipping"
                  id="shippimg-flat-rate"
                  value="flatrate"
                  v-model="shipping"
                />
              </div>
              <div>
                <label for="shipping-free-shipping">Free shipping</label>
                <input
                  type="radio"
                  name="shipping"
                  id="shipping-free-shipping"
                  value="free"
                  v-model="shipping"
                />
              </div>
              <div>
                <label for="localpickup">
                  Local pickup:
                  <span class="highlight">$25.00</span>
                </label>
                <input
                  type="radio"
                  name="shipping"
                  id="localpickup"
                  value="pickup"
                  v-model="shipping"
                />
              </div>
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr class="d-flex justify-content-between">
            <td>TOTAL</td>
            <td>$shipping options</td>
          </tr>
        </tfoot>
      </table>
      <!-- end product info -->

      <!-- start payment -->
      <div class="accordion" id="accordionPayment">
        <div class>
          <div class id="direct-bank-transfer">
            <h2 class="mb-0">
              <div
                class="p-0 btn btn-block text-left"
                data-toggle="collapse"
                data-target="#directBankTransferDesc"
                aria-expanded="true"
                aria-controls="directBankTransferDesc"
                data-parent="#accordionPayment"
              >
                <input type="radio" name="payment" id="payment-direct-bank-transfer" value="direct" />
                <label for="payment-direct-bank-transfer">Direct bank transfer</label>
              </div>
            </h2>
          </div>

          <div
            id="directBankTransferDesc"
            class="collapse show"
            aria-labelledby="direct-bank-transfer"
            data-parent="#accordionPayment"
          >
            <div class="dark-text-bubble">
              <div>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won’t be shipped until the funds have cleared in our account.</div>
            </div>
          </div>
        </div>

        <div class>
          <div class id="headingCheck">
            <h2 class="mb-0">
              <div
                class="p-0 btn btn-block text-left collapsed"
                data-toggle="collapse"
                data-target="#collapseCheck"
                aria-expanded="false"
                aria-controls="collapseCheck"
              >
                <input type="radio" name="payment" id="payment-check-payment" value="check" />
                <label for="payment-check-payment">Check Payment</label>
              </div>
            </h2>
          </div>
          <div
            id="collapseCheck"
            class="collapse"
            aria-labelledby="headingCheck"
            data-parent="#accordionPayment"
          >
            <div class="dark-text-bubble">
              <div>
                <!-- description here -->
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima harum dolorem aliquam soluta impedit sequi quas rerum saepe. Odio voluptate nam, libero a unde dolorum assumenda iusto ipsa!
              </div>
            </div>
          </div>
        </div>
        <div class>
          <div class id="headingOnDelivery">
            <h2 class="mb-0">
              <div
                class="p-0 btn btn-block text-left collapsed"
                data-toggle="collapse"
                data-target="#collapseOnDelivery"
                aria-expanded="false"
                aria-controls="collapseOnDelivery"
              >
                <input type="radio" name="payment" id="payment-cash-on-delivery" value="delivery" />
                <label for="payment-cash-on-delivery">Cash on delivery</label>
              </div>
            </h2>
          </div>
          <div
            id="collapseOnDelivery"
            class="collapse"
            aria-labelledby="headingPaypal"
            data-parent="#accordionPayment"
          >
            <div class="dark-text-bubble">
              <div>
                <!-- description here -->
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ipsum eaque cupiditate perferendis, amet repudiandae possimus magni deserunt totam perspiciatis. Atque ducimus natus est quasi, sunt illo consequuntur.
              </div>
            </div>
          </div>
        </div>
        <div class>
          <div class id="headingPaypal">
            <h2 class="mb-0">
              <div
                class="p-0 btn btn-block text-left collapsed"
                data-toggle="collapse"
                data-target="#collapsePaypal"
                aria-expanded="false"
                aria-controls="collapsePaypal"
              >
                <input type="radio" name="payment" id="payment-paypal" value="paypal" />
                <label for="payment-paypal">
                  PayPal
                  <img class="inline-logo" src="@/assets/PayPal logo.png" alt="PayPal" />
                  <span class="what-is">What is PayPal?</span>
                </label>
              </div>
            </h2>
          </div>
          <div
            id="collapsePaypal"
            class="collapse"
            aria-labelledby="headingPaypal"
            data-parent="#accordionPayment"
          >
            <div class="dark-text-bubble">
              <div>
                <!-- description here -->
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quasi cumque error dolores iusto perferendis, tempora inventore dolorum quisquam deleniti nostrum dignissimos fugit dolore nihil? Quibusdam, aspernatur neque.
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- end payment -->

      <div class="legal-blurb">
        Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our
        <a
          href="#"
        >privacy policy.</a>
      </div>

      <!-- start accept & submit -->
      <label for="accept-privacy-policy" class="accept">
        <!-- <label for="accept-privacy-policy"> -->
          <input type="checkbox" name="accept-privacy-policy" id="accept-privacy-policy" required />
        <!-- </label> -->
        <span>
          I have read and agree to the website
          <a href="#">terms and conditions *</a>
        </span>
      </label>

      <button type="submit" class="btn btn-block">PLACE ORDER</button>
      <!-- end accept & submit -->
    </form>
  </darkHeaderBox>
</template>

<script>
import { mapGetters } from "vuex";
import darkHeaderBox from "../darkHeaderBox.vue";

export default {
  components: {
    darkHeaderBox,
  },
  // methods: {
  //   getSubtotal: (products) => {
  //   let subtotal = 0;
  //   for (product of products) {
  //     subtotal += product.price;
  //   }
  //   return subtotal;
  //   }
  // },
  computed: {
    ...mapGetters(["shoppingCart", "shoppingCartTotal"]),
  },
  data() {
    return {
      shippingOptions: {
        free: 0,
        flatrate: 20.0,
        pickup: 25.0,
      },
      shipping: "",
    };
  },
};
</script>

<style scoped>
tr,
.accordion,
.legal-blurb {
  border-bottom: 1px solid #e3e3e3;
  padding-top: 0.8125rem;
  padding-bottom: 1rem;
}

tfoot tr {
  border-bottom-color: var(--ownBlue);
  color: var(--ownBlue);
  font-size: 1.125em;
  font-weight: bold;
}

label {
  padding-right: 0.5rem;
  padding-left: 0.5rem;
  margin: 0;
  transition: margin 0.1s ease-in;
}
.collapsed label {
  margin: 0.6rem 0rem;
}

.what-is {
  color: #777777;
  font-size: 0.875em;
}

.dark-text-bubble div {
  background-color: var(--darkerBlue);
  margin: 0;
  margin-top: -1rem;
  margin-bottom: 1rem;
  padding: 1rem;
  color: white;
  border-radius: 4px;
}
.dark-text-bubble::before {
  content: "";
  box-sizing: border-box;
  position: relative;
  bottom: 1.25rem;
  left: 1.9rem;
  width: 0;
  height: 0;

  border-style: solid;
  border-width: 0.5rem;
  border-color: transparent;
  border-bottom-color: var(--darkerBlue);
}

.inline-logo {
  display: inline-block;
  margin-right: 0.7em;
  margin-left: 0.7em;
}

button {
  background-color: var(--ownBlue);
  color: white;
  font-size: 1.125rem;
  font-weight: 500;
  border-radius: 1.7rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
}

a {
  color: var(--ownBlue);
}

.accept {
  padding-top: 1.1875rem;
  padding-bottom: 1.625rem;
  padding-right: 0;
  padding-left: 0;
}
/* .accept input {
  visibility: hidden;
}
.accept input:checked {

}
.accept label{
  border: 1px solid var(--darkerBlue);
  border-radius: 4px;
  height: 0.9em;
  width: 0.01em;
} */

</style>