/* eslint-disable linebreak-style */
import CONFIG from '../../globals/config';

const createRestaurantItemTemplate = (restaurant) => `
  <article class="restaurant__item">
    <div class="restaurant__thumbnail">
      <img src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}">

      <p>${restaurant.city}</p>
    </div>

    <div class="restaurant__overview">
      <p class="restaurant__rating">Rating: ${restaurant.rating}<p>
      <p class="restaurant__name"><a href="#/detail/${restaurant.id}">${restaurant.name}</a><p>         
      <p class="restaurant__description">${restaurant.description}<p>
    </div>
  </article>
`;

const createRestaurantDetailTemplate = (restaurant) => `
  <div class="restaurant__information">
    <div class="thumbnail">
      <img src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}">
      
      <p>${restaurant.city}</p>
    </div>

    <div class="overview">
      <p class="rating">Rating: ${restaurant.rating}</p>
      <p class="name">${restaurant.name}</p>
      <p class="address">Address: ${restaurant.address}</p>
      <p class="description">${restaurant.description}</p>

      <div class="categories">
        <p>Categories</p>
        <ul id="category"></ul>
      </div>

      <div class="menus">
        <p class="menus__heading">Menus</p>

        <div class="foods">
          <p>Foods</p>
          <ul id="foodList" class="food__list"></ul>
        </div>
        
        <div class="drinks">
          <p>Drinks</p>
          <ul id="drinkList" class="drink__list"></ul>
        </div>
      </div>
    </div>
  </div>
`;

export { createRestaurantItemTemplate, createRestaurantDetailTemplate };
