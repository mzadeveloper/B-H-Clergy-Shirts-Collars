$('.owl-carousel').owlCarousel({
    margin: 10,
    nav: true,
    navText: ["<i class='fa fa-arrow-left'></i>", "<i class='fa fa-arrow-right'></i>"],
    responsive: {
        0: {
            items: 1,

            loop: true,
        },
        600: {
            items: 2,

            loop: true,
        },
        1000: {
            items: 3,

            loop: true,
        }
    }
});