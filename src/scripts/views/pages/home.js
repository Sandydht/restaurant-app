/* eslint-disable linebreak-style */
/* eslint-disable no-underscore-dangle */

import RestaurantDbSource from '../../models/restaurantdb-source';

import '../component/hero-image';
import '../component/restaurant-list';
import '../component-skeleton/hero-image-skeleton';
import '../component-skeleton/restaurant-list-skeleton';
import '../component/not-found';

const Home = {
  async render() {
    return `
      <hero-image-skeleton></hero-image-skeleton>
      <section class="restaurants" id="restaurants">
        <h2 class="restaurants__heading restaurants__heading__skeleton">Explore Cafe</h2>
        <div class="restaurants__body">
          <restaurant-list-skeleton></restaurant-list-skeleton>
        </div>
      </section>
    `;
  },

  async afterRender() {
    const restaurantListSkeleton = document.querySelector('restaurant-list-skeleton');
    restaurantListSkeleton.count = 20;

    const mainContent = document.getElementById('mainContent');

    try {
      const restaurants = await RestaurantDbSource.restaurantsList();
      mainContent.innerHTML = `
        <hero-image></hero-image>
        <section class="restaurants" id="restaurants">
          <h2 class="restaurants__heading">Explore Cafe</h2>
          <div class="restaurants__body">
            <restaurant-list></restaurant-list>
          </div>
        </section>
      `;

      document.querySelector('restaurant-list').restaurants = restaurants;
    } catch (e) {
      mainContent.innerHTML = '<not-found></not-found>';
      document.querySelector('not-found').message = 'Failed to load data \nPlease check your internet connection';
    }
  },
};

export default Home;
