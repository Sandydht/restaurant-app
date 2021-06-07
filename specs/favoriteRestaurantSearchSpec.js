/* eslint-disable linebreak-style */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-undef */

import FavoriteRestaurantSearchPresenter from '../src/scripts/views/pages/liked-restaurants/favorite-restaurant-search-presenter';
import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant-idb';
import FavoriteRestaurantSearchView from '../src/scripts/views/pages/liked-restaurants/favorite-restaurant-search-view';

describe('Searching Restaurants', () => {
  let presenter;
  let favoriteRestaurants;
  let view;

  const searchRestaurants = (query) => {
    const queryElement = document.getElementById('query');
    queryElement.value = query;
    queryElement.dispatchEvent(new Event('change'));
  };

  const setRestaurantSearchContainer = () => {
    view = new FavoriteRestaurantSearchView();
    document.body.innerHTML = view.getTemplate();
  };

  const constructorPresenter = () => {
    favoriteRestaurants = spyOnAllFunctions(FavoriteRestaurantIdb);
    presenter = new FavoriteRestaurantSearchPresenter({ favoriteRestaurants, view });
  };

  beforeEach(() => {
    setRestaurantSearchContainer();
    constructorPresenter();
  });

  describe('When Query Is Not Empty', () => {
    it('should be able to capture the query typed by the user', () => {
      searchRestaurants('restaurant a');

      expect(presenter.latestQuery).toEqual('restaurant a');
    });

    it('should ask the model to search for liked restaurants', () => {
      searchRestaurants('restaurant a');

      expect(favoriteRestaurants.searchRestaurants).toHaveBeenCalledWith('restaurant a');
    });

    it('should show the restaurants found by Favorite Restaurants', (done) => {
      document.getElementById('restaurantsBody').addEventListener('restaurants:updated', () => {
        expect(document.querySelectorAll('restaurant-item').length).toEqual(3);
        done();
      });

      favoriteRestaurants.searchRestaurants.withArgs('restaurant a').and.returnValues([
        { id: 111, pictureId: '14', name: 'restaurant abc' },
        { id: 222, pictureId: '14', name: 'ada juga restaurant abcde' },
        { id: 333, pictureId: '14', name: 'ini juga boleh restaurant a' },
      ]);

      searchRestaurants('restaurant a');
    });

    it('should show the name of the restaurants found by Favorite Restaurants', (done) => {
      document.getElementById('restaurantsBody').addEventListener('restaurants:updated', () => {
        const restaurantNames = document.querySelectorAll('.name');
        expect(restaurantNames.item(0).textContent).toEqual('restaurant abc');
        expect(restaurantNames.item(1).textContent).toEqual('ada juga restaurant abcde');
        expect(restaurantNames.item(2).textContent).toEqual('ini juga boleh restaurant a');

        done();
      });

      favoriteRestaurants.searchRestaurants.withArgs('restaurant a').and.returnValues([
        { id: 111, pictureId: '14', name: 'restaurant abc' },
        { id: 222, pictureId: '14', name: 'ada juga restaurant abcde' },
        { id: 333, pictureId: '14', name: 'ini juga boleh restaurant a' },
      ]);

      searchRestaurants('restaurant a');
    });

    it('should show - when the restaurant returned does not contain a name', (done) => {
      document.getElementById('restaurantsBody').addEventListener('restaurants:updated', () => {
        const restaurantNames = document.querySelectorAll('.name');
        expect(restaurantNames.item(0).textContent).toEqual('-');

        done();
      });

      favoriteRestaurants.searchRestaurants.withArgs('restaurant a').and.returnValues([
        { id: 4444, pictureId: '14' },
      ]);

      searchRestaurants('restaurant a');
    });
  });

  describe('When Query Is Empty', () => {
    it('should capture the query as empty', () => {
      searchRestaurants(' ');
      expect(presenter.latestQuery.length).toEqual(0);

      searchRestaurants('    ');
      expect(presenter.latestQuery.length).toEqual(0);

      searchRestaurants('');
      expect(presenter.latestQuery.length).toEqual(0);

      searchRestaurants('\t');
      expect(presenter.latestQuery.length).toEqual(0);
    });

    it('should show all favorite restaurants', () => {
      searchRestaurants('    ');
      expect(favoriteRestaurants.getAllRestaurants).toHaveBeenCalled();
    });
  });

  describe('When No Favorite Restaurants Could Be Found', () => {
    it('should show the empty message', (done) => {
      document.getElementById('restaurantsBody').addEventListener('restaurants:updated', () => {
        expect(document.querySelectorAll('not-found').length).toEqual(1);
        done();
      });

      favoriteRestaurants.searchRestaurants.withArgs('restaurant a').and.returnValues([]);

      searchRestaurants('restaurant a');
    });

    it('should not show any restaurant', (done) => {
      document.getElementById('restaurantsBody').addEventListener('restaurants:updated', () => {
        expect(document.querySelectorAll('restaurant-item').length).toEqual(0);
        done();
      });

      favoriteRestaurants.searchRestaurants.withArgs('restaurant a').and.returnValues([]);

      searchRestaurants('restaurant a');
    });
  });
});
