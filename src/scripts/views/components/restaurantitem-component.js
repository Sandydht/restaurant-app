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
          <img class="card__header__image" src="${CONFIG.BASE_IMAGE_URL + this._restaurant.pictureId}" alt="${this._restaurant.name}">
          <p class="card__header__city">${this._restaurant.city}</p>
        </div>

        <div class="card__body">
          <p class="card__body__rating">Rating ${this._restaurant.rating}</p>

          <p class="card__body__name"><a href="#/detail/${this._restaurant.id}">${this._restaurant.name}</a></p>

          <p class="card__body__description">${this._restaurant.description}</p>
        </div>
    </article>
    `;
  }
}

customElements.define('restaurantitem-component', RestaurantitemComponent);
