
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


ymaps.ready(init);
function init(){
      // Создание карты.
      var myMap = new ymaps.Map("map", {
            // Координаты центра карты.
            // Порядок по умолчанию: «широта, долгота».
            // Чтобы не определять координаты центра карты вручную,
            // воспользуйтесь инструментом Определение координат.
            center: [59.891910, 30.442121],
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            zoom: 15
      });
}


const menuBtn = document.querySelector('.menu-btn')
const menuMob = document.querySelector('.menu-mobile')
menuBtn.addEventListener('click', () => {
      menuMob.classList.toggle('menu--open')
      menuBtn.classList.toggle('menu--open')
})