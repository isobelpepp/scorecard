import { render, screen, fireEvent } from '@testing-library/react';
import App from '../../../App.js';

const newGame = () => {
  render(<App />);
  const newGame = screen.getByText('New Game');
  fireEvent.click(newGame)
}

module.exports = newGame