const button = document.querySelector('.next');
const fruit = document.querySelector('.orange-slices');
const text = document.querySelector('.text');
const backgrounds = ['#E47900', '#BA0219', '#193B67', '#3A6300', '#CF9902'];
const words = ['Orange', 'Strawberry', 'Blueberry', 'Apple', 'Pineapple'];
const drinks = ['./assets/orange.png', './assets/strawberry-full.png', './assets/blueberry.png', './assets/apple.png', './assets/pineapple.png'];
const fruits = ['./assets/orange fruit.png', './assets/strawberry fruit.png', './assets/blueberry fruit.png', './assets/apple fruit.png', './assets/pineapple fruit.png'];
const move = document.querySelectorAll('.move');

let time;
function renderSlides() {
    drinks.forEach((imgSrc, index) => {
      const slideDiv = document.createElement('div');
      slideDiv.classList.add('slide');
      slideDiv.innerHTML = `<img src="${imgSrc}" alt="Image ${index + 1}">`;
      slider.appendChild(slideDiv);
    });
}

  // Initialize the slides
renderSlides();

button.addEventListener('click', () => {
        clearTimeout(time);
        text.classList.remove('active');
        text.classList.add('inactive');
        fruit.classList.remove('active');
        fruit.classList.add('inactive');
        setTimeout(carousel, 1000);
});


const slide = document.querySelector('.container');
let count = 0;
let loop = 0;

function moveSlides() {
    const slides = document.querySelectorAll('.slide');
  
    // First slide fades out and moves
    slides[0].classList.add('fade-out');
    slides[0].style.transition = 'transform 2s linear, opacity 2s linear';
    slides[0].style.transform = `translateX(-50%)`;
  
    // Move subsequent slides with a 500ms delay
    slides.forEach((slide, index) => {
      if (index > 0) {
        const delay = index * 500; // 500ms delay for subsequent slides
  
        setTimeout(() => {
          slide.style.transition = 'transform 2s linear';
          slide.style.transform = `translateX(-100%)`;
        }, delay);
      }
    });
  
    // After all slides finish moving, reset their positions and classes
    setTimeout(() => {
      // Move the first image to the end
      slider.appendChild(slides[0]);
  
      // Reset the position and classes for all slides
      slides.forEach((slide) => {
        slide.style.transition = 'none'; // Reset transition
        slide.style.transform = `translateX(0)`; // Reset position
      });
  
      // Remove the fade-out class from the first slide
      slides[0].classList.remove('fade-out');
    }, 500 * slides.length + 1000); // Total delay + move duration for the last slide
  }

const carousel = () => {

    const slides = document.querySelectorAll('.slide');

    

    if (count > 4) {
        count = 0;
        loop = 1;
    }
    for(let i = 0; i < 5; i++) {        
            
        if(i === count){
            slide.style.background = `${backgrounds[i]}`;
            fruit.src = `${fruits[i]}`;
            text.textContent = `${words[i]}`;
            text.classList.remove('inactive');
            text.classList.add('active');
            fruit.classList.remove('inactive');
            fruit.classList.add('active');
            time = setTimeout(() => {carousel();}, 30000);
        }
        if( loop >= 1){
            moveSlides();
        }
    }
    count++;
    loop++;
}

carousel();