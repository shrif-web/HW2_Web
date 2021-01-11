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

function validate_signup() {
  var Email = document.getElementById("Email_signup").value;
  var password = document.getElementById("password_signup").value;
  var confirm_password = document.getElementById("confirm_password").value;
  var checkbox = document.getElementById("c1")
  var send = true;
  if (Email.length == 0) {
    document.getElementById("error3").innerHTML = "لطفا یک آدرس ایمیل وارد کنید";
    error3.style.color = "red"
    document.getElementById("Email_signup").style.border = "2px solid red"
    send = false;
  }
  else {
    document.getElementById("error3").innerHTML = "";
    document.getElementById("Email_signup").style.border = "2px solid #0080ff"
  }
  if (password.length == 0) {
    document.getElementById("error4").innerHTML = "لطفا رمز عبور را وارد کنید"
    error4.style.color = "red"
    document.getElementById("password_signup").style.border = "2px solid red"
    var send = false;
  }
  else if (password.localeCompare(confirm_password)) {
    document.getElementById("error4").innerHTML = "";
    document.getElementById("password_signup").style.border = "2px solid #0080ff"
    document.getElementById("error5").innerHTML = "تکرار رمز عبور با رمز عبور یکسان نیست"
    error5.style.color = "red"
    document.getElementById("confirm_password").style.border = "2px solid red"
    var send = false;
  }
  else {
    document.getElementById("error5").innerHTML = "";
    document.getElementById("confirm_password").style.border = "2px solid #0080ff"
  }
  if (checkbox.checked == false) {
    document.getElementById("error6").innerHTML = "لطفا قوانین و شرایط را بپذیرید";
    error6.style.color = "red"
    var send = false;
  }
  else {
    document.getElementById("error6").innerHTML = "";
  }

  if(send) {
    let email = document.getElementById("Email_signup").value;
    let password = document.getElementById("password_signup").value;
    let data = {email, password};
 
    //alert(body);
    let url = "http://localhost:3000/api/signup";
    var response = posthttp(data, url);
    response.then(function(res) {
        alert(res.body + "\n" + res.status);
        //
        document.getElementById("Email_signup").value = "";
        document.getElementById("password_signup").value = "";
        document.getElementById("confirm_password").value = "";
        goadmin();


    });
  }

}


function goadmin(){
	window.open("admin.html","_self");
}



async function posthttp(data, url) {
  var formBody = [];
  for (var property in data) {
      var encodedKey = encodeURIComponent(property);
      var encodedValue = encodeURIComponent(data[property]);
      formBody.push(encodedKey + "=" + encodedValue);
  }
  formBody = formBody.join("&");
  
  var obj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      },
      body: formBody,
  };
  let response = await fetch(url, obj);
  let responsemessage = await response.text();
  return {body: responsemessage, status: response.status};
}



function validate() {
  var Email = document.getElementById("Email").value;
  var password = document.getElementById("password").value;
  var send = true;
  if (Email.length == 0) {
    document.getElementById("error1").innerHTML = "لطفا یک آدرس ایمیل وارد کنید";
    error1.style.color = "red"
    document.getElementById("Email").style.border = "2px solid red"
    send = false;
  }
  else {
    document.getElementById("error1").innerHTML = "";
    document.getElementById("Email").style.border = "2px solid #0080ff"
  }
  if (password.length == 0) {
    document.getElementById("error2").innerHTML = "لطفا رمز عبور را وارد کنید"
    error2.style.color = "red"
    document.getElementById("password").style.border = "2px solid red"
    send = false;
  }
  else {
    document.getElementById("error2").innerHTML = "";
    document.getElementById("password").style.border = "2px solid #0080ff"
  }

  if (send) {
    let email = document.getElementById("Email").value;
    let password = document.getElementById("password").value;
    let data = {email, password};
 
    //alert(body);
    let url = "http://localhost:3000/api/signin";
    var response = posthttp(data, url);
    response.then(function(res) {
        alert(res.body + "\n" + res.status);
        //
        document.getElementById("Email_signup").value = "";
        document.getElementById("password_signup").value = "";
        document.getElementById("confirm_password").value = "";
        goadmin();


    });
  }

}