import { screen, fireEvent } from '@testing-library/react';

const redoubled = () => {
  const redouble = screen.getByTestId('redoubled')
  fireEvent.click(redouble)
}

module.exports = redoubled