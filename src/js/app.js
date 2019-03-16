if (module.hot) {
  module.hot.accept();
}
import $ from 'jquery'
require('jquery-ui');





$('form').hover(function(e){
  $('div',this).show('slow');
},function(e){
  $('div',this).hide('slow');
})

$('footer').hover(function(){
  $(this).children('a').animate({backgroundColor:'#000'})
});

$('footer').children('div').children('a').hover(function(){
  $(this).css('color','black')
},function(){
  $(this).css('color','white')
});


$('#switcher2').click(()=>{
  $('.main-content__top').css('background-image',"none")
  $('.content-wrapper').css('background-image',"url('./static/special-offer-2-compressor.png')")
  $('.main-content__top').find('h1').html('Chocolate <br>and lemon sorbet')
  $('.content-wrapper').css('background-repeat',"no-repeat")
  $('.radial-gradient').css('background',"none")
  $('.content-wrapper').css('background-position',"50% 0%")
  $('body').css('background-color',"#8996a6")
  $('body').find('.switchers').css('background-color','transparent')
  $('body').find('#switcher2').css('background-color',"#ffffff")
})
$('#switcher1').click(()=>{
  $('.main-content__top').css('background-image',"none")
  $('.main-content__top').find('h1').html('Creme brule <br>with raspberry jam')
  $('.content-wrapper').css('background',"url('./static/special-offer-1-compressor.png')")
  $('.content-wrapper').css('background-position',"50% 0%")
  $('.content-wrapper').css('background-repeat',"no-repeat")
  $('body').css('background-color',"#849d8f")
  $('body').find('.switchers').css('background-color','transparent')
  $('body').find('#switcher1').css('background-color',"#ffffff")

})
$('#switcher3').click(()=>{
  $('.main-content__top').css('background-image',"none")
  $('.content-wrapper').css('background-image',"url('./static/special-offer-3-compressor.png')")
  $('.main-content__top').find('h1').html('Sundae <br>and strawberry sherbet')
  $('.content-wrapper').css('background-repeat',"no-repeat")
  $('.content-wrapper').css('background-position',"50% 0%")
  $('.radial-gradient').css('background',"none")
  $('body').css('background-color',"#9d8b84")
  $('body').find('.switchers').css('background-color','transparent')
  $('body').find('#switcher3').css('background-color',"#ffffff")
})

