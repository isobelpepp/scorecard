import { render, screen } from '@testing-library/react';
import submit from '../helpers/submit';
import redoubled from '../helpers/redoubled';
import bid from '../helpers/bid';
import App from '../../../App.js';

beforeEach(() => {
  render(<App />);
});

describe('Redoubled, underbid NOT vulnerable gives 200 points above the line for every overtrick', () => {
  test('NT', () => {
    bid('they-button', 'no-trumps', 'five', '13')
    redoubled()
    submit()
    expect(screen.getByTestId('they-above-line')).toHaveTextContent('400');
  });
  test('Major suit', () => {
    bid('they-button', 'hearts', 'three', '13')
    redoubled()
    submit()
    expect(screen.getByTestId('they-above-line')).toHaveTextContent('800');
  });
  test('Minor suit', () => {
    bid('we-button', 'clubs', 'two', '9')
    redoubled()
    submit()
    expect(screen.getByTestId('we-above-line')).toHaveTextContent('200');
  });
});

describe('Redoubled, underbid, VULNERABLE gives 400 points above the line for every overtrick', () => {
  test('NT', () => {
    bid('they-button', 'hearts', 'five', '11')
    submit()
    bid('they-button', 'no-trumps', 'one', '11')
    redoubled()
    submit()
    expect(screen.getByTestId('they-above-line')).toHaveTextContent('1600');
  });
  test('Major suit', () => {
    bid('we-button', 'hearts', 'five', '11')
    submit()
    bid('we-button', 'hearts', 'two', '10')
    redoubled()
    submit()
    expect(screen.getByTestId('we-above-line')).toHaveTextContent('800');
  });
  test('Minor suit', () => {
    bid('we-button', 'hearts', 'five', '11')
    submit()
    bid('we-button', 'diamonds', 'three', '10')
    redoubled()
    submit()
    expect(screen.getByTestId('we-above-line')).toHaveTextContent('400');
  });
});
