<template>
  <div>
    <GmapMap :center="center" :map-type-id="mapTypeId" :zoom="14">
      <GmapMarker
        v-for="(item, index) in markers"
        :key="index"
        :position="item.position"
        @click="center = item.position"
      />
    </GmapMap>
  </div>
</template>

<script>
export default {
  data() {
    return {
      center: { lat: 59.610751, lng: 16.545166 },
      markers: [{ position: { lat: 59.610751, lng: 16.545166 } }],
    };
  },
};
</script>

<style lang="scss" scoped>
.vue-map-container {
  height: 624px;
  width: 100vw;
  max-width: 100%;
}
</style>