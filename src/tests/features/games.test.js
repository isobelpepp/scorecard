import theyBid from './helpers/theyBid.js'
import { screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import newGame from './helpers/newGame.js'

test("They can submit result of bid and made and it is reflected in scorecard", () => {
  theyBid()
  expect(screen.getByTestId('they-scores')).toHaveTextContent('Games: 1');
});

test("They can submit result of bid and made and it is reflected in scorecard", () => {
  newGame()
  const whoBid = screen.getByTestId('we-button')
  const bidSuit = screen.getByTestId('no-trumps');
  const bidNumber = screen.getByTestId('six')
  fireEvent.click(whoBid)
  fireEvent.click(bidSuit)
  fireEvent.click(bidNumber)
  const input = screen.getByTestId('tricks-number')
  userEvent.type(input, '12')
  expect(input.value).toBe('12')
  const submit = screen.getByTestId('submit-result')
  fireEvent.click(submit)
  expect(screen.getByTestId('we-scores')).toHaveTextContent('Games: 1');
  });