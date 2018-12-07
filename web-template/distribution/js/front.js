$(function () {


    var swiper = new Swiper('#heroSlider', {
      slidesPerView: 'auto',
      centeredSlides: true,
      spaceBetween: 300,
      speed: 600,
      parallax: true,
       grabCursor: true,
          mousewheel: true,

       loop: true,
        keyboard: {
        enabled: true,
      },

      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        // type: 'progressbar',
      },
    });



// swiper-loop

 var swiper = new Swiper('.swiper-loop', {
    loop: true,
     autoplay: {delay: 1, },
    freeMode: true,
    speed: 3000,

      slidesPerView: 4,
      spaceBetween: 10,


    });

 $('.readmore').readmore({
      speed: 100,
      heightMargin: 16,
      embedCSS: true,
      collapsedHeight: 50,
      moreLink: '<a href="#" class="readmore-link">Read more </a>',
      lessLink: '<a href="#">Close</a>'
    });


    // =====================================================
    //      TV SHOWS SLIDER
    // =====================================================

    var swiper = new Swiper('.tv-shows-slider', {
        slidesPerView: 6,
        spaceBetween: 30,
        centeredSlides: true,
        loop: true,
        breakpoints: {
            991: {
               slidesPerView: 4
           },
           565: {
               slidesPerView: 3
           }
        },
    });



    // =====================================================
    //      FEEDS SLIDER
    // =====================================================

    var swiper = new Swiper('.testimonials-slider-1', {
        direction: 'vertical',
        loop: true,
        slidesPerView: 4,
    });

    var swiper = new Swiper('.testimonials-slider-2', {
        direction: 'vertical',
        slidesPerView: 4,
        loop: true
    });


});
