import { render, screen, fireEvent } from '@testing-library/react';
import App from '../../App.js';

beforeEach(() => {
  render(<App />);
});

test("Can click on 'we' to state 'we' made the bid", () => {
  const weBidButton = screen.getByTestId('we-button');
  fireEvent.click(weBidButton)
  const we = screen.getByText('We bid...')
  expect(we).toBeInTheDocument()
});

test("Can click on 'they' to state 'they' made the bid", () => {
  const theyBidButton = screen.getByTestId('they-button');
  fireEvent.click(theyBidButton)
  const they = screen.getByText('They bid...')
  expect(they).toBeInTheDocument()
});

test("Can click on suit and number to bid", () => {
  const bidSuit = screen.getByTestId('hearts');
  const bidNumber = screen.getByTestId('two')
  fireEvent.click(bidSuit)
  fireEvent.click(bidNumber)
  const bid = screen.getByText('2 Hearts')
  expect(bid).toBeInTheDocument()
});
