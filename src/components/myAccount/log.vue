<template>
<div class="col-12 col-lg-6">
  <div class="pb-5 bg-white">
    <form class="px-4 pt-4">
      <h1>Login</h1>
      <div class="form-group">
        <label>Username or email </label><a style="color:#20d3c2">*</a>
        <input type="email" class="form-control" />
      </div>
      <div class="form-group">
        <label>Password </label><a style="color:#20d3c2">*</a>
        <input type="password" class="form-control" />
      </div>
      <button type="submit" class="btn btn-primary">LOG IN</button>
      <div class="container mt-4 mb-3">
        <div class="d-flex justify-content-between">
          <div>
            <input
              type="checkbox"
              class="from-check-input"
              id="dropdownCheck"
            />
            <label class="from-check-label ml-2" for="dropdownCheck"
              >Remember me</label
            >
          </div>
          <a class="" href="#" style="color: #20d3c2"
            >Lost your password?</a>
          
        </div>
        <div class="d-flex justify-content-between">
          <hr />
          <p>OR LOGIN WITH</p>
          <hr />
        </div>
        <div class="justify-content-between d-flex">
          <button type="button" class="egen-klass" style="background-color: #3b5998">
            Facebook
          </button>

          <button type="button" class="egen-klass">Google</button>
    
        </div>
      </div>
    </form>
  </div>
  </div>
</template>
<script>
export default {

};
</script>
<style scoped>
.bg-white {
  background-color: #f6f6f6 !important;
  border: none;
}
h1 {
  font-size: 24;
}

hr {
  width: 150px;
  color: #aaaaaa;
  font-weight: 200;
}
.btn {
  font-size: 18px;
  border: none;
  border-radius: 20px;
  width: 100%;
  background-color: #20d3c2;
}
.text-muted {
  color: #20d3c2;
}
.egen-klass {
  background-color: #4285f4;
  font-size: 18px;
  color: white;
  border: none;
  border-radius: 5px;
  height: 40px;
  width: 48%;
}
p {
  font: Roboto 24px sold;
}


</style>
