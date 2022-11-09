// ? ------- NAVBAR -------

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const navbar = document.querySelector(".nav");

// ? onclick menu on mobile device

hamburger.addEventListener("click", function (e) {
  e.preventDefault();
  this.classList.toggle("is-active");
  navLinks.classList.toggle("active");
  navbar.classList.toggle("click");
});

// ? ------- HERO SLIDER -----
const secondHero = document.querySelector(".hero-bg");
const btn1 = document.querySelector("#first");
const btn2 = document.querySelector("#second");

btn2.addEventListener("click", () => {
  secondHero.style.left = "0%";
});

btn1.addEventListener("click", () => {
  secondHero.style.left = "-100%";
  setTimeout(() => {
    secondHero.style.display = "none";
    secondHero.style.left = "100%";
    setTimeout(() => {
      secondHero.style.display = "block";
    }, 200);
  }, 450);
});

const image = document.querySelectorAll(".gallery-image");

image.forEach((img) => {
  img.addEventListener("click", () => {
    img.classList.toggle("img-2x2");
  });
});

const firstHero = document.querySelector(".hero-bg");
const secHero = document.querySelector(".second-hero");
