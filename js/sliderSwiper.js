new Swiper('.slider-container',{
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    pagination: {
        el: '.swiper-pagination',

        // type: 'bullets',
        // clickable: true,
        // dynamicBullets: true,

        type: 'fraction',

        // type: 'progressbar',
    },
    // scrollbar: {
    //     el: '.swiper-scrollbar',
    //     draggable: true,
    // },

    simulateTouch: true,
    touchRatio: 1,
    // grabCursor: true,
    
    // slideToClickedSlide: true,

    keyboard: {
        enabled: true,
        onlyinviewport: true,
        // pageUpDown: true,
    },

    mousewheel: {
        // sensitivity: 1,
        // eventsTarget: '.swiper-container'
    },

    // autoHeight: false,

    slidesPerView: 2.75,

    // watchOverFlow: true, // будет отключены стрелки и весь слайдер если количество кабров помещаеться в экран

    spaceBetween: 15,

    // slidesPerGroup: 1,

    // centeredSlides: true,

    initialSlide: 0,

    loop: true,
    // loopedSlides: 3,

    // freeMode: true,

    // autoplay: {
    //     delay: 1250,
    //     stopOnLastSlide: false,
    //     disableOnInteraction: false,
    //     pauseOnMouseEnter: true,
    //     waitForTransition: true,
    // },

    speed: 100,

    // effect: 'slide',
    // effect: 'fade',
    // fadeEffect: {
    //     crossFade: true,
    // },

    breakpoints: {
        320: {
            slidesPerView: 1
        },
        480: {
            slidesPerView: 2
        },
        992: {
            slidesPerView: 3
        },
    },
});