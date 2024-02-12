import { createLightbox } from "./UI/lightbox.js";
import { handleNav } from "./UI/nav.js";
import { handleScroller, scroller } from "./UI/scroller.js";
import { blogPage, getPosts, seeMorePosts } from "./render/fetch-posts.js";

document.addEventListener("DOMContentLoaded", () => {
  handleNav();
  createLightbox();
  getPosts();
  blogPage();
});

// if (
//   location.pathname === "/html/about.html" ||
//   location.pathname === "/html/about" ||
//   location.pathname === "/html/contact.html" ||
//   location.pathname === "/html/contact" ||
//   location.pathname === "/html/post/index.html" ||
//   location.pathname === "/html/post/index"
// ) {
//   handleScroller();
//   blogPage();
// }

// if (location.pathname === "/" || location.pathname === "/index.html") {
//   handleScroller();
//   blogPage();
// }

if (scroller) {
  handleScroller();
}

if (
  location.pathname === "/html/blog.html" ||
  location.pathname === "/html/blog"
) {
  seeMorePosts();
}
