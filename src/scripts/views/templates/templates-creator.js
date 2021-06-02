/* eslint-disable linebreak-style */
/* eslint-disable max-len */

import CONFIG from '../../globals/config';

const createRestaurantItemTemplate = (restaurant) => `
  <article class="restaurant__item">
    <div class="restaurant-item__heading">
      <img src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}">

      <p class="city">${restaurant.city}</p>
    </div>

    <div class="restaurant-item__body">
      <p class="rating">Rating: ${restaurant.rating}<p>
      <p class="name">${restaurant.name}<p>         
      <p class="description">${restaurant.description}<p>
    </div>

    <div class="restaurant-item__actions">
      <a href="#/detail/${restaurant.id}">See detail</a>
    </div>
  </article>
`;

const createRestaurantDetailTemplate = (restaurant) => `
  <div class="restaurant-detail__heading">
    <img src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}">
    <p class="city">${restaurant.city}</p>
  </div>

  <div class="restaurant-detail__body">
    <p class="rating">Rating: ${restaurant.rating}</p>
    <p class="name">${restaurant.name}</p>
    <p class="address">Address: ${restaurant.address}</p>
    <p class="description">${restaurant.description}</p>
  </div>
`;

const createRestaurantCategoriesTemplate = (category) => `<li>${category.name}</li>`;
const createRestaurantFoodListTemplate = (food) => `<li>${food.name}</li>`;
const createRestaurantDrinkListTemplate = (drink) => `<li>${drink.name}</li>`;

const createRestaurantCustomerReviewsTemplate = (reviews) => `
  <div class="review__item">
    <p class="name">Name: ${reviews.name}</p>
    <p class="date">Date: ${reviews.date}</p>
    <p class="review">Review: ${reviews.review}</p>
  </div>
`;

export {
  createRestaurantItemTemplate, createRestaurantDetailTemplate, createRestaurantCategoriesTemplate, createRestaurantFoodListTemplate, createRestaurantDrinkListTemplate, createRestaurantCustomerReviewsTemplate,
};
