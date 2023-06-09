const swiper = new Swiper('.swiper-main', {
  // Optional parameters
  slidesPerView: 2,
  spaceBetween: 17,
  loop: true,
  autoplay: {
    delay: 1,
    disableOnInteraction: false,
  },
  freeMode: true,
  speed: 5000,
  freeModeMomentum: false,
  // initialSlide: 4,
  

  breakpoints: {
    480: {
      slidesPerView: 2.6,
      spaceBetween: 19,
      // width: 393,
    },
    958: {
      slidesPerView: 3.3,
      spaceBetween: 19,
    },
    1700: {
      slidesPerView: 4.8,
      spaceBetween: 19
    },
    1920: {
      slidesPerView: 5,
      spaceBetween: 19
    }
  },

  // Navigation arrows
  navigation: {
    prevEl: '.products-button-prev',
  },

});