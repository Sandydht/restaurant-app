/* eslint-disable linebreak-style */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-plusplus */
/* eslint-disable no-undef */

const assert = require('assert');

Feature('Searching Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('searching restaurants', async ({ I }) => {
  I.see('No Data To Display', '.restaurant-item__not__found h2');

  I.amOnPage('/');

  I.seeElement('.card__actions a');

  const names = [];

  for (let i = 1; i <= 3; i++) {
    I.click(locate('.card__actions a').at(i));

    names.push(await I.grabTextFrom('.card__title'));

    I.seeElement('[aria-label="like this restaurant"]');
    I.click('favoriterestaurant-component');

    I.amOnPage('/');
  }

  I.amOnPage('/#/favorite');
  I.seeElement('#query');

  const searchQuery = (await names[1]).substring(1, 3);
  const matchingRestaurants = names.filter((name) => name.indexOf(searchQuery) !== -1);

  I.fillField('#query', searchQuery);
  I.pressKey('Enter');

  const visibleLikedRestaurants = await I.grabNumberOfVisibleElements('restaurantitem-component');
  assert.strictEqual(matchingRestaurants.length, visibleLikedRestaurants);

  matchingRestaurants.forEach(async (name, index) => {
    const visibleName = await I.grabTextFrom(locate('.card__title').at(index + 1));
    assert.strictEqual(name, visibleName);
  });
});
