if($(window).width()> 750){
  $('#logo').append($('ul'))
} 

$(window).resize(function(){
  if($(window).width() > 750){
    $('#logo').append($('ul'))
  } else {
    $('main').prepend($('ul'))
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

// Allow user to select one of the cards by clicking the dot
// for(j=0;j<cards.length;j++){
//
//   dots[j].addEventListener('click', function(){
//
//     $('.carousel div').removeClass('active')
//     $('.carousel-dots span').removeClass('active')
//
//     $(this).addClass('active')
//   })
// }
