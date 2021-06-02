/* eslint-disable linebreak-style */
import CONFIG from './config';

const API_ENDPOINT = {
  HOME: `${CONFIG.BASE_URL}list`,
  DETAIL: (id) => `${CONFIG.BASE_URL}detail/${id}`,
  ADD_CUSTOMER_REVIEW: `${CONFIG}/review`,
};

export default API_ENDPOINT;
