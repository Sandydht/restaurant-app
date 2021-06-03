/* eslint-disable linebreak-style */
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

  static async restaurantAddCustomerReviews(reviews) {
    const response = await fetch(API_ENDPOINT.ADD_CUSTOMER_REVIEW, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Auth-Token': CONFIG.API_KEY,
      },
      body: JSON.stringify(reviews),
    });
    const responseJson = await response.json();
    await this.restaurantDetail(reviews.id);
    return responseJson;
  }
}

export default RestaurantDbSource;
