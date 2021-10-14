import { render, screen, fireEvent } from '@testing-library/react';
import App from '../../App.js';
import newGame from './helpers/newGame.js'

test("Can click on 'we' to state 'we' made the bid", () => {
  newGame()
  const weBidButton = screen.getByTestId('we-button');
  fireEvent.click(weBidButton)
  const we = screen.getByText('We bid...')
  expect(we).toBeInTheDocument()
});

test("Can click on 'they' to state 'they' made the bid", () => {
  newGame()
  const theyBidButton = screen.getByTestId('they-button');
  fireEvent.click(theyBidButton)
  const they = screen.getByText('They bid...')
  expect(they).toBeInTheDocument()
});

test("Can click on suit and number to bid", () => {
  newGame()
  const bidSuit = screen.getByTestId('hearts');
  const bidNumber = screen.getByTestId('two')
  fireEvent.click(bidSuit)
  fireEvent.click(bidNumber)
  const bid = screen.getByText('2 Hearts')
  expect(bid).toBeInTheDocument()
});
