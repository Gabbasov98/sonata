function teacherSlider() {
    var swiper = new Swiper('.teachers .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: {
            nextEl: '.teachers .swiper-button-next',
            prevEl: '.teachers .swiper-button-prev',
        },
    })
}

function gallerySlider() {
    var swiper = new Swiper('.gallery .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 10,
        centeredSlides: true,
        centeredSlidesBounds: true,
        navigation: {
            nextEl: '.gallery .swiper-button-next',
            prevEl: '.gallery .swiper-button-prev',
        },
        pagination: {
            el: '.gallery .swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
    })
    swiper.slideTo(1)
}


$(document).ready(function() {
    $('input[type="tel"]').mask('+7 999 999-9999', { placeholder: '+7             ' });

    teacherSlider()
    gallerySlider()

    $(".header__burger").click(function() {
        $(".header__right").toggleClass("header__right--active")
        $("body").addClass("fixed-body")
    })

    $(".header__bg").click(function() {
        $(".header__right").removeClass("header__right--active")
        $("body").removeClass("fixed-body")
    })


    // $('.video').parent().click(function() {
    //     if ($(this).children(".video").get(0).paused) {
    //         $(this).children(".video").get(0).play();
    //         $(this).children(".playpause").fadeOut();
    //     } else {
    //         $(this).children(".video").get(0).pause();
    //         $(this).children(".playpause").fadeIn();
    //     }
    // });
});