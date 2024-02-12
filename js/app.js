import { createLightbox } from "./UI/lightbox.js";
import { handleNav } from "./UI/nav.js";
import { handleScroller, scroller } from "./UI/scroller.js";
import { blogPage, getPosts, seeMorePosts } from "./render/fetch-posts.js";
import { postPage } from "./render/create-post.js";

document.addEventListener("DOMContentLoaded", () => {
  handleNav();
  createLightbox();
  getPosts();
  blogPage();
});

if (scroller) {
  handleScroller();
}

if (
  location.pathname === "/html/blog.html" ||
  location.pathname === "/html/blog"
) {
  seeMorePosts();
}

if (location.pathname === "/html/post/" || location.pathname === "/html/post/?"){
  postPage();
}
