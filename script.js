const slides = document.querySelector('.slides');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
let currentSlide = 0;

prev.addEventListener('click', () => {
    currentSlide = (currentSlide > 0) ? currentSlide - 1 : 2; 
    updateSlider();
});

next.addEventListener('click', () => {
    currentSlide = (currentSlide < 2) ? currentSlide + 1 : 0;
    updateSlider();
});

function updateSlider() {
    const width = slides.clientWidth;
    slides.style.transform = `translateX(-${width * currentSlide}px)`;
}
