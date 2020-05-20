/*const menuItem = document.querySelectorAll('.menu-item');
console.log (menuItem);


$('.menu-item').click( function () {
    alert ('hi');
})
*/

const slide = document.querySelector('.slide');
const slideImg = document.querySelectorAll('.slide img');

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

let counter = 1;
const size = slideImg[0].clientWidth;

slide.style.transform = 'translateX(' + (-size * counter) + 'px)';

nextBtn.addEventListener('click' , () => {
    if (counter >= slideImg.length - 1) return;
    slide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

prevBtn.addEventListener('click' , () => {
    if (counter <= 0) return;
    slide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

slide.addEventListener('transitionend', () => {
    if (slideImg[counter].id === 'lastImg'){
        slide.style.transition = "none";
        counter = slideImg.length - 2;
        slide.style.transform = 'translateX(' + (-size * counter) + 'px)';


    }
    if (slideImg[counter].id === 'firstImg'){
        slide.style.transition = "none";
        counter = slideImg.length - counter;
        slide.style.transform = 'translateX(' + (-size * counter) + 'px)';


    }
});
