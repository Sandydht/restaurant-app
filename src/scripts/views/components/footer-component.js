/* eslint-disable linebreak-style */
class FooterComponent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <footer class="footer">
        <p>Copyright © <span id="footerYear"></span> - <span class="footer-brand">Cafetaria</span></p>
      </footer>
    `;

    this.querySelector('#footerYear').innerHTML = new Date().getFullYear();
  }
}

customElements.define('footer-component', FooterComponent);
