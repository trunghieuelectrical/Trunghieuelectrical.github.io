// JavaScript cho slider
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slideIndex = index;
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }
    const offset = -slideIndex * 100;
    document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
}

document.querySelector('.next').addEventListener('click', () => {
    showSlide(slideIndex + 1);
});

document.querySelector('.prev').addEventListener('click', () => {
    showSlide(slideIndex - 1);
});

setInterval(() => {
    showSlide(slideIndex + 1);
}, 3000); // Tự động chuyển slide sau mỗi 3 giây

showSlide(slideIndex);
