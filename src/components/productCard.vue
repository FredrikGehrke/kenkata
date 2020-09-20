<template>
  <div class="owl-item">
    <div class="card rounded-top position-relative">
      <span class="rounded-circle padding bg-primary text-white position-absolute mark">New</span>
      <img src="../assets/guy1.png" class="card-img-top img-fluid" alt="..." />
      <div class="buttons position-absolute d-flex flex-column p-2 rounded-pill align-items-center">
        <a
          href="#"
          data-placement="left"
          data-html="true"
          data-toggle="tooltip"
          title="<i class='fas fa-circle circle-green mr-1'></i><i class='fas fa-circle circle-purple mr-1'></i><i class='fas fa-circle circle-red mr-1'></i><i class='fas fa-circle circle-black'></i>"
        >
          <i class="fas fa-circle red mt-2"></i>
        </a>
        <i class="far fa-heart py-1 pt-2 grey"></i>
        <i class="fas fa-random py-1 grey"></i>
        <i class="fas fa-search py-1 grey"></i>
        <a href="#" data-toggle="tooltip" data-placement="left" title="Add to cart">
          <i class="fas fa-shopping-cart py-1 grey"></i>
        </a>
      </div>

      <div class="card-bodyy pl-3 pt-2 rounded-bottom position-absolute">
        <div class="card-text text-white">
          <p class="pb-4">Blue silk flare sleeved top</p>
          <!-- <p class="mt-1 border d-inline-block px-2 small">Fashion</p> -->
          <!-- <tag :text="'Fashion'" /> -->
          <p class="small text-decoration-line-through">$220.00</p>
          <p class="my-blue-color font-weight-bold">$190.00</p>
          <starRating rating="3" class="starRating" />
        </div>
      </div>
      <div class="card-body position-absolute"></div>
    </div>
  </div>
</template>

<script>
import starRating from "@/components/starRating.vue";
export default {
  components: {
    starRating,
  },
};
</script>

<style lang="scss" scoped>
.grey {
  color: #aaaaaa;
}
.red {
  color: #fe6c6c;
}
.text-decoration-line-through {
  text-decoration: line-through;
}

.padding {
  padding: 1em 0.8em;
}
.card {
  overflow: hidden;
  border: none;
  .starRating {
    position: absolute;
    right: 20px;
    bottom: 20px;
  }
  &:hover {
    .card-body {
      opacity: 0.8;
      transform: translateY(0);
    }
    .buttons {
      opacity: 1;
    }
    .mark {
      opacity: 0;
    }
    .card-bodyy {
      background: none;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 10;
      transform: translateY(0);
    }
  }
}

.card-body {
  background: #0e153d;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transform: translateY(100%);
  transition: all 0.5s ease;
}
.card-bodyy {
  background: #0e153d;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;
  transform: translateY(75%);
  transition: all 0.5s ease;
}
.mark {
  top: 20px;
  left: 20px;
  transition: all 0.4s ease;
}
.card-text {
  transition: all 0.5s ease;
}
.buttons {
  top: 10px;
  right: 10px;
  background: #fff;
  z-index: 20;
  opacity: 0;
  transition: all 0.5s ease 0.2s;

  i {
    cursor: pointer;
  }
}
.font-weight-bold {
  font-size: 1.2em;
}
</style>