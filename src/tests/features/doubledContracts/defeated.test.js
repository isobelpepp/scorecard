import { screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import newGame from '../helpers/newGame.js'

test('Doubled and defeated, not vulnerable in NT', () => {
  newGame()
  const whoBid = screen.getByTestId('they-button')
  const bidSuit = screen.getByTestId('no-trumps');
  const bidNumber = screen.getByTestId('one')
  const doubled = screen.getByTestId('doubled')
  fireEvent.click(whoBid)
  fireEvent.click(bidSuit)
  fireEvent.click(bidNumber)
  fireEvent.click(doubled)
  const input = screen.getByTestId('tricks-number')
  userEvent.type(input, '1')
  expect(input.value).toBe('1')
  const submit = screen.getByTestId('submit-result')
  fireEvent.click(submit)
  expect(screen.getByTestId('we-above-line')).toHaveTextContent('1400');
});

test('Doubled and defeated, not vulnerable in a major suit', () => {
  newGame()
  const whoBid = screen.getByTestId('they-button')
  const bidSuit = screen.getByTestId('spades');
  const bidNumber = screen.getByTestId('two')
  const doubled = screen.getByTestId('doubled')
  fireEvent.click(whoBid)
  fireEvent.click(bidSuit)
  fireEvent.click(bidNumber)
  fireEvent.click(doubled)
  const input = screen.getByTestId('tricks-number')
  userEvent.type(input, '4')
  expect(input.value).toBe('4')
  const submit = screen.getByTestId('submit-result')
  fireEvent.click(submit)
  expect(screen.getByTestId('we-above-line')).toHaveTextContent('800');
});

test('Doubled and defeated, not vulnerable in a minor suit', () => {
  newGame()
  const whoBid = screen.getByTestId('we-button')
  const bidSuit = screen.getByTestId('clubs');
  const bidNumber = screen.getByTestId('two')
  const doubled = screen.getByTestId('doubled')
  fireEvent.click(whoBid)
  fireEvent.click(bidSuit)
  fireEvent.click(bidNumber)
  fireEvent.click(doubled)
  const input = screen.getByTestId('tricks-number')
  userEvent.type(input, '7')
  expect(input.value).toBe('7')
  const submit = screen.getByTestId('submit-result')
  fireEvent.click(submit)
  expect(screen.getByTestId('they-above-line')).toHaveTextContent('100');
});