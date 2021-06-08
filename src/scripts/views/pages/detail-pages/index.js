/* eslint-disable linebreak-style */
/* eslint-disable no-new */
/* eslint-disable no-underscore-dangle */

import RestaurantDbSource from '../../../models/restaurantdb-source';
import FavoriteRestaurantIdb from '../../../models/favorite-restaurant-idb';
import UrlParser from '../../../routes/url-parser';
import LikeButtonPresenter from '../../../presenters/like-button-presenter';
import AddCustomerReviewsPresenter from '../../../presenters/add-customer-reviews-presenter';
import CustomerReviewsShowPresenter from '../../../presenters/customer-reviews-show-presenter';
import CustomerReviewsView from '../customer-reviews/customer-reviews-view';

import './detail-pages.scss';
import '../../component/spinner-loading';
import '../../component/restaurant-detail';
import '../../component/restaurant-categories';
import '../../component/restaurant-menus';
import '../../component/customer-reviews';
import '../../component/review-list';
import '../../component/like-button';
import '../../component/snackbar-component';

class DetailPages extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  async render() {
    this.innerHTML = '<spinner-loading></spinner-loading>';

    try {
      const url = UrlParser.parseActiveUrlWithoutCombiner();
      const restaurant = await RestaurantDbSource.restaurantDetail(url.id);
      const customerReviewsView = new CustomerReviewsView();

      this.innerHTML = `
        <section class="content">
          <h2 class="content__heading">Detail Cafe</h2>
          <div class="content__body">
            <restaurant-detail></restaurant-detail>
            <hr>
            <restaurant-categories></restaurant-categories>
            <hr>
            <restaurant-menus></restaurant-menus>
            <hr>
            ${customerReviewsView.getTemplate()}
          </div>
        </section>
        <like-button></like-button>
      `;

      this.querySelector('restaurant-detail').restaurant = restaurant;
      this.querySelector('restaurant-categories').restaurant = restaurant;
      this.querySelector('restaurant-menus').restaurant = restaurant;

      new AddCustomerReviewsPresenter({
        customerReviewsView,
        restaurantDb: RestaurantDbSource,
        restaurant,
      });

      new CustomerReviewsShowPresenter({
        customerReviewsView,
        restaurant,
      });

      new LikeButtonPresenter({
        likeButtonContainer: this.querySelector('like-button'),
        favoriteRestaurant: FavoriteRestaurantIdb,
        restaurant,
      });
    } catch (e) {
      this.innerHTML = '<not-found></not-found>';

      this.querySelector('not-found').message = 'Failed to load data \nPlease check your internet connection';
    }
  }
}

customElements.define('detail-pages', DetailPages);
