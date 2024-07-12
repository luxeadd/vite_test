  // import Swiper from 'swiper/bundle';
  // import 'swiper/css/bundle';
  
  export function fv_swiper() {

  const option = {
    loop: true,
    autoplay: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
			clickable: true,
    },
  }
  const swiper = new Swiper('.js-fv-swiper', option);

}


