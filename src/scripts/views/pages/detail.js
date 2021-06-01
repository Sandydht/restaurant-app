/* eslint-disable linebreak-style */

import UrlParser from '../../routes/url-parser';
import RestaurantDbSource from '../../data/restaurantdb-source';
import { createRestaurantDetailTemplate } from '../templates/templates-creator';

const Detail = {
  async render() {
    return `
      <div class="content__wrapper">
        <section class="restaurant">
          <h2 class="restaurant__heading">Detail Page</h2>

          <div id="restaurantDetail" class="restaurant__detail"><div>
        </section>
      </div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantDbSource.restaurantDetail(url.id);
    const restaurantContainer = document.getElementById('restaurantDetail');
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);
  },
};

export default Detail;
