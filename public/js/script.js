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


    // $('[data-toggle="tooltip"]').tooltip()
    $('div').tooltip();

    $('.fa-shopping-cart').data('tooltip-custom-class', 'tooltip-danger').tooltip();

    $(document).on('inserted.bs.tooltip', function(e) {
        var tooltip = $(e.target).data('bs.tooltip');
        $(tooltip.tip).addClass($(e.target).data('tooltip-custom-class'));
    });

})