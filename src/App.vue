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
  mounted() {
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

  .owl-container {
    margin-left: 20px;
    margin-right: 20px;
  }

  .owl-theme button:focus, .owl-theme button.focus {
    outline: 0;
  }

  .owl-carousel .owl-nav button {
    height: 60px;
    width: 60px;
  }

  .owl-carousel .owl-nav button span {
    color: rgb(214, 214, 214);
  }

  /* PREV */
  .owl-carousel .owl-nav button.owl-prev {
    font-size: 38px;
    border-radius: 50px;
    border: 1px solid rgb(214, 214, 214);
    z-index: 100;
  }
  .owl-carousel .owl-nav button.owl-prev:hover {
    background-color: var(--ownBlue) !important;
    border: none !important;
  } .owl-carousel .owl-nav button.owl-prev:hover span {
    color: white !important;
  }

  /* NEXT */
  .owl-carousel .owl-nav button.owl-next {
    font-size: 38px;
    border-radius: 50px;
    border: 1px solid rgb(214, 214, 214);
    z-index: 100;
  }
  .owl-carousel .owl-nav button.owl-next:hover {
    background-color: var(--ownBlue) !important;
    border: none !important;
  } .owl-carousel .owl-nav button.owl-next:hover span {
    color: white !important;
  }

  .owl-dots button.owl-dot span {
    border-radius: 4px !important;
    color: blue !important;
    padding: 6px;
  }

  .owl-dots button.owl-dot.active span {
    background-color: var(--ownBlue) !important;
    color: blue !important;
  }


  /* TESTIMONIAL OWL2 */
  @media (min-width: 1200px) { 

    /* PREV */
    #owl2.owl-carousel .owl-nav button.owl-prev {
      position: absolute!important;
      top: 52% !important;
      left: -5rem !important;
    }

    /* NEXT */
    #owl2.owl-carousel .owl-nav button.owl-next {
      position: absolute !important;
      top: 52% !important;
      right: -5rem !important;
    }

  }

</style>
