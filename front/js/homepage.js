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
    document.getElementById("container").style.background = '#2d2d2d';
    document.getElementById("topNavigator").style.background = 'rgb(33, 87, 64)';
  } else {
    document.getElementById('sidebar').style.background = '#056cb6';
    document.getElementById("container").style.background = 'white';
    document.getElementById("topNavigator").style.background = 'rgb(225, 247, 238)';
  }
}


window.onload = function () {
  showPosts();
}

async function gethttp(url){
  let response = await fetch(url);
  let responsemessage = await response.text();
  return {body: responsemessage, status: response.status};
}

function showPosts(){
  let postsDiv = document.getElementById("container");
  let url = "http://localhost:3000/api/post/";
  let response = gethttp(url);
  response.then(posts =>{
      for (post of JSON.parse(posts.body).message){
          var node = document.createElement("div");
          node.classList.add("box2");
          var title = document.createElement("h5");
          title.classList.add("card-title");
          title.style.textAlign = "center"
          title.appendChild(document.createTextNode(post['title']));
          node.appendChild(title);

          var auth = document.createElement("p");
          auth.appendChild(document.createTextNode("نویسنده : "+post['created_by']));
          auth.style.textAlign = "right"
          auth.style.direction = "rtl"
          node.appendChild(auth);

          var desc = document.createElement("p");
          desc.appendChild(document.createTextNode(post['content']));
          desc.style.textAlign = "right"
          desc.style.height = "50px"
          desc.style.overflow = "hidden"
          node.appendChild(desc);



          //node.style.border = "thick solid #0000FF";
          node.style.margin = "5px";
          node.style.padding = "10px";
          node.style.height = "150px"
          node.style.overflow = "hidden"
          postsDiv.appendChild(node);
      }       
  })
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
	window.open("login.html","_self");
}



