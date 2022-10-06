const nextButton = document.querySelector('.carousel-control-next');
const prevButton = document.querySelector('.carousel-control-prev');
const carouselImage = document.querySelector('#image');
let clicker = 1;

// Parte do Carousel

nextButton.addEventListener('click', () => {
  if(clicker < 3) {
    clicker += 1;
    carouselImage.src = './images/0' + clicker + '.jpg';
  }
});


prevButton.addEventListener('click', () => {
  if(clicker > 1 && clicker <= 3) {
    clicker -= 1;
    carouselImage.src = './images/0' + clicker + '.jpg';
  }
});