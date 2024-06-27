let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
    slideIndex = index;
}

document.querySelector('.next').addEventListener('click', () => {
    slideIndex = (slideIndex + 1) % totalSlides;
    showSlide(slideIndex);
});

document.querySelector('.prev').addEventListener('click', () => {
    slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
    showSlide(slideIndex);
});

setInterval(() => {
    slideIndex = (slideIndex + 1) % totalSlides;
    showSlide(slideIndex);
}, 3000); // Automatically switch slides every 3 seconds

showSlide(slideIndex);
