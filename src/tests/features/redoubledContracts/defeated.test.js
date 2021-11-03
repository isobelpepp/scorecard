import { screen } from '@testing-library/react';
import submit from '../helpers/submit';
import redoubled from '../helpers/redoubled';
import bid from '../helpers/bid';

test('Redoubled and defeated, not vulnerable in NT', () => {
  bid('we-button', 'no-trumps', 'three', '3')
  redoubled()
  submit()
  expect(screen.getByTestId('they-above-line')).toHaveTextContent('2800');
});

test('Redoubled and defeated, not vulnerable in a major suit', () => {
  bid('they-button', 'spades', 'four', '6')
  redoubled()
  submit()
  expect(screen.getByTestId('we-above-line')).toHaveTextContent('1600');
});

test('Redoubled and defeated, not vulnerable in a minor suit', () => {
  bid('they-button', 'clubs', 'two', '7')
  redoubled()
  submit()
  expect(screen.getByTestId('we-above-line')).toHaveTextContent('200');
});