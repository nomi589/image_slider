const prevButton = document.querySelector(".prevBtn");
const nextButton = document.querySelector(".nextBtn");
const images = document.querySelectorAll(".images img");
let currentImage = 0;

nextButton.addEventListener("click", () => {
  images[currentImage].classList.remove("active");
  currentImage++;
  images[currentImage].classList.add("active");

  prevButton.disabled = false;
  if (currentImage == images.length - 1) nextButton.disabled = true;
});

prevButton.addEventListener("click", () => {
  images[currentImage].classList.remove("active");
  currentImage--;
  images[currentImage].classList.add("active");

  nextButton.disabled = false;
  if (currentImage === 0) prevButton.disabled = true;
});
