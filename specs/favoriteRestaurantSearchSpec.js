/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
import FavoriteRestaurantSearchPresenter from '../src/scripts/presenters/favorite-restaurant-search-presenter';
import FavoriteRestaurantSearchView from '../src/scripts/views/pages/liked-restaurants/favorite-restaurant-search-view';
import FavoriteRestaurantIdb from '../src/scripts/models/favorite-restaurant-idb';
import '../src/scripts/views/component/search-favorite';

describe('Searching Restaurants', () => {
  let presenter;
  let favoriteRestaurants;
  let view;

  const searchRestaurants = (query) => {
    const searchFavorite = document.querySelector('search-favorite');
    searchFavorite.value = query;
    searchFavorite.dispatchEvent(new Event('change'));
  };

  const setRestaurantSearchContainer = () => {
    view = new FavoriteRestaurantSearchView();
    document.body.innerHTML = view.getTemplate();
  };

  const constructPresenter = () => {
    favoriteRestaurants = spyOnAllFunctions(FavoriteRestaurantIdb, 'searchRestaurants');
    presenter = new FavoriteRestaurantSearchPresenter({
      favoriteRestaurant: FavoriteRestaurantIdb,
      view,
    });
  };

  beforeEach(() => {
    setRestaurantSearchContainer();
    constructPresenter();
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
      document.getElementById('favoriteRestaurantsBody').addEventListener('restaurants:updated', () => {
        expect(document.querySelectorAll('restaurant-item').length).toEqual(3);
        done();
      });

      favoriteRestaurants.searchRestaurants.withArgs('restaurant a').and.returnValues([
        { id: 111, pictureId: 14, name: 'restaurant abc' },
        { id: 222, pictureId: 25, name: 'ada juga restaurant abcde' },
        { id: 333, pictureId: 14, name: 'ini juga boleh restaurant a' },
      ]);

      searchRestaurants('restaurant a');
    });

    it('should show the name of the restaurants found by Favorite Restaurants', (done) => {
      document.getElementById('favoriteRestaurantsBody').addEventListener('restaurants:updated', () => {
        const restaurantNames = document.querySelectorAll('.name');

        expect(restaurantNames.item(0).textContent).toEqual('restaurant abc');
        expect(restaurantNames.item(1).textContent).toEqual('ada juga restaurant abcde');
        expect(restaurantNames.item(2).textContent).toEqual('ini juga boleh restaurant a');
        done();
      });

      favoriteRestaurants.searchRestaurants.withArgs('restaurant a').and.returnValues([
        { id: 111, pictureId: 14, name: 'restaurant abc' },
        { id: 222, pictureId: 25, name: 'ada juga restaurant abcde' },
        { id: 333, pictureId: 14, name: 'ini juga boleh restaurant a' },
      ]);

      searchRestaurants('restaurant a');
    });

    it('should show - when the restaurant returned does not contain a name', (done) => {
      document.getElementById('favoriteRestaurantsBody').addEventListener('restaurants:updated', () => {
        const restaurantNames = document.querySelectorAll('.name');

        expect(restaurantNames.item(0).textContent).toEqual('-');
        done();
      });

      favoriteRestaurants.searchRestaurants.withArgs('restaurant a').and.returnValues([
        { id: 444, pictureId: 14 },
      ]);

      searchRestaurants('restaurant a');
    });
  });

  describe('When Query Is Empty', () => {
    it('should capture the query as empty', () => {
      searchRestaurants(' ');

      expect(presenter.latestQuery.length).toEqual(0);
    });
  });

  describe('When No Favorite Restaurants Could Be Found', () => {
    it('should show the empty message', (done) => {
      document.getElementById('favoriteRestaurantsBody').addEventListener('restaurants:updated', () => {
        expect(document.querySelectorAll('not-found').length).toEqual(1);
        done();
      });

      favoriteRestaurants.searchRestaurants.withArgs('restaurant a').and.returnValues([]);

      searchRestaurants('restaurant a');
    });

    it('should not show any restaurant', (done) => {
      document.getElementById('favoriteRestaurantsBody').addEventListener('restaurants:updated', () => {
        expect(document.querySelectorAll('restaurant-item').length).toEqual(0);
        done();
      });

      favoriteRestaurants.searchRestaurants.withArgs('restaurant a').and.returnValues([]);

      searchRestaurants('restaurant a');
    });
  });
});
