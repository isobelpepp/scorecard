import { screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import newGame from '../helpers/newGame.js'

test('Redoubled underbid, not vulnerable in NT', () => {
  newGame()
  const whoBid = screen.getByTestId('we-button')
  const bidSuit = screen.getByTestId('no-trumps');
  const bidNumber = screen.getByTestId('five')
  const redoubled = screen.getByTestId('redoubled')
  fireEvent.click(whoBid)
  fireEvent.click(bidSuit)
  fireEvent.click(bidNumber)
  fireEvent.click(redoubled)
  const input = screen.getByTestId('tricks-number')
  userEvent.type(input, '13')
  expect(input.value).toBe('13')
  const submit = screen.getByTestId('submit-result')
  fireEvent.click(submit)
  expect(screen.getByTestId('we-below-line')).toHaveTextContent('640');
  expect(screen.getByTestId('we-above-line')).toHaveTextContent('400');
});

test('Redoubled underbid, not vulnerable in a major suit', () => {
  newGame()
  const whoBid = screen.getByTestId('they-button')
  const bidSuit = screen.getByTestId('spades');
  const bidNumber = screen.getByTestId('two')
  const redoubled = screen.getByTestId('redoubled')
  fireEvent.click(whoBid)
  fireEvent.click(bidSuit)
  fireEvent.click(bidNumber)
  fireEvent.click(redoubled)
  const input = screen.getByTestId('tricks-number')
  userEvent.type(input, '12')
  expect(input.value).toBe('12')
  const submit = screen.getByTestId('submit-result')
  fireEvent.click(submit)
  expect(screen.getByTestId('they-below-line')).toHaveTextContent('240');
  expect(screen.getByTestId('they-above-line')).toHaveTextContent('800');
});

test('Redoubled underbid, not vulnerable in a minor suit', () => {
  newGame()
  const whoBid = screen.getByTestId('we-button')
  const bidSuit = screen.getByTestId('clubs');
  const bidNumber = screen.getByTestId('two')
  const redoubled = screen.getByTestId('redoubled')
  fireEvent.click(whoBid)
  fireEvent.click(bidSuit)
  fireEvent.click(bidNumber)
  fireEvent.click(redoubled)
  const input = screen.getByTestId('tricks-number')
  userEvent.type(input, '9')
  expect(input.value).toBe('9')
  const submit = screen.getByTestId('submit-result')
  fireEvent.click(submit)
  expect(screen.getByTestId('we-below-line')).toHaveTextContent('160');
  expect(screen.getByTestId('we-above-line')).toHaveTextContent('200');
});