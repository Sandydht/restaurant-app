/* eslint-disable linebreak-style */
/* eslint-disable no-underscore-dangle */

const LikeButtonPresenter = {
  async init({ likeButtonContainer, favoriteRestaurant, restaurant }) {
    this._likeButtonContainer = likeButtonContainer;
    this._favoriteRestaurant = favoriteRestaurant;
    this._restaurant = restaurant;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._restaurant;

    if (await this._isRestaurantExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isRestaurantExist(id) {
    const restaurant = await this._favoriteRestaurant.getRestaurant(id);
    return !!restaurant;
  },

  _renderLike() {
    this._likeButtonContainer.isRestaurantExist = false;
    this._likeButtonContainer.clickEvent = async () => {
      await this._favoriteRestaurant.putRestaurant(this._restaurant);
      this._renderButton();
    };
  },

  _renderLiked() {
    this._likeButtonContainer.isRestaurantExist = true;
    this._likeButtonContainer.clickEvent = async () => {
      await this._favoriteRestaurant.deleteRestaurant(this._restaurant.id);
      this._renderButton();
    };
  },
};

export default LikeButtonPresenter;
