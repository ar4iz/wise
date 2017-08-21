$(function () {
    "use strict";
    $('.items').slice(0, 6).show();
    $('#loadmore').on('click', function (e) {
        e.preventDefault();
        $('.items:hidden').slice(0, 7).slideDown();
        if ($('.items:hidden').length === 0) {
            $('#loadmore').replaceWith("<p class='p'>No More</p>");
        }
    });

  $('#top').on('click', function (e) {
        e.preventDefault();
        $('body, main').animate({
            scrollTop: 0
        }, 600);
        return false;
    });
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('#top a').fadeIn();
        } else {
            $('#top a').fadeOut();
        }
    });
});