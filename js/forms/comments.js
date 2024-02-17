// import { displayError, displayHappyMessage } from "../UI/messages.js";

// const username = 'rainy-lily-days.one'; // Your WordPress username
// const applicationPassword = '8G6q 3N5e lagb 6nMx xiOr MFSL'; // Your WordPress Application Password

// // Combine username and password, then encode in Base64
// const encodedCredentials = btoa(`${username}:${applicationPassword}`);

// const commentsURL = "https://www.rainy-lily-days.one/wp-json/wp/v2/comments"

// export function handleCommentForm() {
//   document.addEventListener("DOMContentLoaded", () => {
//     const form = document.getElementById("comments-form");
//     const messageContainer = document.querySelector('.message-container');

//     form.addEventListener("", function (e) {
//       e.preventDefault(); // Prevent the default form submission

//       const name = document.getElementById("commenter-name").value.trim();
//       const email = document.getElementById("commenter-email").value.trim();
//       const comment = document.getElementById("comment").value.trim();

//       if (name.length < 2) {
//         messageContainer.innerHTML = displayError("Name must be at least 2 characters long.");
//         return;
//       }

//       const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//       if (!emailRegex.test(email)) {
//         messageContainer.innerHTML = displayError("Please enter a valid email address.");
//         return;
//       }

//       const formData = JSON.stringify({
//         author_name: name,
//         author_email: email,
//         content: comment,
//         post: id,
//       });

//       fetch(commentsURL, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           "Authorization": `Basic ${encodedCredentials}`, // Use the encoded auth string here
//         },
//         body: formData,
//       })
//       .then(response => {
//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         return response.json();
//       })
//       .then(() => {
//         messageContainer.innerHTML = displayHappyMessage("Your comment was submitted successfully!");
//         form.reset();
//       })
//       .catch((error) => {
//         console.error("Error:", error);
//         messageContainer.innerHTML = displayError("An error occurred while submitting your comment. Please try again.");
//       });
      
//     });

//     // form.reset();
//   });
// }
