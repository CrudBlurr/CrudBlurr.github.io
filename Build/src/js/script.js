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
    $('.multiple-slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        speed: 1200,
        infinite: true,
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
    // validateForms('#consultation form');
    // validateForms('#order form');
    $('input[name=phone]').mask("+7(999) 999-9999");

    // $('input[name=phone]').mask("+7(999) 999-9999");

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

    $("a[href='#up'] , a[href='#viol'] , a[href='#form']").click(function(){
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });
    $("a[href='#viol']").click(function(){
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });
    $("a[href='#form']").click(function(){
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });
    

    // new WOW().init();
    // //zoom
    // $('.img_zoom')
    //     .wrap('<span style="display:inline-block"></span>')
    //     .css('display', 'block')
    //     .parent()
    //     .zoom();
});