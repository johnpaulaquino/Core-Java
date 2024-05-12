var nextButtons = document.querySelectorAll(".nextButton");
var prevButtons = document.querySelectorAll(".prevButton");

nextButtons.forEach(function(button) {
  button.addEventListener("click", function() {
    var currentPage = this.parentNode;
    var nextPage = currentPage.nextElementSibling;
    
    if (nextPage) {
      navigate(currentPage, nextPage);
    } else {
      alert("You have reached the end of the process.");
      // Here you can perform any action when the final step is reached
    }
  });
});

prevButtons.forEach(function(button) {
  button.addEventListener("click", function() {
    var currentPage = this.parentNode;
    var prevPage = currentPage.previousElementSibling;
    
    if (prevPage) {
      navigate(currentPage, prevPage);
    } else {
      alert("You are already at the beginning.");
      // Here you can perform any action when the first step is reached
    }
  });
});

function navigate(currentPage, targetPage) {
  currentPage.style.opacity = "0";
  setTimeout(function() {
    currentPage.style.display = "none";
    targetPage.style.display = "block";
    targetPage.style.opacity = "1";
  }, 500);
}
