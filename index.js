const sideBar = document.querySelector(".sidebar");
const overlay = document.querySelector(".overlay");
const linkItems = document.querySelectorAll(".sidebar .sidebar__item");
const showList = () => {
  sideBar.style.left = "0";
  overlay.style.display = "block";
};
const hideList = () => {
  sideBar.style.left = "-100%";
  overlay.style.display = "none";
};
linkItems.forEach((item) => {
  item.addEventListener("click", hideList);
});

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
