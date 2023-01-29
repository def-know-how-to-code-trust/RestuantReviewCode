function getReviews() {
    var res_id = sessionStorage.getItem("res_ID")
    console.log(res_id);
    var request = new XMLHttpRequest();
    var rew_url_by_res = rew_url + "/" + res_id;
    request.open('GET', rew_url_by_res, true);
    request.onload = function () {
        rewArray = JSON.parse(request.responseText);
        console.log(rewArray);
        showReview(rewArray);
    };
    request.send();
}
function showReview(arr) {
    if (arr.length < 0) {
        document.getElementById("rewBody").textContent = "";
    }
    for (var i = 0; i < arr.length; i++) {
        var html = '<div class="text-center" style="width:100%;">                                                           \
        <div class="card">                                                                                  \
            <div class="card-body">                                                                         \
                <p class="card-text" id="rating' + i + '">' + arr[i].revi_review + "</p>               \
                <small>by " + arr[i].revi_user_name + " @ " + arr[i].revi_dateposted + "</small>   \
            </div>                                                                                          \
        </div>                                                                                              \
        </div>";
        document.getElementById("rewBody").insertAdjacentHTML('beforebegin', html);
        var star = "";
        for (var j = 0; j < arr[i].revi_rating; j++) {
            console.log(i);
            star += "<img src='Images/Icons/Path 24.jpg' style='width:50px' />";
        }
        star += "<button id='delBtn' item='" + i + "' onClick='delRev(this)'></button>";
        star += "<div id='editBtn' data-toggle='modal' data-target='#editRevModal' data-dismiss='modal' item='" + i + "' onClick='showEditRev(this)'></button>";
        document.getElementById("rating" + i).insertAdjacentHTML('beforebegin', star + "<br/>");
    }
}

function newRev() {
    //Initialise each HTML input elements in the modal window with default value.
    var modal = document.getElementById("addrevshow");
    modal.classList.remove("temphide");
    modal.classList.add("show-modal");

    rating = 0;
    document.getElementById("userComments").value = "";
    document.getElementById("nickname").value = "";
}
function addRev() {
    var review = new Object();
    review.revi_res_id = parseInt(sessionStorage.getItem("res_ID"));
    review.revi_user_id = "test_user";
    review.revi_user_name = document.getElementById("nickname").value;
    review.revi_review = document.getElementById("userComments").value;
    review.revi_rating = parseInt("4");

    var postReview = new XMLHttpRequest();
    postReview.open("POST", add_rew, true);
    postReview.setRequestHeader("Content-type", "application/json");
    postReview.onload = function () {
        console.log("new comment sent");
    };
    postReview.send(JSON.stringify(review));
}

function rateIt(element) {
    var num = element.getAttribute("value");
    var classname = element.getAttribute("class");
    var popcorns = document.getElementsByClassName(classname);
    var classTarget = "." + classname;

    // This is another way of writing 'for' loop, which initialises the 
    // popcorn images to use black and white.
    for (let popcorn of popcorns) {
        popcorn.setAttribute("src", popcornBWImage);
    }
    changePopcornImage(num, classTarget);
}

function changePopcornImage(num, classTarget) {
    switch (eval(num)) {
        case 1:
            document.querySelector(classTarget + "[value='1']").setAttribute("src", popcornImage);
            rating = 1;
            break;
        case 2:
            document.querySelector(classTarget + "[value='1']").setAttribute("src", popcornImage);
            document.querySelector(classTarget + "[value='2']").setAttribute("src", popcornImage);
            rating = 2;
            break;
        case 3:
            document.querySelector(classTarget + "[value='1']").setAttribute("src", popcornImage);
            document.querySelector(classTarget + "[value='2']").setAttribute("src", popcornImage);
            document.querySelector(classTarget + "[value='3']").setAttribute("src", popcornImage);
            rating = 3;
            break;
        case 4:
            document.querySelector(classTarget + "[value='1']").setAttribute("src", popcornImage);
            document.querySelector(classTarget + "[value='2']").setAttribute("src", popcornImage);
            document.querySelector(classTarget + "[value='3']").setAttribute("src", popcornImage);
            document.querySelector(classTarget + "[value='4']").setAttribute("src", popcornImage);
            rating = 4;
            break;
        case 5:
            document.querySelector(classTarget + "[value='1']").setAttribute("src", popcornImage);
            document.querySelector(classTarget + "[value='2']").setAttribute("src", popcornImage);
            document.querySelector(classTarget + "[value='3']").setAttribute("src", popcornImage);
            document.querySelector(classTarget + "[value='4']").setAttribute("src", popcornImage);
            document.querySelector(classTarget + "[value='5']").setAttribute("src", popcornImage);
            rating = 5;
            break;
    }
}

function showEditRev(element) {
    var item = element.getAttribute("item");
    currRes_True = item;

    document.getElementById("editnickname").value = rewArray[item].revi_user_name;
    document.getElementById("edituserComments").value = rewArray[item].revi_review;
    console.log(rewArray[item].revi_rating);
    displayColorPopcorn('editpop', rewArray[item].revi_rating);

}

function displayColorPopcorn(classname, num) {
    var pop = document.getElementsByClassName(classname);
    var classTarget = "." + classname;
    for (let p of pop) {
        p.setAttribute("src", popcornBWImage);
    }
    changePopcornImage(num, classTarget);
}

function updateRev(){
    var editRew_url = "/comments/update/"+rewArray[currRes_True]._id_review;
    var updateRew = new XMLHttpRequest();

    var review = new Object();
    review.revi_res_id = parseInt(sessionStorage.getItem("res_ID"));
    review.revi_user_id = "test_user";
    review.revi_user_name = document.getElementById("editnickname").value;
    review.revi_review = document.getElementById("edituserComments").value;
    review.revi_rating = parseInt("4");

    updateRew.open("PUT",editRew_url,true);
    updateRew.setRequestHeader("Content-Type", "application/json");
    updateRew.onload = function(){
        console.log(review);
    }
    updateRew.send(JSON.stringify(review));
}

function delRev(element){
    var item = element.getAttribute("item");
    var del_url = "/comments/delete/"+rewArray[item]._id_review;
    var delRewi = new XMLHttpRequest();
    delRewi.open("DELETE", del_url, true);
    delRewi.onload = function() {
        console.log(del_url);
    };
    delRewi.send();

}