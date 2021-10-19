import { screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import newGame from './helpers/newGame.js'


test('overtricks in NT puts 30 points above the line for each overtrick', () => {
  newGame()
  const whoBid = screen.getByTestId('we-button')
  const bidSuit = screen.getByTestId('no-trumps');
  const bidNumber = screen.getByTestId('three')
  fireEvent.click(whoBid)
  fireEvent.click(bidSuit)
  fireEvent.click(bidNumber)
  const input = screen.getByTestId('tricks-number')
  userEvent.type(input, '11')
  expect(input.value).toBe('11')
  const submit = screen.getByTestId('submit-result')
  fireEvent.click(submit)
  expect(screen.getByTestId('we-below-line')).toHaveTextContent('100');
  expect(screen.getByTestId('we-above-line')).toHaveTextContent('60');
});

test('overtricks in HEARTS puts 30 points above the line for each overtrick', () => {
  newGame()
  const whoBid = screen.getByTestId('they-button')
  const bidSuit = screen.getByTestId('hearts');
  const bidNumber = screen.getByTestId('four')
  fireEvent.click(whoBid)
  fireEvent.click(bidSuit)
  fireEvent.click(bidNumber)
  const input = screen.getByTestId('tricks-number')
  userEvent.type(input, '11')
  expect(input.value).toBe('11')
  const submit = screen.getByTestId('submit-result')
  fireEvent.click(submit)
  expect(screen.getByTestId('they-below-line')).toHaveTextContent('120');
  expect(screen.getByTestId('they-above-line')).toHaveTextContent('30');
});

test('Overtricks in SPADES puts 30 points above the line for each overtrick', () => {
  newGame()
  const whoBid = screen.getByTestId('we-button')
  const bidSuit = screen.getByTestId('spades');
  const bidNumber = screen.getByTestId('one')
  fireEvent.click(whoBid)
  fireEvent.click(bidSuit)
  fireEvent.click(bidNumber)
  const input = screen.getByTestId('tricks-number')
  userEvent.type(input, '11')
  expect(input.value).toBe('11')
  const submit = screen.getByTestId('submit-result')
  fireEvent.click(submit)
  expect(screen.getByTestId('we-below-line')).toHaveTextContent('30');
  expect(screen.getByTestId('we-above-line')).toHaveTextContent('120');
});

test('overtricks in DIAMONDS puts 20 points above the line for each overtrick', () => {
  newGame()
  const whoBid = screen.getByTestId('they-button')
  const bidSuit = screen.getByTestId('diamonds');
  const bidNumber = screen.getByTestId('two')
  fireEvent.click(whoBid)
  fireEvent.click(bidSuit)
  fireEvent.click(bidNumber)
  const input = screen.getByTestId('tricks-number')
  userEvent.type(input, '9')
  expect(input.value).toBe('9')
  const submit = screen.getByTestId('submit-result')
  fireEvent.click(submit)
  expect(screen.getByTestId('they-below-line')).toHaveTextContent('40');
  expect(screen.getByTestId('they-above-line')).toHaveTextContent('20');
});

test('Overtricks in CLUBS puts 20 points above the line for each overtrick', () => {
  newGame()
  const whoBid = screen.getByTestId('we-button')
  const bidSuit = screen.getByTestId('clubs');
  const bidNumber = screen.getByTestId('four')
  fireEvent.click(whoBid)
  fireEvent.click(bidSuit)
  fireEvent.click(bidNumber)
  const input = screen.getByTestId('tricks-number')
  userEvent.type(input, '13')
  expect(input.value).toBe('13')
  const submit = screen.getByTestId('submit-result')
  fireEvent.click(submit)
  expect(screen.getByTestId('we-below-line')).toHaveTextContent('80');
  expect(screen.getByTestId('we-above-line')).toHaveTextContent('60');
});