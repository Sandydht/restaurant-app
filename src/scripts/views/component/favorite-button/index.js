/* eslint-disable linebreak-style */
/* eslint-disable no-underscore-dangle */

import './favorite-button.scss';

class FavoriteButton extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set isRestaurantExist(restaurant) {
    this._restaurant = restaurant;
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  render() {
    this.innerHTML = '<button></button>';
  }
}

customElements.define('favorite-button', FavoriteButton);
