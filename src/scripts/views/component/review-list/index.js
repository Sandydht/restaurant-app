/* eslint-disable linebreak-style */
/* eslint-disable no-underscore-dangle */

import './review-list.scss';
import '../review-item';

class ReviewList extends HTMLElement {
  set restaurant(restaurant) {
    this._restaurant = restaurant;
    this.render();
  }

  render() {
    this.innerHTML = '';
    this._restaurant.customerReviews.forEach((customerReview) => {
      const reviewItem = document.createElement('review-item');
      reviewItem.customerReview = customerReview;
      this.appendChild(reviewItem);
    });
  }
}

customElements.define('review-list', ReviewList);
