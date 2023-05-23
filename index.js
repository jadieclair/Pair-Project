// DOM elements
const galleryContainer = document.querySelector(".gallery-container");
const gallery = document.querySelector(".gallery");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

// Event listener for the previous button
prevBtn.addEventListener("click", () => {
  galleryContainer.scrollBy({ left: -gallery.offsetWidth, behavior: "smooth" });
});

// Event listener for the next button
nextBtn.addEventListener("click", () => {
  galleryContainer.scrollBy({ left: gallery.offsetWidth, behavior: "smooth" });
});
