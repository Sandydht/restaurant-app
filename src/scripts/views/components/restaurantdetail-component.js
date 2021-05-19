/* eslint-disable linebreak-style */
/* eslint-disable no-underscore-dangle */

import CONFIG from '../../globals/config';
import './reviewitem-component';

class RestaurantdetailComponent extends HTMLElement {
  set restaurant(restaurant) {
    this._restaurant = restaurant;
    this.render();
  }

  printCategory() {
    this._restaurant.categories.forEach((category) => {
      const categoryItem = document.createElement('li');
      categoryItem.innerHTML = category.name;
      this.querySelector('#restaurantCategory').appendChild(categoryItem);
    });
  }

  printFoodMenu() {
    this._restaurant.menus.foods.forEach((food) => {
      const foodItem = document.createElement('li');
      foodItem.innerHTML = food.name;
      this.querySelector('#foodList').appendChild(foodItem);
    });
  }

  printDrinkMenu() {
    this._restaurant.menus.drinks.forEach((drink) => {
      const drinkItem = document.createElement('li');
      drinkItem.innerHTML = drink.name;
      this.querySelector('#drinkList').appendChild(drinkItem);
    });
  }

  printCustomerReviews() {
    this._restaurant.customerReviews.forEach((review) => {
      const reviewItem = document.createElement('reviewitem-component');
      reviewItem.review = review;
      this.querySelector('#customerReviews').appendChild(reviewItem);
    });
  }

  render() {
    this.innerHTML = `
      <article class="card">
        <div class="card__header">
          <img src="${CONFIG.BASE_IMAGE_URL + this._restaurant.pictureId}" alt="${this._restaurant.name}" />
          <p class="card__header__city">${this._restaurant.city}</p>
        </div>

        <div class="card__body">
          <p class="card__subtitle">Rating ${this._restaurant.rating}</p>
          <p class="card__title">${this._restaurant.name}</p>
          <p class="card__subtitle">Address: ${this._restaurant.address}</p>
          <p>${this._restaurant.description}</p>

          <div class="categories">
            <p class="card__subtitle">Restaurant Category</p>
            <ul id="restaurantCategory"></ul>
          </div>

          <div class="menu">
            <p class="card__subtitle">Restaurant Menu</p>
            <div class="foods">
              <p class="card__subtitle">Foods:</p>
              <ul id="foodList"></ul>
            </div>
            <div class="drinks">
              <p class="card__subtitle">Drinks:</p>
              <ul id="drinkList"></ul>
            </div>
          </div>
        </div>
      </article>

      <div class="restaurant__reviews">
        <h3 class="review__label">Customer Reviews</h3>
        <div class="review__list" id="customerReviews"></div>
      </div>
    `;

    this.printCategory();
    this.printFoodMenu();
    this.printDrinkMenu();
    this.printCustomerReviews();
  }
}

customElements.define('restaurantdetail-component', RestaurantdetailComponent);
