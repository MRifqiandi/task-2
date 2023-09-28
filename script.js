// Hamburger Button

const menuToggle = document.querySelector(".menu-toggle");
const navbar = document.querySelector(".navbar");

menuToggle.addEventListener("click", function () {
  menuToggle.classList.toggle("active");
  navbar.classList.toggle("active");
});

// Hide menu when screen size is above 768px
window.addEventListener("resize", function () {
  if (window.innerWidth > 768) {
    menuToggle.classList.remove("active");
    navbar.classList.remove("active");
  }
});

// Fungsi untuk menentukan apakah lebar layar lebih besar dari 768px
function isDesktop() {
  return window.innerWidth > 768;
}
