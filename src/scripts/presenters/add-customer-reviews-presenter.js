/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-underscore-dangle */

class AddCustomerReviewsPresenter {
  constructor({
    customerReviewsContainer,
    reviewListContainer,
    snackbarContainer,
    restaurantDb,
    restaurant,
  }) {
    this._customerReviewsContainer = customerReviewsContainer;
    this._reviewListContainer = reviewListContainer;
    this._snackbarContainer = snackbarContainer;
    this._restaurantDb = restaurantDb;
    this._restaurant = restaurant;
    this._addReview();
  }

  _addReview() {
    this._customerReviewsContainer.clickEvent = async () => {
      const review = this._getInputValue(this._restaurant);
      this._customerReviewsContainer.clickTrigger = true;

      const responseReview = await this._restaurantDb.addCustomerReviews(review);

      if (responseReview.error) {
        this._renderFailed(responseReview);
      } else {
        this._renderSuccess(responseReview);
      }
    };
  }

  _getInputValue(restaurant) {
    const { id } = restaurant;
    const { value } = this._customerReviewsContainer;

    return {
      id,
      name: value.name,
      review: value.review,
    };
  }

  _renderSuccess(responseReview) {
    this._customerReviewsContainer.clickTrigger = false;
    this._renderSnackbar({
      show: true,
      success: true,
      message: responseReview.message,
    });
    this._renderReviewList(responseReview);
  }

  _renderFailed(responseReview) {
    this._customerReviewsContainer.clickTrigger = false;
    this._renderSnackbar({
      show: true,
      success: false,
      message: responseReview.message,
    });
  }

  _renderReviewList(restaurant) {
    this._reviewListContainer.restaurant = restaurant;
  }

  _renderSnackbar({ show, success, message }) {
    this._snackbarContainer.show = show;
    this._snackbarContainer.success = success;
    this._snackbarContainer.message = message;
  }
}

export default AddCustomerReviewsPresenter;
