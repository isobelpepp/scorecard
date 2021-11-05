import { render, screen } from '@testing-library/react';
import submit from '../helpers/submit';
import redoubled from '../helpers/redoubled';
import bid from '../helpers/bid';
import App from '../../../App.js';

beforeEach(() => {
  render(<App />);
});

describe('Redoubled, defeated and NOT vulnerable - 200 points for first undertrick, 300 for the rest', () => {
  test('NT', () => {
    bid('we-button', 'no-trumps', 'three', '3')
    redoubled()
    submit()
    expect(screen.getByTestId('they-above-line')).toHaveTextContent('2800');
  });
  test('Major suit', () => {
    bid('they-button', 'spades', 'four', '6')
    redoubled()
    submit()
    expect(screen.getByTestId('we-above-line')).toHaveTextContent('1600');
  });
  test('Minor suit', () => {
    bid('they-button', 'clubs', 'two', '7')
    redoubled()
    submit()
    expect(screen.getByTestId('we-above-line')).toHaveTextContent('200');
  });
});

describe('Redoubled, defeated and VULNERABLE - 400 points for first undertrick, 600 for the rest', () => {
  test('NT', () => {
    bid('we-button', 'hearts', 'five', '11')
    submit()
    bid('we-button', 'no-trumps', 'three', '3')
    redoubled()
    submit()
    expect(screen.getByTestId('they-above-line')).toHaveTextContent('3400');
  });
  test('Major suit', () => {
    bid('they-button', 'hearts', 'five', '11')
    submit()
    bid('they-button', 'spades', 'five', '7')
    redoubled()
    submit()
    expect(screen.getByTestId('we-above-line')).toHaveTextContent('2200');
  });
  test('Minor suit', () => {
    bid('we-button', 'hearts', 'five', '11')
    submit()
    bid('we-button', 'clubs', 'two', '7')
    redoubled()
    submit()
    expect(screen.getByTestId('they-above-line')).toHaveTextContent('400');
  });
});
