$(window).bind('load', function () {
    "use strict";
    // anchor in page
    $(function () {
        $('a[href^="#"]').click(function () {
            if ($($(this).attr('href')).length) {
                var p = $($(this).attr('href')).offset();
                if ($(window).width() > 750) {
                    $('html,body').animate({ scrollTop: p.top - 170 }, 400);
                } else {
                    $('html,body').animate({ scrollTop: p.top - 100 }, 400);
                }
            }
            return false;
        });
    });

    // anchor top page #
    var hash = location.hash;
    if (hash) {
        var p1 = $(hash).offset();
        if ($(window).width() > 750) {
            $('html,body').animate({ scrollTop: p1.top - 100 }, 400);
        } else {
            $('html,body').animate({ scrollTop: p1.top - 100 }, 400);
        }
    }
});


$(window).bind('load scroll', function () {
    "use strict";
    if ($(this).scrollTop() >= 500) {
        $('.to_top,.sp_contact').addClass('show');
    } else {
        $('.to_top,.sp_contact').removeClass('show');
    }
});

$(document).ready(function () {
    "use strict";
    var windowWidth = window.innerWidth ? window.innerWidth : $(window).width();
    // nav
    $(".hamburger").click(function () {
        $(this).toggleClass("is_active");
        $(".main_nav").fadeToggle(100);
    });

    $(".main_nav a:not([href])").click(function () {
        if (windowWidth <= 750) {
            $(this).toggleClass("open");
            $(this).next().stop(1, 0).slideToggle(400);
        } else {
            $(this).removeClass("open");
            $(this).next().removeAttr("style");
        }
    });
    if (windowWidth <= 750) {
        $(".main_nav a[href]").click(function () {
            $('.hamburger').removeClass('is_active');
            $('.main_nav').css('display', 'none');
        });
    }
    // back to top
    $(window).bind("load resize", function () {
        "use strict";
        $(this).scroll();

        if (windowWidth > 750) {
            $(".to_top").removeAttr("style");
        } else {
            $(".to_top").css("bottom", 60);
        }
    });
    $('.to_top_button').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 600);
    });

    /*================= JS CUSTOM ===================*/

});

