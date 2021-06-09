/* eslint-disable linebreak-style */
/* eslint-disable no-new */
/* eslint-disable no-undef */

import FavoriteRestaurantSearchView from '../src/scripts/views/pages/liked-restaurants/favorite-restaurant-search-view';
import FavoriteRestaurantIdb from '../src/scripts/models/favorite-restaurant-idb';
import FavoriteRestaurantShowPresenter from '../src/scripts/presenters/favorite-restaurant-show-presenter';

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
    it('should the information that no restaurants have been liked', (done) => {
      document.getElementById('favoriteRestaurantsBody').addEventListener('restaurants:updated', () => {
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

    it('should ask for the favorite restaurants', () => {
      const favoriteRestaurants = spyOnAllFunctions(FavoriteRestaurantIdb);

      new FavoriteRestaurantShowPresenter({
        view,
        favoriteRestaurants,
      });

      expect(favoriteRestaurants.getAllRestaurants).toHaveBeenCalledTimes(1);
    });
  });

  describe('When Favorite Restaurants Exist', () => {
    it('should show the restaurants', (done) => {
      document.getElementById('favoriteRestaurantsBody').addEventListener('restaurants:updated', () => {
        expect(document.querySelectorAll('restaurant-item').length).toEqual(2);
        done();
      });

      const favoriteRestaurants = spyOnAllFunctions(FavoriteRestaurantIdb);
      favoriteRestaurants.getAllRestaurants.and.returnValues([
        {
          id: 11, pictureId: 14, name: 'A', rating: 3, descriptio: 'Restaurant A',
        },
        {
          id: 22, pictureId: 25, name: 'B', rating: 4, descriptio: 'Restaurant B',
        },
      ]);

      new FavoriteRestaurantShowPresenter({
        view,
        favoriteRestaurants,
      });
    });
  });
});
