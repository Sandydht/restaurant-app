/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable no-underscore-dangle */

class CustomerReviewShowPresenter {
  constructor({ view, restaurant, restaurantDbSource }) {
    this._view = view;
    this._restaurant = restaurant;
    this._restaurantDbSource = restaurantDbSource;

    this._showCustomerReview();
  }

  async _showCustomerReview() {
    this._displayCustomerReview(await this._restaurantDbSource.restaurantDetail(this._restaurant.id));
  }

  _displayCustomerReview(restaurant) {
    this._view.showCustomerReview(restaurant);
  }
}

export default CustomerReviewShowPresenter;
