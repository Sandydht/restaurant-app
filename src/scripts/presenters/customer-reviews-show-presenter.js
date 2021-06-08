/* eslint-disable linebreak-style */
/* eslint-disable no-underscore-dangle */

class CustomerReviewsShowPresenter {
  constructor({ customerReviewsView, restaurant }) {
    this._customerReviewsView = customerReviewsView;
    this._restaurant = restaurant;

    this._showCustomerReviewList();
  }

  _showCustomerReviewList() {
    this._displayReview(this._restaurant);
  }

  _displayReview(restaurant) {
    this._customerReviewsView.showReviewList(restaurant);
  }
}

export default CustomerReviewsShowPresenter;
