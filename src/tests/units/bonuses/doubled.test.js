const Scoring = require('../../../components/Scoring');

let score;

beforeEach(() => {
  score = new Scoring()
});

describe('Bonus for made doubled/redoubled contracts', () => {
  it('50 above the line for doubled', () => {
    let slamScore = score.scoring('We', 'Clubs', 3, 3, 'doubled')
    expect(slamScore[1]).toEqual({below: 120, above: 50 })
  });
  it('100 above the line for redoubled', () => {
    let slamScore = score.scoring('We', 'Hearts', 2, 2, 'redoubled', true)
    expect(slamScore).toEqual(['We', {below: 240, above: 100}])
  });
});
