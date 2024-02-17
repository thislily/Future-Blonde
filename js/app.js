import { handleNav } from "./UI/nav.js";
import { handleScroller, scroller } from "./UI/scroller.js";
import { handleCarousel } from "./render/create-carousel.js";
import { blogPage, getPosts, seeMorePosts } from "./render/fetch-posts.js";
import { postPage, id } from "./render/create-post.js";
import { createLightbox } from "./UI/lightbox.js";
import { handleContactForm } from "./forms/contact.js";
// import { handleCommentForm } from "./forms/comments.js";
// import { leaveAComment } from "./render/create-comments.js";

if (location.pathname === "/" || location.pathname === "/index.html") {
  handleCarousel();
}

document.addEventListener("DOMContentLoaded", () => {
  handleNav();
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

if (
  location.pathname === "/html/post/" ||
  location.pathname === "/html/post/?"
) {
  postPage();
  createLightbox();
  // leaveAComment();
  // handleCommentForm();
}

if (
  location.pathname === "/html/contact.html" ||
  location.pathname === "/html/contact"
) {
  handleContactForm();
}
