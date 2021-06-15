/* eslint-disable linebreak-style */
/* eslint-disable no-undef */

Feature('Add Customer Review');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('When User Input Is Not Empty', async ({ I }) => {
  I.scrollTo('#restaurants');
  I.wait(2);

  I.click(locate('.actions a').first());

  I.scrollTo('#customerReview');
  I.wait(2);

  I.seeElement('customer-review');
  I.fillField('Name', 'Hello world');
  I.fillField('Review', 'Tempatnya bagus');
  I.click('#submitReviewButton');
  I.wait(2);
  I.seeElement('.success');
  I.wait(2);
});

Scenario('When User Input Is Empty', async ({ I }) => {
  I.scrollTo('#restaurants');
  I.wait(2);

  I.click(locate('.actions a').first());

  I.scrollTo('#customerReview');
  I.wait(2);

  I.seeElement('customer-review');
  I.click('#submitReviewButton');
  I.wait(2);
  I.seeElement('.error');
  I.wait(2);
});
