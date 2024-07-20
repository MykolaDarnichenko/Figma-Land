const openHamburger = document.getElementById('open-hamburger');
const hamburger = document.getElementById('hamburger');

const closeHamburger = document.getElementById('cross');

openHamburger.addEventListener('click', (e) => {
  e.stopPropagation();
  hamburger.style.display = 'block';
})

closeHamburger.addEventListener('click', () => {
  hamburger.style.display = 'none';
})

document.addEventListener('click', (e) => {
  if (!hamburger.contains(e.target)) {
    hamburger.style.display = 'none';
  }
})