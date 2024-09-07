document.addEventListener('DOMContentLoaded', () => {
    const textElement = document.getElementById('typewriter');
    const text = textElement.innerText;
    textElement.innerText = '';

    let index = 0;
    const speed = 50; // Speed in milliseconds

    function typeWriter() {
        if (index < text.length) {
            textElement.innerText += text.charAt(index);
            index++;
            setTimeout(typeWriter, speed);
        }
    }

    typeWriter();

    // Slider functionality
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
});
