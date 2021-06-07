/* eslint-disable linebreak-style */
/* eslint-disable class-methods-use-this */
class FavoriteRestaurantSearchView {
  getTemplate() {
    return `
      <div id="restaurant-search-container">
        <input id="query" type="text">
        <div class="restaurant-result-container">
          <ul class="restaurants"></ul>
        </div>
      </div>
    `;
  }

  getFavoriteRestaurantTemplate() {
    return `
      <div class="content">
        <h2 class="content__heading">Your Liked Restaurant</h2>
        <div id="restaurants" class="restaurants"></div>
      </div>
    `;
  }

  runWhenUserIsSearching(callback) {
    document.getElementById('query').addEventListener('change', (event) => {
      callback(event.target.value);
    });
  }

  showRestaurants(restaurants = []) {
    let html;

    if (restaurants.length > 0) {
      html = restaurants.reduce(
        (carry, restaurant) => carry.concat(`<li class="restaurant">
        <span class="restaurant__name">${restaurant.name || '-'}</span>
      </li>`),
        '',
      );
    } else {
      html = '<div class="restaurants__not__found">Restaurant tidak ditemukan</div>';
    }

    document.querySelector('.restaurants').innerHTML = html;
    document.getElementById('restaurant-search-container').dispatchEvent(new Event('restaurants:searched:updated'));
  }

  showFavoriteRestaurants(restaurants) {
    document.getElementById('restaurants').innerHTML = '<div class="restaurant-item__not__found"></div>';
  }
}

export default FavoriteRestaurantSearchView;
