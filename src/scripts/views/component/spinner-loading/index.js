/* eslint-disable linebreak-style */

import './spinner-loading.scss';

class SpinnerLoading extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = '<div class="loader"></div>';
  }
}

customElements.define('spinner-loading', SpinnerLoading);
