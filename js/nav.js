const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.addEventListener("click", (e) => {
  // Check if the click target is not the hamburger and not the nav menu
  if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
    // If the navMenu is currently active, remove the 'active' class
    if (navMenu.classList.contains("active")) {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
    }
  }
});

// Prevent the document click from triggering when clicking on the hamburger
hamburger.addEventListener("click", (e) => {
  e.stopPropagation();
});
