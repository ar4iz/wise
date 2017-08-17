$('.header').on('click', '.search-toggle', function(e) {
    var selector = $(this).data('selector');

    $(selector).toggleClass('show').find('.search-input').focus();
    $(this).toggleClass('active');

    e.preventDefault();

});

$('.header').hover(function() {
    $(this).find('.button').stop(true, true).delay(200).fadeIn(500);
}, function() {
    $(this).find('.button').stop(true, true).delay(200).fadeOut(500);
});
