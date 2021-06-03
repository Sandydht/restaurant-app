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

const createRestaurantCategoryItemTemplate = (category) => `
  <li>${category.name}</li>
`;

const createRestaurantFoodItemTemplate = (food) => `
  <li>${food.name}</li>
`;

const createRestaurantDrinkItemTemplate = (drink) => `
  <li>${drink.name}</li>
`;

const createRestaurantAddCustomerReviewTemplate = () => `
  <div class="input__name">
    <label for="name">Name</label>
    <input type="text" name="name" id="name" placeholder="Your name...">
  </div>

  <div class="input__review">
    <label for="review">Review</label>
    <textarea name="review" id="review" rows="5"  placeholder="Your review..."></textarea>
  </div>

  <button id="submitReview">Submit</button>
`;

const createRestaurantReviewItemTemplate = (customerReviews) => `
  <div class="review__item">
    <p class="name">Name: ${customerReviews.name}</p>
    <p class="date">Date: ${customerReviews.date}</p>
    <p class="review">Review: ${customerReviews.review}</p>
  </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createRestaurantCategoryItemTemplate,
  createRestaurantFoodItemTemplate,
  createRestaurantDrinkItemTemplate,
  createRestaurantAddCustomerReviewTemplate,
  createRestaurantReviewItemTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
