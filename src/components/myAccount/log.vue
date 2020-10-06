<template>
  <div class="col-12 col-lg-6">
    <div class="bg-white">
      <form class="px-4 pt-4">
        <h1>Login</h1>
        <div class="form-group">
          <label>Email </label><a style="color:#20d3c2">*</a>
          <input type="email" class="form-control" v-model="email" />
        </div>
        <div class="form-group">
          <label>Password </label><a style="color:#20d3c2">*</a>
          <input type="password" class="form-control" v-model="password" />
        </div>
        <button type="submit" class="btn btn-primary" @click.prevent="login">LOG IN</button>
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
  </div>
</template>
<script>
import { auth } from '../../main';
export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login() {
      auth.signInWithEmailAndPassword(this.email, this.password).then(() => {
        this.email = ''
        this.password = ''
      })
    }
  }
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
