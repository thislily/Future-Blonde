import { createLightbox } from "./UI/lightbox.js";
import { handleNav } from "./UI/nav.js";
import { handleScroller } from "./UI/scroller.js";
import { blogPage, getPosts, seeMorePosts } from "./render/fetch-posts.js";

document.addEventListener("DOMContentLoaded", () => {
  handleNav();
  createLightbox();
  getPosts();
});

if (
  location.pathname === "/html/about.html" ||
  location.pathname === "/html/about" ||
  location.pathname === "/index.html" ||
  location.pathname === "/index" ||
  location.pathname === "/html/contact.html" ||
  location.pathname === "/html/contact" ||
  location.pathname === "/html/post/index.html" ||
  location.pathname === "/html/post/index"
) {
  handleScroller();
  blogPage();
}

if (
  location.pathname === "/html/blog.html" ||
  location.pathname === "/html/blog"
) {
  blogPage();
  seeMorePosts();
}
