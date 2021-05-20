/* eslint-disable linebreak-style */
/* eslint-disable no-underscore-dangle */

import '../components/restaurantlist-component';
import FavoriteRestaurantIdb from '../../data/favoriterestaurant-idb';

const Favorite = {
  async render() {
    return `
      <div class="loader"></div>
    `;
  },

  async afterRender() {
    const mainContent = document.getElementById('mainContent');
    try {
      const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
      if (restaurants.length === 0) {
        mainContent.innerHTML = `
          <section id="restaurant" class="restaurant">
            <h2 class="restaurant__label">No Data To Display</h2>
          </section>
        `;
      } else {
        mainContent.innerHTML = `
          <section id="restaurant" class="restaurant">
            <h2 class="restaurant__label">Favorite Cafe</h2>
            <restaurantlist-component></restaurantlist-component>
          </section>
        `;
        document.querySelector('restaurantlist-component').restaurants = restaurants;
      }
    } catch (e) {
      mainContent.innerHTML = `
        <section class="restaurant">
          <h2 class="restaurant__label">Gagal Memuat Data</h2>
        </section>
      `;
    }
  },
};

export default Favorite;
