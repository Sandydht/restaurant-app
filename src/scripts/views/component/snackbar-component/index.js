/* eslint-disable linebreak-style */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-underscore-dangle */

import './snackbar-component.scss';

class SnackbarComponent extends HTMLElement {
  set show(show) {
    this._show = show;
    this.render();
  }

  set error(error) {
    this._error = error;
  }

  set message(message) {
    this._message = message;
    this.render();
  }

  render() {
    if (this._show === true) {
      if (this._error === true) {
        this.innerHTML = `
        <div id="snackbar" class="snackbar error">
          <p>${this._message}</p>
        </div>`;
      } else {
        this.innerHTML = `
        <div id="snackbar" class="snackbar success">
          <p>${this._message}</p>
        </div>`;
      }

      const snackbar = this.querySelector('#snackbar');
      snackbar.classList.toggle('show');
      setTimeout(() => {
        snackbar.classList.remove('show');
        this._error ? snackbar.classList.remove('error') : snackbar.classList.remove('success');
      }, 3000);
    }
  }
}

customElements.define('snackbar-component', SnackbarComponent);
