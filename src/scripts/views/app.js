/* eslint-disable linebreak-style */
/* eslint-disable no-underscore-dangle */

import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';
import './component/not-found';

class App {
  constructor({ content }) {
    this._content = content;
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];

    try {
      this._content.innerHTML = await page.render();
      await page.afterRender();
    } catch (e) {
      this._content.innerHTML = '<not-found></not-found>';
      const notFound = document.querySelector('not-found');
      notFound.message = 'Page not found';
    }
  }
}

export default App;
