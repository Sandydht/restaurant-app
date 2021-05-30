/* eslint-disable linebreak-style */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-multi-assign */
/* eslint-disable class-methods-use-this */

import '../../components/restaurantlist-component';

class FavoriteRestaurantSearchView {
  getTemplate() {
    return `
      <section class="restaurant">
        <h2 class="restaurant__label">Favorite Cafe</h2>
        <div class="search__bar">
          <input id="query" type="text" placeholder="Search restaurant..."/>
        </div>
        <div id="restaurants"></div>
      </section>
    `;
  }

  runWhenUserIsSearching(callback) {
    document.getElementById('query').addEventListener('change', (event) => {
      callback(event.target.value);
    });
  }

  showFavoriteRestaurants(restaurants = []) {
    const restaurantContainer = document.getElementById('restaurants');

    if (restaurants.length) {
      restaurantContainer.innerHTML = '<restaurantlist-component></restaurantlist-component>';
      document.querySelector('restaurantlist-component').restaurants = restaurants;
    } else {
      restaurantContainer.innerHTML = this._getEmptyRestaurantTemplate();
    }

    document.getElementById('restaurants').dispatchEvent(new Event('restaurants:updated'));
  }

  _getEmptyRestaurantTemplate() {
    return `
      <div class="restaurant-item__not__found">
        <h2>No Data To Display</h2>
      </div>
    `;
  }
}

export default FavoriteRestaurantSearchView;
