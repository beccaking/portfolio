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

$('h4').on('click keypress', function(e){
  if(e.keyCode = 13 || $(this).data('clicked', true)){
    $('h4').removeClass('active')
    $(this).addClass('active')
    $('.project').removeClass('active')

    if($(this).is('#amerimark-heading')){
      $('#amerimark').addClass('active')
    }
    if($(this).is('#ncm-heading')){
      $('#ncm').addClass('active')
    }
    if($(this).is('#ga-heading')){
      $('#ga').addClass('active')
    }
  }
})
