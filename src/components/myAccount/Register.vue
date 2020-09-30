<template>
  <div class="col-12 col-lg-6 mt-4 mt-lg-0">
    <div class="bg-white px-5 pb-5">
      <h1 class="pt-4">Register</h1>
      <p>
        Registering for this site allows you to access your order status and
        history. Just fill in the fields below, and we’ll get a new account set up
        for you in no time. We will only ask you for information necessary to make
        the purchase process faster and easier.
      </p>
      <form  v-on:submit.prevent="registerUser">
        <div class="form-group">
          <label for="regEmail">Email </label><a   style="color:#20d3c2">*</a>
          <input
            v-model="email"
            type="email"
            class="form-control"
            id="regEmail"
          />
        </div>
        <div class="form-group">
          <label for="password">Password</label><a style="color:#20d3c2">*</a>
          <input
            v-model="password"
            type="password"
            class="form-control"
            id="password"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="form-group">
          <label for="confPassword">Confirm Password</label><a style="color:#20d3c2" >*</a>
          <input
            v-model="confPassword"
            type="password"
            class="form-control"
            id="confPassword"
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
  </div>
</template>
<script>
import { auth } from '../../main'
export default {
  data() {
    return {
      email: '',
      password: '',
      confPassword: ''
    }
  },
  methods: {
    registerUser() {
      let validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if(this.email !== '' && this.password !== '' && this.confPassword !== '') {
        if(this.email.match(validEmail)){
          if (this.password === this.confPassword) {
            if(this.password.length >= 6) {
              auth.createUserWithEmailAndPassword(this.email, this.password).then(() => {
                this.email = ''
                this.password = ''
                this.confPassword = ''
              })
            }else {
              alert('Password must me at least 6 characters long')
            }
              
          }else {
            alert('Passwords must match')
          }


        }else {
          alert('you have to enter a valid email') 
        }
      }else {
        alert('you must enter all fields')
      }
        
          
      }   
  }
};
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