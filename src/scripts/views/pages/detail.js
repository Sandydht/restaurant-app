/* eslint-disable linebreak-style */

import UrlParser from '../../routes/url-parser';
import RestaurantDbSource from '../../data/restaurantdb-source';
import FavoriteRestaurantIdb from '../../data/favoriterestaurant-idb';
import FavoriteButtonInitiator from '../../utils/favorite-button-initiator';
import '../components/restaurantdetail-component';
import '../components/favoriterestaurant-component';

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
      mainContent.innerHTML = `
        <section id="restaurant" class="restaurant__detail">
          <h2 class="restaurant__detail__label">Detail Cafe</h2>
          <restaurantdetail-component></restaurantdetail-component>
          <favoriterestaurant-component></favoriterestaurant-component>
        </section> 
      `;

      document.querySelector('restaurantdetail-component').restaurant = restaurant;

      FavoriteButtonInitiator.init({
        buttonContainer: document.querySelector('favoriterestaurant-component'),
        favoriteRestaurants: FavoriteRestaurantIdb,
        restaurant,
      });
    } catch (e) {
      mainContent.innerHTML = `
        <section class="restaurant">
          <h2 class="restaurant__label">Gagal Memuat Data</h2>
        </section>
      `;
    }
  },
};

export default Detail;
