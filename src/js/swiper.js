import Swiper , { Pagination } from 'swiper';
Swiper.use([Pagination]);

const slider1 = document.querySelector('.swiper-container');

let mySwiper1;

function mobileSlider1() {
    if (window.innerWidth <= 767 && slider1.dataset.mobile == 'false') {
      mySwiper1 = new Swiper(slider1, {
        slidesOffsetAfter: 0,
        setWrapperSize: true,
        width: 240,
        spaceBetween: 16,
        loop: true,
        loopedSlides: 3,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      });
      slider1.dataset.mobile = 'true';
    }
    if (window.innerWidth > 767) {
      slider1.dataset.mobile = 'false';
      if (slider1.classList.contains('swiper-container-initialized')) {
        mySwiper1.destroy();
      }
    }
  }
  
  mobileSlider1();
  
  window.addEventListener('resize', () => {
    mobileSlider1();
  })