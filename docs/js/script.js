$(function () {
  new WOW().init();
  $('[data-toggle="tooltip"]').tooltip();
  window.onload = function(e) {
    $('.loading').hide();
  }
});