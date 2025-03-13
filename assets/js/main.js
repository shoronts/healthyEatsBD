document.addEventListener("DOMContentLoaded", () => {
  // Sticky Header
  document.addEventListener("scroll", () => {
    const header = document.getElementById("header");
    header.classList.toggle("scrolled", window.scrollY > 30);
  });
  // fixed bottom navbar 
  document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelectorAll('.nav-item').forEach(i => {
            i.classList.remove('active');
        });
        e.currentTarget.classList.add('active');
    });
});
  // hero section 
  const swiper = new Swiper(".custom-swiper", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 2,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  // card slider 
  const Cardswiper = new Swiper(".myCardSwiper", {
    slidesPerView: 5,
    spaceBetween: 10,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  // review slider 
  const reviewSwiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // checkout js 
  
});