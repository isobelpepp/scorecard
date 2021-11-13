const Scoring = require('../../../components/Scoring');

let score;

beforeEach(() => {
  score = new Scoring()
  score.isDoubled()
});

describe('Doubled contracts - bid and made', () => {
  it('doubles the score for NT below the line', () => {
  let NTscore = score.scoring('We', 'NT', 5, 5)
  expect(NTscore[1]).toEqual({'below': 320, 'above': 50})
  });
  it('doubles the score for Major suits below the line', () => {
    let heartsScore = score.scoring('We', 'Hearts', 3, 3)
    let spadesScore = score.scoring('We', 'Spades', 7, 7)
    expect(heartsScore[1]).toEqual({'below': 180, 'above': 50})
    expect(spadesScore[1]['below']).toEqual(420)
  });
  it('doubles the score for Minor suits below the line', () => {
    let diamondsScore = score.scoring('We', 'Diamonds', 2, 2)
    let clubsScore = score.scoring('We', 'Clubs', 6, 6)
    expect(diamondsScore[1]).toEqual({'below': 80, 'above': 50})
    expect(clubsScore[1]['below']).toEqual(240)
  });
});

describe('Doubled contracts - underbid, not vulnerable', () => {
  it('doubles score for NT and adds 100 for every overtrick made', () => {
  let NTscore = score.scoring('They', 'NT', 5, 7)
  expect(NTscore[1]).toEqual({'below': 320, 'above': 250})
  });
  it('doubles the score for Major suits and adds 100 for every overtrick made', () => {
    let heartsScore = score.scoring('They', 'Hearts', 3, 5)
    let spades = new Scoring()
    spades.isDoubled()
    let spadesScore = spades.scoring('They', 'Spades', 2, 6)
    expect(heartsScore[1]).toEqual({'below': 180, 'above': 250})
    expect(spadesScore[1]['above']).toEqual(450)
  });
  it('doubles the score for Minor suits and adds 100 above for every overtrick', () => {
    let diamondsScore = score.scoring('They', 'Diamonds', 2, 3)
    let clubs = new Scoring()
    clubs.isDoubled()
    let clubsScore = clubs.scoring('They', 'Clubs', 5, 6)
    expect(diamondsScore[1]).toEqual({'below': 80, 'above': 150})
    expect(clubsScore[1]['above']).toEqual(150)
  });
});

describe('Doubled and DEFEATED contracts, not vulnerable - 100 for 1st trick, 200 for 2nd and 3rd and 300 for every other trick lost', () => {
  test('NT', () => {
    let NTscore = score.scoring('We', 'NT', 7, 1)
    expect(NTscore).toEqual(['They', {'below': 0, 'above': 1400}])
  });
  test('Hearts', () => {
    let heartsScore = score.scoring('They', 'Hearts', 6, 2)
    expect(heartsScore).toEqual(['We', {'below': 0, 'above': 800}])
  });
  test('Spades', () => {
    let spadesScore = score.scoring('They', 'Spades', 6, 3)
    expect(spadesScore[1].above).toEqual(500)
  });
  test('Diamonds', () => {
    let diamondsScore = score.scoring('They', 'Diamonds', 4, 2)
    expect(diamondsScore[1].above).toEqual(300)
  });
  test('Clubs', () => {
    let clubsScore = score.scoring('They', 'Clubs', 2, 1)
    expect(clubsScore[1].above).toEqual(100)
  })
});
