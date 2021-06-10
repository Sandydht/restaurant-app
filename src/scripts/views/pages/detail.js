/* eslint-disable linebreak-style */
/* eslint-disable no-new */
/* eslint-disable no-underscore-dangle */

import RestaurantDbSource from '../../models/restaurantdb-source';
import UrlParser from '../../routes/url-parser';
import FavoriteRestaurantIdb from '../../models/favorite-restaurant-idb';
import LikeButtonPresenter from '../../presenters/like-button-presenter';

import '../component/spinner-loading';
import '../component/restaurant-detail';
import '../component/restaurant-categories';
import '../component/restaurant-menus';
import '../component/review-list';
import '../component/like-button';

const Detail = {
  async render() {
    return '<spinner-loading></spinner-loading>';
  },

  async afterRender() {
    const mainContent = document.getElementById('mainContent');
    try {
      const url = UrlParser.parseActiveUrlWithoutCombiner();
      const restaurant = await RestaurantDbSource.restaurantDetail(url.id);

      mainContent.innerHTML = `
        <section class="restaurant">
          <h2 class="restaurant__heading">Detail Cafe</h2>
          <div class="restaurant__body">
            <restaurant-detail></restaurant-detail>
            <hr>
            <restaurant-categories></restaurant-categories>
            <hr>
            <restaurant-menus></restaurant-menus>
            <hr>
            <p style="font-size: 14pt; font-weight: bold;">Customer Reviews</p>
            <review-list></review-list>
          </div>
        </section>
        <like-button></like-button>
      `;

      document.querySelector('restaurant-detail').restaurant = restaurant;
      document.querySelector('restaurant-categories').restaurant = restaurant;
      document.querySelector('restaurant-menus').restaurant = restaurant;
      document.querySelector('review-list').restaurant = restaurant;

      await LikeButtonPresenter.init({
        likeButtonContainer: document.querySelector('like-button'),
        favoriteRestaurant: FavoriteRestaurantIdb,
        restaurant,
      });
    } catch (e) {
      mainContent.innerHTML = '<not-found></not-found>';
      document.querySelector('not-found').message = 'Failed to load data \nPlease check your internet connection';
    }
  },
};

export default Detail;
