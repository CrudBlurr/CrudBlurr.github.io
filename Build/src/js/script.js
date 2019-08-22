//$(document).ready(function(){
// $('.carousel__slider').slick({
//      speed: 1200,
//      prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',
//      nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"></button>',
//      responsive: [
//          {
//              breakpoint: 992,
//              settings: {
//                  dots: true,
//                  arrows: false
//              }
//          }
//      ]
//  });});
$(document).ready(function(){
    $('.slider').slick({
        speed: 1200,
        fade: true,
        autoplay: true,
        autoplaySpeed: 3000,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/right.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    dots: true,
                    arrows: false
                }
            }
        ]
    });
});