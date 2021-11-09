import { render, screen } from '@testing-library/react';
import submit from '../helpers/submit';
import redoubled from '../helpers/redoubled';
import bid from '../helpers/bid';
import App from '../../../App.js';

beforeEach(() => {
  render(<App />);
});

describe('Bid and made, vulnerable and not vulnerable', () => {
  test('NT, 100 bonus for redoubled', () => {
    bid('they-button', 'no-trumps', 'five', '11')
    redoubled()
    submit()
    expect(screen.getByTestId('they-below-line')).toHaveTextContent('640');
    expect(screen.getByTestId('they-above-line')).toHaveTextContent('100');
  });
  test('Major suit', () => {
    bid('we-button', 'hearts', 'four', '10')
    redoubled()
    submit()
    expect(screen.getByTestId('we-below-line')).toHaveTextContent('480');
    expect(screen.getByTestId('we-above-line')).toHaveTextContent('100');
  });
  test('Minor suit', () => {
    bid('we-button', 'diamonds', 'six', '12')
    redoubled()
    submit()
    expect(screen.getByTestId('we-below-line')).toHaveTextContent('480');
  });
});
