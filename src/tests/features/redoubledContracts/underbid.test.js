import { render, screen } from '@testing-library/react';
import submit from '../helpers/submit';
import redoubled from '../helpers/redoubled';
import bid from '../helpers/bid';
import App from '../../../App.js';

beforeEach(() => {
  render(<App />);
});

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

test('Reoubled underbid, VULNERABLE in NT gives 400 points above the line for every overtrick', () => {
  bid('they-button', 'hearts', 'five', '11')
  submit()
  bid('they-button', 'no-trumps', 'one', '11')
  redoubled()
  submit()
  expect(screen.getByTestId('they-above-line')).toHaveTextContent('1600');
});

test('Reoubled underbid, VULNERABLE in a major suit gives 400 points above the line for every overtrick', () => {
  bid('we-button', 'hearts', 'five', '11')
  submit()
  bid('we-button', 'hearts', 'two', '10')
  redoubled()
  submit()
  expect(screen.getByTestId('we-above-line')).toHaveTextContent('800');
});

test('Reoubled underbid, VULNERABLE in a minor suit gives 400 points above the line for every overtrick', () => {
  bid('we-button', 'hearts', 'five', '11')
  submit()
  bid('we-button', 'diamonds', 'three', '10')
  redoubled()
  submit()
  expect(screen.getByTestId('we-above-line')).toHaveTextContent('400');
});