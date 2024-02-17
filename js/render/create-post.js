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

  // const commentSection = document.querySelector(".comments-section");
  // commentSection.innerHTML = ''; // Clear existing comments

  // // Accessing the first level of the replies array
  // let comments = data._embedded && data._embedded.replies ? data._embedded.replies[0] : null;

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


// //display item details
// export async function displayPost(data) {
//   let postHTML = "";
//   postHTML = `
//   <h1>${data.title.rendered}</h1>
//   ${data.content.rendered}`;

//   postContainer.innerHTML = postHTML;

//   let currentBreadcrumbPost = document.querySelector(".post p");
//   currentBreadcrumb.innerText = currentBreadcrumbPost.textContent;

//   const postImages = document.querySelectorAll(".wp-block-image img");

//   postImages.forEach((img) => {
//     img.classList.add("image");
//   });

//   const commentSection = document.querySelector(".comments-container");

//   let comment = data._embedded.replies;

//   console.log(comment);

//   if (comment) {
//     comment.forEach((comment) => {
//       let commentHTML = "";
//       commentHTML = `
         
//          <div class="comment-box">
//            <div>
//                <i class="fas fa-user-circle"></i>
//                <p class="bigger-p">${comment.author_name}</p>
//            </div>

//            <p class="big-p">${comment.content.rendered}</p>
//          </div>'
         
//        `;
//       commentSection.innerHTML += commentHTML;
//     });
//   } else {
//     commentSection.innerHTML += `<div class="comment-box"><p class="bigger-p"><i>No comments yet!</i></p></div>`;
//   }
// }

//function runs on page load
export async function postPage() {
  const post = await getPost();
  displayPost(post);
  // await displayComments(id);
}
