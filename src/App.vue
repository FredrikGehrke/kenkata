<template>
    <div>
      
      <navbar />

      <router-view />

      <myFooter/>

    </div>

</template>

<script>

import navbar from '@/components/navbar.vue'
import myFooter from '@/components/footer.vue'
import { mapActions } from 'vuex'

export default {
  name: 'App',
  components: {
    navbar,
    myFooter
  },
  methods: {
    ...mapActions(['getProducts'])
  },
  created() {
    this.getProducts();
  }

}
</script>


<style>

  :root {
    --ownOrange: #FFBB00;
    --ownBlue: #20D3C2; 
    --darkerBlue: #0E153D; 
    --btnHover: #098d80; 
    --ownGray: #333333;
    --ownLightGray: #8A8A8A;  
  }

  button {
    outline: 0 !important;
  }

  .my-blue-color {
    color: var(--ownBlue) !important;
  }

  .my-blue {
    background-color: #20D3C2;
  }

  * {
    font-family: 'Roboto', sans-serif;
  }

  .Roboto {
    font-family: 'Roboto', sans-serif;
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

  .tooltip-inner {
    background-color: var(--ownBlue);
    text-align: center;
    border-radius: .25rem;
    letter-spacing: 1px;
  }

  .tooltip.show {
    opacity: 1 !important;
  }

  .owl-dots button.owl-dot span {
    border-radius: 4px !important;
    background: #E3E3E3 !important;
    padding: 6px;
  } .owl-dots button.owl-dot.active span {
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

  .bs-tooltip-auto[x-placement^=left] .arrow::before, .bs-tooltip-left .arrow::before {
    border-left-color: var(--ownBlue) !important;
  }

  .circle-green {
    color: #82D8C6;
  }
  .circle-purple {
    color: #CA82D8;
  }
  .circle-red {
    color: #FE6C6C;
  }
  .circle-black {
    color: black;
  }

</style>
