$(function() {
    // Sidebar toggle behavior
    $('#sidebarCollapse').on('click', function() {
      $('#sidebar').toggleClass('active');
  
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