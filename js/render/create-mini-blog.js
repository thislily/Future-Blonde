export const miniBlogContainer = document.querySelector(".mini-blog-container");
export let miniArticleHTML = "";

//create html for mini articles for home page
export async function createMiniArticleHTML(post) {
  let featuredImageURL = post._embedded["wp:featuredmedia"][0].source_url;

  miniArticleHTML = `                                      
    <article>
    <h2>${post.title.rendered}</h2>
    <img
      class="mini-blog-img image"
      src="${featuredImageURL}"
      alt="${post.title.rendered}"
    />
    <div class="get-stacked centered-stack">
    ${post.excerpt.rendered}
      <a href="/html/post/?id=${post.id}" class="pink-button"
        >Read More<i class="fas fa-chevron-right"></i
      ></a>
    </div>
  </article>`;
}