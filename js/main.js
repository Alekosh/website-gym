const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if (iconMenu) {
  iconMenu.addEventListener("click", function (e) {
    document.body.classList.toggle('_lock');
    iconMenu.classList.toggle('_active');
    menuBody.classList.toggle('_active');
  });
}

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true, // true - круговой слайдер, false - слайдер с конечными положениями
  speed: 500,
  effect: 'slider', // cards, coverflow, flip, fade, cube
  // initialSlide: 1, // Начинаем со 2 слайдера
  freeMode: true, // Можно перетаскивать как ленту
  slidesPerView: 2.5, // кол-во активных слайдов 1 || 2 || 3 || 1.5
  // centeredSlider: true, // центрирование слайдер
  spaceBetween: 33, // расстояние между слайдами
  slidesPerGroup: 1, // кол-во пролистываемых слайдов

  // кнопки вперед и назад
  navigation: {
    prevEl: '.prev',
    nextEl: '.next',
  },

  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },

  // Автовоспроизведение
  // autoplay: {
  //   delay: 1000,
  // },

  // адаптив
  breakpoints: {
    1024: {
      // slidesPerView: 2,
      spaceBetween: 33,
    },
    768: {
      // slidesPerView: 1.5,
      spaceBetween: 25,
    },
    640: {
      // slidesPerView: 1,
      spaceBetween: 15,
    },
  },
  //   //============ нужно прописывать в медиа в css //============//
  //   // @media (max-width: 1250px) {
  //   //   .swiper, swiper-wrapper {
  //   //     max-width: 780px;
  //   //   }
  //   // }

  //   // @media (max-width: 950px) {
  //   //   .swiper, swiper-wrapper {
  //   //     max-width: 320px;
  //   //   }
  //   // }
  // },
});
