document.querySelectorAll(".custom-checkbox input").forEach((checkbox) => {
  checkbox.addEventListener("change", function () {
    let container = this.closest(".short-form-video");

    if (this.checked) {
      container.style.borderColor = "#6200ea";
    } else {
      container.style.borderColor = "#d0d5dd";
    }
  });
});

let currentIndex = 0;
const slides = document.querySelectorAll(".slide-list");
const totalSlides = slides.length;
const sliderWrapper = document.querySelector(".sliders");

for (let i = 0; i < 4; i++) {
  let clone = slides[i].cloneNode(true);
  sliderWrapper.appendChild(clone);
}

function showSlide(index) {
  sliderWrapper.style.transition = "transform 0.5s ease-in-out";
  sliderWrapper.style.transform = `translateX(-${index * (100 / 4)}%)`;

  setTimeout(() => {
    if (index >= totalSlides) {
      sliderWrapper.style.transition = "none";
      sliderWrapper.style.transform = `translateX(0)`;
      currentIndex = 0;
    }
  }, 500);
}

function nextSlide() {
  currentIndex++;
  showSlide(currentIndex);
}
function prevSlide() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = totalSlides - 1;
    sliderWrapper.style.transition = "none";
    sliderWrapper.style.transform = `translateX(-${currentIndex * (100 / 4)}%)`;
    setTimeout(() => {
      sliderWrapper.style.transition = "transform 0.5s ease-in-out";
      nextSlide();
    }, 50);
  } else {
    showSlide(currentIndex);
  }
}

showSlide(currentIndex);

let currentIndexs = 0;
const slidess = document.querySelectorAll(".slide-list-4");
const totalSlidess = slidess.length;
const sliderWrappers = document.querySelector(".sliders-4");

for (let i = 0; i < 4; i++) {
  let clones = slidess[i].cloneNode(true);
  sliderWrappers.appendChild(clones);
}

function showSlides(index) {
  sliderWrappers.style.transition = "transform 0.5s ease-in-out";
  sliderWrappers.style.transform = `translateX(-${index * (100 / 4)}%)`;

  setTimeout(() => {
    if (index >= totalSlidess) {
      sliderWrappers.style.transition = "none";
      sliderWrappers.style.transform = `translateX(0)`;
      currentIndexs = 0;
    }
  }, 500);
}

function nextSlides() {
  currentIndexs++;
  showSlides(currentIndexs);
}

function prevSlides() {
  currentIndexs--;
  if (currentIndexs < 0) {
    currentIndexs = totalSlidess - 1;
    sliderWrappers.style.transition = "none";
    sliderWrappers.style.transform = `translateX(-${
      currentIndexs * (100 / 4)
    }%)`;
    setTimeout(() => {
      sliderWrappers.style.transition = "transform 0.5s ease-in-out";
      nextSlides();
    }, 50);
  } else {
    showSlides(currentIndexs);
  }
}

showSlides(currentIndexs);

function toggleFAQ(element) {
  let answer = element.nextElementSibling;
  let icon = element.querySelector(".toggle-icon img");

  if (answer.style.display === "none" || answer.style.display === "") {
    answer.style.display = "block";
    icon.src = "./img/minus-Icon.png";
  } else {
    answer.style.display = "none";
    icon.src = "./img/plus-Icon.png";
  }
}
