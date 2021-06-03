/* eslint-disable linebreak-style */

import './footer-component.scss';

class FooterComponent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <footer>
        <p>Copyright © <span id="footerYear"></span> - <span class="footer__brand">Cafetaria</span></p>
      </footer>
    `;

    const footerYear = this.querySelector('#footerYear');
    footerYear.innerHTML = new Date().getFullYear();
  }
}

customElements.define('footer-component', FooterComponent);
