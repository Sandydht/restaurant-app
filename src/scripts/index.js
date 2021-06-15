/* eslint-disable linebreak-style */

import 'regenerator-runtime';
import '../styles/main.scss';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import App from './views/app';
import swRegister from './utils/sw-register';
import './views/component/app-drawer';
import './views/component/footer-component';

const mainContent = document.getElementById('mainContent');

const app = new App({
  content: mainContent,
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
