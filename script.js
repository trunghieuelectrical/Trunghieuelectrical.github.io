let slideIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
    slideIndex = index;
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }
}

document.querySelector('.next').addEventListener('click', () => {
    showSlide(slideIndex + 1);
});

document.querySelector('.prev').addEventListener('click', () => {
    showSlide(slideIndex - 1);
});

setInterval(() => {
    showSlide(slideIndex + 1);
}, 3000); // Automatically switch slides every 3 seconds

showSlide(slideIndex);
