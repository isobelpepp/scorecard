import { render, screen } from '@testing-library/react';
import submit from '../helpers/submit';
import redoubled from '../helpers/redoubled';
import bid from '../helpers/bid';
import App from '../../../App.js';

beforeEach(() => {
  render(<App />);
});

test('Redoubled bid and made NT, NOT vulnerable', () => {
  bid('they-button', 'no-trumps', 'five', '11')
  redoubled()
  submit()
  expect(screen.getByTestId('they-below-line')).toHaveTextContent('640');
});

test('Redoubled bid and made in a major suit, Not vulnerable', () => {
  bid('we-button', 'hearts', 'four', '10')
  redoubled()
  submit()
  expect(screen.getByTestId('we-below-line')).toHaveTextContent('480');
});

test('Reoubled bid and made in a minor suit, NOT vulnerable', () => {
  bid('we-button', 'diamonds', 'six', '12')
  redoubled()
  submit()
  expect(screen.getByTestId('we-below-line')).toHaveTextContent('480');
});
