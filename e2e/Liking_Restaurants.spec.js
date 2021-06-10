/* eslint-disable no-undef */

const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('#/favorite');
});

Scenario('Like one restaurant', async ({ I }) => {
  I.see('No favorite cafe was selected', 'not-found');

  I.amOnPage('/');
  I.scrollTo('#restaurants');
  I.wait(2);
  const firstRestaurant = locate('.name').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);

  I.seeElement('.actions a');
  I.click(locate('.actions a').first());

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('#/favorite');
  I.seeElement('restaurant-item');
  const likedRestaurantName = await I.grabTextFrom('.name');

  assert.strictEqual(firstRestaurantName, likedRestaurantName);
});
