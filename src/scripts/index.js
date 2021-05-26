/* eslint-disable linebreak-style */
import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.scss';
import './views/components/appbar-component';
import './views/components/footer-component';
import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App({
  content: document.querySelector('main'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
