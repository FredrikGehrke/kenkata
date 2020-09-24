<template>
  <div>
    <navbar />

    <router-view />

    <myFooter />
  </div>
</template>

<script>
import navbar from "@/components/navbar.vue";
import myFooter from "@/components/footer.vue";
import { mapActions } from "vuex";

export default {
  name: "App",
  components: {
    navbar,
    myFooter,
  },
  methods: {
    ...mapActions(["getProducts"]),
  },
  created() {
    this.getProducts();
  },
};
</script>

<style>
:root {
  --ownOrange: #ffbb00;
  --ownBlue: #20d3c2;
  --darkerBlue: #0e153d;
  --btnHover: #098d80;
  --ownGray: #333333;
  --ownLightGray: #8a8a8a;
}

button {
  outline: 0 !important;
}

.my-blue-color {
  color: var(--ownBlue) !important;
}

.my-blue {
  background-color: #20d3c2;
}

* {
  font-family: "Roboto", sans-serif;
}

.Roboto {
  font-family: "Roboto", sans-serif;
}

.WHITE-BTN {
  background-color: white;
  border-radius: 30px;
  padding: 8px 20px 8px 20px;
}

.WHITE-BTN:hover {
  background-color: var(--ownBlue) !important;
  color: white !important;
}

.tooltip.bs-tooltip-left .arrow:before {
  border-right-color: var(--ownBlue) !important;
}

.tooltip-inner {
  background-color: var(--ownBlue);
  text-align: center;
  border-radius: 0.25rem;
  letter-spacing: 1px;
}

.tooltip.show {
  opacity: 1 !important;
}

.owl-dots button.owl-dot span {
  border-radius: 4px !important;
  background: #e3e3e3 !important;
  padding: 6px;
}
.owl-dots button.owl-dot.active span {
  background-color: var(--ownBlue) !important;
}

/* .tooltip-cart .tooltip-inner {
    background-color: var(--ownBlue) !important;
    text-align: center;
    border-radius: .25rem;
    letter-spacing: 1px;
  }
  .tooltip-circle .tooltip-inner {
    background-color: white !important;
    text-align: center;
    border-radius: .25rem;
    letter-spacing: 1px;
  } */

.bs-tooltip-auto[x-placement^="left"] .arrow::before,
.bs-tooltip-left .arrow::before {
  border-left-color: var(--ownBlue) !important;
}

.circle-green {
  color: #82d8c6;
}
.circle-purple {
  color: #ca82d8;
}
.circle-red {
  color: #fe6c6c;
}
.circle-black {
  color: black;
}

.item {
  position: relative;
}
</style>
