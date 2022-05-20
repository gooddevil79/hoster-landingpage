'use strict';
const heros = document.querySelectorAll('.heros');
const herosContainer = document.querySelector('.img__heros-container');
const mobileBTN = document.querySelector('.mobile__links--btn');
const mobileMenu = document.querySelector('.mobile__menu');
const closeMenuBTN = document.querySelector('.close__mobile--btn');
///////////////
let defaultRotate = 35;
setTimeout(function () {
  herosContainer.classList.remove('fade-in-heros');
  heros.forEach((h, i) => {
    h.style.transform = `rotate(-${defaultRotate}deg)`;
    defaultRotate -= 10;
  });
}, 1000);
const observer = function () {};
const options = {
  root: null,
  threshold: 1.0,
  delay: 5000,
};
const observerHero = new IntersectionObserver(observer, options);
observerHero.observe(herosContainer);
const handelMenu = function (e) {
  e.preventDefault();
  if (mobileMenu.classList.contains('hidden')) {
    mobileMenu.classList.remove('hidden');
  } else {
    mobileMenu.classList.add('hidden');
  }
};
mobileBTN.addEventListener('click', handelMenu);
closeMenuBTN.addEventListener('click', handelMenu);
