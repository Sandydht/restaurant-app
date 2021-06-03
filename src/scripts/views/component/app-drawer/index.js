/* eslint-disable linebreak-style */
/* eslint-disable no-underscore-dangle */
/* eslint-disable constructor-super */

import './app-drawer.scss';

class AppDrawer extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  _openDrawer() {
    this.querySelector('#menuButton').addEventListener('click', (event) => {
      this.querySelector('.app-bar__nav').classList.toggle('open');
      event.stopPropagation();
    });
  }

  _closeDrawer() {
    document.body.addEventListener('click', (event) => {
      this.querySelector('.app-bar__nav').classList.remove('open');
      event.stopPropagation();
    });
  }

  render() {
    this.innerHTML = `
      <div class="app-bar__menu">
        <button id="menuButton" aria-label="menu button">&#9776;</button>
      </div>

      <div class="app-bar__brand">
        <h1>Cafetaria</h1>
      </div>

      <nav class="app-bar__nav">
        <ul class="nav__list">
          <li class="nav__item"><a href="#/home">Home</a></li>
          <li class="nav__item"><a href="#/favorite">Favorite</a></li>
          <li class="nav__item"><a href="https://www.linkedin.com/in/sandy-dwi-handoko-trapsilo-a56008185" target="_blank" rel="noreferrer">About Us</a></li>
        </ul>
      </nav>
    `;

    this._openDrawer();
    this._closeDrawer();
  }
}

customElements.define('app-drawer', AppDrawer);
