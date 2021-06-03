/* eslint-disable linebreak-style */
/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
/* eslint-disable max-len */

import UrlParser from '../../routes/url-parser';
import RestaurantDbSource from '../../data/restaurantdb-source';
import {
  createRestaurantDetailTemplate,
  createRestaurantCategoriesTemplate,
  createRestaurantFoodListTemplate,
  createRestaurantDrinkListTemplate,
  createRestaurantCustomerReviewsTemplate,
} from '../templates/templates-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

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
      const restaurant = await RestaurantDbSource.restaurantDetail(url.id);

      content.innerHTML = `
        <section id="restaurant" class="restaurant">
          <h2 class="restaurant__heading">Detail Cafe</h2>

          <article class="restaurant__body">
            <div id="restaurantDetail" class="restaurant__detail"></div>

            <hr>
            
            <div class="restaurant__categories">
              <p>Categories</p>
              <ul id="categoryList"></ul>
            </div>

            <hr>

            <div class="restaurant__menu">
              <p>Menus</p>

              <div>
                <p>Foods</p>
                <ul id="foodList"></ul>
              </div>

              <div>
                <p>Drinks</p>
                <ul id="drinkList"></ul>
              </div>
            </div>

            <hr>

            <div class="restaurant__reviews">
              <div class="add__reviews">
                  <p class="add-reviews__heading">Add Review</p>

                  <div class="name">
                    <label for="name">Name</label> <br>
                    <input type="text" name="name" id="name" placeholder="Your name...">
                  </div>

                  <div class="review">
                    <label for="review">Review</label> <br>
                    <textarea name="review" rows="6" id="review" placeholder="Your review..."></textarea>
                  </div>

                  <div class="actions">
                    <button type="submit" id="buttonSubmit">Submit</button>
                  </div>
              </div>  

              <div id="reviewList" class="review__list"></div>
            </div>
          </article>
        </section>

        <div id="likeButtonContainer"></div>
        <div id="snackbar" class="snackbar"></div>
      `;

      this._renderRestaurantDetail(restaurant);
      this._renderRestaurantCategories(restaurant);
      this._renderRestaurantFoodList(restaurant);
      this._renderRestaurantDrinkList(restaurant);
      this._restaurantAddCustomerReviews(restaurant);
      this._renderRestaurantReviewList(restaurant);
      this._renderLikeButton(restaurant);
    } catch (e) {
      content.innerHTML = `
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

  _renderRestaurantCategories(restaurant) {
    const categoryList = document.getElementById('categoryList');
    restaurant.categories.forEach((category) => {
      categoryList.innerHTML += createRestaurantCategoriesTemplate(category);
    });
  },

  _renderRestaurantFoodList(restaurant) {
    const foodList = document.getElementById('foodList');
    restaurant.menus.foods.forEach((food) => {
      foodList.innerHTML += createRestaurantFoodListTemplate(food);
    });
  },

  _renderRestaurantDrinkList(restaurant) {
    const drinkList = document.getElementById('drinkList');
    restaurant.menus.drinks.forEach((drink) => {
      drinkList.innerHTML += createRestaurantDrinkListTemplate(drink);
    });
  },

  _restaurantAddCustomerReviews(restaurant) {
    const { id } = restaurant;
    const inputName = document.getElementById('name');
    const inputReview = document.getElementById('review');
    const buttonSubmit = document.getElementById('buttonSubmit');

    buttonSubmit.addEventListener('click', async () => {
      buttonSubmit.disabled = true;
      buttonSubmit.classList.toggle('loading');
      buttonSubmit.innerHTML = '<i class="fa fa-spinner fa-spin"></i>';
      const reviews = {
        id,
        name: inputName.value,
        review: inputReview.value,
      };

      const responseReviews = await RestaurantDbSource.restaurantAddCustomerReviews(reviews);
      if (responseReviews.error) {
        this._showResponseMessage('Add review failed');
      } else {
        inputName.value = '';
        inputReview.value = '';
        buttonSubmit.disabled = false;
        buttonSubmit.classList.remove('loading');
        buttonSubmit.innerHTML = 'Submit';
        this._showResponseMessage('Add review success');
        this._renderRestaurantReviewList(responseReviews);
      }
    });
  },

  _renderRestaurantReviewList(restaurant) {
    const reviewList = document.getElementById('reviewList');
    reviewList.innerHTML = '';
    restaurant.customerReviews.forEach((customerReview) => {
      reviewList.innerHTML += createRestaurantCustomerReviewsTemplate(customerReview);
    });
  },

  _renderLikeButton(restaurant) {
    const likeButtonContainer = document.getElementById('likeButtonContainer');
    LikeButtonInitiator.init({
      likeButtonContainer,
      restaurant,
    });
  },

  _showResponseMessage(message = '') {
    const snackbar = document.getElementById('snackbar');
    snackbar.innerHTML = message;
    snackbar.classList.toggle('show');
    setTimeout(() => {
      snackbar.classList.remove('show');
    }, 3000);
  },
};

export default Detail;
