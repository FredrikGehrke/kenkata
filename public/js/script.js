$(document).ready(function() {

    var owl2 = $('#owl2');
    owl2.owlCarousel({
        items: 1,
        loop: true,
        nav:true,
        margin: 50,
        autoplay: true,
        autoplayTimeout:3000,
        autoplayHoverPause:true
    })

    var owl3 = $('#owl3');
    owl3.owlCarousel({
        items: 1,
        loop: true,
        nav:true,
        margin: 50,
        autoplay: true,
        autoplayTimeout:3000,
        autoplayHoverPause:true
    })


    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:50,
        nav:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:3,
                margin:30,
            },
            1000:{
                items:3,
            }
        }
    })


    // AOS INIT
    AOS.init();

    // Enables tooltip
    $('[data-toggle="tooltip"]').tooltip()

    // $('.fa-shopping-cart').data('tooltip-custom-class', 'tooltip-cart').tooltip();
    // $('.fas fa-circle').data('tooltip-custom-class', 'tooltip-circle').tooltip();

    // $(document).on('inserted.bs.tooltip', function(e) {
    //     var tooltip = $(e.target).data('bs.tooltip');
    //     $(tooltip.tip).addClass($(e.target).data('tooltip-custom-class'));
    // });



    /// Add a review Form START //
    function ValidateName()
    {
        let letters = /^[A-Za-z]+$/;
        if (($('#name').val().length < 20 && $('#name').val().length > 2) && ($('#name').val().match(letters))) {
            $('#name').removeClass('is-invalid')
            $('#name').addClass('is-valid') 
            return (true);
        } else {                               
            document.getElementById("CannotMsgName").innerHTML = "This field must be less than 20 characters, more than 2 characters and only have letters!";
            $('#name').addClass('is-invalid')
            $('#name').focus();
            return (false);
        }
    }

    function ValidateReview()
    {
        if($('#reviewText').val() === '') {
            $('#reviewText').addClass('is-invalid'); 
            $('#reviewText').focus();
        } else {
            $('#reviewText').removeClass('is-invalid'); 
            $('#reviewText').addClass('is-valid'); 
        }
    }

    function ValidateEmail() 
    {
        let validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (($('#email').val().match(validEmail))) {
            $('#email').removeClass('is-invalid')
            $('#email').addClass('is-valid') 
            return (true)
        } else {
            $('#email').addClass('is-invalid')
            $('#email').focus();
            return (false)
        }
    }

    function ValidateForm()
    {
        if ((ValidateReview() === true) && (ValidateName() === true) && (ValidateEmail() === true)) {
            document.getElementById("SubmittedMsg").innerHTML = "Your review has been submitted, thank you!";
        } 
        else {}
    }

    $('#reviewForm').submit((e) => {
        e.preventDefault();

        // ValidateForm()
        ValidateName() 
        ValidateReview()
        ValidateEmail() 
        ValidateEmail() 
    });
    /// Add a review Form END //
    
})