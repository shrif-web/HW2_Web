var x = 0;
$(function() {
    // Sidebar toggle behavior
    $('#sidebarCollapse').on('click', function() {
      $('#sidebar').toggleClass('active');
      if (x % 2 == 0) {
        $('#bar_icon').removeClass('fa-bars');
        $('#bar_icon').addClass('fa-times');
      } else {
        $('#bar_icon').removeClass('fa-times');
        $('#bar_icon').addClass('fa-bars');
      }
      x = x +1;
    });
  });
  
  $(function ()
  {
      $(window).on('resize', function ()
      {
          if ($(window).width() == 599)
          {
              if ($('#sidebar').hasClass('active')){
  
                  $('#sidebar').toggleClass('active');
              }
  
          }
      });
  });

function onBarClick() {
    $('#bar_icon').removeClass('fa-bars');
    $('#bar_icon').addClass('fa-times');
    if ($('.left_sidebar').css('visibility') == 'hidden') {
        $('#bar_icon').removeClass('fa-bars');
        $('#bar_icon').addClass('fa-times');
    } else {
        $('#bar_icon').removeClass('fa-times');
        $('#bar_icon').addClass('fa-bars');
    }
}