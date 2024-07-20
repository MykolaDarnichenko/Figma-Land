const openHamburger = document.getElementById('open-hamburger');
const hamburger = document.getElementById('hamburger');

const closeHamburger = document.getElementById('cross');

openHamburger.addEventListener('click', () => {
  hamburger.style.display = 'block';
})

closeHamburger.addEventListener('click', () => {
  hamburger.style.display = 'none';
})