/* eslint-disable no-plusplus */
/* eslint-disable no-undef */

const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see('No Data To Display', '.restaurant-item__not__found h2');

  I.amOnPage('/');
  I.seeElement('.card__title');
  const firstRestaurantName = await I.grabTextFrom(locate('.card__title').first());

  I.seeElement('.card__actions a');
  I.click(locate('.card__actions a').first());

  I.seeElement('[aria-label="like this restaurant"]');
  I.click('favoriterestaurant-component');

  I.amOnPage('/#/favorite');
  I.seeElement('.card__title');
  const likedRestaurantName = await I.grabTextFrom('.card__title');
  assert.strictEqual(firstRestaurantName, likedRestaurantName);
});
