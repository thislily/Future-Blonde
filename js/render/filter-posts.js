import { getPost } from "./create-post.js";
import { createThumbnailHTML, thumbnailHTML } from "./create-thumbnail.js";
import { blogGrid } from "./fetch-posts.js";

// const seeLatestButton = document.getElementById("see-latest-button");
const filter = document.getElementById("filter");

//display only fashion category
export async function displayFashion(data) {
  blogGrid.innerHTML = "";

  for (let i = 0; i < data.length; i++) {
    const categories = data[i].categories;
    if (categories.includes(18)) { // Use includes() instead of contains()
      continue;
    }
    createThumbnailHTML(data[i]);
    blogGrid.innerHTML += thumbnailHTML;
  }
  loader.classList.remove("loader");
}

export async function fashion(){
    const posts = await getPosts();
    displayFashion(posts);
  }; 

//display only survival category
export async function displaySurvival(data) {
  blogGrid.innerHTML = "";

  for (let i = 0; i < data.length; i++) {
    const categories = data[i].categories;
    if (categories.includes(21)) { // Use includes() instead of contains()
      continue;
    }
    createThumbnailHTML(data[i]);
    blogGrid.innerHTML += thumbnailHTML;
  }
  loader.classList.remove("loader");
}

export async function survival(){
    const posts = await getPosts();
    displaySurvival(posts);
  }; 

export async function filterPosts(data) {
  const selectedIndex = filter.selectedIndex;
  if (selectedIndex === 2) {
    fashion();
  } else if (selectedIndex === 5) {
    survival();
  }
}






// import { createThumbnailHTML, thumbnailHTML } from "./create-thumbnail.js";
// import { blogGrid } from "./fetch-posts.js";

// // const seeLatestButton = document.getElementById("see-latest-button");
// const filter = document.getElementById("filter");

// //display only fashion category
// export async function displayFashion(data) {
//   blogGrid.innerHTML = "";

//   for (let i = 0; i < data.length; i++) {
//     const categories = data[i].categories;
//     if (categories.contains(18)) {
//       continue;
//     }
//     createThumbnailHTML(data[i]);
//     blogGrid.innerHTML += thumbnailHTML;
//   }
//   loader.classList.remove("loader");
// }

// //display only survival category
// export async function displaySurvival(data) {
//   blogGrid.innerHTML = "";

//   for (let i = 0; i < data.length; i++) {
//     const categories = data[i].categories;
//     if (categories.contains(21)) {
//       continue;
//     }
//     createThumbnailHTML(data[i]);
//     blogGrid.innerHTML += thumbnailHTML;
//   }
//   loader.classList.remove("loader");
// }

// export async function filterPosts() {
//   if (filter.options[2]) {
//     displayFashion();
//   } else if (filter.options[5]) {
//     displaySurvival();
//   }
// }
