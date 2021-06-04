/* eslint-disable linebreak-style */
/* eslint-disable no-underscore-dangle */

import CONFIG from '../../../globals/config';
import './restaurant-detail.scss';

class RestaurantDetail extends HTMLElement {
  set restaurant(restaurant) {
    this._restaurant = restaurant;
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="heading">
        <img src="${CONFIG.BASE_IMAGE_URL + this._restaurant.pictureId}" alt="${this._restaurant.name}">
        <p class="city">${this._restaurant.city}</p>
      </div>

      <div class="body">
        <p class="rating">Rating: ${this._restaurant.rating}</p>
        <p class="name">${this._restaurant.name}</p>
        <p class="address">Adress: ${this._restaurant.address}</p>
        <p class="description">${this._restaurant.description}</p>
      </div>
    `;
  }
}

customElements.define('restaurant-detail', RestaurantDetail);
