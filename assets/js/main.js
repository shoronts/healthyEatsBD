document.addEventListener("DOMContentLoaded", () => {
    // Sticky Header

    // Home Rero Slider
    const swiper = new Swiper(".home-hero-slider", {
        loop: true,
        cssMode: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
        },
        mousewheel: true,
        keyboard: true,
    });
});