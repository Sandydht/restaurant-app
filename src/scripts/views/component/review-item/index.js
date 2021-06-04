/* eslint-disable linebreak-style */
/* eslint-disable no-underscore-dangle */

import './review-item.scss';

class ReviewItem extends HTMLElement {
  set customerReview(customerReview) {
    this._customerReview = customerReview;
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="heading">
        <p class="name">Name: ${this._customerReview.name}</p>
        <p class="date">${this._customerReview.date}</p> 
      </div>

      <div class="body">
        <p class="review">Review: ${this._customerReview.review}</p>
      </div>
    `;
  }
}

customElements.define('review-item', ReviewItem);
