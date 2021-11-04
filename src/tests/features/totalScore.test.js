import { render, screen } from '@testing-library/react';
import submit from './helpers/submit';
import bid from './helpers/bid';
import App from '../../App.js';

beforeEach(() => {
  render(<App />);
});

test("Can see the total score for above the line for we", () => {
  bid('we-button', 'no-trumps', 'two', '8')
  submit()
  expect(screen.getByTestId('we-below-score')).toHaveTextContent('70');
});

test("Can see the total score for above the line for they", () => {
  bid('they-button', 'hearts', 'five', '11')
  submit()
  expect(screen.getByTestId('they-below-score')).toHaveTextContent('150');
});
