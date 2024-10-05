const slider = document.getElementById('slider');

// Array of image URLs
const images = [
    './assets/orange.png', 
    './assets/strawberry-full.png', 
    './assets/blueberry.png', 
    './assets/apple.png', 
    './assets/pineapple.png'
];

// Dynamically create slides and add them to the DOM
function renderSlides() {
  images.forEach((imgSrc, index) => {
    const slideDiv = document.createElement('div');
    slideDiv.classList.add('slide');
    slideDiv.innerHTML = `<img src="${imgSrc}" alt="Image ${index + 1}">`;
    slider.appendChild(slideDiv);
  });
}

// Initialize the slides
renderSlides();

let currentIndex = 0;

// Function to move slides on button click
function moveSlides() {
  const slides = document.querySelectorAll('.slide');
  
  // Add a class that moves all the images to the left and fades out the first one
  slider.classList.add('move-slider');
  slides[0].classList.add('fade-out');

  // After the transition completes, rearrange the slides
  setTimeout(() => {
    // Remove the first image and append it to the end
    slider.appendChild(slides[0]);

    // Reset the slider position and remove the fade-out class
    slider.classList.remove('move-slider');
    slides[0].classList.remove('fade-out');

    // Ensure all images are reset for the next transition
    slider.style.transition = 'none';
    slider.style.transform = 'translateX(0)';
  }, 4100); // Duration should match the combined transition for smooth effect
}

// Event listener for the button
document.getElementById('nextBtn').addEventListener('click', moveSlides);
