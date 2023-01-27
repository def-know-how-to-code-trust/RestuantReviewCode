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
        <h5 style="padding-left:30px;cursor:pointer" data-toggle="modal" data-target="#resPage" class="card-title" item="' + count + '" onClick="">' + resName + '</h5></div>\
        </div>'
        table.insertAdjacentHTML('beforeend', cell);
        resCount++;

    }
    message = resCount + " Restruants";
    document.getElementById("summary").textContent = message;
    document.getElementById("parent").textContent = "";

}

