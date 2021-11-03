import { screen } from '@testing-library/react';
import submit from '../helpers/submit';
import redoubled from '../helpers/redoubled';
import bid from '../helpers/bid';

test('Redoubled underbid, not vulnerable in NT', () => {
  bid('they-button', 'no-trumps', 'five', '13')
  redoubled()
  submit()
  expect(screen.getByTestId('they-below-line')).toHaveTextContent('640');
  expect(screen.getByTestId('they-above-line')).toHaveTextContent('400');
});

test('Redoubled underbid, not vulnerable in a major suit', () => {
  bid('they-button', 'hearts', 'three', '13')
  redoubled()
  submit()
  expect(screen.getByTestId('they-below-line')).toHaveTextContent('360');
  expect(screen.getByTestId('they-above-line')).toHaveTextContent('800');
});

test('Redoubled underbid, not vulnerable in a minor suit', () => {
  bid('we-button', 'clubs', 'two', '9')
  redoubled()
  submit()
  expect(screen.getByTestId('we-below-line')).toHaveTextContent('160');
  expect(screen.getByTestId('we-above-line')).toHaveTextContent('200');
});