/* eslint-disable linebreak-style */
/* eslint-disable no-new */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-undef */

import FavoriteRestaurantShowPresenter from '../src/scripts/views/pages/liked-restaurants/favorite-restaurant-show-presenter';
import FavoriteRestaurantSearchView from '../src/scripts/views/pages/liked-restaurants/favorite-restaurant-search-view';
import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant-idb';

describe('Showing All Favorite Restaurants', () => {
  let view;

  const renderTemplate = () => {
    view = new FavoriteRestaurantSearchView();
    document.body.innerHTML = view.getTemplate();
  };

  beforeEach(() => {
    renderTemplate();
  });

  describe('When No Restaurants Have Been Liked', () => {
    it('should the information that no restaurants have been liked', () => {
      const favoriteRestaurants = spyOnAllFunctions(FavoriteRestaurantIdb);

      const presenter = new FavoriteRestaurantShowPresenter({
        view,
        favoriteRestaurants,
      });

      presenter._displayRestaurants([]);

      expect(document.querySelectorAll('not-found').length).toEqual(1);
    });

    it('should ask for the favorite restaurants', () => {
      const favoriteRestaurants = spyOnAllFunctions(FavoriteRestaurantIdb);

      new FavoriteRestaurantShowPresenter({
        view,
        favoriteRestaurants,
      });

      expect(favoriteRestaurants.getAllRestaurants).toHaveBeenCalledTimes(1);
    });

    it('should show the empty message', (done) => {
      document.getElementById('restaurantsBody').addEventListener('restaurants:updated', () => {
        expect(document.querySelectorAll('not-found').length).toEqual(1);
        done();
      });

      const favoriteRestaurants = spyOnAllFunctions(FavoriteRestaurantIdb);
      favoriteRestaurants.getAllRestaurants.and.returnValues([]);

      new FavoriteRestaurantShowPresenter({
        view,
        favoriteRestaurants,
      });
    });
  });

  describe('When Favorite Restaurants exist', () => {
    it('should renders the restaurants', () => {
      const favoriteRestaurants = spyOnAllFunctions(FavoriteRestaurantIdb);
      const presenter = new FavoriteRestaurantShowPresenter({
        view,
        favoriteRestaurants,
      });

      presenter._displayRestaurants([
        {
          id: 11, name: 'A', rating: 3, pictureId: '14', description: 'Sebuah restaurant A',
        },
        {
          id: 22, name: 'B', rating: 4, pictureId: '25', description: 'Sebuah restaurant B',
        },
      ]);

      expect(document.querySelectorAll('restaurant-item').length).toEqual(2);
    });
  });
});
