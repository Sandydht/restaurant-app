/* eslint-disable linebreak-style */
/* eslint-disable no-underscore-dangle */

import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

class App {
  constructor({ content }) {
    this._content = content;
  }

  async renderPage() {
    try {
      const url = UrlParser.parseActiveUrlWithCombiner();
      const page = routes[url];
      this._content.innerHTML = await page.render();
      await page.afterRender();
    } catch (e) {
      this._content.innerHTML = `
        <section class="content__wrapper">
          <h2 style="font-size: 20pt;">Halaman Tidak Ditemukan</h2>
        </section>
      `;
    }
  }
}

export default App;
