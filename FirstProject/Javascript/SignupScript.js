document.addEventListener('DOMContentLoaded', function() { 
    var pages = document.querySelectorAll('.page');
    var nextButtons = document.querySelectorAll('.next-signupbutton');
    var prevButtons = document.querySelectorAll('.previous-button'); // Select all "Back" buttons
    var emailInput = document.getElementById("signup-email").input;
    nextButtons.forEach(function(button, index) {
        button.addEventListener('click', function() {
            var currentPage = pages[index];
            var nextPage = pages[index + 1];
            if (nextPage) {
                navigate(currentPage, nextPage);
            } else {
                alert('You have reached the end of the signup process.');
                // You can perform any action here when the final step is reached
            }
        });
    });
    prevButtons.forEach(function(button, index) {
        button.addEventListener('click', function() {
            var currentPage = pages[index + 1]; // Adjust index to current page
            var prevPage = pages[index];
            currentPage.style.opacity = "0";
            if (prevPage) {
                setTimeout(function() {
                    currentPage.style.display = "none";
                    prevPage.style.display = "flex";
                    prevPage.style.opacity = "1";
                  }, 500);
            } else {
                alert('You are already on the first step.');
                // You can perform any action here if already on the first step
            }
        });
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