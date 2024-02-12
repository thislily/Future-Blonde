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
  location.pathname === "/index.html" ||
  location.pathname === "/html/contact.html" ||
  location.pathname === "/html/post/index.html"
) {
  handleScroller();
  blogPage();
}

// if(
//   location.pathname ==="/index.html" ||
//   location.pathname ==="/index"
// ){
// miniBlog();
// }

if (location.pathname === "/html/blog.html" ||
    location.pathname === "/html/blog"){
      blogPage();
      seeMorePosts();
    }