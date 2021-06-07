/* eslint-disable linebreak-style */
/* eslint-disable no-underscore-dangle */
/* eslint-disable class-methods-use-this */

import '../../component/restaurant-list';
import '../../component/not-found';

class FavoriteRestaurantSearchView {
  getTemplate() {
    return `
      <section class="restaurants">
        <h2 class="restaurants__heading">Favorite Restaurants</h2>
        <input id="query" class="query" type="text">
        <div class="restaurants__body" id="restaurantsBody"></div>
      </section>
    `;
  }

  runWhenUserIsSearching(callback) {
    document.getElementById('query').addEventListener('change', (event) => {
      callback(event.target.value);
    });
  }

  showFavoriteRestaurants(restaurants = []) {
    const restaurantsBody = document.getElementById('restaurantsBody');

    if (restaurants.length) {
      restaurantsBody.innerHTML = '<restaurant-list></restaurant-list>';
      const restaurantList = document.querySelector('restaurant-list');
      restaurantList.restaurants = restaurants;
    } else {
      restaurantsBody.innerHTML = '<not-found></not-found>';
      const notFound = document.querySelector('not-found');
      notFound.message = 'Tidak ada restaurant untuk ditampilkan';
    }

    restaurantsBody.dispatchEvent(new Event('restaurants:updated'));
  }
}

export default FavoriteRestaurantSearchView;
