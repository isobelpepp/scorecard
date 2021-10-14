import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../../App.js';

test("We can submit result of bid and made and it is reflected in scorecard", () => {
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
  expect(screen.getByTestId('we-below-line')).toHaveTextContent('70');
});

test("They can submit result of bid and made and it is reflected in scorecard", () => {
  render(<App />);
  const newGame = screen.getByText('New Game');
  fireEvent.click(newGame)
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
  expect(screen.getByTestId('they-below-line')).toHaveTextContent('150');
});
