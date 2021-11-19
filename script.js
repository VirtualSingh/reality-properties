const menuBtn = document.querySelector("#menu-btn");
const mobileNav = document.querySelector(".mobile-nav");
const list = document.querySelectorAll(".featured__grid-col");
const loadMoreBtn = document.getElementById("loadMore");

// ========show-menu==========
menuBtn.addEventListener("click", () => {
  console.log("menu btn clicked");
  mobileNav.classList.toggle("activate");
});

// ========load-more==========
let cards = 2;
loadMoreBtn.addEventListener("click", (e) => {
  for (let i = cards; i < cards + 2; i++) {
    if (list[i]) {
      list[i].style.display = "block";
    } else {
      console.log("failed");
    }
  }
  cards = cards + 2;
  if (cards >= list.length) {
    e.target.style.display = "none";
  }
});

// ==========carousel===================
const prevBtn = document.querySelector(".carousel__btn--left");
const nextBtn = document.querySelector(".carousel__btn--right");
const track = document.querySelector(".carousel__track");
const slides = [...document.querySelectorAll(".carousel__slide")];

const slideSize = slides[0].getBoundingClientRect();
console.log(slideSize);
// const slideWidth = slideSize.width;
const slideWidth = slides[0].getBoundingClientRect().width;
// console.log(slides);
// console.log(slideWidth);
// =============================================
// arrange the slide in a single line;
// slides[0].style.left = 0;
// =============================================
// slides[0].style.left = `${slideWidth * 0}px`;
// slides[1].style.left = `${slideWidth * 1}px`;
// slides[2].style.left = `${slideWidth * 2}px`;
// slides[3].style.left = `${slideWidth * 3}px`;
// =============================================
for (let i = 0; i < slides.length; i++) {
  slides[i].style.left = `${slideWidth * i}px`;
}
// =============================================
// slides.forEach((slide, index) => {
//   slide.style.left = `${slideWidth * index}px`;
// });
// ----function--moveslide--
function moveToSlide(track, currentSlide, targetSlide) {
  track.style.transform = `translateX(-${targetSlide.style.left})`;
  currentSlide.classList.remove("current-slide", "active");
  targetSlide.classList.add("current-slide", "active");
}

// ---move to previous slide-----
prevBtn.addEventListener("click", (e) => {
  const currentSlide = track.querySelector(".current-slide");
  const prevSlide = currentSlide.previousElementSibling;
  // const amountToMove = prevSlide.style.left;
  // track.style.transform = `translateX(-${amountToMove})`;
  // currentSlide.classList.remove("current-slide", "shrink");
  // prevSlide.classList.add("current-slide", "shrink");
  moveToSlide(track, currentSlide, prevSlide);
});
//---move-to next slide----
nextBtn.addEventListener("click", (e) => {
  const currentSlide = track.querySelector(".current-slide");
  const nextSlide = currentSlide.nextElementSibling;
  // const amountToMove = nextSlide.style.left;
  // track.style.transform = `translateX(-${amountToMove})`;
  // currentSlide.classList.remove("current-slide", "shrink");
  // nextSlide.classList.add("current-slide", "shrink");
  moveToSlide(track, currentSlide, nextSlide);
});
