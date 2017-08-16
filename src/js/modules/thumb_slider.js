

$('.single-item').slick({
    accessibility: true,
    arrows: true,
    prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
    nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
    autoplay: true,
    autoplaySpeed: 3000,
});
function previous() {
    $(".slider").slick('slickPrev');
}

function next() {
    $(".slider").slick('slickNext');
}

$('.arrow_slider').slick({
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    arrows: true,
    draggable: false,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    responsive: [
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 3
            }
        }
    ]
});