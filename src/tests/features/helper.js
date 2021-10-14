import { render, screen, fireEvent } from '@testing-library/react';
import App from '../../App.js';
import userEvent from '@testing-library/user-event';

const bid = () => {
  render(<App />);
  const newGame = screen.getByText('New Game');
  fireEvent.click(newGame)
  const whoBid = screen.getByTestId('we-button')
  const bidSuit = screen.getByTestId('no-trumps');
  const bidNumber = screen.getByTestId('two')
  fireEvent.click(whoBid)
  fireEvent.click(bidSuit)
  fireEvent.click(bidNumber)
  const input = screen.getByTestId('tricks-number')
  userEvent.type(input, '2')
  expect(input.value).toBe('2')
  const submit = screen.getByTestId('submit-result')
  fireEvent.click(submit)
}

// const newGame = () => {
//   render(<App />);
//   const newGame = screen.getByText('New Game');
//   fireEvent.click(newGame)
// }

module.exports = bid
