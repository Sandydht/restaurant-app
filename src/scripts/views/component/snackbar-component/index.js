/* eslint-disable linebreak-style */
/* eslint-disable no-underscore-dangle */

import './snackbar-component.scss';

class SnackbarComponent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set show(show) {
    this._show = show;
    this.render();
  }

  set message(message) {
    this._message = message;
    this.render();
  }

  set success(success) {
    this._success = success;
    this.render();
  }

  render() {
    this.innerHTML = `
      <div id="snackbar">
        <p>${this._message}</p>
      </div>
    `;

    const x = this.querySelector('#snackbar');

    if (this._show) {
      x.className = 'show';
      setTimeout(() => {
        x.className = x.className.replace('show', '');
      }, 3000);

      if (this._success) {
        x.className = 'show success';
      } else {
        x.className = 'show failed';
      }
    }
  }
}

customElements.define('snackbar-component', SnackbarComponent);
