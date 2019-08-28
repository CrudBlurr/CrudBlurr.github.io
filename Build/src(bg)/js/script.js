window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.navbar__menu'),
    menuItem = document.querySelectorAll('.navbar__block'),
    hamburger = document.querySelector('.humburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('humburger_active');
        menu.classList.toggle('navbar__menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('humburger_active');
            menu.classList.toggle('navbar__menu_active');
        })
    })
})

$(document).ready(function(){
    $('.slider').slick({
        speed: 1200,
        fade: true,
        autoplaySpeed: 3000,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',
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
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
      });
      $('.slider-nav').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        speed: 1200,
        infinite: true,
        asNavFor: '.slider-for',
        focusOnSelect: true,
        autoplaySpeed: 3000,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',
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
      
    // Modal
    $('.modal__close').on('click', function() {
        $('.overlay, #consultation , #thanks , #order').fadeOut('slow');
    });
    $('.form-modal').on('click', function() {
        $('.overlay, #consultation').fadeIn('slow');
    });

    function validateForms(form){
        $(form).validate({
            rules: {
                name : {
                    required: true,
                    minlength: 2
                },
                phone: "required"
            },
            messages: {
                name: {
                    required: "Пожалуйста, введите свое имя",
                    minlength: jQuery.validator.format("Допустимое количество символов более {0}!")
                },
                phone: "Пожалуйста, введите свой номер телефона",
            }
        });
    };
    
    validateForms('#consultation-form');
    validateForms('#consultation-price');

    $('input[name=phone]').mask("+7(999) 999-9999");

    $('form').submit(function(e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $('#consultation').fadeOut();
            $('.overlay, #thanks').fadeIn('slow');

            $('form').trigger('reset');
        });
        return false;
    });
    // pageup
    $(window).scroll(function(){
        if($(this).scrollTop() >1000) {
            $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut();
        }
    });
    $(window).scroll(function(){
        if($(this).scrollTop() >590) {
            $('.humburger').fadeIn();
        } else {
            $('.humburger').fadeOut();
        }
    });
    $("a[href='#up']" ).click(function(){
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"}, 1500);
        return false;
    });
    $("a[href='#form']" ).click(function(){
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"}, 1500);
        return false;
    });

    $("#menu").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();

        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),

        //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
        
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
    });

    var sticky = new Sticky('.navbar');
 
});