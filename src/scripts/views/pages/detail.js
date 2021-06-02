/* eslint-disable linebreak-style */
/* eslint-disable max-len */

import UrlParser from '../../routes/url-parser';
import RestaurantDbSource from '../../data/restaurantdb-source';
import {
  createRestaurantDetailTemplate, createRestaurantCategoriesTemplate, createRestaurantFoodListTemplate, createRestaurantDrinkListTemplate, createRestaurantCustomerReviewsTemplate,
} from '../templates/templates-creator';

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
                    <input type="text" name="name" placeholder="Your name...">
                  </div>

                  <div class="review">
                    <label for="review">Review</label> <br>
                    <textarea name="review" rows="6" placeholder="Your review..."></textarea>
                  </div>

                  <div class="actions">
                    <button type="submit">Submit</button>
                  </div>
              </div>  

              <div id="reviewList" class="review__list"></div>
            </div>
          </article>
        </section>
      `;

      const restaurantDetail = document.getElementById('restaurantDetail');
      restaurantDetail.innerHTML = createRestaurantDetailTemplate(restaurant);

      const categoryList = document.getElementById('categoryList');
      restaurant.categories.forEach((category) => {
        categoryList.innerHTML += createRestaurantCategoriesTemplate(category);
      });

      const foodList = document.getElementById('foodList');
      restaurant.menus.foods.forEach((food) => {
        foodList.innerHTML += createRestaurantFoodListTemplate(food);
      });

      const drinkList = document.getElementById('drinkList');
      restaurant.menus.drinks.forEach((drink) => {
        drinkList.innerHTML += createRestaurantDrinkListTemplate(drink);
      });

      const reviewList = document.getElementById('reviewList');
      restaurant.customerReviews.forEach((review) => {
        reviewList.innerHTML += createRestaurantCustomerReviewsTemplate(review);
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
