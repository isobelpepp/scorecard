import { render, screen } from '@testing-library/react';
import submit from '../helpers/submit';
import doubled from '../helpers/doubled'
import bid from '../helpers/bid';
import App from '../../../App.js';

beforeEach(() => {
  render(<App />);
});

test('Doubled and defeated, not vulnerable in NT', () => {
  bid('we-button', 'no-trumps', 'three', '3')
  doubled()
  submit()
  expect(screen.getByTestId('they-above-line')).toHaveTextContent('1400');
});

test('Doubled and defeated, not vulnerable in a major suit', () => {
  bid('they-button', 'spades', 'five', '7')
  doubled()
  submit()
  expect(screen.getByTestId('we-above-line')).toHaveTextContent('800');
});

test('Doubled and defeated, not vulnerable in a minor suit', () => {
  bid('we-button', 'clubs', 'two', '7')
  doubled()
  submit()
  expect(screen.getByTestId('they-above-line')).toHaveTextContent('100');
});

describe('Doubled, defeated and VULNERABLE - 200 points for first undertrick, 300 for the rest', () => {
  it('Gives THEY points for defeated WE contract in NT', () => {
    bid('we-button', 'hearts', 'five', '11')
    submit()
    bid('we-button', 'no-trumps', 'three', '3')
    doubled()
    submit()
    expect(screen.getByTestId('they-above-line')).toHaveTextContent('1700');
  });
  it('Gives WW points for defeated THEY contract in a major suit', () => {
    bid('they-button', 'hearts', 'five', '11')
    submit()
    bid('they-button', 'spades', 'five', '7')
    doubled()
    submit()
    expect(screen.getByTestId('we-above-line')).toHaveTextContent('1100');
  });
  it('Gives THEY points for defeated WE contract in a Minor suit', () => {
    bid('we-button', 'hearts', 'five', '11')
    submit()
    bid('we-button', 'clubs', 'two', '7')
    doubled()
    submit()
    expect(screen.getByTestId('they-above-line')).toHaveTextContent('200');
  });
});
