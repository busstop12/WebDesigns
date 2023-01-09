$('.card').on('click', e => {
  let card = $(e.currentTarget)

  // calculate the top offset
  let card_offset_scrolltop = $(card).offset().top - $(window).scrollTop() - 15;

  $(card).css('--data-offset-top', card_offset_scrolltop * -1 + 'px');
  console.log(card_offset_scrolltop)
  $(card).toggleClass('active')

  if ($(card).hasClass('active')) {
    $('body').addClass('noscroll')
  } else {
    $('body').removeClass('noscroll')
  }
})