<template>
  <div class="col-6 bg-white pb-5">
    <h1 class="pt-4">Register</h1>
    <p>
      Registering for this site allows you to access your order status and
      history. Just fill in the fields below, and we’ll get a new account set up
      for you in no time. We will only ask you for information necessary to make
      the purchase process faster and easier.
    </p>
    <form>
      <div class="form-group">
        <label for="exampleInputUsername or email ">Username or email </label><a   style="color:#20d3c2">*</a>
        <input
          type="Username or email "
          class="form-control"
          id="exampleInputUsername or email "
        />
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label><a style="color:#20d3c2">*</a>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label><a style="color:#20d3c2" >*</a>
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1"
        />
      </div>

      <p>
        Your personal data will be used to support your experience throughout
        this website, to manage access to your account, and for other purposes
        described in our<a style="color:#20d3c2" href=""> privacy policy.</a>
      </p>
      <button type="submit" class="btn btn-primary">REGISTER</button>
    </form>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.bg-white {
  background-color: #f6f6f6 !important;
}
.btn {
  font-size: 18px;
  border: none;
  border-radius: 20px;
  width: 100%;
  background-color: #20d3c2;
}
h1 {
  font-size: 24;
}

</style>