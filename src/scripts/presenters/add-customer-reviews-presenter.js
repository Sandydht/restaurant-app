/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-underscore-dangle */

class AddCustomerReviewsPresenter {
  constructor({
    customerReviewsView,
    restaurantDb,
    restaurant,
  }) {
    this._customerReviewsView = customerReviewsView;
    this._restaurantDb = restaurantDb;
    this._restaurant = restaurant;

    this._listenToSubmitReviewByUser();
  }

  _listenToSubmitReviewByUser() {
    this._customerReviewsView.runWhenUserSubmitReview(() => {
      this._addCustomerReviews();
    });
  }

  async _addCustomerReviews() {
    const inputValue = this._customerReviewsView.getInputValue(this._restaurant);
    this._customerReviewsView.showSubmitReviewButtonLoading(true);

    const responseReview = await this._restaurantDb.addCustomerReviews(inputValue);
    this._showCustomerReviewList(responseReview);
  }

  async _showCustomerReviewList(response) {
    if (response.error) {
      this._customerReviewsView.showReviewList(await this._restaurantDb.restaurantDetail(this._restaurant.id));
      this._customerReviewsView.showSubmitReviewButtonLoading(false);
      this._customerReviewsView.showSnackbar({ show: true, success: false, message: response.message });
    } else {
      this._customerReviewsView.showReviewList(response);
      this._customerReviewsView.showSubmitReviewButtonLoading(false);
      this._customerReviewsView.showSnackbar({ show: true, success: true, message: response.message });
    }
  }
}

export default AddCustomerReviewsPresenter;
