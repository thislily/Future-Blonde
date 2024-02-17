export function leaveAComment() {
    document.body.addEventListener('click', function(event) {
        if (event.target.id === 'show-comments-form') {
          console.log('Button clicked');
          document.getElementById('comments-form').style.display = 'flex';
          event.target.style.display = 'none';
          document.getElementById('show-comments-form-container').style.display= 'none';
        }
      });
      
  }
  
  

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

export function  createComment() {

     let commentHTML =""
     commentHTML= `
          
          <div class="comment-box">
            <div>
                <i class="fas fa-user-circle"></i>
                <p class="bigger-p">${comment.author_name}</p>
            </div>

            <p class="big-p">${comment.content.rendered}</p>
          </div>'
          
        `;
}
