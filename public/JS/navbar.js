function chekLog() {
    sessionStorage.getItem("token");
    if (sessionStorage.getItem("token") != "SUCCESS") {
        console.log("not logged in");
        document.getElementById("log").style.display = "block";
        document.getElementById("sign").style.display = "block";
        document.getElementById("out").style.display = "none";
        document.getElementById("pro").style.display = "none";
    }
    else {
        console.log("logged in");
        document.getElementById("log").style.display = "none";
        document.getElementById("sign").style.display = "none";
        document.getElementById("out").style.display = "block";
        document.getElementById("pro").style.display = "block";
    }
}