/* eslint-disable linebreak-style */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-underscore-dangle */

import './customer-reviews.scss';

class CustomerReviews extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  get valueName() {
    const inputName = this.querySelector('#name').value;
    return inputName;
  }

  get valueReview() {
    const inputReview = this.querySelector('#review').value;
    return inputReview;
  }

  set clickTrigger(click) {
    this._click = click;
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  render() {
    this.innerHTML = `
      <p class="heading">Add Reviews</p>

      <div class="body">
        <div class="input__name">
          <label for="name">Your name</label>
          <input type="text" name="name" id="name" placeholder="Enter your name">
        </div>

        <div class="input__review">
          <label for="review">Your review</label>
          <textarea type="text" name="review" id="review" rows="5" placeholder="Enter your review"></textarea>
        </div>

        <button id="submitReview" aria-label="submit your review" class="submit__review ${this._click ? 'loading' : ''}" ${this._click ? 'disabled' : ''}>${this._click ? '<i class="fa fa-spinner fa-spin"></i>' : 'Submit'}</button>
      </div>
    `;

    this.querySelector('#submitReview').addEventListener('click', this._clickEvent);
  }
}

customElements.define('customer-reviews', CustomerReviews);
