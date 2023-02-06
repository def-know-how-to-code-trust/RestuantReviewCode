
function onlogin_clicked(){
    console.log("login clicked")
    var url = "/users/login";
    var username = document.getElementById("ID").value;
    var password = document.getElementById("password").value;
    dataPack = {usrID:username,password:password};
    var request = new XMLHttpRequest();
    request.open("POST", url, true);
    request.setRequestHeader("Content-Type", "application/json");
    request.onload = function(){
        console.log("user logged in",dataPack);
    }
    var data = JSON.stringify(dataPack);
    request.send(data);
}

function user_register(){
    var User = new Object();
    User.user_id = document.getElementById("ID").value;
    User.user_name = document.getElementById("username").value;
    User.user_pass = document.getElementById("password").value;
    User.user_email = document.getElementById("email").value;
    User.user_contact = document.getElementById("contact").value;
    User.user_postal = document.getElementById("postal").value;
    confirm("Press a button!\nEither OK or Cancel.");
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
