/* eslint-disable linebreak-style */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-plusplus */
/* eslint-disable no-undef */

const assert = require('assert');

Feature('Searching Restaurants');

Before(({ I }) => {
  I.amOnPage('#/favorite');
});

Scenario('Search restaurant name', async ({ I }) => {
  I.see('No favorite cafe was selected', 'not-found');

  I.amOnPage('/');

  const names = [];

  for (let i = 1; i <= 3; i++) {
    I.scrollTo('#restaurants');
    I.wait(2);

    I.click(locate('.actions a').at(i));

    I.seeElement('#likeButton');
    I.click('#likeButton');

    names.push(await I.grabTextFrom('.name'));

    I.amOnPage('/');
  }

  I.amOnPage('#/favorite');
  I.seeElement('#query');

  const searchQuery = names[1].substring(1, 6);
  const matchingRestaurants = names.filter((name) => name.indexOf(searchQuery) !== -1);

  I.fillField('#query', searchQuery);
  I.pressKey('Enter');

  const visibleLikedRestaurants = await I.grabNumberOfVisibleElements('restaurant-item');
  assert.strictEqual(matchingRestaurants.length, visibleLikedRestaurants);

  matchingRestaurants.forEach(async (name, index) => {
    const visibleName = await I.grabTextFrom(locate('.name').at(index + 1));
    assert.strictEqual(name, visibleName);
  });
});
