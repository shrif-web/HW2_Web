window.onload = function () {
    document.getElementById("createpost").addEventListener("click", createpost);
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

function createpost() {
    let url = "http://localhost:3000/api/admin/post/crud";
    let title = document.getElementById("titlecreatepost").value;
    let content = document.getElementById("contentcreatepost").value;
    let data = {title, content};
    posthttp(data, url).then(response =>{
        alert(response.body);
    })
    

}













