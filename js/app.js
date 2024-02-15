
import { handleNav } from "./UI/nav.js";
import { handleScroller, scroller } from "./UI/scroller.js";
import { handleCarousel } from "./render/create-carousel.js";
import { blogPage, getPosts, seeMorePosts } from "./render/fetch-posts.js";
import { postPage } from "./render/create-post.js";
import { createLightbox } from "./UI/lightbox.js";
import { handleContactForm } from "./forms/contact.js";
import { handleSubscribeForm } from "./forms/subscribe.js";
if (location.pathname === "/" || location.pathname === "/index.html") {
  handleCarousel();
}

document.addEventListener("DOMContentLoaded", () => {
  handleNav();
  getPosts();
  blogPage();
  handleSubscribeForm();
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
}

if (
  location.pathname === "/html/contact.html" ||
  location.pathname === "/html/contact"
) {
  handleContactForm();
}
