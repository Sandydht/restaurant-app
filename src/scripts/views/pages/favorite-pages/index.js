/* eslint-disable linebreak-style */
/* eslint-disable no-new */

import FavoriteRestaurantIdb from '../../../models/favorite-restaurant-idb';
import FavoriteRestaurantSearchView from '../liked-restaurants/favorite-restaurant-search-view';
import FavoriteRestaurantSearchPresenter from '../../../presenters/favorite-restaurant-search-presenter';
import FavoriteRestaurantShowPresenter from '../../../presenters/favorite-restaurant-show-presenter';

import './favorite-pages.scss';

class FavoritePages extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  async render() {
    const view = new FavoriteRestaurantSearchView();

    this.innerHTML = view.getTemplate();

    new FavoriteRestaurantSearchPresenter({ view, favoriteRestaurant: FavoriteRestaurantIdb });
    new FavoriteRestaurantShowPresenter({ view, favoriteRestaurant: FavoriteRestaurantIdb });
  }
}

customElements.define('favorite-pages', FavoritePages);
