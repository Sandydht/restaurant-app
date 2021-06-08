/* eslint-disable linebreak-style */
/* eslint-disable no-underscore-dangle */

class FavoriteRestaurantSearchPresenter {
  constructor({ view, favoriteRestaurant }) {
    this._view = view;
    this._favoriteRestaurant = favoriteRestaurant;

    this._listenToSearchRequestByUser();
  }

  _listenToSearchRequestByUser() {
    this._view.runWhenUserIsSearching((latestQuery) => {
      this._searchRestaurants(latestQuery);
    });
  }

  async _searchRestaurants(latestQuery) {
    this._latestQuery = latestQuery.trim();
    let foundRestaurants;

    if (this._latestQuery.length > 0) {
      foundRestaurants = await this._favoriteRestaurant.searchRestaurants(this._latestQuery);
    } else {
      foundRestaurants = await this._favoriteRestaurant.getAllRestaurants();
    }

    this._showFoundRestaurants(foundRestaurants);
  }

  _showFoundRestaurants(restaurants) {
    if (restaurants.length > 0) {
      this._view.showFavoriteRestaurants(restaurants);
    } else {
      this._view.showFavoriteRestaurants(restaurants);
    }
  }
}

export default FavoriteRestaurantSearchPresenter;
