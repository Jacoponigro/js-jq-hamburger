// creo variabile che selziona hamburger
var hamburger = $('a i.fa-bars');
// creo variabile che seleziona il menu
var menu = $('.hamburger-menu');
// do un input di click all'hamburger
hamburger.click(
  function () {
    menu.show();
  }
)
// creo variabile classe close
var close = $('a.close');
// do un input di click all'hamburger
close.click(
  function () {
    menu.hide();
  }
)
