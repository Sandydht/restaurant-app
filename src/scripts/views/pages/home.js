/* eslint-disable linebreak-style */
/* eslint-disable max-len */

import '../components/hero-component';
import '../components/restaurantlist-component';
import RestaurantDbSource from '../../data/restaurantdb-source';

const Home = {
  async render() {
    return `
    <div id="content" class="content__wrapper">
      <div class="loader"></div>
    </div>`;
  },

  async afterRender() {
    const content = document.getElementById('content');

    try {
      const restaurants = await RestaurantDbSource.restaurantList();

      content.innerHTML = `
        <hero-component></hero-component>
        <section class="restaurant" id="restaurant">
          <h2 class="restaurant__label">Explore Cafe</h2>
          <restaurantlist-component></restaurantlist-component>
        </section>
      `;

      document.querySelector('restaurantlist-component').restaurants = restaurants;
    } catch (e) {
      content.innerHTML = `
        <section>
          <h2 style="font-size: 20pt;">Gagal memuat data</h2>
        </section>
      `;
    }
  },
};

export default Home;
