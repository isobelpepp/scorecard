import { render, screen } from '@testing-library/react';
import App from '../../App.js';

beforeEach(() => {
  render(<App />);
});

test('Has the title on the homepage', () => {
  const title = screen.getByText('Bridge Scorecard');
  expect(title).toBeInTheDocument();
});

test('Can click button to take you to a fresh scorecard', () => {
  const we = screen.getByTestId('we-column')
  const they = screen.getByTestId('they-column')
  expect(we).toBeInTheDocument()
  expect(they).toBeInTheDocument()
});
