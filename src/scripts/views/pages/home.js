/* eslint-disable linebreak-style */
/* eslint-disable max-len */

import '../components/hero-component';
import '../components/restaurantlist-component';
import RestaurantDbSource from '../../data/restaurantdb-source';

const Home = {
  async render() {
    return `
      <div class="loader"></div>
    `;
  },

  async afterRender() {
    const mainContent = document.getElementById('mainContent');

    try {
      const restaurants = await RestaurantDbSource.restaurantList();

      mainContent.innerHTML = `
        <hero-component></hero-component>
        <section id="restaurant" class="restaurant">
          <h2 class="restaurant__label">Explore Cafe</h2>
          <restaurantlist-component></restaurantlist-component>
        </section>
      `;
      document.querySelector('restaurantlist-component').restaurants = restaurants;
    } catch (e) {
      mainContent.innerHTML = ` 
        <section class="restaurant">
          <h2 class="restaurant__label">Gagal Memuat Data</h2>
        </section>
      `;
    }
  },
};

export default Home;
