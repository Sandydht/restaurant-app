/* eslint-disable linebreak-style */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-underscore-dangle */

class FavoriterestaurantComponent extends HTMLElement {
  connectedCallback() {
    this.ariaLabel = this.getAttribute('aria-label') || null;
  }

  set click(clickEvent) {
    this._clickEvent = clickEvent;
    this.render();
  }

  set icon(icon) {
    this._icon = icon;
    this.render();
  }

  render() {
    this.innerHTML = `
      <button aria-label="${this._icon ? this.ariaLabel = 'unlike this restaurant' : this.ariaLabel = 'like this restaurant'}" id="likeButton" class="float-button">
        ${this._icon ? ' <i class="fa fa-heart" aria-hidden="true"></i>' : '<i class="fa fa-heart-o" aria-hidden="true"></i>'}
      </button>
    `;

    this.addEventListener('click', this._clickEvent);
  }
}

customElements.get('favoriterestaurant-component') || customElements.define('favoriterestaurant-component', FavoriterestaurantComponent);
