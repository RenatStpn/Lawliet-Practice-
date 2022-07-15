const burgerIcon = document.querySelector('.header__menu-icon');
const closeIcon = document.querySelector('.close-icon');
const mobileMenu = document.querySelector('.header__menu');
burgerIcon.addEventListener('click', () => {
    mobileMenu.classList.add('opened');
});
closeIcon.addEventListener('click', () => {
    mobileMenu.classList.remove('opened');
});

// INFO SLIDESHOW START
let slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
    showSlides(slideIndex += n);
}
  // Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}
function showSlides(n) {
    let slides = document.querySelectorAll(".small__tab-col");

    if (n > slides.length) {
        slideIndex = 1;
      }
    if (n < 1) {
        slideIndex = slides.length;
     }
     slides.forEach((element) => {
      element.style.display = "none";
     });
    slides[slideIndex - 1].style.display = "block";
 } 