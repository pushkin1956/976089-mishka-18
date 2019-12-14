var navMenu = document.querySelector('.menu');
var navBtn = document.querySelector('.menu__btn');

navMenu.classList.remove('menu__no-js');

navBtn.addEventListener('click', function() {
  if (navMenu.classList.contains('menu__closed')) {
    navMenu.classList.remove('menu__closed');
    navMenu.classList.add('menu__opened');
  } else {
    navMenu.classList.add('menu__closed');
    navMenu.classList.remove('menu__opened');
  }
});
