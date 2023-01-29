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
    if(arr.length < 0){
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
        document.getElementById("rewBody").insertAdjacentHTML('beforebegin',html);
        var star = "";
            for (var j = 0; j < arr[i].revi_rating; j++) {
                console.log(i);
                star += "<img src='Images/Icons/Path 24.jpg' style='width:50px' />";
            }
            star += "<button id='delBtn' item='" + i + "' onClick='deleteComment(this)'></button>";
            star += "<div id='editBtn' data-target='#editRevModal' data-dismiss='modal' item='" + i + "' onClick='editComment(this)'></button>";
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
function addRev(){
    var review = new Object();
    review.revi_res_id=parseInt(sessionStorage.getItem("res_ID"));
    review.revi_user_id="test_user";
    review.revi_user_name=document.getElementById("nickname").value;
    review.revi_review = document.getElementById("userComments").value;
    review.revi_rating = rating;

    var postReview = new XMLHttpRequest();
    
}