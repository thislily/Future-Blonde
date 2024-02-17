//create image modal on click of all images containing class "image"

//this video was very helpful! "https://www.youtube.com/watch?v=uKVVSwXdLr0"


//all images with class "image" will be clickable modals.  modal closes either with button or clicking outside of image.
export function createLightbox() {
  const lightbox = document.createElement("div");
  lightbox.id = "lightbox";
  document.body.appendChild(lightbox);

  const images = document.querySelectorAll(".image");
  images.forEach((image) => {
    image.addEventListener("click", () => {
      lightbox.classList.add("active");
      const img = document.createElement("img");
      const closeLB = document.createElement("button");

      img.src = image.src;

      closeLB.classList.add("white-button", "close-LB");
      closeLB.innerHTML = "Close <i class='fa fa-times'></i>";

      while (lightbox.firstChild) {
        lightbox.removeChild(lightbox.firstChild);
      }

      lightbox.appendChild(img);
      lightbox.appendChild(closeLB);

      closeLB.addEventListener("click", (e) => {
        e.stopPropagation();
        lightbox.classList.remove("active");
      });
    });
  });

  lightbox.addEventListener("click", (e) => {
    if (e.target !== e.currentTarget) return;
    lightbox.classList.remove("active");
  });
}
