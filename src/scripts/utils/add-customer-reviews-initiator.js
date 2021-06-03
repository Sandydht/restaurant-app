/* eslint-disable linebreak-style */
/* eslint-disable no-underscore-dangle */

import FavoriteRestaurantdb from '../data/restaurantdb-source';
import {
  createRestaurantAddCustomerReviewTemplate,
  createRestaurantReviewItemTemplate,
} from '../views/templates/templates-creator';

const AddCustomerReviewsInitiator = {
  async init({ addCustomerReviewsContainer, id, reviewListContainer }) {
    this._addCustomerReviewsContainer = addCustomerReviewsContainer;
    this._id = id;
    this._reviewListContainer = reviewListContainer;

    await this._renderAddCustomerReviews();
  },

  async _renderAddCustomerReviews() {
    this._addCustomerReviewsContainer.innerHTML = createRestaurantAddCustomerReviewTemplate();

    const inputName = document.getElementById('name');
    const inputReview = document.getElementById('review');
    const buttonSubmit = document.getElementById('submitReview');

    buttonSubmit.addEventListener('click', async () => {
      this._renderButtonDisabled(buttonSubmit);
      const reviews = {
        id: this._id,
        name: inputName.value,
        review: inputReview.value,
      };

      const responseReview = await FavoriteRestaurantdb.restaurantAddCustomerReviews(reviews);
      this._renderButtonEnabled(buttonSubmit);
      this._clearInputValue(inputName, inputReview);
      this._renderReviewList(responseReview);
    });
  },

  _renderButtonDisabled(button) {
    const buttonContainer = button;
    buttonContainer.disabled = true;
    buttonContainer.innerHTML = '<i class="fa fa-spinner fa-spin"></i>';
    buttonContainer.classList.toggle('loading');
  },

  _renderButtonEnabled(button) {
    const buttonContainer = button;
    buttonContainer.disabled = false;
    buttonContainer.innerHTML = 'Submit';
    buttonContainer.classList.remove('loading');
  },

  _clearInputValue(name, review) {
    const inputName = name;
    const inputReview = review;

    inputName.value = '';
    inputReview.value = '';
  },

  _renderReviewList(restaurant) {
    this._reviewListContainer.innerHTML = '';
    restaurant.customerReviews.forEach((customerReview) => {
      this._reviewListContainer.innerHTML += createRestaurantReviewItemTemplate(customerReview);
    });
  },
};

export default AddCustomerReviewsInitiator;
