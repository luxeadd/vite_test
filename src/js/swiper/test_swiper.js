// import Swiper from 'swiper/bundle';
// import 'swiper/css/bundle';


  
export function test_swiper() {

  const option = {
    autoplay: true,
    loop: true,
    pagination: {
      el: '.js-test-swiper-pagination',
      type: 'progressbar',
      // type: 'bullets',
      // clickable: true,
    },
    navigation: {
      nextEl: '.js-test-swiper-next',
      prevEl: '.js-test-swiper-prev',
    },
    scrollbar: {
      el: '.js-test-swiper-scrollbar',
    },
  }
  const swiper = new Swiper('.js-test-swiper', option);

}


