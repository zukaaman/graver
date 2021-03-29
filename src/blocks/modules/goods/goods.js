// for goods
document.addEventListener('DOMContentLoaded', function(){
  var swiper = new Swiper('.goods-slider', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    centeredSlides: true,
    navigation: {
      nextEl: '.goods-slider-button-next',
      prevEl: '.goods-slider-button-prev',
    },
  });
});
