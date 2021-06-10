/* eslint-disable linebreak-style */
/* eslint-disable no-underscore-dangle */
/* eslint-disable class-methods-use-this */

import '../../component/search-favorite';
import '../../component/restaurant-list';
import '../../component/not-found';

class FavoriteRestaurantSearchView {
  getTemplate() {
    return `
      <section class="favorite__restaurants" id="favoriteRestaurants">
        <h2 class="favorite-restaurants__heading">Favorite Cafe</h2>
        <search-favorite></search-favorite>
        <div id="favoriteRestaurantsBody" class="favorite-restaurants__body"></div>
      </section>
    `;
  }

  runWhenUserIsSearching(callback) {
    document.querySelector('search-favorite').changeEvent = (event) => {
      callback(event.target.value);
    };
  }

  showFavoriteRestaurants(restaurants = []) {
    const favoriteRestaurantsBody = document.getElementById('favoriteRestaurantsBody');

    if (restaurants.length) {
      favoriteRestaurantsBody.innerHTML = '<restaurant-list></restaurant-list>';
      const restaurantList = document.querySelector('restaurant-list');

      restaurantList.restaurants = restaurants;
    } else {
      favoriteRestaurantsBody.innerHTML = '<not-found></not-found>';
      const notFound = document.querySelector('not-found');

      notFound.message = 'No favorite cafe was selected';
    }

    favoriteRestaurantsBody.dispatchEvent(new Event('restaurants:updated'));
  }
}

export default FavoriteRestaurantSearchView;
