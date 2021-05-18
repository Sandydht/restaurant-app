import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.scss';
import '../styles/responsive.scss';
import './views/components/appbar-component';
import './views/components/atoms/button-component';
import App from './views/app';

const app = new App({
  content: document.getElementById('mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});

const footerYear = document.getElementById('footer__year');
footerYear.innerHTML = new Date().getFullYear();
