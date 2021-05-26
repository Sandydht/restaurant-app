/* eslint-disable linebreak-style */
/* eslint-disable array-callback-return */
/* eslint-disable no-unused-expressions */
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

customElements.get('restaurantlist-component') || customElements.define('restaurantlist-component', RestaurantlistComponent);
