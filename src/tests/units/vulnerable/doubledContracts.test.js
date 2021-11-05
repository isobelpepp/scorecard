const scoring = require('../../../../src/components/Scoring');

describe('Doubled contracts - underbid, VULNERABLE', () => {
  it('doubles score for NT and adds 200 for every overtrick made', () => {
  let score = scoring('They', 'NT', 5, 7, 'doubled', true)
  expect(score[1]).toEqual({'below': 320, 'above': 400})
  });
  it('doubles the score for Major suits and adds 200 for every overtrick made', () => {
    let heartsScore = scoring('They', 'Hearts', 3, 5, 'doubled', true)
    let spadesScore = scoring('They', 'Spades', 2, 6, 'doubled', true)
    expect(heartsScore[1]).toEqual({'below': 180, 'above': 400})
    expect(spadesScore[1]).toEqual({'below': 120, 'above': 800})
  });
  it('doubles the score for Minor suits and adds 200 above for every overtrick', () => {
    let diamondsScore = scoring('They', 'Diamonds', 2, 3, 'doubled', true)
    let clubsScore = scoring('They', 'Clubs', 1, 7, 'doubled', true)
    expect(diamondsScore[1]).toEqual({'below': 80, 'above': 200})
    expect(clubsScore[1]).toEqual({'below': 40, 'above': 1200})
  });
});

describe('Doubled and DEFEATED contracts, VULNERABLE', () => {
  it('200 for 1st trick, 300 for every trick after that', () => {
    let score = scoring('We', 'NT', 7, 1, 'doubled', true)
    let heartsScore = scoring('They', 'Hearts', 6, 2, 'doubled', true)
    let spadesScore = scoring('They', 'Spades', 6, 3, 'doubled', true)
    let diamondsScore = scoring('They', 'Diamonds', 4, 2, 'doubled', true)
    let clubsScore = scoring('They', 'Clubs', 2, 1, 'doubled', true)
    expect(score).toEqual(['They', {'below': null, 'above': 1700}])
    expect(heartsScore[1].above).toEqual(1100)
    expect(spadesScore[1].above).toEqual(800)
    expect(diamondsScore[1].above).toEqual(500)
    expect(clubsScore[1].above).toEqual(200)
  });
});
