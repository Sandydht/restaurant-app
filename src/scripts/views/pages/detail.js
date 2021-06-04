/* eslint-disable linebreak-style */
/* eslint-disable no-underscore-dangle */
import UrlParser from '../../routes/url-parser';
import RestaurantDbSource from '../../data/restaurantdb-source';
import '../component/spinner-loading';
import '../component/restaurant-detail';
import '../component/restaurant-categories';
import '../component/restaurant-menus';
import '../component/customer-reviews';
import '../component/review-list';
import '../component/favorite-button';

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
        <favorite-button></favorite-button>
      `;

      this._renderRestaurantDetail(restaurant);
      this._renderRestaurantCategories(restaurant);
      this._renderRestaurantMenus(restaurant);
      this._addCustomerReviews(restaurant);
      this._renderRestaurantReviewList(restaurant);
    } catch (e) {
      mainContent.innerHTML = `
        <section>
          <h2>Gagal memuat data</h2>
        </section>
      `;
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

    customerReviews.clickEvent = async () => {
      const { id } = restaurant;
      const inputName = customerReviews.valueName;
      const inputReview = customerReviews.valueReview;

      customerReviews.clickTrigger = true;

      const responseReview = await RestaurantDbSource.restaurantAddCustomerReviews({
        id,
        name: inputName,
        review: inputReview,
      });

      customerReviews.clickTrigger = false;
      this._renderRestaurantReviewList(responseReview);
    };
  },

  _renderRestaurantReviewList(restaurant) {
    const reviewList = document.querySelector('review-list');
    reviewList.restaurant = restaurant;
  },

  _likeRestaurant() {

  },
};

export default Detail;
