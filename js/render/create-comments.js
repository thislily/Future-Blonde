//I could for some reason display comments, and send it comments successfully, but when I tried to run both functions, it always fell apart.  After a couple days and frantic googling I just gave up. Hopefully can get some answers and go back to fix it later.  Everything below is kind of a mess because I had to give up in the middle of tearing it apart again.






// export function leaveAComment() {
//     document.body.addEventListener('click', function(event) {
//         if (event.target.id === 'show-comments-form') {
//           console.log('Button clicked');
//           document.getElementById('comments-form').style.display = 'flex';
//           event.target.style.display = 'none';
//           document.getElementById('show-comments-form-container').style.display= 'none';
//         }
//       });
      
//   }
  

// const commentsURL =
//   "https://www.rainy-lily-days.one/wp-json/wp/v2/comments?post=";

// async function fetchComments(postId) {
//   try {
//     const response = await fetch(`${commentsURL}${postId}`);
//     if (!response.ok) {
//       throw new Error("Failed to fetch comments");
//     }
//     const comments = await response.json();
//     console.log(window.location.href)
//     console.log(comments);
//     return comments;
//   } catch (error) {
//     console.error("Error fetching comments:", error);
//     console.log(window.location.href)
//     return [];
//   }
// }

// export function  createComment() {

//      let commentHTML =""
//      commentHTML= `
          
//           <div class="comment-box">
//             <div>
//                 <i class="fas fa-user-circle"></i>
//                 <p class="bigger-p">${comment.author_name}</p>
//             </div>

//             <p class="big-p">${comment.content.rendered}</p>
//           </div>'
          
//         `;
// }
