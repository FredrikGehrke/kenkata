$(document).ready(function () {
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
});
