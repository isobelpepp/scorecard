import { screen } from '@testing-library/react';
import weBid from './helpers/weBid.js'
import theyBid from './helpers/theyBid.js'

test("We can submit result of bid and made and it is reflected in scorecard", () => {
  weBid()
  expect(screen.getByTestId('we-below-line')).toHaveTextContent('70');
});

test("They can submit result of bid and made and it is reflected in scorecard", () => {
  theyBid()
  expect(screen.getByTestId('they-below-line')).toHaveTextContent('150');
});
