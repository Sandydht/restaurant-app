/* eslint-disable linebreak-style */
/* eslint-disable no-underscore-dangle */

class CustomerReviewAddPresenter {
  constructor({ view, restaurant, restaurantDbSource }) {
    this._view = view;
    this._restaurant = restaurant;
    this._restaurantDbSource = restaurantDbSource;

    this._listenToSubmitReviewRequestByUser();
  }

  _listenToSubmitReviewRequestByUser() {
    this._view.runWhenUserIsSubmitReview(() => {
      this._addCustomerReview(this._view.latestInput);
    });
  }

  async _addCustomerReview(latestInput) {
    this._view.disbledSubmitReviewButton(true);

    this._latestInput = {
      id: this._restaurant.id,
      name: latestInput.name,
      review: latestInput.review,
    };

    let restaurant;

    restaurant = await this._restaurantDbSource.addCustomerReview(this._latestInput);
    if (restaurant.error === false) {
      this._view.showSnackbar({ show: true, error: false, message: restaurant.message });

      this._showCustomerReview(restaurant);
      this._view.disbledSubmitReviewButton(false);
    } else {
      this._view.showSnackbar({ show: true, error: true, message: restaurant.message });

      restaurant = await this._restaurantDbSource.restaurantDetail(this._restaurant.id);
      this._showCustomerReview(restaurant);
      this._view.disbledSubmitReviewButton(false);
    }
  }

  _showCustomerReview(restaurant) {
    this._view.showCustomerReview(restaurant);
  }

  get latestInput() {
    return this._latestInput;
  }
}

export default CustomerReviewAddPresenter;
