import { render, screen, fireEvent } from '@testing-library/react';
import App from '../../App.js';

test("Can click on 'we' to state 'we' made the bid", () => {
  render(<App />);
  const newGame = screen.getByText('New Game');
  fireEvent.click(newGame)
  const weBidButton = screen.getByTestId('we-button');
  fireEvent.click(weBidButton)
  const we = screen.getByText('We bid...')
  expect(we).toBeInTheDocument()
});

test("Can click on 'they' to state 'they' made the bid", () => {
  render(<App />);
  const newGame = screen.getByText('New Game');
  fireEvent.click(newGame)
  const theyBidButton = screen.getByTestId('they-button');
  fireEvent.click(theyBidButton)
  const they = screen.getByText('They bid...')
  expect(they).toBeInTheDocument()
});