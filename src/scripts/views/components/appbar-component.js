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
    document.querySelectorAll('#closeButton, .app-bar__nav-item').forEach((elm) => {
      elm.addEventListener('click', (event) => {
        this.navbarElement.classList.remove('open');
        event.stopPropagation();
      });
    });
  }

  render() {
    this.innerHTML = `
      <header class="app-bar">
        <div class="app-bar__menu">
          <button aria-label="menu button" id="menuButton">☰</button>
        </div>

        <div class="app-bar__brand">
          <h1>Cafetaria</h1>
        </div>

        <nav class="app-bar__nav">
          <div class="app-bar__close">
            <button aria-label="close button" id="closeButton">&times;</button>
          </div>

          <ul>
            <li><a class="app-bar__nav-item" href="#/home">Home</a></li>
            <li><a class="app-bar__nav-item" href="#/favorite">Favorite</a></li>
            <li><a class="app-bar__nav-item" href="https://www.linkedin.com/in/sandy-dwi-handoko-trapsilo-a56008185" target="_blank" rel="noreferrer">About Us</a></li>
          </ul>
        </nav>
      </header>
    `;

    this.handleOpenDrawer();
    this.handleCloseDrawer();
  }
}

customElements.define('appbar-component', AppbarComponent);
