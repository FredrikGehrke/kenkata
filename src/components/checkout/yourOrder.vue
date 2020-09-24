<template>
  <darkHeaderBox headline="Your order" class="col-md-6">
    <form id="checkout-yourorder-form" action="#" method="post">
      <table>
        <thead>
          <tr class="d-flex justify-content-between">
            <th class="highlight">PRODUCT</th>
            <th>SUBTOTAL</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in products" :key="product.id" class="d-flex justify-content-between">
            <td>{{ product.name }}</td>
            <td>${{ product.price.toFixed(2) }}</td>
          </tr>
          <tr class="highlight d-flex justify-content-between">
            <td>Subtotal</td>
            <td>${{ getSubtotal(products).toFixed(2) }}</td>
          </tr>
          <tr class="d-flex justify-content-between align-items-center">
            <td>Shipping</td>
            <td class="text-right">
              <div>
                <label class="form-control" for="shippimg-flat-rate">
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
                <label class="form-control" for="shipping-free-shipping">Free shipping</label>
                <input
                  type="radio"
                  name="shipping"
                  id="shipping-free-shipping"
                  value="free"
                  v-model="shipping"
                />
              </div>
              <div>
                <label class="form-control" for="localpickup">
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
            <td>${{ (shippingOptions[shipping] + getSubtotal(products)).toFixed(2) }}</td>
          </tr>
        </tfoot>
      </table>

      <div class="accordion" id="your-order-payment">
        <div class="card">
          <div class="card-header" id="direct-bank-transfer">
            <h2 class="mb-0">
              <button
                class="text-left"
                type="button"
                data-toggle="collapse"
                data-target="#directBankTransferDesc"
                aria-expanded="true"
                aria-controls="directBankTransferDesc"
              >
                <input type="radio" name="payment" id="payment-direct-bank-transfer" value="direct" />
                <label class="form-control" for="payment-direct-bank-transfer">Direct bank transfer</label>
              </button>
            </h2>
          </div>

          <div
            id="directBankTransferDesc"
            class="collapse show"
            aria-labelledby="direct-bank-transfer"
            data-parent="#accordionExample"
          >
          <div class="card-body">
            Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won’t be shipped until the funds have cleared in our account.</div>
          </div>
        </div>
        <div class="card">
          <div class="card-header" id="headingTwo">
            <h2 class="mb-0">
              <button
                class="text-left collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >Collapsible Group Item #2</button>
            </h2>
          </div>
          <div
            id="collapseTwo"
            class="collapse"
            aria-labelledby="headingTwo"
            data-parent="#accordionExample"
          >
            <div
              class="card-body"
            ></div>
          </div>
        </div>
        <div class="card">
          <div class="card-header" id="headingThree">
            <h2 class="mb-0">
              <button
                class="text-left collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >Collapsible Group Item #3</button>
            </h2>
          </div>
          <div
            id="collapseThree"
            class="collapse"
            aria-labelledby="headingThree"
            data-parent="#accordionExample"
          >
            <div class="card-body"></div>
          </div>
        </div>
      </div>

      <!-- <div>
          <a class="form-group" data-toggle="collapse" href="#payment-direct-bank-transfer-desc" role="button">
              <input type="radio" name="payment" id="direct-bank-transfer" value="direct">
              <label class="form-control" for="payment-direct-bank-transfer"></label>
          </a>
          <div id="payment-directBankTransferDesc">
              
          </div>
          <input type="radio" name="payment" id="checkpayment" value="directbanktransfer">
          <label class="form-control" for="payment-check-payment"></label>
          
      </div>-->
    </form>
  </darkHeaderBox>
</template>

<script>
import darkHeaderBox from "../darkHeaderBox.vue";

const getSubtotal = (products) => {
  let subtotal = 0;
  for (product of products) {
    subtotal += product.price;
  }
  return subtotal;
};

export default {
  components: {
    darkHeaderBox,
  },
  props: ["products"],
  methods: {
    getSubtotal,
  },
  data: {
    shippingOptions: {
      free: 0,
      flatrate: 20.0,
      pickup: 25.0,
    },
  },
};
</script>

<style scoped>
tr {
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
  padding: 1.1875rem 0.5rem;
}
</style>