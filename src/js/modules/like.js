var count_like = 0;
var count_dislike = 0;
$( "body" ).on( "click", "#like", function() {
    $("#count_like").html( "<div>" + (++count_like) + "</div>" );
});
$( "body" ).on( "click", "#dislike", function() {
    $("#count_like").html( "<div>" + (--count_like) + "</div>" );
});