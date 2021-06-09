/* eslint-disable linebreak-style */
/* eslint-disable import/prefer-default-export */

import LikeButtonPresenter from '../../src/scripts/presenters/like-button-presenter';
import FavoriteRestaurantIdb from '../../src/scripts/models/favorite-restaurant-idb';

const createLikeButtonPresenterWithRestaurant = async (restaurant) => {
  await LikeButtonPresenter.init({
    likeButtonContainer: document.querySelector('like-button'),
    favoriteRestaurant: FavoriteRestaurantIdb,
    restaurant,
  });
};

export { createLikeButtonPresenterWithRestaurant };
