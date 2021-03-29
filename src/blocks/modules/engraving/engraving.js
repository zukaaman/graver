// for engraving
document.addEventListener('DOMContentLoaded', function(){
  var swiper = new Swiper('.engraving-slider', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    centeredSlides: true,
    navigation: {
      nextEl: '.engraving-slider-button-next',
      prevEl: '.engraving-slider-button-prev',
    },
  });
});
