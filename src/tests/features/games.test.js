import { screen } from '@testing-library/react';
import submit from './helpers/submit';
import bid from './helpers/bid';

test("THEY can submit result of bid and made and it is reflected in scorecard", () => {
  bid('they-button', 'hearts', 'five', '11')
  submit()
  expect(screen.getByTestId('they-scores')).toHaveTextContent('Games: 1');
});

test("WE can submit result of bid and made and it is reflected in scorecard", () => {
  bid('we-button', 'no-trumps', 'five', '11')
  submit()
  expect(screen.getByTestId('we-scores')).toHaveTextContent('Games: 1');
});

test("THEY can submit result of bid and made and it is reflected in scorecard", () => {
  bid('they-button', 'hearts', 'five', '11')
  submit()
  expect(screen.getByTestId('they-scores')).toHaveTextContent('Vulnerable');
});

test("WE can submit result of bid and made and it is reflected in scorecard", () => {
  bid('we-button', 'no-trumps', 'five', '11')
  submit()
  expect(screen.getByTestId('we-scores')).toHaveTextContent('Vulnerable');
});
  