$(document).ready(function(){
  $('input, textarea').placeholder();
  $(".j-scroll-block").tinyscrollbar();
  cuSel({
    changedEl: ".j-cusel-change",
    visRows: 6,
    scrollArrows: true
  });
});

$(document).on('click', '.j-radio-check', function() {
  $('.group-radio' ).removeClass('radio-image-active');
  $(this).parent('.group-radio').addClass('radio-image-active');
});