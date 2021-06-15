/* eslint-disable linebreak-style */
/* eslint-disable no-underscore-dangle */

import './customer-review.scss';

class CustomerReview extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  set disabledButton(disabled) {
    this._disabledButton = disabled;
    this.render();
  }

  get value() {
    this._inputName = this.querySelector('#inputName');
    this._inputReview = this.querySelector('#inputReview');

    return {
      name: this._inputName.value,
      review: this._inputReview.value,
    };
  }

  render() {
    this.innerHTML = `
      <div class="heading">
        <p>Add Customer Review</p>
      </div>

      <div class="body">
        <div class="customer-review__input-name">
          <label for="inputName">Name</label>
          <input id="inputName" name="inputName" type="text"/>
        </div>

        <div class="customer-review__input-review">
          <label for="inputReview">Review</label>
          <textarea id="inputReview" name="inputReview" type="text" rows="5"></textarea>
        </div>

        <div class="customer-review__submit-review">
          ${this._disabledButton ? '<button id="submitReviewButton" class="loading" disabled><i class="fa fa-spinner fa-spin"></i></button>' : '<button id="submitReviewButton">Submit</button>'}
        </div>
      </div>
    `;

    this.querySelector('#submitReviewButton').addEventListener('click', this._clickEvent);
  }
}

customElements.define('customer-review', CustomerReview);
