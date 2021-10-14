import { screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import newGame from './newGame.js'

const theyBid = () => {
  newGame()
  const whoBid = screen.getByTestId('they-button')
  const bidSuit = screen.getByTestId('hearts');
  const bidNumber = screen.getByTestId('five')
  fireEvent.click(whoBid)
  fireEvent.click(bidSuit)
  fireEvent.click(bidNumber)
  const input = screen.getByTestId('tricks-number')
  userEvent.type(input, '5')
  expect(input.value).toBe('5')
  const submit = screen.getByTestId('submit-result')
  fireEvent.click(submit)
}

module.exports = theyBid
