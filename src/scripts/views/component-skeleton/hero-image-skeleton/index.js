/* eslint-disable linebreak-style */

import './hero-image-skeleton.scss';

class HeroImageSkeleton extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="hero__text">
        <p>Welcome to <span class="hero__brand">Cafetaria</span></p>
        <p>Have a nice day</p>
      </div>
    `;
  }
}

customElements.define('hero-image-skeleton', HeroImageSkeleton);
