const Scoring = require('../../../components/Scoring');

let score;

beforeEach(() => {
  score = new Scoring()
});

describe('Redoubled contracts - underbid, VULNERABLE', () => {
  it('doubles score for NT and adds 400 for every overtrick made', () => {
  let NTscore = score.scoring('They', 'NT', 5, 7, 'redoubled', true)
  expect(NTscore[1]).toEqual({'below': 640, 'above': 900})
  });
  it('doubles the score for Major suits and adds 400 for every overtrick made', () => {
    let heartsScore = score.scoring('They', 'Hearts', 3, 5, 'redoubled', true)
    let spades = new Scoring()
    let spadesScore = spades.scoring('They', 'Spades', 2, 6, 'redoubled', true)
    expect(heartsScore[1]).toEqual({'below': 360, 'above': 900})
    expect(spadesScore[1]).toEqual({'below': 240, 'above': 1700})
  });
  it('doubles the score for Minor suits and adds 400 above for every overtrick', () => {
    let diamondsScore = score.scoring('They', 'Diamonds', 2, 3, 'redoubled', true)
    let clubs = new Scoring()
    let clubsScore = clubs.scoring('They', 'Clubs', 4, 7, 'redoubled', true)
    expect(diamondsScore[1]).toEqual({'below': 160, 'above': 500})
    expect(clubsScore[1]).toEqual({'below': 320, 'above': 1300})
  });
});

describe('Redoubled and DEFEATED contracts, VULNERABLE', () => {
  it('400 for 1st trick, 600 for every trick after that', () => {
    let NTscore = score.scoring('We', 'NT', 7, 1, 'redoubled', true)
    let hearts = new Scoring()
    let heartsScore = hearts.scoring('They', 'Hearts', 6, 2, 'redoubled', true)
    let spades = new Scoring()
    let spadesScore = spades.scoring('They', 'Spades', 6, 3, 'redoubled', true)
    let diamonds = new Scoring()
    let diamondsScore = diamonds.scoring('They', 'Diamonds', 4, 2, 'redoubled', true)
    let clubs = new Scoring()
    let clubsScore = clubs.scoring('They', 'Clubs', 2, 1, 'redoubled', true)
    expect(NTscore).toEqual(['They', {'below': 0, 'above': 3400}])
    expect(heartsScore[1].above).toEqual(2200)
    expect(spadesScore[1].above).toEqual(1600)
    expect(diamondsScore[1].above).toEqual(1000)
    expect(clubsScore[1].above).toEqual(400)
  });
});
