function signup() {
    
    let email = document.getElementById('femailsignup').value;
    let password = document.getElementById('fpasssignup').value;   
    alert(`email: ${email}\npassword: ${password}`)
    let URL = 'http://localhost:3000/api/signup';
    
    $.post(URL)
    .done(function( data ) {
        alert( "Data Loaded: " + data );
    })
    
    
};

function getUser(){
    let URL = 'http://localhost:3000/api/getuser';
    $.post(URL)
    .done(function( data ) {
        alert( "Data Loaded: " + data );
    })

}

function signin(){
    let email = document.getElementById('femailsignup').value;
    let password = document.getElementById('fpasssignup').value;
    let URL = 'http://localhost:3000/api/signin';
    $.post(URL, {email, password})
    .done(function( data ) {
        alert( "Data Loaded: " + data );
    })


}