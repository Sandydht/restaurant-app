/* eslint-disable linebreak-style */
/* eslint-disable no-underscore-dangle */

import './not-found.scss';

class NotFound extends HTMLElement {
  set message(message) {
    this._message = message;
    this.render();
  }

  render() {
    this.innerHTML = `
      <p>${this._message}</p>
    `;
  }
}

customElements.define('not-found', NotFound);
