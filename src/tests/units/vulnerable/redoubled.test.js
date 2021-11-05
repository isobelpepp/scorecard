const scoring = require('../../../../src/components/Scoring');

describe('Redoubled contracts - underbid, VULNERABLE', () => {
  it('doubles score for NT and adds 400 for every overtrick made', () => {
  let score = scoring('They', 'NT', 5, 7, 'redoubled', true)
  expect(score[1]).toEqual({'below': 640, 'above': 800})
  });
  it('doubles the score for Major suits and adds 400 for every overtrick made', () => {
    let heartsScore = scoring('They', 'Hearts', 3, 5, 'redoubled', true)
    let spadesScore = scoring('They', 'Spades', 2, 6, 'redoubled', true)
    expect(heartsScore[1]).toEqual({'below': 360, 'above': 800})
    expect(spadesScore[1]).toEqual({'below': 240, 'above': 1600})
  });
  it('doubles the score for Minor suits and adds 400 above for every overtrick', () => {
    let diamondsScore = scoring('They', 'Diamonds', 2, 3, 'redoubled', true)
    let clubsScore = scoring('They', 'Clubs', 4, 7, 'redoubled', true)
    expect(diamondsScore[1]).toEqual({'below': 160, 'above': 400})
    expect(clubsScore[1]).toEqual({'below': 320, 'above': 1200})
  });
});

describe('Reoubled and DEFEATED contracts, VULNERABLE', () => {
  it('400 for 1st trick, 600 for every trick after that', () => {
    let score = scoring('We', 'NT', 7, 1, 'redoubled', true)
    let heartsScore = scoring('They', 'Hearts', 6, 2, 'redoubled', true)
    let spadesScore = scoring('They', 'Spades', 6, 3, 'redoubled', true)
    let diamondsScore = scoring('They', 'Diamonds', 4, 2, 'redoubled', true)
    let clubsScore = scoring('They', 'Clubs', 2, 1, 'redoubled', true)
    expect(score).toEqual(['They', {'below': null, 'above': 3400}])
    expect(heartsScore[1].above).toEqual(2200)
    expect(spadesScore[1].above).toEqual(1600)
    expect(diamondsScore[1].above).toEqual(1000)
    expect(clubsScore[1].above).toEqual(400)
  });
});
