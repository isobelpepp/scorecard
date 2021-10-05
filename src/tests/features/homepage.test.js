import { render, screen, fireEvent } from '@testing-library/react';
import App from '../../App.js';

test('Has the title on the homepage', () => {
  render(<App />);
  const title = screen.getByText('Bridge Scorecard');
  expect(title).toBeInTheDocument();
});

test('Can click button to take you to a fresh scorecard', () => {
  render(<App />);
  const newGame = screen.getByText('New Game');
  fireEvent.click(newGame)
  const us = screen.getByText('Us')
  // const them = screen.getByText('Them')
  expect(us).toBeInTheDocument()

})
