import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../../App.js';

test("Can submit the result of the hand", () => {
  render(<App />);
  const newGame = screen.getByText('New Game');
  fireEvent.click(newGame)
  const bidSuit = screen.getByTestId('hearts');
  const bidNumber = screen.getByTestId('two')
  fireEvent.click(bidSuit)
  fireEvent.click(bidNumber)
  const input = screen.getByTestId('tricks-number')
  userEvent.type(input, '8')
  expect(input.value).toBe('8')
  const submit = screen.getByTestId('submit')
  fireEvent.click(submit)
  const score = screen.getByText('8 tricks won!')
  expect(score).toBeInTheDocument()
});


// Enter how many tricks were won: