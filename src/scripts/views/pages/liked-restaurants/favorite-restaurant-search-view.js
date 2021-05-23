/* eslint-disable linebreak-style */
/* eslint-disable class-methods-use-this */

import '../../components/restaurantlist-component';

class FavoriteRestaurantSearchView {
  getTemplate() {
    return `
      <div id="restaurant-search-container">
        <input id="query" type="text" />
        <div class="restaurant-result-container">
          <ul class="restaurants"></ul>
        </div>
      </div>
    `;
  }

  runWhenUserIsSearching(callback) {
    document.getElementById('query').addEventListener('change', (event) => {
      callback(event.target.value);
    });
  }

  showRestaurants(restaurants = []) {
    let html;
    if (restaurants.length > 0) {
      html = restaurants.reduce(
        (carry, restaurant) => carry.concat(`
        <li class="restaurant">
          <span class="restaurant__title">${restaurant.title || '-'}</span>
        </li>
      `),
        '',
      );
    } else {
      html = '<div class="restaurants__not__found">Restaurant tidak ditemukan</div>';
    }

    document.querySelector('.restaurants').innerHTML = html;
    document.getElementById('restaurant-search-container').dispatchEvent(new Event('restaurants:searched:updated'));
  }

  getFavoriteRestaurantTemplate() {
    return `
      <section id="restaurant" class="restaurant">
        <h2 class="restaurant__label">Favorite Cafe</h2>
        <restaurantlist-component></restaurantlist-component>
      </section>
    `;
  }

  showFavoriteRestaurant(restaurants) {
    document.getElementById('restaurants').innerHTML = '<div class="restaurant-item__not__found"></div>';
  }
}

export default FavoriteRestaurantSearchView;
