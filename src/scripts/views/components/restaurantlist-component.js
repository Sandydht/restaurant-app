/* eslint-disable linebreak-style */
/* eslint-disable no-underscore-dangle */

import './restaurantitem-component';

class RestaurantlistComponent extends HTMLElement {
  set restaurants(restaurants) {
    this._restaurants = restaurants;
    this.render();
  }

  render() {
    this._restaurants.forEach((restaurant) => {
      const restaurantItemElement = document.createElement('restaurantitem-component');
      restaurantItemElement.restaurant = restaurant;
      this.appendChild(restaurantItemElement);
    });
  }
}

customElements.define('restaurantlist-component', RestaurantlistComponent);
