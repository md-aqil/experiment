(function ($) {
    'use strict';
    var html_body = $('html, body');
    var $window = $(window);
    var $sOfset = 500;
    var totop = $('.totop');
    
     new WOW().init();
    
    
    /*--------------------------
	 banar slide active
	---------------------------- */
    // for back to top button
    $('.totop').on('click', function () {
        html_body.animate({
            scrollTop: 0
        }, 500);
    });

    //scrolling function
    $window.on('scroll', function () {

        var $scrolling = $(this).scrollTop();

        if ($scrolling > $sOfset) {
            totop.fadeIn();
        } else {
            totop.fadeOut();
        }
    });

    $(window).on('load', function () {

        // preloader 
        $('.preloader').fadeOut(1000);

    });

    $('.banar_slide_active').owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        navText: ["<i class='fa fa-angle-left' aria-hidden='true'></i>", "<i class='fa fa-angle-right' aria-hidden='true'></i>"],
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        autoplay: true,
        mouseDrag: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })

    // team slick - slider    
    $('.team_slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        centerMode: true,
        centerPadding: '0px',
        autoplay: false,
        autoplaySpeed: 1000,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    centerMode: false,
                    dots: false,
                    centerPadding: '0px',

                }
        },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 3,
                    infinite: true,
                    centerMode: false,
                    dots: false,
                    centerPadding: '0px',

                }
        },
            
            
            
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
        },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false,
                }
        }
      ]
    });

    // testimonial slick - slider 
    $('.client_feedback').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.client_main_img',
        dots: true,
        autoplay: true,
    });

    // client slick js activation
    $('.client_main_img').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.client_feedback',
        fade: true,
        arrows: false,
        focusOnSelect: true,
        autoplay: true,
    });


    //search form active
    $('a[href="#search"]').on('click', function (event) {
        event.preventDefault();
        $('#search').addClass('open');
    });

    $('#search, #search button.close').on('click keyup', function (event) {
        if (event.target == this || event.target.className == 'close' || event.keyCode == 27) {
            $(this).removeClass('open');
        }
    });
    // -------------------------------------------------------------
    // screenshot slider
    // -------------------------------------------------------------
    $(window).on('load',function(){
        var swiper = new Swiper('.swiper-container', {
        paginationClickable: true,
        effect: 'coverflow',
        loop: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        autoplay: true,
        speed: 2000,
        mousewheelControl: true,
        toplayDisableOnInteraction: false,
        coverflow: {
            rotate: 0,
            stretch: 150,
            modifier: 1,
            slideShadows: false
        },

    });     
    });
    
    /*--------------------------
	counter active
	---------------------------- */
    $('.count_num').counterUp({
        delay: 10,
        time: 3000
    })
    /*--------------------------
	 scroll spy active
	---------------------------- */
    //animation scroll js
    //a[href*="#"]:not([href="#"])
    var html_body = $('html, body');
    $('#scroll_spy_nav li a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 65
                }, 1000);
                return false;
            }
        }
    });

    // mobile menu
    $('#scroll_spy_nav li a').on('click', function () {
        $('.navbar-collapse').removeClass('in');

    });

    /*--------------------------
	 slide testmonial slide samll active
	---------------------------- */
    $('.slide_sm_active').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        navText: ["<i class='fa fa-angle-left' aria-hidden='true'></i>", "<i class='fa fa-angle-right' aria-hidden='true'></i>"],
        autoplay: false,
        mouseDrag: true,
        smartSpeed: 2000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })
    /* == video js == */

})(jQuery);
