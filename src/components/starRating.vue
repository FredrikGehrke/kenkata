<template>
  <div v-html="stars" class="d-flex starRating"></div>
</template>

<script>
export default {
  props: { rewiews: Array },
  data() {
    return {
      template: "",
    };
  },
  computed: {
    stars: function () {
      if (this.rewiews) {
        let totalRatingValue = 0;
        let numberOfRatings = 0;

        this.rewiews.forEach((review) => {
          totalRatingValue = totalRatingValue + review.rating;
          numberOfRatings++;
        });

        const averageRatingValue = totalRatingValue / numberOfRatings;
        const rating = Math.round(averageRatingValue);

        let i = 0;
        while (i < rating) {
          let newStars = `<img src="/img/starRating/starSolidIcon.svg" alt="star" />`;
          this.template = this.template + newStars;
          i++;
        }
        let outlinedStars = 5 - rating;
        i = 0;
        while (i < outlinedStars) {
          let newOutlinedStars = `<img src="/img/starRating/starOutlineIcon.svg" alt="star" />`;
          this.template = this.template + newOutlinedStars;
          i++;
        }
        return this.template;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.starRating {
  width: 95px;
}
</style>
