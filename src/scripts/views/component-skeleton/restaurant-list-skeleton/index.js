/* eslint-disable linebreak-style */
/* eslint-disable no-plusplus */
/* eslint-disable no-underscore-dangle */

import './restaurant-list-skeleton.scss';
import '../restaurant-item-skeleton';

class RestaurantListSkeleton extends HTMLElement {
  set count(count) {
    this._count = count;
    this.render();
  }

  render() {
    this.innerHTML = '';
    for (let i = 1; i <= this._count; i++) {
      const restaurantItemSkeleton = document.createElement('restaurant-item-skeleton');
      this.appendChild(restaurantItemSkeleton);
    }
  }
}

customElements.define('restaurant-list-skeleton', RestaurantListSkeleton);
