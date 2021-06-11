/* eslint-disable linebreak-style */

import './review-item-skeleton.scss';

class ReviewItemSkeleton extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="heading">
        <p class="name">Name: abcde</p>
        <p class="date">11 Juni 2021</p> 
      </div>

      <div class="body">
        <p class="review">Review: abcde</p>
      </div>
    `;
  }
}

customElements.define('review-item-skeleton', ReviewItemSkeleton);
