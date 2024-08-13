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

   
    if(scrollHeight > headerHeight) {
      header.classList.add('fixed-header');
    } else {
      console.log(scrollHeight)
      header.classList.remove('fixed-header')
    }
})

//features section
const featuresGroup = document.querySelector('.features__items');
const features = document.querySelectorAll('.features__item');

function addActiveClass (i) {
  features[i].classList.add('active');
}

function removeActiveClass () {
  features.forEach((feature) => {
    feature.classList.remove('active');
  });
}

addActiveClass(1);

featuresGroup.addEventListener('mouseover', (e) => {
  removeActiveClass();
  const target = e.target;

  if(target && target.classList.contains('features__item')) {
    features.forEach((item, i) => {
      if (target == item) {
        addActiveClass(i);
      }
    })
  }
 })
