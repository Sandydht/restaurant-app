/* eslint-disable linebreak-style */
/* eslint-disable no-underscore-dangle */

import DrawerInitiator from '../utils/drawer-initiator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

class App {
  constructor({ button, drawer, content }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: document.body,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    try {
      this._content.innerHTML = await page.render();
      await page.afterRender();
    } catch (e) {
      this._content.innerHTML = `
        <section>
          <h2>Halaman tidak ditemukan</h2>
        </section>
      `;
    }
  }
}

export default App;
