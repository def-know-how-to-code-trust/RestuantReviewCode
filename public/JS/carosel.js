var carousel = document.getElementById("carousel");
var items = carousel.getElementsByTagName("img");
var currentItem = 0;

function showNextItem() {
  items[currentItem].style.display = "none";
  currentItem = (currentItem + 1) % items.length;
  items[currentItem].style.display = "block";
}

// Next button
//document.getElementById("next-button").addEventListener("click", showNextItem);

// Previous button
/*document.getElementById("prev-button").addEventListener("click", function() {
  items[currentItem].style.display = "none";
  currentItem = (currentItem + items.length - 1) % items.length;
  items[currentItem].style.display = "block";
});*/

// Automatic slideshow
setInterval(showNextItem, 2000);
