import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.scss';
import './views/components/appbar-component';
import './views/components/footer-component';
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
