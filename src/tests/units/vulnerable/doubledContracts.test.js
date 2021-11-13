const Scoring = require('../../../components/Scoring');

let score;

beforeEach(() => {
  score = new Scoring()
  score.isDoubled()
  score.isVulnerable()
});

describe('Doubled contracts - underbid, VULNERABLE', () => {
  it('doubles score for NT and adds 200 for every overtrick made', () => {
  let NTscore = score.scoring('They', 'NT', 5, 7)
  expect(NTscore[1]).toEqual({'below': 320, 'above': 450})
  });
  it('doubles the score for Major suits and adds 200 for every overtrick made', () => {
    let heartsScore = score.scoring('They', 'Hearts', 3, 5)
    let spades = new Scoring()
    spades.isDoubled()
    spades.isVulnerable()
    let spadesScore = spades.scoring('They', 'Spades', 2, 6)
    expect(heartsScore[1]).toEqual({'below': 180, 'above': 450})
    expect(spadesScore[1]).toEqual({'below': 120, 'above': 850})
  });
  it('doubles the score for Minor suits and adds 200 above for every overtrick', () => {
    let diamondsScore = score.scoring('They', 'Diamonds', 2, 3)
    let clubs = new Scoring()
    clubs.isDoubled()
    clubs.isVulnerable()
    let clubsScore = clubs.scoring('They', 'Clubs', 1, 7)
    expect(diamondsScore[1]).toEqual({'below': 80, 'above': 250})
    expect(clubsScore[1]).toEqual({'below': 40, 'above': 1250})
  });
});

describe('Doubled and DEFEATED contracts, VULNERABLE - 200 for 1st trick, 300 for every trick after that', () => {
  test('NT', () => {
    let NTscore = score.scoring('We', 'NT', 7, 1)
    expect(NTscore).toEqual(['They', {'below': 0, 'above': 1700}])
  });
  test('Hearts', () => {
    let heartsScore = score.scoring('They', 'Hearts', 6, 2)
    expect(heartsScore).toEqual(['We', {'below': 0, 'above': 1100}])
  });
  test('Spades', () => {
    let spadesScore = score.scoring('They', 'Spades', 6, 3)
    expect(spadesScore[1].above).toEqual(800)
  });
  test('Diamonds', () => {
    let diamondsScore = score.scoring('They', 'Diamonds', 4, 2)
    expect(diamondsScore[1].above).toEqual(500)
  });
  test('Clubs', () => {
    let clubsScore = score.scoring('They', 'Clubs', 2, 1)
    expect(clubsScore[1].above).toEqual(200)
  })
});
