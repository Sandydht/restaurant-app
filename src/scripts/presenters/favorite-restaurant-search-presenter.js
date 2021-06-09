/* eslint-disable linebreak-style */
/* eslint-disable no-underscore-dangle */

class FavoriteRestaurantSearchPresenter {
  constructor({ view, favoriteRestaurant }) {
    this._view = view;
    this._listenToSearchRequestByUser();
    this._favoriteRestaurant = favoriteRestaurant;
  }

  _listenToSearchRequestByUser() {
    this._view.runWhenUserIsSearching((latestQuery) => {
      this._searchRestaurants(latestQuery);
    });
  }

  async _searchRestaurants(latestQuery) {
    this._latestQuery = latestQuery.trim();
    let foundRestaurants;

    if (this.latestQuery.length > 0) {
      foundRestaurants = await this._favoriteRestaurant.searchRestaurants(this.latestQuery);
    } else {
      foundRestaurants = await this._favoriteRestaurant.getAllRestaurants();
    }

    this._showFoundRestaurants(foundRestaurants);
  }

  _showFoundRestaurants(restaurants) {
    this._view.showFavoriteRestaurants(restaurants);
  }

  get latestQuery() {
    return this._latestQuery;
  }
}

export default FavoriteRestaurantSearchPresenter;
