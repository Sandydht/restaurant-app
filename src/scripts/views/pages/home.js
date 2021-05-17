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
        <restaurantlist-component></restaurantlist-component>
      `;
      document.querySelector('restaurantlist-component').restaurants = restaurants;
    } catch (e) {
      mainContent.innerHTML = `
        <section>
          <h2 style="text-align: center; margin: 30px 20px; font-size: 20pt;">Data Tidak Tersedia</h2>
        </section>
      `;
    }
  },
};

export default Home;
