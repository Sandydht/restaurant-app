/* eslint-disable linebreak-style */

import './customer-review-skeleton.scss';

class CustomerReviewSkeleton extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="heading">
        <p>Add Customer Review</p>
      </div>

      <div class="body">
        <div class="customer-review__input-name">
          <p>Input Name</p>
        </div>

        <div class="customer-review__input-review">
          <p>Input Review</p>
        </div>

        <div class="customer-review__submit-review">
          <p>Submit</p>
        </div>
      </div>
    `;
  }
}

customElements.define('customer-review-skeleton', CustomerReviewSkeleton);
