/* eslint-disable linebreak-style */
// import CONFIG from '../../globals/config';

const createRestaurantItemTemplate = (restaurant) => `
  <article class="restaurant__item">
    <div class="restaurant-item__heading">
      <img src="${restaurant.pictureId}" alt="${restaurant.name}">

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
  <article class="restaurant__detail">
    <div class="restaurant-detail__heading">
      <img src="${restaurant.pictureId}" alt="${restaurant.name}">
      <p class="city">${restaurant.city}</p>
    </div>

    <div class="restaurant-detail__body">
      <p class="rating">Rating: ${restaurant.rating}</p>
      <p class="name">${restaurant.name}</p>
      <p class="address">Address: ${restaurant.address}</p>
      <p class="description">${restaurant.description}</p>
    </div>
  </article>
`;

export { createRestaurantItemTemplate, createRestaurantDetailTemplate };
