/* eslint-disable linebreak-style */
/* eslint-disable no-underscore-dangle */
class FavoriteRestaurantShowPresenter {
  constructor({ view, favoriteRestaurant }) {
    this._view = view;
    this._favoriteRestaurant = favoriteRestaurant;

    this._showFavoriteRestaurants();
  }

  async _showFavoriteRestaurants() {
    this._displayRestaurants(await this._favoriteRestaurant.getAllRestaurants());
  }

  _displayRestaurants(restaurants) {
    this._view.showFavoriteRestaurants(restaurants);
  }
}

export default FavoriteRestaurantShowPresenter;
