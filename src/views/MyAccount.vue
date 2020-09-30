<template>
  <div>
    <div class="bg-blue">
      <div class="container">
        <div class="pt-5 pb-5 text-white d-flex align-items-center justify-content-between">
          <div class="my-blue-color">
            <p class="mb-0">
              My Account
            </p>
          </div>
          <div>
            <span class="my-blue-color">Home </span>
            <span class="text-white">/ My Account</span>
          </div>
        </div>
      </div>

    </div>
        <div v-if="!user" class="d-flex justify-content-center mt-5 pt-5">
          <div class="container row">
            <log />
            <reg />
          </div>
        </div>
        <div v-else class="text-center mt-5">
          <button class="btn btn-primary col-6" @click="logout">Logout</button>
        </div>
  </div>
</template>

<script>
import log from "@/components/myAccount/log.vue";
import reg from "@/components/myAccount/Register.vue";
import { mapGetters } from 'vuex';
import { auth } from '../main';

export default {
  name: "MyAccount",
  components: {
    log,
    reg,
  },
  computed: {
    ...mapGetters(['user'])
  },
  methods: {
    logout: () => {
      auth.signOut()
    }
  }
};
</script>

<style scoped> 
.bg-blue {
    background: #0E153D !important;
}
.white{
    background: white;
    padding: 10px 20px 10px 20px;
    border-radius: 6px;
}

</style>