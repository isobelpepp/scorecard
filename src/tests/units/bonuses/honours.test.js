const Scoring = require('../../../components/Scoring');

let score;

beforeEach(() => {
  score = new Scoring()
});

describe('Bonus for holding honours', () => {
  it('100 above for four out of five trump suit', () => {
    score.honours('4/5')
    let honoursScore = score.scoring('We', 'Clubs', 3, 3)
    expect(honoursScore[1]).toEqual({below: 60, above: 100 })
  });
  it('150 for all five honours or all aces in NT contract', () => {
    score.honours('full honours')
    let honoursScore = score.scoring('We', 'Hearts', 4, 4)
    expect(honoursScore).toEqual(['We', {below: 120, above: 150}])
  });
});
