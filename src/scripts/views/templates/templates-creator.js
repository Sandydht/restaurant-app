/* eslint-disable linebreak-style */
/* eslint-disable max-len */

const createRestaurantAddCustomerReviewTemplate = () => `
  <div class="input__name">
    <label for="name">Name</label>
    <input type="text" name="name" id="name" placeholder="Your name...">
  </div>

  <div class="input__review">
    <label for="review">Review</label>
    <textarea type="text" name="review" id="review" rows="5"  placeholder="Your review..."></textarea>
  </div>

  <button id="submitReview">Submit</button>
`;

const createRestaurantReviewItemTemplate = (customerReviews) => `
  <div class="review__item">
    <p class="name">Name: ${customerReviews.name}</p>
    <p class="date">Date: ${customerReviews.date}</p>
    <p class="review">Review: ${customerReviews.review}</p>
  </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantAddCustomerReviewTemplate,
  createRestaurantReviewItemTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
