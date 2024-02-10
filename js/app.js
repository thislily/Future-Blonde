import { createLightbox } from "./UI/lightbox.js";
import { handleNav } from "./UI/nav.js";
import { handleScroller } from "./UI/scroller.js";

document.addEventListener('DOMContentLoaded', () => {
    handleNav();
    createLightbox();
    handleScroller();
  });