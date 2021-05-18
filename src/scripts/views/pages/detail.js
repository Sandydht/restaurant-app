/* eslint-disable linebreak-style */

import UrlParser from '../../routes/url-parser';
import RestaurantDbSource from '../../data/restaurantdb-source';
import '../components/restaurantdetail-component';

const Detail = {
  async render() {
    return `
      <div class="loader"></div>
    `;
  },

  async afterRender() {
    const mainContent = document.getElementById('mainContent');
    try {
      const url = UrlParser.parseActiveUrlWithoutCombiner();
      const { restaurant } = await RestaurantDbSource.detailRestaurant(url.id);
      mainContent.innerHTML = '<restaurantdetail-component></restaurantdetail-component>';
      document.querySelector('restaurantdetail-component').restaurant = restaurant;
    } catch (e) {
      mainContent.innerHTML = `
        <section>
          <h2 style="text-align: center; margin: 30px 20px; font-size: 20pt;">Gagal Memuat Data</h2>
        </section>
      `;
    }
  },
};

export default Detail;
