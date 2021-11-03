import { screen } from '@testing-library/react';
import submit from '../helpers/submit';
import doubled from '../helpers/doubled';
import bid from '../helpers/bid';

test('Doubled underbid, not vulnerable in NT', () => {
  bid('they-button', 'no-trumps', 'three', '11')
  doubled()
  submit()
  expect(screen.getByTestId('they-below-line')).toHaveTextContent('200');
  expect(screen.getByTestId('they-above-line')).toHaveTextContent('200');
});

test('Doubled underbid, not vulnerable in a major suit', () => {
  bid('we-button', 'hearts', 'three', '11')
  doubled()
  submit()
  expect(screen.getByTestId('we-below-line')).toHaveTextContent('180');
  expect(screen.getByTestId('we-above-line')).toHaveTextContent('200');
});

test('Doubled underbid, not vulnerable in a minor suit', () => {
  bid('we-button', 'clubs', 'two', '9')
  doubled()
  submit()
  expect(screen.getByTestId('we-below-line')).toHaveTextContent('80');
  expect(screen.getByTestId('we-above-line')).toHaveTextContent('100');
});