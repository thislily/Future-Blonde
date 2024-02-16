import { displayComments } from "./create-comments.js";


const postContainer = document.querySelector(".post");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const anotherURL = "https://www.rainy-lily-days.one/wp-json/wp/v2/posts/"
const postURL = anotherURL + id
const currentBreadcrumb = document.getElementById("current-breadcrumb");

export async function getPost() {
  try {
    const response = await fetch(postURL);
    const post = await response.json();
    return post;
  } catch (error) {
    postContainer.innerHTML = displayError(
      `We couldn't find the post you were looking for, <a href="../../html/contact-us.html">contact us</a> for more info.`
    );
    
  }
  loader.classList.remove("loader");
}

//display item details
export async function displayPost(data) {
  let postHTML = "";

  postHTML = `
  <h1>${data.title.rendered}</h1>
  ${data.content.rendered}`;

  postContainer.innerHTML = postHTML;

  let currentBreadcrumbPost = document.querySelector(".post p")
  currentBreadcrumb.innerText = currentBreadcrumbPost.textContent;

  const postImages = document.querySelectorAll(".wp-block-image img");

  postImages.forEach((post) => {
    post.classList.add("image");
  })

 
}

//function runs on page load
export async function postPage() {
  const post = await getPost();
  displayPost(post);
  displayComments(id);
 
  
}


