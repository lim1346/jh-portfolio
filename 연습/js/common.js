$(window).ready(function () {
    var max = 1200;
    $(window).scroll(function () {
        var scrollPX = $(this).scrollTop();
        if (scrollPX < max) {
            $(".opacity").css({
                "opacity": (max - scrollPX) / max
            });
        } else {
            $(".opacity").css({
                "opacity": 0
            });
        }
    });


    $('.tab_menu1').click(function () {
        $('.tab_line').css('left', '0');
        $('.tab_body_1').addClass('on');
        $('.tab_body_1').siblings().removeClass('on');
    });
    $('.tab_menu2').click(function () {
        $('.tab_line').css('left', '25%');
        $('.tab_body_2').addClass('on');
        $('.tab_body_2').siblings().removeClass('on');
    });
    $('.tab_menu3').click(function () {
        $('.tab_line').css('left', '50%');
        $('.tab_body_3').addClass('on');
        $('.tab_body_3').siblings().removeClass('on');
    });
    $('.tab_menu4').click(function () {
        $('.tab_line').css('left', '75%');
        $('.tab_body_4').addClass('on');
        $('.tab_body_4').siblings().removeClass('on');
    });

    $('.tab_ul div').click(function () {
        $(this).addClass('on')
        $(this).siblings().removeClass('on')
    });


    setTimeout(function () {
        testEle = $('.loading_wrap');
        testEle.fadeOut();
        $('body').removeClass('on');
    }, 2000)
});





window.addEventListener('scroll', function () {
    console.log(window.scrollY)
});

function vh(v) {
    var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    return (v * h) / 100;
}

$(window).on("scroll", function () {
    $('header').addClass('on');
    if ($(window).scrollTop() > vh(100)) {
        $(".main_section").addClass("on");
        $(".section-parallax").addClass("on");
        $(".first_section").addClass("on");
        $(".opacity").css('display', 'none');
    } else {
        //remove the background property so it comes transparent again (defined in your css)
        $(".main_section").removeClass("on");
        $(".section-parallax").removeClass("on");
        $(".first_section").removeClass("on");
        $(".opacity").css('display', 'flex');
    }
});

$(window).on("scroll", function () {
    if ($(window).scrollTop()) {
        $('.header').addClass('on');
    } else {
        $('.header').removeClass('on');
    }
});




/* 페럴렉스 */
function scrollBanner() {
    $(document).on('scroll', function () {
        var scrollPos = $(this).scrollTop();
        $('.parallax-fade-top').css({
            'top': (scrollPos / 2) + 'px',
            'opacity': 1 - (scrollPos / 700)
        });
        $('.parallax-00').css({
            'top': (scrollPos / -3.5) + 'px',
            'opacity': 1 - (scrollPos / 700)
        });
        $('.parallax-01').css({
            'top': (scrollPos / -2.8) + 'px',
            'opacity': 1 - (scrollPos / 800)
        });
        $('.parallax-top-shadow').css({
            'top': (scrollPos / -2) + 'px'
        });
    });
}
scrollBanner();