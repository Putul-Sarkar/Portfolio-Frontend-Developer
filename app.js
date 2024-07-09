// Get the button
let scrollBtn = document.getElementById("scrollBtn");

// Check the initial position
window.onload = function () {
  checkScrollPosition();
};

// When the user scrolls, check the position and toggle button appearance
window.onscroll = function () {
  checkScrollPosition();
};

function checkScrollPosition() {
  // Check if the user is at the bottom of the page
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 20) {
    scrollBtn.classList.add("upward");
    scrollBtn.innerHTML = "&uarr;"; // Upward arrow
  } else {
    scrollBtn.classList.remove("upward");
    scrollBtn.innerHTML = "&darr;"; // Downward arrow
  }
}

// Scroll function
function scrollFunction() {
  if (scrollBtn.classList.contains("upward")) {
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  }
}

//MODAL
$(document).ready(function () {
  $("#welcomeModal").modal("show");
});
