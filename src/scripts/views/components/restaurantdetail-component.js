/* eslint-disable linebreak-style */
/* eslint-disable no-underscore-dangle */

import CONFIG from '../../globals/config';

class RestaurantdetailComponent extends HTMLElement {
  set restaurant(restaurant) {
    this._restaurant = restaurant;
    this.render();
  }

  render() {
    console.log(this._restaurant);
    this.innerHTML = `
      <section class="restaurant-detail">
        <h2 class="restaurant-detail__label">Cafe Detail</h2>

        <article class="restaurant-detail__info card">
          <div class="restaurant-info__header">
            <img class="restaurant-info__image" src="${CONFIG.BASE_IMAGE_URL + this._restaurant.pictureId}" alt="${this._restaurant.name}" />
            <p class="restaurant-info__city">${this._restaurant.city}</p>
          </div>

          <div class="restaurant-info__body">
            <p class="restaurant-info__rating">Rating ${this._restaurant.rating}</p>
            <p class="restaurant-info__name">${this._restaurant.name}</p>
            <p class="restaurant-info__address">Address: ${this._restaurant.address}</p>
            <p class="restaurant-info__description">${this._restaurant.description}</p>
            
            <div class="restaurant-info__category">
              <p class="restaurant-category__label">Restaurant Category</p>

              <ul id="restaurantCategory" class="restaurant-category__item"></ul>
            </div>
            
            <div class="restaurant-info__menu">
              <p class="restaurant-menu__label">Restaurant Menu</p>

              <div class="restaurant-menu__list">
                <div class="food__list">
                  <p class="food-list__label">Food:</p>
                  <ul id="foodMenu" class="food-menu"></ul>
                </div>

                <div class="drink__list">
                  <p class="drink-list__label">Drink:</p>
                  <ul id="drinkMenu" class="drink-menu"></ul>
                </div>
              </div>
            </div>
          </div>
        </article>

        <article class="restaurant-detail__review">
          <p>Customer Reviews</p>
        </article>
      </section>
    `;

    this._restaurant.categories.forEach((category) => {
      const categoryItem = document.createElement('li');
      categoryItem.innerHTML = category.name;
      document.getElementById('restaurantCategory').appendChild(categoryItem);
    });

    this._restaurant.menus.foods.forEach((food) => {
      const foodItem = document.createElement('li');
      foodItem.innerHTML = food.name;
      document.getElementById('foodMenu').appendChild(foodItem);
    });

    this._restaurant.menus.drinks.forEach((drink) => {
      const drinkItem = document.createElement('li');
      drinkItem.innerHTML = drink.name;
      document.getElementById('drinkMenu').appendChild(drinkItem);
    });
  }
}

customElements.define('restaurantdetail-component', RestaurantdetailComponent);
