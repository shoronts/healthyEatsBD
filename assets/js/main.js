document.addEventListener("DOMContentLoaded", () => {
    // Sticky Header
    document.addEventListener("scroll", () => {
        const header = document.getElementById("header");
        header.classList.toggle("scrolled", window.scrollY > 30);
    });
    // Home Rero Slider
    const swiper = new Swiper(".mySwiper", {
        loop: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        autoplay: {
          delay: 4000,
          disableOnInteraction: false,
        },
        keyboard: true,
      });
});