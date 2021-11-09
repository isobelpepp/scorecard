const Scoring = require('../../../components/Scoring');

let score;

beforeEach(() => {
  score = new Scoring()
});

describe('Undoubled and DEFEATED contracts, VULNERABLE', () => {
  it('100 above the line for each undertrick', () => {
    let NTscore = score.scoring('We', 'NT', 7, 1, null, true)
    let heartsScore = score.scoring('They', 'Hearts', 6, 2, null, true)
    let spadesScore = score.scoring('They', 'Spades', 6, 3, null, true)
    let diamondsScore = score.scoring('They', 'Diamonds', 4, 2, null, true)
    let clubsScore = score.scoring('They', 'Clubs', 2, 1, null, true)
    expect(NTscore).toEqual(['They', {'below': 0, 'above': 600}])
    expect(heartsScore[1].above).toEqual(400)
    expect(spadesScore[1].above).toEqual(300)
    expect(diamondsScore[1].above).toEqual(200)
    expect(clubsScore[1].above).toEqual(100)
  });
});
