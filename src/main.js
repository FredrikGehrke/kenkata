import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth"

Vue.config.productionTip = false;

require('dotenv').config();

// Firebase
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
export const auth = firebase.auth();

// Google Maps
import * as VueGoogleMaps from "vue2-google-maps";
Vue.use(VueGoogleMaps, {
  load: { key: "AIzaSyDVXJwv8zy48DJx1C3Oj9tssruQODoil4Q" }
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");




  // AOS INIT
  AOS.init();

  // Enables tooltip
  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })


  /// Add a review Form START //
  function ValidateName() {
    let letters = /^[A-Za-z]+$/;
    if (
      $("#name").val().length < 20 &&
      $("#name").val().length > 2 &&
      $("#name").val().match(letters)
    ) {
      $("#name").removeClass("is-invalid");
      $("#name").addClass("is-valid");
      return true;
    } else {
      document.getElementById("CannotMsgName").innerHTML =
        "This field must be less than 20 characters, more than 2 characters and only have letters!";
      $("#name").addClass("is-invalid");
      $("#name").focus();
      return false;
    }
  }

  function ValidateReview() {
    if ($("#reviewText").val() === "") {
      $("#reviewText").addClass("is-invalid");
      $("#reviewText").focus();
    } else {
      $("#reviewText").removeClass("is-invalid");
      $("#reviewText").addClass("is-valid");
    }
  }

  function ValidateEmail() {
    let validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if ($("#email").val().match(validEmail)) {
      $("#email").removeClass("is-invalid");
      $("#email").addClass("is-valid");
      return true;
    } else {
      $("#email").addClass("is-invalid");
      $("#email").focus();
      return false;
    }
  }

  function ValidateForm() {
    if (
      ValidateReview() === true &&
      ValidateName() === true &&
      ValidateEmail() === true
    ) {
      document.getElementById("SubmittedMsg").innerHTML =
        "Your review has been submitted, thank you!";
    } else {
    }
  }

  $("#reviewForm").submit((e) => {
    e.preventDefault();

    // ValidateForm()
    ValidateName();
    ValidateReview();
    ValidateEmail();
    ValidateEmail();
  });
  /// Add a review Form END //