import { screen, fireEvent } from '@testing-library/react';

const doubled = () => {
  const double = screen.getByTestId('doubled')
  fireEvent.click(double)
}

module.exports = doubled