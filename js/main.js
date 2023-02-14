
const swiper = new Swiper('.swiper', {
      // Optional parameters
      // Navigation arrows
      loop: true,
      slidesPerView: 2,
      spaceBetween: 20,

      navigation: {
            nextEl: '.swiper-button-right',
            prevEl: '.swiper-button-left',
      },
});