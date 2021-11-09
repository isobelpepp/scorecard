const Scoring = require('../../../components/Scoring');

let score;

beforeEach(() => {
  score = new Scoring()
});

describe('Small slam', () => {
  it('scores 500 above the line for 12 tricks NOT vulnerable', () => {
    let slamScore = score.scoring('We', 'Clubs', 6, 6)
    expect(slamScore[1]).toEqual({below: 120, above: 500})
  });
  it('scores 750 above the line for 12 tricks VULNERABLE', () => {
    let slamScore = score.scoring('We', 'Hearts', 6, 7, null, true)
    expect(slamScore).toEqual(['We', {below: 180, above: 780}])
  });
});

describe('Grand slam', () => {
  it('scores 1000 above the line for 13 tricks bid and made NOT vulnerable', () => {
    let slamScore = score.scoring('We', 'Clubs', 7, 7)
    expect(slamScore[1]).toEqual({below: 140, above: 1000})
  });
  it('scores 1500 above the line for 13 tricks bid and made VULNERABLE and 50 for being doubled', () => {
    let slamScore = score.scoring('We', 'Hearts', 7, 7, 'doubled', true)
    expect(slamScore).toEqual(['We', {below: 420, above: 1550}])
  });
});
