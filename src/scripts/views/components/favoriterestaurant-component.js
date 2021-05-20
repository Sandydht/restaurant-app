/* eslint-disable linebreak-style */
/* eslint-disable no-underscore-dangle */

class FavoriterestaurantComponent extends HTMLElement {
  set clickEvent(click) {
    this._click = click;
    this.render();
  }

  set button(button) {
    this._button = button;
    this.render();
  }

  render() {
    this.innerHTML = `
      <button aria-label="${this._button ? 'unlike this restaurant' : 'like this restaurant'}" id="likeButton" class="float-button">
        ${this._button ? ' <i class="fa fa-heart" aria-hidden="true"></i>' : '<i class="fa fa-heart-o" aria-hidden="true"></i>'}
      </button>
    `;

    this.querySelector('#likeButton').addEventListener('click', this._click);
  }
}

customElements.define('favoriterestaurant-component', FavoriterestaurantComponent);
