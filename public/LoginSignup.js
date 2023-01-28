var form = document.querySelector("form");
form.addEventListener("submit", function(event) {
  event.preventDefault();
  var username = document.querySelector("#username").value;
  var password = document.querySelector("#password").value;
  if (username === "" || password === "") {
    alert("Please enter a username and password");
    return;
  }
  if (password.length < 8) {
    alert("Password must be at least 8 characters long");
    return;
  }
  //submit form to server
});
