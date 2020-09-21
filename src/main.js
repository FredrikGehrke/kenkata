import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import firebase from "firebase/app";
import "firebase/firestore";

Vue.config.productionTip = false;

var firebaseConfig = {
  apiKey: "AIzaSyBXDlte8Lsft4B9iqFmjF9i-aI_PtYdS8o",
  authDomain: "kenkata-12f9b.firebaseapp.com",
  databaseURL: "https://kenkata-12f9b.firebaseio.com",
  projectId: "kenkata-12f9b",
  storageBucket: "kenkata-12f9b.appspot.com",
  messagingSenderId: "758378941761",
  appId: "1:758378941761:web:094b7a278839b05664e5c0",
  measurementId: "G-K0TESCX8VV",
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
