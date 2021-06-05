/* eslint-disable linebreak-style */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-underscore-dangle */

import './customer-reviews.scss';

class CustomerReviews extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set clickTrigger(click) {
    this._click = click;
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  get value() {
    return {
      name: this.querySelector('#inputName').value,
      review: this.querySelector('#inputReview').value,
    };
  }

  render() {
    this.innerHTML = `
      <p class="heading">Add Reviews</p>

      <div class="body">
        <div class="input__name">
          <label for="inputName">Your name</label>
          <input type="text" name="inputName" id="inputName" placeholder="Enter your name">
        </div>

        <div class="input__review">
          <label for="inputReview">Your review</label>
          <textarea type="text" name="inputReview" id="inputReview" rows="7" placeholder="Enter your review"></textarea>
        </div>

        <button id="submitReview" aria-label="submit your review" class="submit__review ${this._click ? 'loading' : ''}" ${this._click ? 'disabled' : ''}>${this._click ? '<i class="fa fa-spinner fa-spin"></i>' : 'Submit'}</button>
      </div>
    `;

    this.querySelector('#submitReview').addEventListener('click', this._clickEvent);
  }
}

customElements.define('customer-reviews', CustomerReviews);
