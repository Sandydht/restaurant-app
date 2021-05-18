/* eslint-disable linebreak-style */
/* eslint-disable no-underscore-dangle */

import CONFIG from '../../globals/config';

class RestaurantitemComponent extends HTMLElement {
  set restaurant(restaurant) {
    this._restaurant = restaurant;
    this.render();
  }

  render() {
    this.innerHTML = `
      <article class="card">
        <div class="card__header">
          <img height=200 src="${CONFIG.BASE_IMAGE_URL + this._restaurant.pictureId}" alt="${this._restaurant.name}">
          <p class="card__header__city">${this._restaurant.city}</p>
        </div>

        <div class="card__body">
          <p class="card__subtitle">Rating ${this._restaurant.rating}</p>

          <p class="card__title">${this._restaurant.name}</p>

          <p class="card__description">${this._restaurant.description}</p>
        </div>

        <div class="card__actions">
          <a href="#/detail/${this._restaurant.id}">See detail</a>
        </div>
    </article>
    `;
  }
}

customElements.define('restaurantitem-component', RestaurantitemComponent);
