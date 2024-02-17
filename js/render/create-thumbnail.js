//create thumnail html
export let thumbnailHTML = "";

export async function createThumbnailHTML(post) {
    let featuredImageURL =  post._embedded['wp:featuredmedia'][0].source_url;

  thumbnailHTML = `                                      
  <a href="/html/post/?id=${post.id}" class="thumbnail">
    <img src="${featuredImageURL}" alt="${post.title.rendered}" />
    <h2>${post.title.rendered}</h2>
    ${post.excerpt.rendered}
  </a>`;
}