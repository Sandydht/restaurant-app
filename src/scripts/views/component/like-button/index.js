/* eslint-disable linebreak-style */
/* eslint-disable no-underscore-dangle */

import './like-button.scss';

class LikeButton extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set isRestaurantExist(exist) {
    this._exist = exist;
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  render() {
    this.setAttribute('aria-label', this._exist ? 'unlike this restaurant' : 'like this restaurant');
    this.setAttribute('id', 'likeButton');
    this.innerHTML = `
      <button aria-label="${this._exist ? 'unlike this restaurant' : 'like this restaurant'}" id="likeButton">
        ${this._exist ? ' <i class="fa fa-heart" aria-hidden="true"></i>' : '<i class="fa fa-heart-o" aria-hidden="true"></i>'}
      </button>
    `;

    this.querySelector(`[aria-label="${this._exist ? 'unlike this restaurant' : 'like this restaurant'}"]`).addEventListener('click', this._clickEvent);
  }
}

customElements.define('like-button', LikeButton);
