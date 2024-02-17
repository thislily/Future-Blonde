//display some posts in a carousel from page 2 of posts, just so it's not all one image across the home page (since the scroller displays page 1)
async function fetchCarouselPosts() {
  const url =
    "https://www.rainy-lily-days.one/wp-json/wp/v2/posts?_embed&page=2&per_page=9";
  try {
    const response = await fetch(url);
    const posts = await response.json();
    return posts.map((post) => ({
      title: post.title.rendered,
      imageUrl: post._embedded["wp:featuredmedia"][0].source_url,
      id: post.id,
    }));
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
}

let currentPostIndex = 0;
let postsData = [];

async function setupCarousel() {
  postsData = await fetchCarouselPosts();

  const container = document.querySelector(".splash-image-container");
  container.innerHTML = '<div class="splash-image-controller"></div>';

  postsData.forEach((post, index) => {
    //create slides
    const slide = document.createElement("div");
    slide.className = "slide";
    slide.style.backgroundImage = `url(${post.imageUrl})`;
    slide.innerHTML = `
        <a class="overlay" href="/html/post/?id=${post.id}">
          <h2 class="overlay-text">${post.title}</h2>
        </a>
      `;
    container.insertBefore(slide, container.firstChild);
  });

  //create buttons
  postsData.forEach((_, index) => {
    const button = document.createElement("button");
    button.ariaLabel = "Select Post"
    button.className = "circle" + (index === 0 ? " filled-circle" : "");
    document.querySelector(".splash-image-controller").appendChild(button);
  });

  //add controls to buttons
  const buttons = document.querySelectorAll(".splash-image-controller .circle");
  buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
      currentPostIndex = index;
      updateCarousel();
    });
  });

  //update to show the first slide
  updateCarousel();

  //move to the next post every 3 seconds
  setInterval(() => {
    currentPostIndex = (currentPostIndex + 1) % postsData.length;
    updateCarousel();
  }, 3000);

 
  if (postsData.length > 0) {
    updateCarousel();
  }
}

function updateCarousel() {
  if (!postsData.length) return;

  const slides = document.querySelectorAll(".slide");
  const buttons = document.querySelectorAll(".splash-image-controller .circle");

  slides.forEach((slide) => slide.classList.remove("active"));
  buttons.forEach((button) => button.classList.remove("filled-circle"));

  slides[currentPostIndex].classList.add("active");
  buttons[currentPostIndex].classList.add("filled-circle");
}

//export carousel functionality to app.js
export function handleCarousel() {
  document.addEventListener("DOMContentLoaded", setupCarousel);

  document
    .querySelectorAll(".splash-image-controller .circle")
    .forEach((button, index) => {
      button.addEventListener("click", () => {
        currentPostIndex = index;
        updateCarousel();
      });
    });
}
