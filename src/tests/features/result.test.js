import { screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import weBid from './helpers/weBid.js'
import theyBid from './helpers/theyBid.js'
import newGame from './helpers/newGame.js'

test("We can submit result of bid and made and it is reflected in scorecard", () => {
  weBid()
  expect(screen.getByTestId('we-below-line')).toHaveTextContent('70');
});

test("They can submit result of bid and made and it is reflected in scorecard", () => {
  theyBid()
  expect(screen.getByTestId('they-below-line')).toHaveTextContent('150');
});

test('50 points are awarded for each un-doubled under-trick and not vulnerable (WE)', () => {
  newGame()
  const whoBid = screen.getByTestId('we-button')
  const bidSuit = screen.getByTestId('hearts');
  const bidNumber = screen.getByTestId('three')
  fireEvent.click(whoBid)
  fireEvent.click(bidSuit)
  fireEvent.click(bidNumber)
  const input = screen.getByTestId('tricks-number')
  userEvent.type(input, '8')
  expect(input.value).toBe('8')
  const submit = screen.getByTestId('submit-result')
  fireEvent.click(submit)
  expect(screen.getByTestId('they-below-line')).toHaveTextContent('50');
});

test('50 points are awarded for each un-doubled under-trick and not vulnerable (THEY)', () => {
  newGame()
  const whoBid = screen.getByTestId('they-button')
  const bidSuit = screen.getByTestId('diamonds');
  const bidNumber = screen.getByTestId('six')
  fireEvent.click(whoBid)
  fireEvent.click(bidSuit)
  fireEvent.click(bidNumber)
  const input = screen.getByTestId('tricks-number')
  userEvent.type(input, '9')
  expect(input.value).toBe('9')
  const submit = screen.getByTestId('submit-result')
  fireEvent.click(submit)
  expect(screen.getByTestId('we-below-line')).toHaveTextContent('150');
})
