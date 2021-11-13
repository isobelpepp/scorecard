import { render, screen } from '@testing-library/react';
import submit from './helpers/submit';
import doubled from './helpers/doubled'
import redoubled from './helpers/redoubled'
import smallHonours from './helpers/smallHonours'
import fullHonours from './helpers/fullHonours'
import bid from './helpers/bid';
import App from '../../App.js';

beforeEach(() => {
  render(<App />);
});

describe('Bonus for doubled/redoubled contracts', () => {
  test('50 above the line for doubled', () => {
    bid('we-button', 'clubs', 'three', '9')
    doubled()
    submit()
    expect(screen.getByTestId('we-above-line')).toHaveTextContent('50');
  });
  test('100 above the line for reodoubled', () => {
    bid('they-button', 'hearts', 'five', '11')
    redoubled()
    submit()
    expect(screen.getByTestId('they-above-line')).toHaveTextContent('100');
  });
});

describe('Small slam bonus', () => {
  it('scores 500 above the line for 12 tricks NOT vulnerable', () => {
    bid('we-button', 'clubs', 'six', '12')
    submit()
    expect(screen.getByTestId('we-above-line')).toHaveTextContent('500');
  });
  it('scores 750 above the line for 12 tricks VULNERABLE', () => {
    bid('they-button', 'hearts', 'five', '11')
    submit()
    bid('they-button', 'hearts', 'six', '13')
    submit()
    expect(screen.getByTestId('they-above-line')).toHaveTextContent('780');
  });
});

describe('Grand slam bonus', () => {
  it('scores 1000 above the line for 13 tricks bid and made NOT vulnerable', () => {
    bid('we-button', 'clubs', 'seven', '13')
    submit()
    expect(screen.getByTestId('we-above-line')).toHaveTextContent('1000');
  });
  it('scores 1500 above the line for 13 tricks bid and made VULNERABLE and 50 for being doubled', () => {
    bid('they-button', 'hearts', 'five', '11')
    submit()
    bid('they-button', 'hearts', 'seven', '13')
    doubled()
    submit()
    expect(screen.getByTestId('they-above-line')).toHaveTextContent('1550');
  });
});

describe('Bonus for made doubled/redoubled contracts', () => {
  it('100 above for four out of five trump suit', () => {
    bid('we-button', 'clubs', 'three', '9')
    smallHonours()
    submit()
    expect(screen.getByTestId('we-above-line')).toHaveTextContent('100')
  });
  it('150 for all five honours or all aces in NT contract', () => {
    bid('they-button', 'hearts', 'four', '10')
    fullHonours()
    submit()
    expect(screen.getByTestId('they-above-line')).toHaveTextContent('150')
  });
});
