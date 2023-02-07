function onlogin_clicked(){
    console.log("login clicked")
    var url = "/users/login";
    var username = document.getElementById("ID").value;
    sessionStorage.setItem("uID",username);
    var password = document.getElementById("password").value;
    dataPack = {usrID:username,password:password};
    var request = new XMLHttpRequest();
    request.open("POST", url, true);
    request.setRequestHeader("Content-Type", "application/json");
    var data = JSON.stringify(dataPack);
    request.onload = function(){
        console.log("user logged in",dataPack);
        console.log(data);
        var toaken = JSON.parse(request.responseText);
        console.log(toaken);
        sessionStorage.setItem("token",toaken);
    }
    request.send(data);
    if (sessionStorage.getItem("token") != null){
        confirm("You are logged in");
        window.location.href = "index.html";
    }
    else{
        confirm("Error tyrying to log in please try again");
    }
    

}

function user_register(){
    var User = new Object();
    User.user_id = document.getElementById("ID").value;
    User.user_name = document.getElementById("username").value;
    User.user_pass = document.getElementById("password").value;
    User.user_email = document.getElementById("email").value;
    User.user_contact = document.getElementById("contact").value;
    User.user_postal = document.getElementById("postal").value;
    confirm("Are you sure you want to sign up?\nEither OK or Cancel.");
    var register = new XMLHttpRequest();
    register.open("POST","/users/add",true);
    register.setRequestHeader("Content-Type", "application/json");
    register.onload = function(){
        console.log("user registered",User);
    }
    register.send(JSON.stringify(User));
    //return back to index.html
    window.location.href = "index.html";
}

function getUserDeet(){
    var url = "/users/get/";
    var UserID  = sessionStorage.getItem("uID");
    var request = new XMLHttpRequest();
    request.open("GET", url+UserID, true);
    
    request.onload = function(){
        var user = JSON.parse(request.responseText);
        console.log(user);
        // console.log(user[0].user_name);
        sessionStorage.setItem("username",user[0].user_name);
        sessionStorage.setItem("useremail",user[0].user_email);
        sessionStorage.setItem("usercontact",user[0].user_contact);
        sessionStorage.setItem("userpostal",user[0].user_postal);
        sessionStorage.setItem("userpic",user[0].user_pic);
    }
    request.send();
    setUserDeets();
}

function setUserDeets(){
    console.log("setting user deets");
    // console.log(sessionStorage.getItem("username"));
    document.getElementById("PIMG").src = sessionStorage.getItem("userpic");
    document.getElementById("PID").textContent = sessionStorage.getItem("uID");
    document.getElementById("PNAME").textContent = sessionStorage.getItem("username");
    document.getElementById("PEMAIL").textContent = sessionStorage.getItem("useremail");
    document.getElementById("PNUM").textContent = sessionStorage.getItem("usercontact");
    document.getElementById("PPOSTAL").textContent = sessionStorage.getItem("userpostal");
}

function logout(){
    sessionStorage.clear();
    window.location.href = "index.html";
}