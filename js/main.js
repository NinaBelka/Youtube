const swiper1 = new Swiper('.channel-slider1', {
  // Optional parameters
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    1900: {
      slidesPerView: 6,
    },
    1400: {
      slidesPerView: 5,
    },
    1200: {
      slidesPerView: 4,
    },
    992: {
      slidesPerView: 3,
    },
    760: {
      slidesPerView: 2,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: '.channel-button-next1',
    prevEl: '.channel-button-prev1',
  },
});

const swiper2 = new Swiper('.channel-slider2', {
  // Optional parameters
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    1600: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 2,
    },
  },


  // Navigation arrows
  navigation: {
    nextEl: '.channel-button-next2',
    prevEl: '.channel-button-prev2',
  },
});

const swiper3 = new Swiper('.channel-slider3', {
  // Optional parameters
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    1900: {
      slidesPerView: 6,
    },
    1400: {
      slidesPerView: 5,
    },
    1200: {
      slidesPerView: 4,
    },
    992: {
      slidesPerView: 3,
    },
    760: {
      slidesPerView: 2,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: '.channel-button-next3',
    prevEl: '.channel-button-prev3',
  },
});

const searchButton = document.querySelector('.mobile-search'),
  mobileSearch = document.querySelector('.input-group');
searchButton.addEventListener('click', () => {
  mobileSearch.classList.toggle('is-open');
});

if (document.documentElement.scrollWidth <= 640) {
  swiper1.destroy();
  swiper2.destroy();
  swiper3.destroy();
}