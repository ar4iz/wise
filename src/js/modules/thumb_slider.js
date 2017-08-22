$(".slider").slick({
    autoplay: false,
    dots: false,
    arrows: true,
});

$('.product_slider').slick({
    dots: false,
    infinite: true,

    speed: 600,
    slidesToShow: 3,
    arrows: true,
    draggable: false,
    autoplay: false,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    responsive: [
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 4
            }
        }
    ]
});