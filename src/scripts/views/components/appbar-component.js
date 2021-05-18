/* eslint-disable linebreak-style */
/* eslint-disable class-methods-use-this */
class AppbarComponent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  get navbarElement() {
    return document.querySelector('.app-bar__nav');
  }

  handleOpenDrawer() {
    document.getElementById('menuButton').addEventListener('click', (event) => {
      this.navbarElement.classList.toggle('open');
      event.stopPropagation();
    });
  }

  handleCloseDrawer() {
    document.body.addEventListener('click', (event) => {
      this.navbarElement.classList.remove('open');
      event.stopPropagation();
    });
  }

  render() {
    this.innerHTML = `
      <button aria-label="menu button" id="menuButton" class="app-bar__menu">☰</button>

      <h1 class="app-bar__brand">Cafetaria</h1>

      <nav class="app-bar__nav">
        <ul class="app-bar__nav-list">
          <li><a class="app-bar__nav-item" href="#/home">Home</a></li>
          <li><a class="app-bar__nav-item" href="#/favorite">Favorite</a></li>
          <li><a class="app-bar__nav-item" href="https://www.linkedin.com/in/sandy-dwi-handoko-trapsilo-a56008185" target="_blank" rel="noreferrer">About Us</a></li>
        </ul>
      </nav>
    `;

    this.handleOpenDrawer();
    this.handleCloseDrawer();
  }
}

customElements.define('appbar-component', AppbarComponent);
