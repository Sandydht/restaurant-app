/* eslint-disable linebreak-style */

import FavoriteRestaurantIdb from '../../data/restaurantidb-source';
import { createRestaurantItemTemplate } from '../templates/templates-creator';

const Favorite = {
  async render() {
    return `
      <div id="content"></div>
    `;
  },

  async afterRender() {
    const content = document.getElementById('content');

    try {
      const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();

      content.innerHTML = `
        <section class="restaurants">
          <h2 class="restaurants__heading">Favorite Cafe</h2>
          <div id="restaurantsList" class="restaurants__list"></div>
        </section>
      `;

      const restaurantsList = document.getElementById('restaurantsList');

      if (restaurants.length === 0) {
        restaurantsList.innerHTML = `
          <section>
            <h2>No data to display</h2>
          </section>
        `;
      } else {
        restaurants.forEach((restaurant) => {
          restaurantsList.innerHTML += createRestaurantItemTemplate(restaurant);
        });
      }
    } catch (e) {
      content.innerHTML = `
        <section>
          <h2>Gagal memuat data</h2>
        </section>
      `;
    }
  },
};

export default Favorite;
