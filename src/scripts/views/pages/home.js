/* eslint-disable linebreak-style */
/* eslint-disable no-underscore-dangle */

import RestaurantDbSource from '../../data/restaurantdb-source';

import '../component/hero-image';
import '../component/restaurant-list';
import '../component/spinner-loading';
import '../component/not-found';

const Home = {
  async render() {
    return '<spinner-loading></spinner-loading>';
  },

  async afterRender() {
    const mainContent = document.getElementById('mainContent');
    try {
      const restaurants = await RestaurantDbSource.restaurantsList();
      mainContent.innerHTML = `
        <hero-image></hero-image>
        <section id="restaurants" class="restaurants">
          <h2 class="restaurants__heading">Explore Cafe</h2>
          <div class="restaurants__body">
            <restaurant-list></restaurant-list>
          </div>
        </section>
      `;

      this._renderRestaurantList(restaurants);
    } catch (e) {
      mainContent.innerHTML = '<not-found></not-found>';
      const notFound = document.querySelector('not-found');
      notFound.message = 'Failed to load data';
    }
  },

  _renderRestaurantList(restaurants) {
    const restaurantList = document.querySelector('restaurant-list');
    restaurantList.restaurants = restaurants;
  },
};

export default Home;
