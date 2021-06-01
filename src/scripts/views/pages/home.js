/* eslint-disable linebreak-style */

import RestaurantDbSource from '../../data/restaurantdb-source';
import { createRestaurantItemTemplate } from '../templates/templates-creator';

const Home = {
  async render() {
    return `
      <div class="hero">
        <div class="hero__text">
          <p>Welcome to <span class="hero__brand">Cafetaria</span></p>
          <p>Have a nice day</p>
        </div>
      </div>

      <section id="restaurant" class="restaurants">
        <h2 class="restaurants__heading">Explore Cafe</h2>
        <div id="restaurantList" class="restaurant__list"></div>
      </section>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantDbSource.restaurantsList();
    const restaurantsContainer = document.getElementById('restaurantList');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Home;
