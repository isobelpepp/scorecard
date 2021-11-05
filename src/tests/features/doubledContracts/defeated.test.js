import { render, screen } from '@testing-library/react';
import submit from '../helpers/submit';
import doubled from '../helpers/doubled'
import bid from '../helpers/bid';
import App from '../../../App.js';

beforeEach(() => {
  render(<App />);
});

describe('Doubled, defeated and NOT vulnerable - 100 points for first undertrick, 200 for 2nd & 3rd, 300 for the rest', () => {
  test('NT', () => {
    bid('we-button', 'no-trumps', 'three', '3')
    doubled()
    submit()
    expect(screen.getByTestId('they-above-line')).toHaveTextContent('1400');
  });
  test('Major suit', () => {
    bid('they-button', 'spades', 'five', '7')
    doubled()
    submit()
    expect(screen.getByTestId('we-above-line')).toHaveTextContent('800');
  });
  test('Minor suit', () => {
    bid('we-button', 'clubs', 'two', '7')
    doubled()
    submit()
    expect(screen.getByTestId('they-above-line')).toHaveTextContent('100');
  });
});

describe('Doubled, defeated and VULNERABLE - 200 points for first undertrick, 300 for the rest', () => {
  test('NT', () => {
    bid('we-button', 'hearts', 'five', '11')
    submit()
    bid('we-button', 'no-trumps', 'three', '3')
    doubled()
    submit()
    expect(screen.getByTestId('they-above-line')).toHaveTextContent('1700');
  });
  test('Major suit', () => {
    bid('they-button', 'hearts', 'five', '11')
    submit()
    bid('they-button', 'spades', 'five', '7')
    doubled()
    submit()
    expect(screen.getByTestId('we-above-line')).toHaveTextContent('1100');
  });
  test('Minor suit', () => {
    bid('we-button', 'hearts', 'five', '11')
    submit()
    bid('we-button', 'clubs', 'two', '7')
    doubled()
    submit()
    expect(screen.getByTestId('they-above-line')).toHaveTextContent('200');
  });
});
