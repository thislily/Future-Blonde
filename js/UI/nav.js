//toggle and display hamburger menu.  also close on click outside of menu.
export function handleNav() {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  });

  document.addEventListener("click", (e) => {
    if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
      if (navMenu.classList.contains("active")) {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
      }
    }
  });

  hamburger.addEventListener("click", (e) => {
    e.stopPropagation();
  });

  //header hides when scrolling down, reappears when scrolling up.
  let lastScrollY = window.scrollY;

  window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
      // scrolling down
      document.querySelector(".navbar").classList.add("navbar-hidden");
    } else {
      // scrolling up
      document.querySelector(".navbar").classList.remove("navbar-hidden");
    }

    // update the last scroll position
    lastScrollY = currentScrollY;
  });
}
