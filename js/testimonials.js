// testimonials.js - Handles testimonials slider initialization
window.addEventListener('load', function() {
    if (typeof Swiper !== 'undefined') {
        const swiper = new Swiper('.testimonial-slider', {
            slidesPerView: 1,
            spaceBetween: 20,
            loop: true,
            autoplay: {
                delay: 5000,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                401: {
                    slidesPerView: 1,
                    spaceBetween: 20
                },
                801: {
                    slidesPerView: 2,
                    spaceBetween: 32
                },
                1201: {
                    slidesPerView: 2,
                    spaceBetween: 80
                }
            }
        });
    }
});
     