/* eslint-disable linebreak-style */
/* eslint-disable no-plusplus */
/* eslint-disable no-underscore-dangle */

import './restaurant-categories-skeleton.scss';

class RestaurantCategoriesSkeleton extends HTMLElement {
  set count(count) {
    this._count = count;
    this.render();
  }

  render() {
    this.innerHTML = `
      <p class="heading">Categories</p>
      <ul id="categoryList" class="body"></ul>
    `;

    const categoryList = this.querySelector('#categoryList');
    for (let i = 1; i <= this._count; i++) {
      const categoryItem = document.createElement('li');
      categoryList.appendChild(categoryItem);
    }
  }
}

customElements.define('restaurant-categories-skeleton', RestaurantCategoriesSkeleton);
