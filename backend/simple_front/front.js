window.onload = function () {
    document.getElementById("signinbutton").addEventListener("click", signin);
    showPosts();
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

async function gethttp(url){
    let response = await fetch(url);
    let responsemessage = await response.text();
    return {body: responsemessage, status: response.status};
}

function signin() {
    let email = document.getElementById("femailsignin").value;
    let password = document.getElementById("fpasssignin").value;
    let data = {email, password};
    document.getElementById('responseFromBack').innerHTML = "bye";
 
    //alert(body);
    let url = "http://localhost:3000/api/signin";
    var response = posthttp(data, url);
    response.then(function(res) {
        alert(res.body + "\n" + res.status);
    });
}

function showPosts(){
    let postsDiv = document.getElementById("posts");
    let url = "http://localhost:3000/api/post/";
    let response = gethttp(url);
    response.then(posts =>{
        for (post of JSON.parse(posts.body).message){
            var node = document.createElement("div");
            for(element in post){
                var para = document.createElement("p");
                var paraNode = document.createTextNode(element +" : " + post[element]);
                para.appendChild(paraNode);
                node.appendChild(para);
            }
            node.style.border = "thick solid #0000FF";
            node.style.margin = "10px";
            node.style.padding = "10px";
            postsDiv.appendChild(node);
        }       
    })
}




