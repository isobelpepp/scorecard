import { screen, fireEvent } from '@testing-library/react';

const smallHonours = () => {
  const honours = screen.getByTestId('small-honours')
  fireEvent.click(honours)
}

module.exports = smallHonours
