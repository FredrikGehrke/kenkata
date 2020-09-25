<template>
  <div class="bg-blue">
    <div class="container">
      <div class="pt-5 pb-5 text-white d-flex align-items-center justify-content-between">
        <div class="my-blue-color">
          <p class="mb-0">
            Home
            <span class="text-white">/</span> Shop
            <span class="text-white">/</span> Shoes
            <span class="text-white">/ Gents Blue Lightweight Trainers</span>
          </p>
        </div>
         <p class="mb-0">My Account</p>
      </div>
    </div>

    <div class="d-flex justify-content-center">
      <div class="container row">

            <log />
          
          
            <reg />
  
     </div>
    </div>
  </div>
</template>

<script>
import log from "@/components/my account/log.vue";
import reg from "@/components/my account/Register.vue";

export default {
  name: "My Account",
  components: {
    log,
    reg,
  },
};
</script>

<style> 
.bg-blue {
    background: #0E153D;
}
.white{
    background: white;
    padding: 10px 20px 10px 20px;
    border-radius: 6px;
}

</style>