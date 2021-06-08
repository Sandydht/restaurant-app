/* eslint-disable linebreak-style */
/* eslint-disable no-underscore-dangle */
/* eslint-disable class-methods-use-this */

import '../../component/search-favorite';
import '../../component/restaurant-list';
import '../../component/not-found';

class FavoriteRestaurantSearchView {
  getTemplate() {
    return `
    <h2 class="content__heading">Favorite Cafe</h2>
    <search-favorite></search-favorite>
    <div id="contentBody" class="content__body"></div>
  `;
  }

  runWhenUserIsSearching(callback) {
    document.querySelector('search-favorite').changeEvent = (event) => {
      callback(event.target.value);
    };
  }

  showFavoriteRestaurants(restaurants = []) {
    const contentBody = document.getElementById('contentBody');

    if (restaurants.length) {
      contentBody.innerHTML = '<restaurant-list></restaurant-list>';
      const restaurantList = document.querySelector('restaurant-list');

      restaurantList.restaurants = restaurants;
    } else {
      contentBody.innerHTML = '<not-found></not-found>';
      const notFound = document.querySelector('not-found');

      notFound.message = 'No favorite cafe was selected';
    }

    contentBody.dispatchEvent(new Event('restaurants:updated'));
  }
}

export default FavoriteRestaurantSearchView;
