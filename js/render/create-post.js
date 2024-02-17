// import { displayComments } from "./create-comments.js";
// import { handleCommentForm } from "../forms/comments.js";
// import { createComment } from "./create-comments.js";


const postContainer = document.querySelector(".post");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
export const id = params.get("id");
const anotherURL = "https://www.rainy-lily-days.one/wp-json/wp/v2/posts/";
const postURL = anotherURL + id + "?_embed";
const currentBreadcrumb = document.getElementById("current-breadcrumb");

//get post data based on id from query string
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


//find and define meta description
function updateMetaDescription(content) {
  let metaDescription = document.querySelector('meta[name="description"]');

  if (!metaDescription) {
    metaDescription = document.createElement('meta');
    metaDescription.setAttribute('name', 'description');
    document.getElementsByTagName('head')[0].appendChild(metaDescription);
  }

  metaDescription.setAttribute('content', content);
}

//display post content
export async function displayPost(data) {
  let postHTML = `
  <h1>${data.title.rendered}</h1>
  ${data.content.rendered}`;
  postContainer.innerHTML = postHTML;

  let currentBreadcrumbPost = document.querySelector(".post p");
  currentBreadcrumb.innerText = currentBreadcrumbPost.textContent;

  const postImages = document.querySelectorAll(".wp-block-image img");
  postImages.forEach((img) => {
    img.classList.add("image");
  });

  //update the meta description with the post title
  const newMetaDescriptionContent = `Check out this week's post, ${data.title.rendered}`;
  updateMetaDescription(newMetaDescriptionContent);

  //Below are remnants of one attempt at a comments section. Just ignore this

  
  // const commentSection = document.querySelector(".comments-section");
  // commentSection.innerHTML = '';


  // let comments = data._embedded.replies;

  // if (comments && comments.length > 0) {
  //   comments.forEach((comment) => {
  //     let commentHTML = `
  //       <div class="comment-box">
  //         <div>
  //           <i class="fas fa-user-circle"></i>
  //           <p class="bigger-p">${comment.author_name}</p>
  //         </div>
  //         <p class="big-p">${comment.content.rendered}</p>
  //       </div>`;
  //     commentSection.innerHTML += commentHTML;
  //   });
  // } else {
  //   commentSection.innerHTML += `<div class="comment-box"><p class="bigger-p"><i>No comments yet!</i></p></div>`;
  // }
}


//function runs on page load
export async function postPage() {
  const post = await getPost();
  displayPost(post);
}
