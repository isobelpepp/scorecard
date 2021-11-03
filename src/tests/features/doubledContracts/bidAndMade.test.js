import { screen } from '@testing-library/react';
import submit from '../helpers/submit';
import doubled from '../helpers/doubled';
import bid from '../helpers/bid';

test('Doubled bid and made NT', () => {
  bid('we-button', 'no-trumps', 'five', '11')
  doubled()
  submit()
  expect(screen.getByTestId('we-below-line')).toHaveTextContent('320');
});

test('Doubled bid and made in a major suit', () => {
  bid('they-button', 'hearts', 'three', '9')
  doubled()
  submit()
  expect(screen.getByTestId('they-below-line')).toHaveTextContent('180');
});


test('Doubled bid and made in a minor suit', () => {
  bid('we-button', 'diamonds', 'six', '12')
  doubled()
  submit()
  expect(screen.getByTestId('we-below-line')).toHaveTextContent('240');
});