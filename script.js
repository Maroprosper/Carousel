const button = document.querySelector('.next');
const fruit = document.querySelector('.orange-slices');
const text = document.querySelector('.text');
const backgrounds = ['#E47900', '#BA0219', '#193B67', '#3A6300', '#CF9902'];
const words = ['Orange', 'Strawberry', 'Blueberry', 'Apple', 'Pineapple'];
const drinks = ['./assets/orange.png', './assets/strawberry-full.png', './assets/blueberry.png', './assets/apple.png', './assets/pineapple.png'];
const fruits = ['./assets/orange fruit.png', './assets/strawberry fruit.png', './assets/blueberry fruit.png', './assets/apple fruit.png', './assets/pineapple fruit.png'];
const move = document.querySelectorAll('.move');

let time;
button.addEventListener('click', () => {
        clearTimeout(time);
        text.classList.remove('active');
        text.classList.add('inactive');
        fruit.classList.remove('active');
        fruit.classList.add('inactive');
        for(let i = 0; i < drinks.length; i++){
            move[i].classList.toggle('moveRight');
        }
        setTimeout(carousel, 500);
});


const slide = document.querySelector('.container');
let count = 0;

const carousel = () => {
    if (count > 4) {
        count = 0;
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
            for(let i = 0; i < drinks.length; i++){
                move[i].classList.toggle('moveLeft');
            }
            time = setTimeout(() => {carousel();}, 30000);
        }
    }
    count++;
}
carousel();