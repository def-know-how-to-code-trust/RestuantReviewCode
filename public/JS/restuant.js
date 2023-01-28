function getAllRes() {
    var request = new XMLHttpRequest();
    request.open('GET', res_url, true);

    request.onload = function () {
        resArray = JSON.parse(request.responseText);
        console.log(resArray);
        displayRes(catg)
    };
    request.send();
}
function displayRes(cate) {
    var table = document.getElementById("resTable");
    var resCount = 0;
    var message = "";
    table.innerHTML = "";
    totalRes = resArray.length;
    for (var count = 0; count < totalRes; count++) {
        console.log(count);
        var coverPic = resArray[count].res_coverPhoto;
        var resName = resArray[count].res_name;
        var cell = '<div class="card col-md-3" ><img class="card-img-top" src="' + coverPic + '" alt="Card image cap">\
        <div class="card-body"><i class="far fa-comment fa-lg" style="float:left;cursor:pointer" data-toggle="modal" data-target="#commentModal" item="' + count + '"></i>\
        <h5 style="padding-left:30px;cursor:pointer" item="' + count + '" onmouseenter="setCurrRes(this)"><a href="ResPage.html">' + resName + '</a></h5>'
        table.insertAdjacentHTML('beforeend', cell);
        resCount++;

    }
    message = resCount + " Restruants";
    document.getElementById("summary").textContent = message;
    document.getElementById("parent").textContent = "";

}

function showResPage(){
    console.log("loaded once")
    currRes_True = sessionStorage.getItem("resIn");
    console.log(currRes_True)
    document.getElementById("resName").textContent=resArray[currRes_True].res_name;
}
function setCurrRes(element){
    currRes_True = element.getAttribute("item");
    sessionStorage.setItem("resIn",currRes_True);
    console.log(currRes_True);
}
function getAllRes_Page() {
    console.log("here work");
    var request = new XMLHttpRequest();
    request.open('GET', res_url, true);

    request.onload = function () {
        resArray = JSON.parse(request.responseText);
        console.log(resArray);
        showResPage();
    };
    request.send();
}