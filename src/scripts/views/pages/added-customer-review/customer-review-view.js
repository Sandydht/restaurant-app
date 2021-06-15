/* eslint-disable linebreak-style */
/* eslint-disable class-methods-use-this */

import '../../component/customer-review';
import '../../component/review-list';
import '../../component/snackbar-component';

class CustomerReviewView {
  getTemplate() {
    return `
      <customer-review></customer-review>
      <review-list></review-list>
      <snackbar-component></snackbar-component>
    `;
  }

  runWhenUserIsSubmitReview(callback) {
    document.querySelector('customer-review').clickEvent = () => {
      callback();
    };
  }

  disbledSubmitReviewButton(disabled) {
    document.querySelector('customer-review').disabledButton = disabled;
  }

  showCustomerReview(restaurant) {
    document.querySelector('review-list').restaurant = restaurant;
  }

  showSnackbar({ show, error, message }) {
    document.querySelector('snackbar-component').show = show;
    document.querySelector('snackbar-component').error = error;
    document.querySelector('snackbar-component').message = message;
  }

  get latestInput() {
    const { value } = document.querySelector('customer-review');
    return value;
  }
}

export default CustomerReviewView;
