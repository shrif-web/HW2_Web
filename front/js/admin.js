window.onload = function () {
    document.getElementById("createpost").addEventListener("click", createpost);
    document.getElementById("updatepost").addEventListener("click", sendeditpost);
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
    return { body: responsemessage, status: response.status };
}

async function gethttp(url) {
    let response = await fetch(url);
    let responsemessage = await response.text();
    return { body: responsemessage, status: response.status };
}

function createpost() {
    let url = "http://localhost:3000/api/admin/post/crud";
    let title = document.getElementById("titlecreatepost").value;
    let content = document.getElementById("contentcreatepost").value;
    let data = { title, content };
    posthttp(data, url).then(response => {
        alert(response.body);
    })


}


function showPosts(){
    let postsDiv = document.getElementById("showPosts");
    let url = "http://localhost:3000/api/post/";
    let response = gethttp(url);
    response.then(posts =>{
        for (post of JSON.parse(posts.body).message){
            var node = document.createElement("div");
            node.classList.add("box2");
            var title = document.createElement("h5");
            title.classList.add("card-title");
            title.style.textAlign = "center"
            node.appendChild(title);
            
            title.appendChild(document.createTextNode(post['title']));
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
            
            const postId = post["id"];

            var updateb = document.createElement("button");
            updateb.classList.add('ui','primary', 'button')
            updateb.innerHTML = "update"
            updateb.onclick = function() {
                updatePost(postId);
            }
            node.appendChild(updateb);


            var deletebutton = document.createElement("button");
            deletebutton.classList.add('ui','primary', 'button')
            deletebutton.innerHTML = "delete"
            //deletebutton.addEventListener("click", deletePost(postId));
            deletebutton.onclick = function(){
                deletePost(postId).then(msg =>{
                    alert(msg.body + "\n" + msg.status);
                    location.reload();
                })
            }
            node.appendChild(deletebutton);

            var read = document.createElement("button");
            read.classList.add('ui','primary', 'button')
            read.innerHTML = "read"
            read.onclick = function() {
                readPost()
            }
            node.appendChild(read);

            node.style.margin = "5px";
            node.style.padding = "10px";
            //node.style.height = "150px"
            //node.style.overflow = "hidden"
            node.style.backgroundColor = "#A9A9A9"
            postsDiv.appendChild(node);
        }       
    })
}



async function deletePost(id) {
    const url = "http://localhost:3000/api/admin/post/crud/" + id ;
    var obj = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        },
    };

    let response = await fetch(url, obj);
    let responsemessage = await response.text();
    return { body: responsemessage, status: response.status };
}

function updatePost(id) {
    let postsDiv = document.getElementById("allposts");
    postsDiv.style.display = "none"
    let updateDiv = document.getElementById("editpost");
    updateDiv.idval = id
    updateDiv.style.display = "block"
}

async function puthttp(data, url) {
    var formBody = [];
    for (var property in data) {
        var encodedKey = encodeURIComponent(property);
        var encodedValue = encodeURIComponent(data[property]);
        formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");

    var obj = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        },
        body: formBody,
    };

    let response = await fetch(url, obj);
    let responsemessage = await response.text();
    return { body: responsemessage, status: response.status };
}


function sendeditpost() {
    let updateDiv = document.getElementById("editpost");
    let url = 'http://localhost:3000/api/admin/post/crud/' + updateDiv.idval;
    let title = document.getElementById("titleupdatepost").value;
    let content = document.getElementById("contentupdatepost").value;
    let data = { title, content };
    puthttp(data, url).then(response => {
        alert(response.body);
    })
    
}

function readPost(id) {
    let postsDiv = document.getElementById("allposts");
    postsDiv.style.display = "none"
    let updateDiv = document.getElementById("readpost");
    updateDiv.style.display = "block"
    let url = 'http://localhost:3000/api/admin/post/crud/' + id;
    gethttp(url).then(value => {
        let mypost = value.body;   
        alert(mypost)
        document.getElementById("titleread").innerHTML = mypost.title;
        document.getElementById("createdbyread").innerHTML = mypost['created_by'];
        document.getElementById("contentread").innerHTML = JSON.stringify(mypost);
    })

}






