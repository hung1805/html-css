const swiper = new Swiper(".swiper", {
  // Optional parameters
  slidesPerView: 2,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    375: {
      slidesPerView: 1,
    },

    768: {
      slidesPerView: 2,
    },
  },
});
