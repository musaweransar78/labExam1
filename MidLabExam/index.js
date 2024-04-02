const image = document.getElementsByClassName("Container")
const slides = document.querySelectorAll('.container img');
const thumbnails = document.querySelectorAll('.container img');
let currentSlide = 0;



thumbnails.forEach((thumb, index) => {
  thumb.addEventListener('click', () => {
    showSlide(index);
  });
});

showSlide(currentSlide);