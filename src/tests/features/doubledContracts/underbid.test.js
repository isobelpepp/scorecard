import { render, screen } from '@testing-library/react';
import submit from '../helpers/submit';
import doubled from '../helpers/doubled';
import bid from '../helpers/bid';
import App from '../../../App.js';

beforeEach(() => {
  render(<App />);
});

test('Doubled underbid, not vulnerable in NT gives 100 points above the line for every overtrick', () => {
  bid('they-button', 'no-trumps', 'three', '11')
  doubled()
  submit()
  expect(screen.getByTestId('they-below-line')).toHaveTextContent('200');
  expect(screen.getByTestId('they-above-line')).toHaveTextContent('200');
});

test('Doubled underbid, not vulnerable in a major suit gives 100 points above the line for every overtrick', () => {
  bid('we-button', 'hearts', 'three', '11')
  doubled()
  submit()
  expect(screen.getByTestId('we-below-line')).toHaveTextContent('180');
  expect(screen.getByTestId('we-above-line')).toHaveTextContent('200');
});

test('Doubled underbid, not vulnerable in a minor suit gives 100 points above the line for every overtrick', () => {
  bid('we-button', 'clubs', 'two', '9')
  doubled()
  submit()
  expect(screen.getByTestId('we-below-line')).toHaveTextContent('80');
  expect(screen.getByTestId('we-above-line')).toHaveTextContent('100');
});

test('Doubled underbid, VULNERABLE in NT gives 200 points above the line for every overtrick', () => {
  bid('they-button', 'hearts', 'five', '11')
  submit()
  bid('they-button', 'no-trumps', 'one', '11')
  doubled()
  submit()
  expect(screen.getByTestId('they-above-line')).toHaveTextContent('800');
});

test('Doubled underbid, VULNERABLE in a major suit gives 200 points above the line for every overtrick', () => {
  bid('we-button', 'hearts', 'five', '11')
  submit()
  bid('we-button', 'hearts', 'two', '10')
  doubled()
  submit()
  expect(screen.getByTestId('we-above-line')).toHaveTextContent('400');
});

test('Doubled underbid, VULNERABLE in a minor suit gives 200 points above the line for every overtrick', () => {
  bid('we-button', 'hearts', 'five', '11')
  submit()
  bid('we-button', 'diamonds', 'three', '10')
  doubled()
  submit()
  expect(screen.getByTestId('we-above-line')).toHaveTextContent('200');
});
