/*var count_like = 0;
var count_dislike = 0;
$( "body" ).on( "click", "#like", function() {
    $("#count_like").html( "<div>" + (++count_like) + "</div>" );
});
$( "body" ).on( "click", "#dislike", function() {
    $("#count_like").html( "<div>" + (--count_like) + "</div>" );
});*/

$('.like').click( function () {
    $(this).toggleClass('active').siblings().removeClass('active');

    var currentValue = $(this).siblings('.zahl');

    if (currentValue.hasClass('liked')) {
        currentValue.text(parseInt(currentValue.text()) - 1);
    }
    if (currentValue.hasClass('disliked')) {
        currentValue.text(parseInt(currentValue.text()) + 1);
    }
    if (!currentValue.hasClass('liked')) {
        currentValue.text(parseInt(currentValue.text()) + 1);
    }

    currentValue.toggleClass('liked');
    currentValue.removeClass('disliked');
})
$('.dislike').click( function () {
    $(this).toggleClass('active').siblings().removeClass('active');

    var currentValue = $(this).siblings('.zahl');

    if (currentValue.hasClass('disliked')) {
        currentValue.text(parseInt(currentValue.text()) + 1);
    }
    if (currentValue.hasClass('liked')) {
        currentValue.text(parseInt(currentValue.text()) - 1);
    }
    if (!currentValue.hasClass('disliked')) {
        currentValue.text(parseInt(currentValue.text()) - 1);
    }

    currentValue.removeClass('liked');
    currentValue.toggleClass('disliked');
})

