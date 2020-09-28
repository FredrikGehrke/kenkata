<template>
  <div>
    <div class="bg-blue">
      <div class="container">
        <div class="pt-5 pb-5 text-white d-flex align-items-center justify-content-between">
          <div class="my-blue-color">
            <p class="mb-0">
              My Account
            </p>
          </div>
          <div>
            <span class="my-blue-color">Home </span>
            <span class="text-white">/ My Account</span>
          </div>
        </div>
      </div>

    </div>
        <div class="d-flex justify-content-center mt-5 pt-5">
          <div class="container row">
            <log />
            <reg />
        </div>
      </div>
  </div>
</template>

<script>
import log from "@/components/myAccount/log.vue";
import reg from "@/components/myAccount/Register.vue";

export default {
  name: "My Account",
  components: {
    log,
    reg,
  },
};
</script>

<style scoped> 
.bg-blue {
    background: #0E153D !important;
}
.white{
    background: white;
    padding: 10px 20px 10px 20px;
    border-radius: 6px;
}

</style>