/* eslint-disable linebreak-style */
/* eslint-disable no-underscore-dangle */

import './restaurant-menus.scss';

class RestaurantMenus extends HTMLElement {
  set restaurant(restaurant) {
    this._restaurant = restaurant;
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="foods">
        <p class="foods__heading">Foods</p>
        <ul id="foodList" class="foods__body"></ul>
      </div>

      <div class="drinks">
        <p class="drinks__heading">Drinks</p>
        <ul id="drinkList" class="drinks__body"></ul>
      </div>
    `;

    const foodList = this.querySelector('#foodList');
    this._restaurant.menus.foods.forEach((food) => {
      const foodItem = document.createElement('li');
      foodItem.innerHTML = food.name;
      foodList.appendChild(foodItem);
    });

    const drinkList = this.querySelector('#drinkList');
    this._restaurant.menus.drinks.forEach((drink) => {
      const drinkItem = document.createElement('li');
      drinkItem.innerHTML = drink.name;
      drinkList.appendChild(drinkItem);
    });
  }
}

customElements.define('restaurant-menus', RestaurantMenus);
