/* eslint-disable linebreak-style */
/* eslint-disable class-methods-use-this */

class CustomerReviewsView {
  getTemplate() {
    return `
      <customer-reviews></customer-reviews>
      <review-list></review-list>

      <snackbar-component></snackbar-component>
    `;
  }

  runWhenUserSubmitReview(callback) {
    document.querySelector('customer-reviews').clickEvent = () => {
      callback();
    };
  }

  showSubmitReviewButtonLoading(loading) {
    document.querySelector('customer-reviews').clickTrigger = loading;
  }

  showReviewList(restaurant) {
    document.querySelector('review-list').restaurant = restaurant;
  }

  getInputValue(restaurant) {
    const { id } = restaurant;
    const { value } = document.querySelector('customer-reviews');

    return {
      id,
      name: value.name,
      review: value.review,
    };
  }

  showSnackbar({ show, success, message }) {
    document.querySelector('snackbar-component').show = show;
    document.querySelector('snackbar-component').success = success;
    document.querySelector('snackbar-component').message = message;
  }
}

export default CustomerReviewsView;
