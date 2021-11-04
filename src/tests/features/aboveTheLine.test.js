import { render, screen } from '@testing-library/react';
import submit from './helpers/submit';
import bid from './helpers/bid';
import App from '../../App.js';

beforeEach(() => {
  render(<App />);
});

test('overtricks in NT puts 30 points above the line for each overtrick', () => {
  bid('we-button', 'no-trumps', 'four', '12')
  submit()
  expect(screen.getByTestId('we-above-line')).toHaveTextContent('60');
});

test('overtricks in HEARTS puts 30 points above the line for each overtrick', () => {
  bid('they-button', 'hearts', 'three', '10')
  submit()
  expect(screen.getByTestId('they-below-line')).toHaveTextContent('90');
  expect(screen.getByTestId('they-above-line')).toHaveTextContent('30');
});

test('Overtricks in SPADES puts 30 points above the line for each overtrick', () => {
  bid('we-button', 'spades', 'one', '11')
  submit()
  expect(screen.getByTestId('we-below-line')).toHaveTextContent('30');
  expect(screen.getByTestId('we-above-line')).toHaveTextContent('120');
});

test('overtricks in DIAMONDS puts 20 points above the line for each overtrick', () => {
  bid('they-button', 'diamonds', 'two', '9')
  submit()
  expect(screen.getByTestId('they-below-line')).toHaveTextContent('40');
  expect(screen.getByTestId('they-above-line')).toHaveTextContent('20');
});

test('Overtricks in CLUBS puts 20 points above the line for each overtrick', () => {
  bid('we-button', 'clubs', 'four', '13')
  submit()
  expect(screen.getByTestId('we-below-line')).toHaveTextContent('80');
  expect(screen.getByTestId('we-above-line')).toHaveTextContent('60');
});