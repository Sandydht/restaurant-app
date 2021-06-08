/* eslint-disable linebreak-style */
/* eslint-disable no-underscore-dangle */

import RestaurantDbSource from '../../../models/restaurantdb-source';

import './home-pages.scss';
import '../../component/hero-image';
import '../../component/restaurant-list';
import '../../component/spinner-loading';
import '../../component/not-found';

class HomePages extends HTMLElement {
  async connectedCallback() {
    this.render();
  }

  async render() {
    this.innerHTML = '<spinner-loading></spinner-loading>';

    try {
      const restaurants = await RestaurantDbSource.restaurantsList();

      this.innerHTML = `
        <hero-image></hero-image>
        <section class="content" id="restaurants">
          <h2 class="content__heading">Explore Cafe</h2>
          <div class="content__body">
            <restaurant-list></restaurant-list>
          </div>
        </section>
      `;

      this.querySelector('restaurant-list').restaurants = restaurants;
    } catch (e) {
      this.innerHTML = '<not-found></not-found>';

      this.querySelector('not-found').message = 'Failed to load data \nPlease check your internet connection';
    }
  }
}

customElements.define('home-pages', HomePages);
