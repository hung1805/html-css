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
let swiper2 = new Swiper(".mySwiper2", {
  slidesPerView: 1.5,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: ".custom-next",
    prevEl: ".custom-prev",
  },
  breakpoints: {
    375: {
      slidesPerView: 1,
    },

    768: {
      slidesPerView: 1.5,
    },
  },
});
