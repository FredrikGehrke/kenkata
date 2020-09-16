<template>
<div class="owl-item">
  <div class="card rounded-top position-relative">
    <span class="rounded-circle padding bg-primary text-white position-absolute mark">New</span>
    <img src="../assets/guy1.png" class="card-img-top img-fluid" alt="...">
    <div class="buttons position-absolute d-flex flex-column p-3 rounded-pill align-items-center">
      <i class="fas fa-circle bigger-red mt-2 d-flex"></i>
      <i class="far fa-heart py-1 pt-2"></i>
      <i class="fas fa-random py-1"></i>
      <i class="fas fa-search py-1"></i>
      <i class="fas fa-cart-arrow-down py-1"></i>
    </div>

  <div class="card-bodyy pl-3 pt-2 rounded-bottom position-absolute">
    
    <div class="card-text text-white">
      <p>Blue silk flare sleeved top</p>
      <!-- <p class="mt-1 border d-inline-block px-2 small">Fashion</p> -->
      <!-- <tag :text="'Fashion'" /> -->
      <p class="small text-decoration-line-through">$220.00</p>
      <p class="text-primary font-weight-bold">$190.00</p>
    </div>
  </div>
  <div class="card-body position-absolute">

  </div>
</div>
</div>
</template>

<script>
// import tag from './tag'
export default {
  components: {
    // tag
  }
}
</script>

<style lang="scss" scoped>
.padding {
  padding: 1em 0.8em ;
}
  .card {
    overflow: hidden;
    border: none;

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
        .card-bodyy{
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
    background: #0E153D;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      transform: translateY(100%);
      transition: all 0.5s ease;
  }
  .card-bodyy{
    background: #0E153D;
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