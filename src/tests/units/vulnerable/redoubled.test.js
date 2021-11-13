const Scoring = require('../../../components/Scoring');

let score;

beforeEach(() => {
  score = new Scoring()
  score.isRedoubled()
  score.isVulnerable()
});

describe('Redoubled contracts - underbid, VULNERABLE', () => {
  it('doubles score for NT and adds 400 for every overtrick made', () => {
  let NTscore = score.scoring('They', 'NT', 5, 7)
  expect(NTscore[1]).toEqual({'below': 640, 'above': 900})
  });
  it('doubles the score for Major suits and adds 400 for every overtrick made', () => {
    let heartsScore = score.scoring('They', 'Hearts', 3, 5)
    let spades = new Scoring()
    spades.isRedoubled()
    spades.isVulnerable()
    let spadesScore = spades.scoring('They', 'Spades', 2, 6)
    expect(heartsScore[1]).toEqual({'below': 360, 'above': 900})
    expect(spadesScore[1]).toEqual({'below': 240, 'above': 1700})
  });
  it('doubles the score for Minor suits and adds 400 above for every overtrick', () => {
    let diamondsScore = score.scoring('They', 'Diamonds', 2, 3)
    let clubs = new Scoring()
    clubs.isRedoubled()
    clubs.isVulnerable()
    let clubsScore = clubs.scoring('They', 'Clubs', 4, 7)
    expect(diamondsScore[1]).toEqual({'below': 160, 'above': 500})
    expect(clubsScore[1]).toEqual({'below': 320, 'above': 1300})
  });
});

describe('Redoubled and DEFEATED contracts, VULNERABLE - 400 for 1st trick, 600 for every trick after that', () => {
  test('NT', () => {
    let NTscore = score.scoring('We', 'NT', 7, 1)
    expect(NTscore).toEqual(['They', {'below': 0, 'above': 3400}])
  });
  test('Hearts', () => {
    let heartsScore = score.scoring('They', 'Hearts', 6, 2)
    expect(heartsScore).toEqual(['We', {'below': 0, 'above': 2200}])
  });
  test('Spades', () => {
    let spadesScore = score.scoring('They', 'Spades', 6, 3)
    expect(spadesScore[1].above).toEqual(1600)
  });
  test('Diamonds', () => {
    let diamondsScore = score.scoring('They', 'Diamonds', 4, 2)
    expect(diamondsScore[1].above).toEqual(1000)
  });
  test('Clubs', () => {
    let clubsScore = score.scoring('They', 'Clubs', 2, 1)
    expect(clubsScore[1].above).toEqual(400)
  })
});
