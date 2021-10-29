const scoring = require('../../../src/components/Scoring');

describe('Doubled contracts - bid and made', () => {
  it('doubles the score for NT below the line', () => {
  let score = scoring('We', 'NT', 5, 5, true)
  expect(score[1]).toEqual({'below': 320, 'above': null})
  })
  it('doubles the score for Major suits below the line', () => {
    let heartsScore = scoring('We', 'Hearts', 3, 3, true)
    let spadesScore = scoring('We', 'Spades', 7, 7, true)
    expect(heartsScore[1]).toEqual({'below': 180, 'above': null})
    expect(spadesScore[1]).toEqual({'below': 420, 'above': null})
  })
  it('doubles the score for Minor suits below the line', () => {
    let diamondsScore = scoring('We', 'Diamonds', 2, 2, true)
    let clubsScore = scoring('We', 'Clubs', 6, 6, true)
    expect(diamondsScore[1]).toEqual({'below': 80, 'above': null})
    expect(clubsScore[1]).toEqual({'below': 240, 'above': null})
  })
})