import { render, screen } from '@testing-library/react';
import submit from '../helpers/submit';
import doubled from '../helpers/doubled';
import bid from '../helpers/bid';
import App from '../../../App.js';

beforeEach(() => {
  render(<App />);
});

describe('Doubled, underbid, NOT vulnerable awards 100 points above the line for every overtrick', () => {
  test('NT', () => {
    bid('they-button', 'no-trumps', 'three', '11')
    doubled()
    submit()
    expect(screen.getByTestId('they-below-line')).toHaveTextContent('200');
    expect(screen.getByTestId('they-above-line')).toHaveTextContent('250');
  });
  test('Major suit', () => {
    bid('we-button', 'hearts', 'three', '11')
    doubled()
    submit()
    expect(screen.getByTestId('we-below-line')).toHaveTextContent('180');
    expect(screen.getByTestId('we-above-line')).toHaveTextContent('250');
  });
  test('Minor suit', () => {
    bid('we-button', 'clubs', 'two', '9')
    doubled()
    submit()
    expect(screen.getByTestId('we-below-line')).toHaveTextContent('80');
    expect(screen.getByTestId('we-above-line')).toHaveTextContent('150');
  });
});

describe('Doubled, underbid, VULNERABLE gives 200 points above the line for every overtrick', () => {
  test('NT', () => {
    bid('they-button', 'hearts', 'five', '11')
    submit()
    bid('they-button', 'no-trumps', 'one', '11')
    doubled()
    submit()
    expect(screen.getByTestId('they-above-line')).toHaveTextContent('850');
  });
  test('Major suit', () => {
    bid('we-button', 'hearts', 'five', '11')
    submit()
    bid('we-button', 'hearts', 'two', '10')
    doubled()
    submit()
    expect(screen.getByTestId('we-above-line')).toHaveTextContent('450');
  });
  test('Minor suit', () => {
    bid('we-button', 'hearts', 'five', '11')
    submit()
    bid('we-button', 'diamonds', 'three', '10')
    doubled()
    submit()
    expect(screen.getByTestId('we-above-line')).toHaveTextContent('250');
  });
});
