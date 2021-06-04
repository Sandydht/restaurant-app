/* eslint-disable linebreak-style */
/* eslint-disable no-underscore-dangle */

const CustomerReviewsInitiator = {
  async init({
    customerReviewsContainer, restaurantDb, reviewListContainer, restaurant,
  }) {
    this._customerReviewsContainer = customerReviewsContainer;
    this._restaurantDb = restaurantDb;
    this._reviewListContainer = reviewListContainer;
    this._restaurant = restaurant;

    this._submitReview();
  },

  _submitReview() {
    this._customerReviewsContainer.clickEvent = async () => {
      this._customerReviewsContainer.clickTrigger = true;
      const customerReviews = await this._restaurantDb.addCustomerReviews(this._getInputValue());
      this._customerReviewsContainer.clickTrigger = false;
      this._renderReviewList(customerReviews);
    };
  },

  _getInputValue() {
    const { id } = this._restaurant;
    const inputName = this._customerReviewsContainer.valueName;
    const inputReview = this._customerReviewsContainer.valueReview;

    return {
      id,
      name: inputName,
      review: inputReview,
    };
  },

  _renderReviewList(customerReviews) {
    this._reviewListContainer.restaurant = customerReviews;
  },
};

export default CustomerReviewsInitiator;
