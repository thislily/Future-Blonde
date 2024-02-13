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
  postsData = await fetchCarouselPosts(); // Fetch posts

  // Clear existing slides before adding new ones
  const container = document.querySelector(".splash-image-container");
  container.innerHTML = '<div class="splash-image-controller"></div>'; // Prepare the container for new content

  // Generate slides
  postsData.forEach((post, index) => {
    // Create slide element
    const slide = document.createElement("div");
    slide.className = "slide";
    slide.style.backgroundImage = `url(${post.imageUrl})`;
    slide.innerHTML = `
        <a class="overlay" href="/html/post/?id=${post.id}">
          <h2 class="overlay-text">${post.title}</h2>
        </a>
      `;
    container.insertBefore(slide, container.firstChild); // Insert slide before the controller
  });

  // Generate control buttons
  postsData.forEach((_, index) => {
    const button = document.createElement("button");
    button.className = "circle" + (index === 0 ? " filled-circle" : ""); // Mark the first button as active
    document.querySelector(".splash-image-controller").appendChild(button);
  });

  // Add event listeners to control buttons now that they are created
  const buttons = document.querySelectorAll(".splash-image-controller .circle");
  buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
      currentPostIndex = index; // Set the current index based on clicked button
      updateCarousel(); // Update the carousel to show the selected post
    });
  });

  // Initial update to show the first slide
  updateCarousel();

  // Automatically move to the next post every 3 seconds
  setInterval(() => {
    currentPostIndex = (currentPostIndex + 1) % postsData.length; // Cycle through posts
    updateCarousel(); // Update carousel with new post
  }, 3000);

  // Inside setupCarousel, after creating slides and buttons
  if (postsData.length > 0) {
    // Ensure the first slide and button are marked as active initially
    updateCarousel();
  }
}

function updateCarousel() {
  if (!postsData.length) return;

  const slides = document.querySelectorAll(".slide");
  const buttons = document.querySelectorAll(".splash-image-controller .circle");

  // First, remove the 'active' class from all slides and buttons
  slides.forEach((slide) => slide.classList.remove("active"));
  buttons.forEach((button) => button.classList.remove("filled-circle"));

  // Then, add the 'active' class to the current slide and button
  slides[currentPostIndex].classList.add("active");
  buttons[currentPostIndex].classList.add("filled-circle");
}

// function updateCarousel() {
//   if (!postsData.length) return;

//   const slides = document.querySelectorAll(".slide");
//   const buttons = document.querySelectorAll(".splash-image-controller .circle");

//   // Hide all slides and remove filled-circle class from buttons
//   slides.forEach((slide, index) => {
//     slide.style.display = 'none';
//     buttons[index].classList.remove('filled-circle');
//   });

//   // Show the current slide and highlight the corresponding button
//   slides[currentPostIndex].style.display = 'block';
//   buttons[currentPostIndex].classList.add('filled-circle');
// }

export function handleCarousel() {
  document.addEventListener("DOMContentLoaded", setupCarousel);

  document
    .querySelectorAll(".splash-image-controller .circle")
    .forEach((button, index) => {
      button.addEventListener("click", () => {
        currentPostIndex = index; // Set the current index based on clicked button
        updateCarousel(); // Update the carousel to show the selected post
      });
    });
}
