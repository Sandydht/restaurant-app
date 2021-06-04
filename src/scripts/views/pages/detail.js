/* eslint-disable linebreak-style */
/* eslint-disable no-underscore-dangle */
import UrlParser from '../../routes/url-parser';
import RestaurantDbSource from '../../data/restaurantdb-source';
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import CustomerReviewsInitiator from '../../utils/customer-reviews-initiator';
import '../component/spinner-loading';
import '../component/restaurant-detail';
import '../component/restaurant-categories';
import '../component/restaurant-menus';
import '../component/customer-reviews';
import '../component/review-list';
import '../component/like-button';
import '../component/not-found';

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
        <section id="restaurant" class="restaurant">
          <h2 class="restaurant__heading">Detail Cafe</h2>
          <div class="restaurant__body">
            <restaurant-detail></restaurant-detail>
            <hr>
            <restaurant-categories></restaurant-categories>
            <hr>
            <restaurant-menus></restaurant-menus>
            <hr>
            <customer-reviews></customer-reviews>
            <review-list></review-list>
          </div>
        </section>
        <like-button></like-button>
      `;

      this._renderRestaurantDetail(restaurant);
      this._renderRestaurantCategories(restaurant);
      this._renderRestaurantMenus(restaurant);
      this._addCustomerReviews(restaurant);
      this._renderRestaurantReviewList(restaurant);
      this._renderLikeButton(restaurant);
    } catch (e) {
      mainContent.innerHTML = '<not-found></not-found>';
      const notFound = document.querySelector('not-found');
      notFound.message = 'Failed to load data';
    }
  },

  _renderRestaurantDetail(restaurant) {
    const restaurantDetail = document.querySelector('restaurant-detail');
    restaurantDetail.restaurant = restaurant;
  },

  _renderRestaurantCategories(restaurant) {
    const restaurantCategories = document.querySelector('restaurant-categories');
    restaurantCategories.restaurant = restaurant;
  },

  _renderRestaurantMenus(restaurant) {
    const restaurantMenus = document.querySelector('restaurant-menus');
    restaurantMenus.restaurant = restaurant;
  },

  _addCustomerReviews(restaurant) {
    const customerReviews = document.querySelector('customer-reviews');
    const reviewList = document.querySelector('review-list');
    CustomerReviewsInitiator.init({
      customerReviewsContainer: customerReviews,
      restaurantDb: RestaurantDbSource,
      reviewListContainer: reviewList,
      restaurant,
    });
  },

  _renderRestaurantReviewList(restaurant) {
    const reviewList = document.querySelector('review-list');
    reviewList.restaurant = restaurant;
  },

  _renderLikeButton(restaurant) {
    const likeButton = document.querySelector('like-button');
    LikeButtonInitiator.init({
      likeButtonContainer: likeButton,
      favoriteRestaurant: FavoriteRestaurantIdb,
      restaurant,
    });
  },
};

export default Detail;
