import { screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import newGame from '../helpers/newGame.js'

// const redoubled = () => {
//   const redoubleBid = screen.getByTestId('redoubled')
//   fireEvent.click(redoubleBid)
// }

test('Doubled bid and made NT', () => {
  newGame()
  const whoBid = screen.getByTestId('we-button')
  const bidSuit = screen.getByTestId('no-trumps');
  const bidNumber = screen.getByTestId('five')
  fireEvent.click(whoBid)
  fireEvent.click(bidSuit)
  fireEvent.click(bidNumber)
  const redoubleBid = screen.getByTestId('redoubled')
  fireEvent.click(redoubleBid)
  const input = screen.getByTestId('tricks-number')
  userEvent.type(input, '11')
  expect(input.value).toBe('11')
  const submit = screen.getByTestId('submit-result')
  fireEvent.click(submit)
  expect(screen.getByTestId('we-below-line')).toHaveTextContent('640');
});

test('Doubled bid and made in a major suit', () => {
  newGame()
  const whoBid = screen.getByTestId('they-button')
  const bidSuit = screen.getByTestId('hearts');
  const bidNumber = screen.getByTestId('three')
  fireEvent.click(whoBid)
  fireEvent.click(bidSuit)
  fireEvent.click(bidNumber)
  const redoubleBid = screen.getByTestId('redoubled')
  fireEvent.click(redoubleBid)
  const input = screen.getByTestId('tricks-number')
  userEvent.type(input, '9')
  expect(input.value).toBe('9')
  const submit = screen.getByTestId('submit-result')
  fireEvent.click(submit)
  expect(screen.getByTestId('they-below-line')).toHaveTextContent('360');
});


test('Doubled bid and made in a minor suit', () => {
  newGame()
  const whoBid = screen.getByTestId('we-button')
  const bidSuit = screen.getByTestId('diamonds');
  const bidNumber = screen.getByTestId('six')
  fireEvent.click(whoBid)
  fireEvent.click(bidSuit)
  fireEvent.click(bidNumber)
  const redoubleBid = screen.getByTestId('redoubled')
  fireEvent.click(redoubleBid)
  const input = screen.getByTestId('tricks-number')
  userEvent.type(input, '12')
  expect(input.value).toBe('12')
  const submit = screen.getByTestId('submit-result')
  fireEvent.click(submit)
  expect(screen.getByTestId('we-below-line')).toHaveTextContent('480');
});
