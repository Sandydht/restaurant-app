/* eslint-disable linebreak-style */
class HeroComponent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="hero">
        <div class="hero__text-box">
          <p>Welcome to <span class="hero__brand">Cafetaria</span></p>
          <p>Have a nice day</p>
        </div>
      </div>
    `;
  }
}

customElements.define('hero-component', HeroComponent);
