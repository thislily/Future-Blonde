import { displayError } from "../UI/messages.js";
import { createThumbnailHTML, thumbnailHTML } from "./create-thumbnail.js";
import { scroller } from "../UI/scroller.js";
import {
  createMiniArticleHTML,
  miniArticleHTML,
  miniBlogContainer,
} from "./create-mini-blog.js";
import { createLightbox } from "../UI/lightbox.js";
import { displayCategories, filterPosts } from "./filter-posts.js";

export const url = "https://www.rainy-lily-days.one/wp-json/wp/v2/posts?_embed";
export const loader = document.querySelector(".loader");
export const blogGrid = document.querySelector(".blog-grid");
const seeMorePostsButton = document.getElementById("see-more-posts");

let currentPage = 1;
const increasedPerPage = 100;
export let allPosts = [];

//fetch posts from page 1
export async function getPosts(page = 1, perPage = 9) {
  const responseUrl = `${url}&page=${page}&per_page=${perPage}`;
  try {
    const response = await fetch(responseUrl);
    const posts = await response.json();
    return posts;
  } catch (error) {
    console.error(error);
    loader.innerHTML = displayError(
      `We cannot seem to access the blog posts right now, please <a href="/html/contact.html">contact us</a> for more information.`
    );
    loader.classList.remove("loader");
  }
}

// display posts at various locations
export async function displayPosts(data) {
  if (blogGrid) {
    blogGrid.innerHTML = "";
  }

  //create thumbnails from posts data
  for (let i = 0; i < data.length; i++) {
    createThumbnailHTML(data[i]);

    //display posts to blog grid
    if (blogGrid) {
      blogGrid.innerHTML += thumbnailHTML;
    }

    //display posts to scroller
    if (scroller) {
      scroller.innerHTML += thumbnailHTML;
    }

    loader.classList.remove("loader");
  }

  //create mini articles from posts data
  for (let i = data.length - 1; i >= Math.max(data.length - 4, 0); i--) {
    createMiniArticleHTML(data[i]);

    //display mini articles to mini blog area on home
    if (miniBlogContainer) {
      miniBlogContainer.innerHTML += miniArticleHTML;
    }
  }
  loader.classList.remove("loader");
}

//export function to app.js
export async function blogPage() {
  const posts = await getPosts(currentPage);
  allPosts.push(...posts);
  displayPosts(posts);
  createLightbox();
  filterPosts();
  displayCategories();
}

//display posts from page 1, but now its max per page is 100 (sort of cheating because there are not that many posts, so I just hide the "see more" button after)
export async function seeMorePosts() {
  seeMorePostsButton.addEventListener("click", async () => {
    const posts = await getPosts(currentPage, increasedPerPage);
    allPosts = [...posts];
    displayPosts(posts);
    seeMorePostsButton.style.display = "none";
  });
}
