if($(window).width()> 750){
  $('#logo').append($('ul'))
  $('#logo').append($('.links'))
}

$(window).resize(function(){
  if($(window).width() > 750){
    $('#logo').append($('ul'))
    $('#logo').append($('.links'))
  } else {
    $('main').prepend($('ul'))
    $('footer').append($('.links'))
  }
})

let i = 0
let cards = document.querySelectorAll('.carousel div')
let dots = document.querySelectorAll('.carousel-dots span')

function rotate () {

  if(cards[cards.length - 1].classList.contains('active')){
    cards[cards.length - 1].classList.remove('active')
    dots[dots.length - 1].classList.remove('active')
    i = 0
  } else {
    cards[i].classList.remove('active')
    dots[i].classList.remove('active')
    i++
  }
  dots[i].classList.add('active')
  cards[i].classList.add('active')
}

let cardInterval = setInterval(rotate, 5000);

// Set the interval to stop when you click an off-screen button

$('.off-screen').on('click', function(){
  clearInterval(cardInterval)
})

$('.carousel').on('drag', function(){
  $('.carousel div').show();
})
