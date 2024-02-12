import { displayError } from "../UI/messages.js";
import { createThumbnailHTML, thumbnailHTML } from "./create-thumbnail.js";
import { scroller } from "../UI/scroller.js";
import { createMiniArticleHTML, miniArticleHTML, miniBlogContainer } from "./create-mini-blog.js";


//recieve all products from API
export const url = "https://www.rainy-lily-days.one/wp-json/wp/v2/posts?_embed";
export const loader = document.querySelector(".loader");
export const blogGrid = document.querySelector(".blog-grid");

let currentPage = 1;
const maxPagesToShow = 2;

export async function getPosts(page = 1) {
  const perPage = 9;
  const responseUrl = `${url}&page=${page}&per_page=${perPage}`;

  try {
    const response = await fetch(responseUrl);
    const posts = await response.json();

    return posts;
  } catch (error) {
    console.error(error);
    loader.innerHTML = displayError(
      `We can not seem to access the blog posts right now, please <a href="/html/contact.html">contact us</a> for more information.`
    );
    loader.classList.remove("loader");
  }
}

export async function displayPosts(data) {
  for (let i = 0; i < data.length; i++) {
    createThumbnailHTML(data[i]);
    if (blogGrid) {
      blogGrid.innerHTML += thumbnailHTML;
      loader.classList.remove("loader")
    }

    if (scroller) {
      scroller.innerHTML += thumbnailHTML;
    }
  }

  for (let i = data.length - 1; i >= Math.max(data.length - 4, 0); i--) {
    createMiniArticleHTML(data[i]);
    if(miniBlogContainer) {
      miniBlogContainer.innerHTML += miniArticleHTML;
    }
  }

  loader.classList.remove("loader")


  if (currentPage >= maxPagesToShow) {
    document.getElementById("see-more-posts").style.display = "none";
  }
}

export async function blogPage() {
  const posts = await getPosts(currentPage);
  displayPosts(posts);
}

export function seeMorePosts() {
  document
    .getElementById("see-more-posts")
    .addEventListener("click", async () => {
      currentPage++; // Increment the current page
      const posts = await getPosts(currentPage);
      displayPosts(posts);
    });
}


// // Simplified function to fetch and display the first page of posts
// export async function miniBlog() {
//   try {
//     const response = await fetch(`${url}&page=1&per_page=9`); // Adjust per_page as needed
//     const posts = await response.json();

//     // Simplify the display function to just log out posts or show titles
//     posts.forEach(post => {
//       console.log(post.title.rendered); // Just log titles to ensure fetching works
//     });
//   } catch (error) {
//     console.error('Fetching posts failed:', error);
//   }
// }
