/* eslint-disable linebreak-style */
/* eslint-disable class-methods-use-this */

import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantDbSource {
  static async restaurantsList() {
    const response = await fetch(API_ENDPOINT.HOME);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async restaurantDetail(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }

  static async addCustomerReviews(latestInput) {
  }
}

export default RestaurantDbSource;
