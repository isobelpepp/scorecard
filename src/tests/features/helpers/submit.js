import { screen, fireEvent } from '@testing-library/react';

const submit = () => {
  const submitResult = screen.getByTestId('submit-result')
  fireEvent.click(submitResult)
}

module.exports = submit