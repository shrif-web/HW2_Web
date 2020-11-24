$(document).ready(function() {
$('.btn-enregistrer').click(function() {
  $('.connection').addClass('remove-section');
	$('.enregistrer').removeClass('active-section');
  $('.btn-enregistrer').removeClass('active');
    $('.menu_2').removeClass('unselected');
    $('.menu_1').addClass('unselected');
  $('.btn-connection').addClass('active');
});
});
$(document).ready(function() {
$('.btn-connection').click(function() {
  $('.connection').removeClass('remove-section');
	$('.enregistrer').addClass('active-section');
  $('.menu_1').removeClass('unselected');
  $('.menu_2').addClass('unselected');
  $('.btn-enregistrer').addClass('active');
  $('.btn-connection').removeClass('active');
});
});
