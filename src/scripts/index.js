/* eslint-disable linebreak-style */
import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.scss';
import './views/components/appbar-component';
import './views/components/footer-component';
import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App({
  content: document.getElementById('mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});

// document.getElementById('click').addEventListener('click', () => {
//   console.log('click');
// });

// document.getElementById('click').dispatchEvent(new Event('click'));
