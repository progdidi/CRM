//HAMBURGER MENU

const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
})


//FIXED MENU


window.addEventListener('scroll', () => {
    const header = document.querySelector('.header-top');
    const scrollHeight = window.pageYOffset;
    const headerHeight = header.getBoundingClientRect().height;

    console.log(scrollHeight);
    console.log(headerHeight);

    if(scrollHeight > headerHeight) {
      header.classList.add('fixed-header');
    } else {
      console.log(scrollHeight)
      header.classList.remove('fixed-header')
    }
})

