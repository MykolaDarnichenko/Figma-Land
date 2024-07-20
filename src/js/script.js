const openHamburger = document.getElementById('open-hamburger');
const hamburger = document.getElementById('hamburger');

const closeHamburger = document.getElementById('cross');

openHamburger.addEventListener('click', () => {
  hamburger.style.display = 'block';
})

closeHamburger.addEventListener('click', () => {
  hamburger.style.display = 'none';
})

document.addEventListener('mouseup', function (e){
    if (hamburger !== e.target && !hamburger.contains(e.target)) {
        hamburger.style.display = 'none';
    }
});