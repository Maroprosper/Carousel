const buttons = document.querySelectorAll('.next');
let time;
buttons.forEach(button => {
    button.addEventListener('click', () => {
        clearTimeout(time);
        carousel();
    });
});

const slides = document.querySelectorAll('.container');
let count = 0;

const carousel = () => {
    if (count > 4) {
        slides[4].classList.add('inactive');
        slides[4].querySelectorAll('.move').forEach(item => {
            item.classList.add('moveLeft');
        });
        count = 0;
    }
    for(let i = 0; i < 5; i++) {
        if(!((slides[i].className).includes('none'))){
            setTimeout(() => {slides[i].classList.add('none');}, 2000);
            slides[i].querySelectorAll('.move').forEach(item => {
                item.classList.remove('moveRight')});
            if(i >= 1){
                document.querySelectorAll('.move').forEach(item => {
                    item.classList.remove('moveLeft')});
                slides[i].classList.remove('inactive');
            }
            slides[i].classList.remove('active');
        }
        if(i === count){
            setTimeout(() => {slides[i].classList.remove('none');}, 2000);
            slides[i].classList.add('active');
            slides[i].querySelectorAll('.move').forEach(item => {
                item.classList.add('moveRight')});
            if(i >= 1){
                slides[i - 1].classList.add('inactive');
                slides[i - 1].querySelectorAll('.move').forEach(item => {
                    item.classList.add('moveLeft')});
            }
            time = setTimeout(() => {carousel();}, 30000);
        }
    }
    count++;
}
carousel();