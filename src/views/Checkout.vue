<template>
<div class="container">
  <yourOrder />
</div>
  
</template>

<script>
import yourOrder from "@/components/checkout/yourOrder.vue";

export default {
    name: 'Checkout',
    components: {
        yourOrder
    }
}
</script>

<style>

</style>