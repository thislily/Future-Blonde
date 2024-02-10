import { createLightbox } from "./UI/lightbox.js";
import { handleNav } from "./UI/nav.js";

document.addEventListener('DOMContentLoaded', () => {
    handleNav();
    createLightbox();
  });