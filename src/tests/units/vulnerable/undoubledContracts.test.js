const Scoring = require('../../../components/Scoring');

let score;

beforeEach(() => {
  score = new Scoring()
});

describe('Undoubled and DEFEATED contracts, VULNERABLE, returns 10- above the line for each undertrick', () => {
  test('NT', () => {
    let NTscore = score.scoring('We', 'NT', 7, 1, null, true)
    expect(NTscore).toEqual(['They', {'below': 0, 'above': 600}])
  });
  test('Hearts', () => {
    let heartsScore = score.scoring('They', 'Hearts', 6, 2, null, true)
    expect(heartsScore[1].above).toEqual(400)
  });
  test('Spades', () => {
    let spadesScore = score.scoring('They', 'Spades', 6, 3, null, true)
    expect(spadesScore[1].above).toEqual(300)
  });
  test('Diamonds', () => {
    let diamondsScore = score.scoring('They', 'Diamonds', 4, 2, null, true)
    expect(diamondsScore[1].above).toEqual(200)
  });
  test('Clubs', () => {
    let clubsScore = score.scoring('They', 'Clubs', 2, 1, null, true)
    expect(clubsScore[1].above).toEqual(100)
  });
});
