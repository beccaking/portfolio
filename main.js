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
    $('main').append($('.links'))
  }
})
