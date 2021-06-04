/* eslint-disable linebreak-style */
/* eslint-disable no-underscore-dangle */

import './restaurant-categories.scss';

class RestaurantCategories extends HTMLElement {
  set restaurant(restaurant) {
    this._restaurant = restaurant;
    this.render();
  }

  render() {
    this.innerHTML = `
      <p class="heading">Categories</p>
      <ul id="categoryList" class="body"></ul>
    `;

    const categoryList = this.querySelector('#categoryList');
    this._restaurant.categories.forEach((category) => {
      const categoryItem = document.createElement('li');
      categoryItem.innerHTML = category.name;
      categoryList.appendChild(categoryItem);
    });
  }
}

customElements.define('restaurant-categories', RestaurantCategories);
