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

function changemood(){
  if(document.getElementById('moodswitch').checked) {
    document.getElementById('sidebar').style.background = '#022742';
    document.getElementById("table-container").style.background = '#2d2d2d';
    document.getElementById("topNavigator").style.background = 'rgb(33, 87, 64)';
    document.getElementById("tableid").classList = 'table table-dark r_dir mytable'
    
  } else {
    document.getElementById('sidebar').style.background = '#056cb6';
    document.getElementById("table-container").style.background = 'white';
    document.getElementById("topNavigator").style.background = 'rgb(225, 247, 238)';
    document.getElementById("tableid").classList = 'table table-striped r_dir mytable'
  }
}



function gohome(){
	window.open("homepage.html","_self");
}

function godata(){
	window.open("data.html","_self");
}

function gologin(){
	window.open("login.html","_self");
}

function goregister(){
	window.open("register.html","_self");
}





