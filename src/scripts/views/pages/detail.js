/* eslint-disable linebreak-style */
/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
/* eslint-disable max-len */

import UrlParser from '../../routes/url-parser';
import RestaurantDbSource from '../../data/restaurantdb-source';
import {
  createRestaurantCategoryItemTemplate,
  createRestaurantDetailTemplate,
  createRestaurantDrinkItemTemplate,
  createRestaurantFoodItemTemplate,
  createRestaurantReviewItemTemplate,
} from '../templates/templates-creator';
import AddCustomerReviewsInitiator from '../../utils/add-customer-reviews-initiator';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import '../component/spinner-loading';

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

          <article class="restaurant__body">
            <div id="restaurantDetail" class="restaurant__detail"></div>

            <hr>

            <div id="restaurantCategories" class="restaurant__categories">
              <p>Categories</p>
              <ul id="categoryList"></ul>
            </div>

            <hr>

            <div id="restaurantMenus" class="restaurant__menus">
              <div class="restaurant-menus__body">
                <div class="food__list">
                  <p>Foods</p>
                  <ul id="foodList"></ul>
                </div>
                  
                <div class="drink__list">
                  <p>Drinks</p>
                  <ul id="drinkList"></ul>
                </div>
              </div>
            </div>

            <hr>

            <div class="add__customer__reviews">
              <p>Add Customer Reviews</p>

              <div id="addCustomerReviews" class="add-customer-reviews__body"></div>
            </div>

            <div id="reviewList" class="review__list"></div>
          </article>
        </section>

        <div id="likeButtonContainer"></div>
      `;

      this._renderRestaurantDetail(restaurant);
      this._renderRestaurantCategoryList(restaurant);
      this._renderRestaurantFoodList(restaurant);
      this._renderRestaurantDrinkList(restaurant);
      this._renderRestaurantAddCustomerReviews(restaurant);
      this._renderRestaurantReviewList(restaurant);
      this._renderLikeButton(restaurant);
    } catch (e) {
      mainContent.innerHTML = `
        <section>
          <h2>Gagal memuat data</h2>
        </section>
      `;
    }
  },

  _renderRestaurantDetail(restaurant) {
    const restaurantDetail = document.getElementById('restaurantDetail');
    restaurantDetail.innerHTML = createRestaurantDetailTemplate(restaurant);
  },

  _renderRestaurantCategoryList(restaurant) {
    const categoryList = document.getElementById('categoryList');
    restaurant.categories.forEach((category) => {
      categoryList.innerHTML += createRestaurantCategoryItemTemplate(category);
    });
  },

  _renderRestaurantFoodList(restaurant) {
    const foodList = document.getElementById('foodList');
    restaurant.menus.foods.forEach((food) => {
      foodList.innerHTML += createRestaurantFoodItemTemplate(food);
    });
  },

  _renderRestaurantDrinkList(restaurant) {
    const drinkList = document.getElementById('drinkList');
    restaurant.menus.drinks.forEach((drink) => {
      drinkList.innerHTML += createRestaurantDrinkItemTemplate(drink);
    });
  },

  _renderRestaurantAddCustomerReviews(restaurant) {
    const addCustomerReviewsContainer = document.getElementById('addCustomerReviews');
    const reviewList = document.getElementById('reviewList');

    AddCustomerReviewsInitiator.init({
      addCustomerReviewsContainer,
      id: restaurant.id,
      reviewListContainer: reviewList,
    });
  },

  _renderRestaurantReviewList(restaurant) {
    const reviewList = document.getElementById('reviewList');
    reviewList.innerHTML = '';
    restaurant.customerReviews.forEach((customerReview) => {
      reviewList.innerHTML += createRestaurantReviewItemTemplate(customerReview);
    });
  },

  _renderLikeButton(restaurant) {
    const likeButtonContainer = document.getElementById('likeButtonContainer');
    LikeButtonInitiator.init({
      likeButtonContainer,
      restaurant,
    });
  },
};

export default Detail;
