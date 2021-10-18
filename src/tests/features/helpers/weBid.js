import { screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import newGame from './newGame.js'

const weBid = () => {
  newGame()
  const whoBid = screen.getByTestId('we-button')
  const bidSuit = screen.getByTestId('no-trumps');
  const bidNumber = screen.getByTestId('two')
  fireEvent.click(whoBid)
  fireEvent.click(bidSuit)
  fireEvent.click(bidNumber)
  const input = screen.getByTestId('tricks-number')
  userEvent.type(input, '8')
  expect(input.value).toBe('8')
  const submit = screen.getByTestId('submit-result')
  fireEvent.click(submit)
}

module.exports = weBid