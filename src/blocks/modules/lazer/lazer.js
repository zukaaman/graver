// for lazer
$(function() {
  $('.lazer .lazer__link').click(function() {
    $(this).addClass('lazer__link--delete')
    $('.lazer .txt-wrapper').addClass('txt-wrapper--active');
  });
});
