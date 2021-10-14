import { screen } from '@testing-library/react';
import weBid from './helpers/weBid.js'
import theyBid from './helpers/theyBid.js'

test("Can see the total score for above the line for we", () => {
  weBid()
  expect(screen.getByTestId('we-below-score')).toHaveTextContent('70');
});

test("Can see the total score for above the line for they", () => {
  theyBid()
  expect(screen.getByTestId('they-below-score')).toHaveTextContent('150');
});