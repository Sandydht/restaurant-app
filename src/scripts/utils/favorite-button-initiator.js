/* eslint-disable linebreak-style */
/* eslint-disable no-underscore-dangle */

const FavoriteButtonInitiator = {
  async init({ buttonContainer, favoriteRestaurants, restaurant }) {
    this._buttonContainer = buttonContainer;
    this._favoriteRestaurants = favoriteRestaurants;
    this._restaurant = restaurant;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._restaurant;
    this._buttonContainer.icon = false;

    if (await this._isRestaurantExist(id)) {
      this._renderFavorited();
    } else {
      this._renderFavorite();
    }
  },

  async _isRestaurantExist(id) {
    const restaurant = await this._favoriteRestaurants.getRestaurant(id);
    return !!restaurant;
  },

  _renderFavorite() {
    this._buttonContainer.icon = false;

    this._buttonContainer.click = async () => {
      await this._favoriteRestaurants.putRestaurant(this._restaurant);
      this._renderButton();
    };
  },

  _renderFavorited() {
    this._buttonContainer.icon = true;

    this._buttonContainer.click = async () => {
      await this._favoriteRestaurants.deleteRestaurant(this._restaurant.id);
      this._renderButton();
    };
  },
};

export default FavoriteButtonInitiator;
