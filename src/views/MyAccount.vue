<template>
    <div class="d-flex justify-content-center">
      <div class="container row">
        <log />
        <reg />
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
    reg
    
  },
};
</script>