<template>

    <div>

      <newCustomer />

      <mainShop />

      <subscribe class="mt-5"/>

    </div>

</template>

<script>

import newCustomer from '@/components/shop/newCustomer.vue'
import subscribe from '@/components/subscribe.vue'
import mainShop from '@/components/shop/mainShop.vue'

export default {
  name: 'Shop',
  components: {
    newCustomer,
    mainShop,
    subscribe,
  }
}
</script>

<style scoped>



</style>