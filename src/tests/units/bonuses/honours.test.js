const Scoring = require('../../../components/Scoring');

let score;

beforeEach(() => {
  score = new Scoring()
});

describe('Bonus for holding honours', () => {
  it('100 above for four out of five trump suit', () => {
    let honoursScore = score.scoring('We', 'Clubs', 3, 3, null, false, '4/5')
    expect(honoursScore[1]).toEqual({below: 60, above: 100 })
  });
  it('150 for all five honours or all aces in NT contract', () => {
    let honoursScore = score.scoring('We', 'Hearts', 4, 4, null, true, 'full honours')
    expect(honoursScore).toEqual(['We', {below: 120, above: 150}])
  });
});
