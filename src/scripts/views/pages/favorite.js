/* eslint-disable linebreak-style */
/* eslint-disable no-underscore-dangle */

import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import '../component/spinner-loading';
import '../component/restaurant-list';
import '../component/not-found';

const Favorite = {
  async render() {
    return '<spinner-loading></spinner-loading>';
  },

  async afterRender() {
    const mainContent = document.getElementById('mainContent');

    try {
      const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();

      mainContent.innerHTML = `
        <section class="restaurants">
          <h2 class="restaurants__heading">Favorite Cafe</h2>
          <div class="restaurants__body">
            <restaurant-list></restaurant-list>
          </div>
        </section>
      `;

      if (restaurants.length > 0) {
        this._renderFavoriteRestaurantList(restaurants);
      } else {
        mainContent.innerHTML = `
          <section class="restaurants">
            <h2 class="restaurants__heading">Favorite Cafe</h2>
            <div class="restaurants__body">
              <not-found></not-found>
            </div>
          </section>
        `;

        const notFound = document.querySelector('not-found');
        notFound.message = 'No favorite cafe was selected';
      }
    } catch (e) {
      mainContent.innerHTML = '<not-found></not-found>';
      const notFound = document.querySelector('not-found');
      notFound.message = 'Failed to load data \nPlease check your internet connection';
    }
  },

  _renderFavoriteRestaurantList(restaurants) {
    const restaurantList = document.querySelector('restaurant-list');
    restaurantList.restaurants = restaurants;
  },
};

export default Favorite;
