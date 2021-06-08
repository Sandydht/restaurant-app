/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable no-new */

import LikeButtonPresenter from '../src/scripts/presenters/like-button-presenter';
import FavoriteRestaurantIdb from '../src/scripts/models/favorite-restaurant-idb';
import '../src/scripts/views/component/like-button';

describe('Liking A Restaurant', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<like-button></like-button>';
  };

  beforeEach(() => {
    addLikeButtonContainer();
  });

  it('should show the like button when the restaurant has not been liked before', () => {
    new LikeButtonPresenter({
      likeButtonContainer: document.querySelector('like-button'),
      favoriteRestaurant: FavoriteRestaurantIdb,
      restaurant: {
        id: 1,
      },
    });

    expect(document.querySelector('[aria-label="like this restaurant"]')).toBeTruthy();
  });

  it('should show the unlike button when the restaurant has not been liked before', () => {
    new LikeButtonPresenter({
      likeButtonContainer: document.querySelector('like-button'),
      favoriteRestaurant: FavoriteRestaurantIdb,
      restaurant: {
        id: 1,
      },
    });

    expect(document.querySelector('[aria-label="unlike this restaurant"]')).toBeFalsy();
  });

  fit('should be able to like the restaurant', async () => {
    new LikeButtonPresenter({
      likeButtonContainer: document.querySelector('like-button'),
      favoriteRestaurant: FavoriteRestaurantIdb,
      restaurant: {
        id: 1,
      },
    });

    document.querySelector('[aria-label="like this restaurant"]').dispatchEvent(new Event('click'));
    const restaurant = await FavoriteRestaurantIdb.getRestaurant(1);
    console.log(restaurant);

    // expect(restaurant).toEqual({ id: 1 });

    // FavoriteRestaurantIdb.deleteRestaurant(1);
  });
});
