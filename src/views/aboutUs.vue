<template>
  <div>
    <aboutHeader/>
    <aboutStatics/>
    <subscribe/>
  </div>  
</template>

<script>
import aboutHeader from '@/components/aboutHeader.vue'
import aboutStatics from '@/components/aboutStatics.vue'  
import subscribe from '@/components/subscribe.vue'

export default {
    name: "aboutUs",
    components: {
      aboutHeader,
      aboutStatics,
      subscribe,
  },
}
</script>

<style>

</style>