<template>
  <div v-html="stars" class="m-3"></div>
</template>

<script>
export default {
  props: {rating: Number},
  data() {
    return {
      template: "",
    };
  },
  computed: {
    stars: function() {
      let i = 0;
      while (i < this.rating) {
        let newStars = `<img src="/img/starRating/starSolidIcon.svg" alt="star" />`;
        this.template = this.template + newStars;
        i++;
      }
      let outlinedStars = 5 - this.rating;
      i = 0;
      while (i < outlinedStars) {
        let newOutlinedStars = `<img src="/img/starRating/starOutlineIcon.svg" alt="star" />`;
        this.template = this.template + newOutlinedStars;
        i++;
      }
      return this.template;
    },
  },
};
</script>

<style lang="scss"></style>
