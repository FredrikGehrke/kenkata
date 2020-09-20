<template>
  <div>
    <div class="container pl-0 pr-0 pb-5">
      <div class="row">
        <div class="col-12">
          <div class="d-flex flex-row justify-content-center text-center">
            <h1 class="pr-2 font-weight-bold">
              NEW
              <span class="my-blue-color">ARRIVALS</span>
            </h1>
          </div>
          <div class="d-flex justify-content-center">
            <img src="../assets/wave.png" alt />
          </div>
          <div class="d-flex justify-content-center pt-3 text-center">
            <p>Check out our latest products from top fashion designers</p>
          </div>
        </div>
      </div>
      <div class="owl-container pt-3">
        <div class="owl-carousel owl-theme owl-loaded owl-drag">
          <div class="owl-stage-outer">
            <div class="owl-stage">
              <productCard />
              <productCard />
              <productCard />
              <productCard />
              <productCard />
              <productCard />
              <productCard />
              <productCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import productCard from "./productCard";
export default {
  components: {
    productCard,
  },
};
</script>

<style>
.new-box {
  background-color: var(--ownBlue);
  padding: 0.8rem 0.8rem 1.1rem 0.8rem;
  border-radius: 50px;
  position: absolute;
  top: 20px;
  left: 20px;
}

.pt-p {
  padding-top: 5px;
}

.white-bg {
  background-color: white;
  border-radius: 25px;
  padding: 10px;
  height: 48%;
}

.white-bg i:hover {
  color: var(--ownBlue);
}

.grey {
  color: #8f8f8f;
}

.bigger {
  font-size: 22px;
  font-weight: 100;
}
.bigger-red {
  font-size: 22px;
  color: red;
}

.line-through {
  text-decoration: line-through;
  font-size: 15px;
}

.my-width-p {
  width: 75px;
}

.item {
  position: relative;
}

.my-mt-box {
  margin-top: 14rem;
}

.my-show {
  background-color: #0e153de5;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  display: none;
  position: absolute;
  top: 0;
  height: 112%;
  width: 100%;
}
/* hover */
.hover-me:hover + .my-show {
  display: block;
}
.hover-me:hover + .new-box {
  display: none;
}
.hover-me:hover + .new-box + .my-show {
  display: block;
}
.hover-me:hover + .new-box + .my-show + p {
  display: none;
}

.bg-grey {
  background-color: #eeeeee;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

.bgCBlue {
  background-color: #0e153d;
  padding: 0.5rem;
  padding-left: 1rem;
  color: white;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}

@media (min-width: 1200px) {
  /* PREV */
  .owl-carousel .owl-nav button.owl-prev {
    position: absolute;
    top: 32%;
    left: -5rem;
  }

  /* NEXT */
  .owl-carousel .owl-nav button.owl-next {
    position: absolute;
    top: 32%;
    right: -5rem;
  }
}
</style>