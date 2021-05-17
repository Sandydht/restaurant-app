import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.scss';
import '../styles/responsive.scss';

const menuButton = document.getElementById('menuButton');
const navbar = document.querySelector('.app-bar__nav');

menuButton.addEventListener('click', event => {
  navbar.classList.toggle('open');
  event.stopPropagation();
});

document.body.addEventListener('click', event => {
  navbar.classList.remove('open');
  event.stopPropagation();
});

const footerYear = document.getElementById('footer__year');
footerYear.innerHTML = new Date().getFullYear();
