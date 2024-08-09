//HAMBURGER MENU

const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu__list');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
})


//ARRIVALS SLIDER



//TIMER
const timer = document.querySelector('.promotion-timer');
const timerDays = timer.querySelector('.days');
const timerHours = timer.querySelector('.hours');
const timerMinutes = timer.querySelector('.minutes');
const timerSeconds = timer.querySelector('.seconds');


const deadline = new Date('2024-10-05').getTime();

const getRemainingTime = setInterval(function() {
    const currentTime = new Date().getTime();
    const remainingTime = deadline - currentTime;

   
    const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

    timerDays.innerHTML = days < 10 ? '0' + days : days;
    timerHours.innerHTML = hours < 10 ? '0' + hours : hours;
    timerMinutes.innerHTML = minutes < 10 ? '0' + minutes : minutes;
    timerSeconds.innerHTML = seconds < 10 ? '0' + seconds : seconds;

    if(remainingTime < 0) {
        clearInterval(getRemainingTime);
        timer.innerHTML = 'Offer is over :c';
    }

}, 1000);


//SEARCH FORM
const searchBtn = document.querySelector('.search-form__btn');
const searchForm = document.querySelector('.search-form');
const searchInput = document.querySelector('.search-form__input');

searchBtn.addEventListener('click', () => {
    searchForm.classList.toggle('active');
    searchInput.classList.toggle('active');
})


//BASKET
let products = 1;
const basket = document.querySelector('.basket-btn__num');

if(products > 0) {
    basket.innerHTML = `${products}`;
    basket.classList.add('active');
}