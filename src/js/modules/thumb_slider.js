$(".slider").slick({
    autoplay: false,
    dots: false,
    arrows: true,
    responsive: [
        {
            breakpoint: 694,
            settings: {
                arrows: false
            }
        }
    ]
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
                slidesToShow: 2,
                slidesToScroll: 4
            }
        },
        {
            breakpoint: 694,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                /*autoplay: true*/
            }
        }
    ]
});