/* eslint-disable linebreak-style */
/* eslint-disable no-underscore-dangle */
class ReviewitemComponent extends HTMLElement {
  set review(review) {
    this._review = review;
    this.render();
  }

  render() {
    this.innerHTML = `
      <article class="card">
        <div class="card__body">
          <h4>Name</h4>
          <p>${this._review.name}</p>
          
          <h4>Date</h4>
          <p>${this._review.date}</p>
          
          <h4>Review</h4>
          <p>${this._review.review}</p>
        </div>
      </article>
    `;
  }
}

customElements.define('reviewitem-component', ReviewitemComponent);
