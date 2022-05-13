import {changeLang} from "../../lang/EN.js"
import {changeLangToBack} from "../../lang/RU.js"

let min = 0;
let max = 100;

let intervalId = setInterval(() => {
    if (min > max) {
        clearInterval(intervalId);
        $('.preloader').hide(400);
        return;
    }
    $('.preloader__text').text(`${min}%`);
    $('.preloader__complete').width(`${min}%`);
    min++;
}, 100)

$(document).ready(() => {

    let lastScrollTop = 0;

    $(window).scroll(function () {

        if (window.innerWidth > 768) {
            let st = $(this).scrollTop();

            let checkHeight = $('.header__logo').offset().top < $('.header__content').height() / 2;
            if (st > lastScrollTop && checkPosition($('.header__logo'))) {
                $('.header__logo').css({
                    'position': 'fixed'
                })
                if (!checkHeight) {
                    $('.header__logo').css({
                        "position": "absolute",
                        'top': `calc(50% - ${$('.header__logo').height() / 2}px`
                    })
                }
            } else if (st < lastScrollTop && checkPosition($('.header__logo'))) {
                $('.header__logo').css({
                    'position': 'fixed',
                    'top': '30px',
                })
            }
            lastScrollTop = st;
        }
    });

    $('.en').on('click', () => {
        localStorage.setItem('lang', 'en');
        if (window.innerWidth <= 480) {
            $('body').css({
                'background': 'url("./assets/img/maps/mobile/EnMobMap.png") top 20% left 68% no-repeat, #202020',
                'background-size': '100%',
            })
            return;
        }
        $('.second__works').css({
            'background': 'url("./assets/img/maps/mobile/EnMap.png") bottom right no-repeat',
            'background-size': '85% 100%',
        })
        changeLang()
    })

    $('.ru').on('click', () => {
        localStorage.setItem('lang', 'ru');
        if (window.innerWidth <= 480) {
            $('body').css({
                'background': 'url("./assets/img/maps/TryMMap.png") top 20% left 68% no-repeat, #202020',
                'background-size': '100%',
            })
        } else {
            $('.second__works').css({
                'background': 'url("./assets/img/maps/DMap.png") bottom right no-repeat',
                'background-size': '85% 100%',
            })
        }
        changeLangToBack()
    })

    if (localStorage.getItem('lang') === 'en') {
        $('.lang').each((index, item) => {
            $(item).removeClass('activeLang')
        })
        $('.en').addClass('activeLang')
        if (window.innerWidth <= 480) {
            $('body').css({
                'background': 'url("./assets/img/maps/mobile/EnMobMap.png") top 20% left 68% no-repeat, #202020',
                'background-size': '100%',
            })
        } else {
            $('.second__works').css({
                'background': 'url("./assets/img/maps/mobile/EnMap.png") bottom right no-repeat',
                'background-size': '85% 100%',
            })
        }
        changeLang();
    } else {
        $('.lang').each((index, item) => {
            $(item).removeClass('activeLang')
        })
        if (window.innerWidth <= 480) {
            $('body').css({
                'background': 'url("./assets/img/maps/TryMMap.png") top 20% left 68% no-repeat, #202020',
                'background-size': '100%',
            })
        } else {
            $('.second__works').css({
                'background': 'url("./assets/img/maps/DMap.png") bottom right no-repeat',
                'background-size': '85% 100%',
            })
        }
        $('.ru').addClass('activeLang')
        changeLangToBack();
    }

    //Adaptive
    if (window.innerWidth <= 480) {
        $('.price').before($('.paralax'));
    }

    if (window.innerWidth > 480) {
        updateWidth();
    }

    if (window.innerWidth <= 768) {
        $('.ideology__body').find('.price__title').find('br').remove();
    }


    //Settings for Slider
    function updateWidth() {
        let width = 0;
        let widthContent = $('.arts__persons').width();
        $('.arts__title').css('width', `${$('.activeTitle').width()}px`)
        $('.arts__author').each((index, item) => {
            if ($(item).hasClass('arts__active')) {
                width += $(item).width() + $($('.arts__author')[Math.min((index + 1), $('.arts__author').length - 1)]).width() + $($('.arts__author')[Math.min((index + 2), $('.arts__author').length - 1)]).width();
                $($('.arts__author')[Math.min(index, $('.arts__author').length - 1)]).css('margin-right', `${Math.round((widthContent - width) / 2)}px`)
                $($('.arts__author')[Math.min((index + 1), $('.arts__author').length - 1)]).css('margin-right', `${Math.round((widthContent - width) / 2)}px`)
                return;
            }
        })
    }

    //Sliders
    $('.slider').each(function () {
        $(this).slick({
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            centerMode: true,
            variableWidth: true,
            arrows: false,
        });
    });

    function setProgress(index, slider, progress) {
        const calc = ((index + 1) / ($(slider).slick('getSlick').slideCount)) * 100;

        $(progress)
            .css('background-size', `${calc}% 100%`)
            .attr('aria-valuenow', calc);
    }

    $($('.slider')[0]).on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        setProgress(nextSlide, $('.slider')[0], $('.progress')[0]);
    });

    setProgress(0, $('.slider')[0], $('.progress')[0]);

    $($('.slider')[1]).on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        setProgress(nextSlide, $('.slider')[1], $('.progress')[1]);
    });

    setProgress(0, $('.slider')[1], $('.progress')[1]);

    var swiper = new Swiper(".mySwiper", {
        scrollbar: {
            el: ".swiper-scrollbar-main",
            hide: true
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        spaceBetween: 100,
    });

    var swiper2 = new Swiper(".mySwiper2", {
        slidesPerView: window.innerWidth <= 480 ? 1 : 3,
        spaceBetween: 30,
        allowTouchMove: false,
        centeredSlides: true,
        loop: true,
        navigation: {
            nextEl: window.innerWidth <= 480 ? ".mobileControllerAllSliderNext" : ".controllerAllSliderNext",
            prevEl: window.innerWidth <= 480 ? ".MobileControllerAllSliderPrev" : ".controllerAllSliderPrev",
        },
    });

    var swiper3 = new Swiper(".mySwiper3", {
        slidesPerView: 1,
        allowTouchMove: false,
        centeredSlides: true,
        loop: true,
        navigation: {
            nextEl: window.innerWidth <= 480 ? ".mobileControllerAllSliderNext" : ".controllerAllSliderNext",
            prevEl: window.innerWidth <= 480 ? ".MobileControllerAllSliderPrev" : ".controllerAllSliderPrev",
        },
    });

    var swiper4 = new Swiper(".mySwiper4", {
        slidesPerView: 1,
        allowTouchMove: false,
        centeredSlides: true,
        loop: true,
        navigation: {
            nextEl: window.innerWidth <= 480 ? ".mobileControllerAllSliderNext" : ".controllerAllSliderNext",
            prevEl: window.innerWidth <= 480 ? ".MobileControllerAllSliderPrev" : ".controllerAllSliderPrev",
        },
    });

    var swiper1 = new Swiper(".mySwiper1", {
        slidesPerView: window.innerWidth <= 480 ? 1 : 3,
        spaceBetween: 100,
        allowTouchMove: false,
        scrollbar: {
            el: ".swiper-scrollbar-mobile",
            hide: true
        },
        centeredSlides: true,
        loop: true,
        navigation: {
            nextEl: window.innerWidth <= 480 ? ".mobileControllerAllSliderNext" : ".controllerAllSliderNext",
            prevEl: window.innerWidth <= 480 ? ".MobileControllerAllSliderPrev" : ".controllerAllSliderPrev",
        }
    });

    if (!$(swiper1[0].el).hasClass('hide')) {
        let count = 0;
        swiper1[0].on('slideChange', function () {
            if (count === 0) count = 0;
            let IndexTo = ++this.realIndex;
            let indexes = [4, 5, 6, 0, 1, 2, 3];
            swiper2.slideTo(indexes[count]);
            swiper3.slideTo(IndexTo);
            swiper4.slideTo(IndexTo);
            count++;
        })
    }

    if (!$(swiper1[1].el).hasClass('hide')) {
        let count = 0;
        swiper1[1].on('slideChange', function () {
            if (count === 0) count = 0;
            let IndexTo = ++this.realIndex;
            let indexes = [4, 5, 6, 0, 1, 2, 3];
            swiper2.slideTo(indexes[count]);
            swiper3.slideTo(IndexTo);
            swiper4.slideTo(IndexTo);
            count++;
        })
    }

    //Navbar
    $('.button1').each((index, item) => {
        $(item).on('click', function () {
            $('html,body').animate({scrollTop: $('.header').offset().top - 150 + "px"}, {duration: 1E3});
        });
    })

    $('.button2').each((index, item) => {
        $(item).on('click', function () {
            $('html,body').animate({scrollTop: $('.second').offset().top - 150 + "px"}, {duration: 1E3});
        });
    })

    $('.button3').each((index, item) => {
        $(item).on('click', function () {
            $('html,body').animate({scrollTop: $('.tokens').offset().top - 150 + "px"}, {duration: 1E3});
        });
    })

    $('.button4').each((index, item) => {
        $(item).on('click', function () {
            $('html,body').animate({scrollTop: $('.ideology').offset().top - 150 + "px"}, {duration: 1E3});
        });
    })

    $('.button5').each((index, item) => {
        $(item).on('click', function () {
            $('html,body').animate({scrollTop: $('.price').offset().top - 150 + "px"}, {duration: 1E3});
        });
    })

    //Buttons Events
    $('.btnRare').on('click', function () {
        $('.tokens__button').each((index, item) => {
            $(item).removeClass('activeTokenButton')
        })
        $('.rare').show().removeClass('hide');
        $('.rarer').hide().addClass('hide');
        $(this).addClass('activeTokenButton')
    })

    $('.btnRarer').on('click', function () {
        $('.tokens__button').each((index, item) => {
            $(item).removeClass('activeTokenButton')
        })
        $('.rare').hide().addClass('hide');
        $('.rarer').show().removeClass('hide');
        $(this).addClass('activeTokenButton')
    })

    $('.lang').on('click', function () {
        $('.lang').each((index, item) => {
            $(item).removeClass('activeLang')
        })
        $(this).addClass('activeLang')
    })

    //Paralax
    let targetPos = $($('.slider')[0]).offset().top;
    let winHeight = $(window).height();
    let scrollToElem = targetPos - winHeight;
    $(window).scroll(function () {
        let winScrollTop = $(this).scrollTop();
        if (winScrollTop > scrollToElem) {
            $($('.slider')[0]).find('.slick-track').css('transform', `translate3d(-${winScrollTop * 2}px, 0px, 0px)`)
        }
    });

    function checkPosition(elem) {
        let div_position = elem.offset();
        let div_top = div_position.top;
        let div_left = div_position.left;
        let div_width = elem.width();
        let div_height = elem.height();

        let top_scroll = $(document).scrollTop();
        let left_scroll = $(document).scrollLeft();
        let screen_width = $(window).width();
        let screen_height = $(window).height();

        let see_x1 = left_scroll;
        let see_x2 = screen_width + left_scroll;
        let see_y1 = top_scroll;
        let see_y2 = screen_height + top_scroll;

        let div_x1 = div_left;
        let div_x2 = div_left + div_height;
        let div_y1 = div_top;
        let div_y2 = div_top + div_width;

        if (div_x1 >= see_x1 && div_x2 <= see_x2 && div_y1 >= see_y1 && div_y2 <= see_y2) return true;
    }


})