/* eslint-disable linebreak-style */
/* eslint-disable import/prefer-default-export */

import FavoriteButtonPresenter from '../../src/scripts/utils/favorite-button-presenter';
import FavoriteRestaurantIdb from '../../src/scripts/data/favoriterestaurant-idb';
import '../../src/scripts/views/components/favoriterestaurant-component';

const createLikeButtonPresenterWithRestaurant = async (restaurant) => {
  await FavoriteButtonPresenter.init({
    buttonContainer: document.querySelector('favoriterestaurant-component'),
    favoriteRestaurants: FavoriteRestaurantIdb,
    restaurant,
  });
};

export {
  createLikeButtonPresenterWithRestaurant,
};
