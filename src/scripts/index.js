/* eslint-disable linebreak-style */

import 'regenerator-runtime';
import '../styles/main.scss';
import '../styles/responsive.scss';
import App from './views/app';
import swRegister from './utils/sw-register';

const menuButton = document.getElementById('menuButton');
const navElement = document.getElementById('navElement');
const mainContent = document.getElementById('mainContent');

const app = new App({
  button: menuButton,
  drawer: navElement,
  content: mainContent,
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});

const footerYear = document.getElementById('footerYear');
footerYear.innerHTML = new Date().getFullYear();
