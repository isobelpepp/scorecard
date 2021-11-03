import { screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import newGame from './newGame.js';

const bid = (who, suit, numberBid, numberMade) => {
  newGame()
  const whoBid = screen.getByTestId(who)
  const bidSuit = screen.getByTestId(suit);
  const bidNumber = screen.getByTestId(numberBid)
  fireEvent.click(whoBid)
  fireEvent.click(bidSuit)
  fireEvent.click(bidNumber)
  const input = screen.getByTestId('tricks-number')
  userEvent.type(input, numberMade)
}

module.exports = bid