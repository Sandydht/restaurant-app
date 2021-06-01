/* eslint-disable linebreak-style */

import UrlParser from '../../routes/url-parser';
// import RestaurantDbSource from '../../data/restaurantdb-source';
import { createRestaurantDetailTemplate } from '../templates/templates-creator';
import DATA from '../../data/DATA.json';

const Detail = {
  async render() {
    return `
      <div id="content"></div>
    `;
  },

  async afterRender() {
    const content = document.getElementById('content');
    try {
      const url = UrlParser.parseActiveUrlWithoutCombiner();
      const { restaurants } = DATA;

      content.innerHTML = `
        <section id="restaurant" class="restaurant">
          <h2 class="restaurant__heading">Detail Cafe</h2>
          <div id="restaurantDetail" class="restaurant__body"></div>
        </section>
      `;

      const restaurantDetail = document.getElementById('restaurantDetail');
      restaurants
        .filter((restaurant) => restaurant.id === url.id)
        .forEach((restaurant) => {
          restaurantDetail.innerHTML += createRestaurantDetailTemplate(restaurant);
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

export default Detail;
