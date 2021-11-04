import { render, screen } from '@testing-library/react';
import submit from './helpers/submit';
import bid from './helpers/bid';
import App from '../../App.js';

beforeEach(() => {
  render(<App />);
});

test("We can submit result of bid and made and it is reflected in scorecard", () => {
  bid('we-button', 'no-trumps', 'two', '8')
  submit()
  expect(screen.getByTestId('we-below-line')).toHaveTextContent('70');
});

test("They can submit result of bid and made and it is reflected in scorecard", () => {
  bid('they-button', 'hearts', 'five', '11')
  submit()
  expect(screen.getByTestId('they-below-line')).toHaveTextContent('150');
});

test('50 points are awarded for each un-doubled under-trick and not vulnerable in a major suit', () => {
  bid('they-button', 'spades', 'three', '8')
  submit()
  expect(screen.getByTestId('we-above-line')).toHaveTextContent('50');
});

test('50 points are awarded for each un-doubled under-trick and not vulnerable in a minor suit', () => {
  bid('we-button', 'diamonds', 'six', '9')
  submit()
  expect(screen.getByTestId('they-above-line')).toHaveTextContent('150');
});
