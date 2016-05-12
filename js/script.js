/* Цвет ссылок + Плейсхолдер*/
$(document).ready(function(){
  $('div.green > a').css("color", "green");  
  plchldAddKill();         
});

/* Плэйсхолдеры + изменение размера окна */
$(window).resize(function(){
  plchldAddKill();
});

function plchldAddKill() {
  var w = $('body').width();
  if (w <= 739){
  $('#inputEmail').attr("placeholder","Email");
  $('#inputPassword').attr("placeholder","Password");
  }
  if (w >= 739){
  $('#inputEmail').removeAttr("placeholder","Email");
  $('#inputPassword').removeAttr("placeholder","Password");
  }
}