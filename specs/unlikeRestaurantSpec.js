/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
import FavoriteButtonInitiator from '../src/scripts/utils/favorite-button-initiator';
import FavoriteRestaurantIdb from '../src/scripts/data/favoriterestaurant-idb';
// import '../src/scripts/views/components/favoriterestaurant-component';

describe('Unliking A Restaurant', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<favoriterestaurant-component></favoriterestaurant-component>';
  };

  beforeEach(async () => {
    addLikeButtonContainer();
    await FavoriteRestaurantIdb.putRestaurant({ id: 1 });
  });

  afterEach(async () => {
    await FavoriteRestaurantIdb.deleteRestaurant(1);
  });

  it('should display unlike widget when the restaurant has been liked', async () => {
    await FavoriteButtonInitiator.init({
      buttonContainer: document.querySelector('favoriterestaurant-component'),
      favoriteRestaurants: FavoriteRestaurantIdb,
      restaurant: {
        id: 1,
      },
    });

    expect(document.querySelector('[aria-label="unlike this restaurant"]')).toBeTruthy();
  });

  it('should not display like widget when the restaurant has been liked', async () => {
    await FavoriteButtonInitiator.init({
      buttonContainer: document.querySelector('favoriterestaurant-component'),
      favoriteRestaurants: FavoriteRestaurantIdb,
      restaurant: {
        id: 1,
      },
    });

    expect(document.querySelector('[aria-label="like this restaurant"]')).toBeFalsy();
  });

  it('should be able to remove like restaurant from the list', async () => {
    await FavoriteButtonInitiator.init({
      buttonContainer: document.querySelector('favoriterestaurant-component'),
      favoriteRestaurants: FavoriteRestaurantIdb,
      restaurant: {
        id: 1,
      },
    });

    document.querySelector('[aria-label="unlike this restaurant"]').dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
  });

  it('should not throw error if the unliked restaurant is not in the list', async () => {
    await FavoriteButtonInitiator.init({
      buttonContainer: document.querySelector('favoriterestaurant-component'),
      favoriteRestaurants: FavoriteRestaurantIdb,
      restaurant: {
        id: 1,
      },
    });

    await FavoriteRestaurantIdb.deleteRestaurant(1);

    document.querySelector('[aria-label="unlike this restaurant"]').dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
  });
});
