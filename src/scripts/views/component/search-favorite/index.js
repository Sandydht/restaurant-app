/* eslint-disable linebreak-style */
/* eslint-disable no-underscore-dangle */

import './search-favorite.scss';

class SearchFavorite extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set changeEvent(event) {
    this._changeEvent = event;
    this.render();
  }

  render() {
    this.innerHTML = '<input id="query" type="text" placeholder="Search you favorite cafe">';

    this.addEventListener('change', this._changeEvent);
  }
}

customElements.define('search-favorite', SearchFavorite);
