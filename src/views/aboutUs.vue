<template>
  <div>
    <aboutHeader/>
    <subscribe/>
  </div>  
</template>

<script>
import aboutHeader from '@/components/aboutHeader.vue'
import subscribe from '@/components/subscribe.vue'

export default {
    name: "aboutUs",
    components: {
      aboutHeader,
      subscribe,
  },
}
</script>

<style>

</style>