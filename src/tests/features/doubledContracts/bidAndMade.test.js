import { render, screen } from '@testing-library/react';
import submit from '../helpers/submit';
import doubled from '../helpers/doubled';
import bid from '../helpers/bid';
import App from '../../../App.js';

beforeEach(() => {
  render(<App />);
});

describe('Doubled bid and made', () => {
  test('NT', () => {
    bid('we-button', 'no-trumps', 'five', '11')
    doubled()
    submit()
    expect(screen.getByTestId('we-below-line')).toHaveTextContent('320');
  });
  test('Major suit', () => {
    bid('they-button', 'hearts', 'three', '9')
    doubled()
    submit()
    expect(screen.getByTestId('they-below-line')).toHaveTextContent('180');
  });
  test('Minor suit', () => {
    bid('we-button', 'diamonds', 'six', '12')
    doubled()
    submit()
    expect(screen.getByTestId('we-below-line')).toHaveTextContent('240');
  });
});
