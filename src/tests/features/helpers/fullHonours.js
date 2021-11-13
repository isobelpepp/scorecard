import { screen, fireEvent } from '@testing-library/react';

const fullHonours = () => {
  const honours = screen.getByTestId('full-honours')
  fireEvent.click(honours)
}

module.exports = fullHonours
