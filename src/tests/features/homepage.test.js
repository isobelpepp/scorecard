import { render, screen } from '@testing-library/react';
import App from '../../App.js';

test('Has the title on the homepage', () => {
  render(<App />);
  const title = screen.getByText('Bridge Scorecard');
  expect(title).toBeInTheDocument();
});
