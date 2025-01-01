$('.submenu_wrap').hide();
$('nav').mouseover(function(){
    $('.submenu_wrap').stop().slideDown()
});
$('nav').mouseout(function(){
    $('.submenu_wrap').stop().slideUp()
});