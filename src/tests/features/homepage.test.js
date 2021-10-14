import { render, screen, fireEvent } from '@testing-library/react';
import App from '../../App.js';
import newGame from './helpers/newGame.js'

test('Has the title on the homepage', () => {
  render(<App />);
  const title = screen.getByText('Bridge Scorecard');
  expect(title).toBeInTheDocument();
});

test('Can click button to take you to a fresh scorecard', () => {
  newGame()
  const we = screen.getByTestId('we-column')
  const they = screen.getByTestId('they-column')
  expect(we).toBeInTheDocument()
  expect(they).toBeInTheDocument()

})
