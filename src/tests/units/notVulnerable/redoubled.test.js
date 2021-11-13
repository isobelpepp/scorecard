const Scoring = require('../../../components/Scoring');

let score;

beforeEach(() => {
  score = new Scoring()
});

describe('Redoubled contracts - bid and made', () => {
  it('doubles the score for NT below the line', () => {
  let NTscore = score.scoring('We', 'NT', 5, 5, 'redoubled')
  expect(NTscore[1]).toEqual({'below': 640, 'above': 100})
  })
  it('doubles the score for Major suits below the line', () => {
    let heartsScore = score.scoring('We', 'Hearts', 3, 3, 'redoubled')
    let spadesScore = score.scoring('We', 'Spades', 7, 7, 'redoubled')
    expect(heartsScore[1]).toEqual({'below': 360, 'above': 100})
    expect(spadesScore[1]['below']).toEqual(840)
  })
  it('doubles the score for Minor suits below the line', () => {
    let diamondsScore = score.scoring('We', 'Diamonds', 2, 2, 'redoubled')
    let clubsScore = score.scoring('We', 'Clubs', 6, 6, 'redoubled')
    expect(diamondsScore[1]).toEqual({'below': 160, 'above': 100})
    expect(clubsScore[1]['below']).toEqual(480)
  })
})

describe('Redoubled contracts - underbid, NOT vulnerable', () => {
  it('doubles score for NT and adds 200 for every overtrick made', () => {
  let NTscore = score.scoring('They', 'NT', 5, 7, 'redoubled')
  expect(NTscore[1]).toEqual({'below': 640, 'above': 500})
  });
  it('doubles the score for Major suits and adds 200 for every overtrick made', () => {
    let hearts = new Scoring()
    let heartsScore = hearts.scoring('They', 'Hearts', 3, 5, 'redoubled')
    let spadesScore = score.scoring('They', 'Spades', 2, 6, 'redoubled')
    expect(heartsScore[1]).toEqual({'below': 360, 'above': 500})
    expect(spadesScore[1]['above']).toEqual(900)
  });
  it('doubles the score for Minor suits and adds 200 above for every overtrick', () => {
    let diamonds = new Scoring()
    let diamondsScore = diamonds.scoring('They', 'Diamonds', 2, 3, 'redoubled')
    let clubsScore = score.scoring('They', 'Clubs', 4, 7, 'redoubled')
    expect(diamondsScore[1]).toEqual({'below': 160, 'above': 300})
    expect(clubsScore[1]['above']).toEqual(700)
  });
});

describe('Redoubled and DEFEATED contracts, not vulnerable', () => {
  it('200 for 1st trick, 400 for 2nd and 3rd and 600 for every other trick lost', () => {
    let NTscore = score.scoring('We', 'NT', 7, 1, 'redoubled')
    let hearts = new Scoring()
    let heartsScore = hearts.scoring('They', 'Hearts', 6, 2, 'redoubled')
    let spades = new Scoring()
    let spadesScore = spades.scoring('They', 'Spades', 6, 3, 'redoubled')
    let diamonds = new Scoring()
    let diamondsScore = diamonds.scoring('They', 'Diamonds', 4, 2, 'redoubled')
    let clubs = new Scoring()
    let clubsScore = clubs.scoring('They', 'Clubs', 2, 1, 'redoubled')
    expect(NTscore).toEqual(['They', {'below': 0, 'above': 2800}])
    expect(heartsScore).toEqual(['We', {'below': 0, 'above': 1600}])
    expect(spadesScore[1].above).toEqual(1000)
    expect(diamondsScore[1].above).toEqual(600)
    expect(clubsScore[1].above).toEqual(200)
  });
});
