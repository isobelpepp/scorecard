import { screen, fireEvent } from '@testing-library/react';
import submit from '../helpers/submit';
import doubled from '../helpers/doubled'
import bid from '../helpers/bid';

test('Doubled and defeated, not vulnerable in NT', () => {
  bid('we-button', 'no-trumps', 'three', '3')
  doubled()
  submit()
  expect(screen.getByTestId('they-above-line')).toHaveTextContent('1400');
});

test('Doubled and defeated, not vulnerable in a major suit', () => {
  bid('they-button', 'spades', 'five', '7')
  doubled()
  submit()
  expect(screen.getByTestId('we-above-line')).toHaveTextContent('800');
});

test('Doubled and defeated, not vulnerable in a minor suit', () => {
  bid('we-button', 'clubs', 'two', '7')
  doubled()
  submit()
  expect(screen.getByTestId('they-above-line')).toHaveTextContent('100');
});