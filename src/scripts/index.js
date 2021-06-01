/* eslint-disable linebreak-style */

import 'regenerator-runtime';
import '../styles/main.scss';
import '../styles/responsive.scss';
import App from './views/app';

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
});

const footerYear = document.getElementById('footerYear');
footerYear.innerHTML = new Date().getFullYear();
