/* eslint-disable linebreak-style */
/* eslint-disable class-methods-use-this */

import API_ENDPOINT from '../globals/api-endpoint';
import CONFIG from '../globals/config';

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

  static async addCustomerReview(latestInput) {
    const response = await fetch(API_ENDPOINT.ADD_CUSTOMER_REVIEW, {
      method: 'POST',
      headers: {
        'X-Auth-Token': CONFIG.API_KEY,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(latestInput),
    });
    const responseJson = await response.json();
    return responseJson;
  }
}

export default RestaurantDbSource;
