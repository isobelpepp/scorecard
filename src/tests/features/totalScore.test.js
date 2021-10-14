import { screen } from '@testing-library/react';
import bid from './helper.js'

test("Can see the total score for above the line", () => {
  bid()
  expect(screen.getByTestId('we-below-score')).toHaveTextContent('70');
});