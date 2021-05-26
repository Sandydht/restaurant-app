/* eslint-disable linebreak-style */

import UrlParser from '../../routes/url-parser';
import RestaurantDbSource from '../../data/restaurantdb-source';
import FavoriteRestaurantIdb from '../../data/favoriterestaurant-idb';
import FavoriteButtonPresenter from '../../utils/favorite-button-presenter';
import '../components/restaurantdetail-component';
import '../components/favoriterestaurant-component';

const Detail = {
  async render() {
    return `
    <div id="content" class="content__wrapper">
      <div class="loader"></div>
    </div>`;
  },

  async afterRender() {
    const content = document.getElementById('content');

    try {
      const url = UrlParser.parseActiveUrlWithoutCombiner();
      const { restaurant } = await RestaurantDbSource.detailRestaurant(url.id);
      content.innerHTML = `
        <section class="restaurant">
          <h2 class="restaurant__label">Detail Cafe</h2>
          <restaurantdetail-component></restaurantdetail-component>
          <favoriterestaurant-component></favoriterestaurant-component>
        </section>
      `;

      document.querySelector('restaurantdetail-component').restaurant = restaurant;

      FavoriteButtonPresenter.init({
        buttonContainer: document.querySelector('favoriterestaurant-component'),
        favoriteRestaurants: FavoriteRestaurantIdb,
        restaurant,
      });
    } catch (e) {
      content.innerHTML = `
        <section>
          <h2 style="font-size: 20pt;">Gagal memuat data</h2>
        </section>
      `;
    }
  },
};

export default Detail;
