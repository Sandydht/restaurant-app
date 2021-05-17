/* eslint-disable linebreak-style */
/* eslint-disable no-underscore-dangle */

import './restaurantitem-component';

class RestaurantlistComponent extends HTMLElement {
  set restaurants(restaurants) {
    this._restaurants = restaurants;
    this.render();
  }

  render() {
    this.innerHTML = `
      <section class="restaurant">
        <h2 class="restaurant__label">Explore Cafe</h2>

        <div id="restaurantList" class="restaurant__list"></div>
      </section>
    `;

    this._restaurants.forEach((restaurant) => {
      const restaurantItemElement = document.createElement('restaurantitem-component');
      restaurantItemElement.restaurant = restaurant;
      document.getElementById('restaurantList').appendChild(restaurantItemElement);
    });
  }
}

customElements.define('restaurantlist-component', RestaurantlistComponent);
