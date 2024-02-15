




// import { displayError } from "../UI/messages.js";
// import { createThumbnailHTML, thumbnailHTML } from "./create-thumbnail.js";
// import { scroller } from "../UI/scroller.js";
// import { createMiniArticleHTML, miniArticleHTML, miniBlogContainer } from "./create-mini-blog.js";
// import { createLightbox } from "../UI/lightbox.js";




// //recieve all products from API
// export const url = "https://www.rainy-lily-days.one/wp-json/wp/v2/posts?_embed";
// export const loader = document.querySelector(".loader");
// export const blogGrid = document.querySelector(".blog-grid");

// let currentPage = 1;
// const maxPagesToShow = 2;

// export async function getPosts(page = 1) {
//   const perPage = 9;
//   const responseUrl = `${url}&page=${page}&per_page=${perPage}`;

//   try {
//     const response = await fetch(responseUrl);
//     const posts = await response.json();

//     return posts;
//   } catch (error) {
//     console.error(error);
//     loader.innerHTML = displayError(
//       `We can not seem to access the blog posts right now, please <a href="/html/contact.html">contact us</a> for more information.`
//     );
//     loader.classList.remove("loader");
//   }
// }

// export async function displayPosts(data) {
//   for (let i = 0; i < data.length; i++) {
//     createThumbnailHTML(data[i]);
//     if (blogGrid) {
//       blogGrid.innerHTML += thumbnailHTML;
//       loader.classList.remove("loader");
//       console.log(data[i].categories);
//     }

//     if (scroller) {
//       scroller.innerHTML += thumbnailHTML;
//     }
//   }

//   for (let i = data.length - 1; i >= Math.max(data.length - 4, 0); i--) {
//     createMiniArticleHTML(data[i]);
//     if(miniBlogContainer) {
//       miniBlogContainer.innerHTML += miniArticleHTML;
//     }
//   }
//   loader.classList.remove("loader")


//   if (currentPage >= maxPagesToShow) {
//     document.getElementById("see-more-posts").style.display = "none";
//   }

  

// }

// export async function blogPage() {
//   const posts = await getPosts(currentPage);
//   displayPosts(posts);
//   createLightbox();
// }

// export function seeMorePosts() {
//   document
//     .getElementById("see-more-posts")
//     .addEventListener("click", async () => {
//       currentPage++; // Increment the current page
//       const posts = await getPosts(currentPage);
//       displayPosts(posts);
//     });
// }


import { displayError } from "../UI/messages.js";
import { createThumbnailHTML, thumbnailHTML } from "./create-thumbnail.js";
import { scroller } from "../UI/scroller.js";
import { createMiniArticleHTML, miniArticleHTML, miniBlogContainer } from "./create-mini-blog.js";
import { createLightbox } from "../UI/lightbox.js";

export const url = "https://www.rainy-lily-days.one/wp-json/wp/v2/posts?_embed";
export const loader = document.querySelector(".loader");
export const blogGrid = document.querySelector(".blog-grid");
const seeMorePostsButton = document.getElementById("see-more-posts");

let currentPage = 1;
const increasedPerPage = 100;
let allPosts = []; // Track all loaded posts

// Mapping of category numbers to category names
const categoryMapping = {
  1: "All Posts",
  18: "Fashion",
  19: "Lifestyle",
  20: "Health",
  21: "Survival"
};

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


export async function displayPosts(data) {

  if(blogGrid){
      blogGrid.innerHTML = ""; // Clear the previous posts
  }

  for (let i = 0; i < data.length; i++) {
    createThumbnailHTML(data[i]);
    if(blogGrid){
      blogGrid.innerHTML += thumbnailHTML;
    }

    if (scroller) {
      scroller.innerHTML += thumbnailHTML;
    }
    
    loader.classList.remove("loader");
  }

  for (let i = data.length - 1; i >= Math.max(data.length - 4, 0); i--) {
    createMiniArticleHTML(data[i]);
    if (miniBlogContainer) {
      miniBlogContainer.innerHTML += miniArticleHTML;
    }
  }
  loader.classList.remove("loader");



  }


export async function blogPage() {
  const posts = await getPosts(currentPage);
  allPosts.push(...posts); // Add newly loaded posts to allPosts array
  displayPosts(posts);
  createLightbox();
  filterPosts();
  displayCategories();
}

export async function seeMorePosts() {

  seeMorePostsButton.addEventListener("click", async () =>{

  // Reset currentPage to 1 if you want to reload from the start with more posts, or manage accordingly
  currentPage = 1; // Optional, based on how you want to handle pagination
  const posts = await getPosts(currentPage, increasedPerPage);
  allPosts = [...posts]; // Replace or append to allPosts array based on your requirement
  displayPosts(posts);
  seeMorePostsButton.style.display = "none";
  })

}


// Add event listener to the select element for filtering
export function filterPosts(){
  const filter = document.getElementById("filter");

  if (filter){
      filter.addEventListener("change", async (event) => {
    const selectedCategory = event.target.value;
    let filteredPosts = []; // Initialize an array to store filtered posts
    if (selectedCategory === "all") {
      // If "All Posts" is selected, display all posts
      filteredPosts = allPosts; // Use allPosts array for filtering
    } else {
      // Otherwise, filter posts based on the selected category
      filteredPosts = allPosts.filter(post => post.categories.includes(parseInt(selectedCategory)));
    }
    displayPosts(filteredPosts);
  });
  }

}

// display the select element with category options
export function displayCategories() {
  const selectFilter = document.getElementById("filter");

  if (selectFilter){
  for (const [key, value] of Object.entries(categoryMapping)) {
    const option = document.createElement("option");
    option.value = key;
    option.textContent = value;
    selectFilter.appendChild(option);
  }
  }

}

