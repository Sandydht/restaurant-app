/* eslint-disable linebreak-style */
/* eslint-disable no-unused-expressions */
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
          <picture>
            <source media="(min-width: 1024px)" srcset="${this._restaurant.pictureId ? CONFIG.BASE_IMAGE_URL_LARGE + this._restaurant.pictureId : ''}" type="image/webp">
            <source media="(min-width: 1024px)" srcset="${this._restaurant.pictureId ? CONFIG.BASE_IMAGE_URL_LARGE + this._restaurant.pictureId : ''}" type="image/jpeg">

            <source media="(min-width: 768px)" srcset="${this._restaurant.pictureId ? CONFIG.BASE_IMAGE_URL_MEDIUM + this._restaurant.pictureId : ''}" type="image/webp">
            <source media="(min-width: 768px)" srcset="${this._restaurant.pictureId ? CONFIG.BASE_IMAGE_URL_MEDIUM + this._restaurant.pictureId : ''}" type="image/jpeg">

            <img height=200 class="lazyload" data-src="${this._restaurant.pictureId ? CONFIG.BASE_IMAGE_URL_SMALL + this._restaurant.pictureId : ''}" alt="${this._restaurant.name}">
          </picture>

          <p class="card__header__city">${this._restaurant.city || '-'}</p>
        </div>

        <div class="card__body">
          <p class="card__subtitle">Rating ${this._restaurant.rating || '-'}</p>

          <p class="card__title">${this._restaurant.name || '-'}</p>

          <p class="card__description">${this._restaurant.description || '-'}</p>
        </div>

        <div class="card__actions">
          <a href="#/detail/${this._restaurant.id}">See detail</a>
        </div>
    </article>
    `;
  }
}

customElements.get('restaurantitem-component') || customElements.define('restaurantitem-component', RestaurantitemComponent);
