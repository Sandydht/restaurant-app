/* eslint-disable linebreak-style */

import RestaurantDbSource from '../../data/restaurantdb-source';
import { createRestaurantItemTemplate } from '../templates/templates-creator';

const Home = {
  async render() {
    return `
      <div id="content"></div>
    `;
  },

  async afterRender() {
    const content = document.getElementById('content');
    try {
      const restaurants = await RestaurantDbSource.restaurantsList();

      content.innerHTML = `
        <div class="hero">
          <div class="hero__text">
            <p>Welcome to <span class="hero__brand">Cafetaria</span></p>
            <p>Have a nice day</p>
          </div>
        </div>

        <section id="restaurants" class="restaurants">
          <h2 class="restaurants__heading">Explore Cafe</h2>
          <div id="restaurantsList" class="restaurants__list"></div>
        </section>
      `;

      const restaurantsList = document.getElementById('restaurantsList');
      restaurants.forEach((restaurant) => {
        restaurantsList.innerHTML += createRestaurantItemTemplate(restaurant);
      });
    } catch (e) {
      content.innerHTML = `
        <section>
          <h2>Gagal memuat data</h2>
        </section>
      `;
    }
  },
};

export default Home;
