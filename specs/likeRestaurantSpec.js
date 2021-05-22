/* eslint-disable linebreak-style */
/* eslint-disable no-undef */

import FavoriteButtonInitiator from '../src/scripts/utils/favorite-button-initiator';
import FavoriteRestaurantIdb from '../src/scripts/data/favoriterestaurant-idb';
import '../src/scripts/views/components/favoriterestaurant-component';

describe('Liking A Restaurant', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<favoriterestaurant-component></favoriterestaurant-component>';
  };

  beforeEach(() => {
    addLikeButtonContainer();
  });

  it('should show the like button when the restaurant has not been liked before', async () => {
    await FavoriteButtonInitiator.init({
      buttonContainer: document.querySelector('favoriterestaurant-component'),
      favoriteRestaurants: FavoriteRestaurantIdb,
      restaurant: {
        id: 1,
      },
    });

    expect(document.querySelector('[aria-label="like this restaurant"]')).toBeTruthy();
  });

  it('should not show the unlike button when the restaurant has not been liked before', async () => {
    await FavoriteButtonInitiator.init({
      buttonContainer: document.querySelector('favoriterestaurant-component'),
      favoriteRestaurants: FavoriteRestaurantIdb,
      restaurant: {
        id: 1,
      },
    });

    expect(document.querySelector('[aria-label="unlike this restaurant"]')).toBeFalsy();
  });

  it('should be able to like the restaurant', async () => {
    await FavoriteButtonInitiator.init({
      buttonContainer: document.querySelector('favoriterestaurant-component'),
      favoriteRestaurants: FavoriteRestaurantIdb,
      restaurant: {
        id: 1,
      },
    });

    document.querySelector('favoriterestaurant-component').dispatchEvent(new Event('click'));

    const restaurant = await FavoriteRestaurantIdb.getRestaurant(1);

    expect(restaurant).toEqual({ id: 1 });

    FavoriteRestaurantIdb.deleteRestaurant(1);
  });

  it('should not add a restaurant again when its already liked', async () => {
    await FavoriteButtonInitiator.init({
      buttonContainer: document.querySelector('favoriterestaurant-component'),
      favoriteRestaurants: FavoriteRestaurantIdb,
      restaurant: {
        id: 1,
      },
    });

    await FavoriteRestaurantIdb.putRestaurant({ id: 1 });
    document.querySelector('favoriterestaurant-component').dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([{ id: 1 }]);

    FavoriteRestaurantIdb.deleteRestaurant(1);
  });

  it('should not add a restaurant when it has no id', async () => {
    await FavoriteButtonInitiator.init({
      buttonContainer: document.querySelector('favoriterestaurant-component'),
      favoriteRestaurants: FavoriteRestaurantIdb,
      restaurant: {},
    });

    document.querySelector('favoriterestaurant-component').dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
  });
});
