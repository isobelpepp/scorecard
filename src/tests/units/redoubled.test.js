const scoring = require('../../../src/components/Scoring');

describe('Redoubled contracts - bid and made', () => {
  it('doubles the score for NT below the line', () => {
  let score = scoring('We', 'NT', 5, 5, 'redoubled')
  expect(score[1]).toEqual({'below': 640, 'above': null})
  })
  it('doubles the score for Major suits below the line', () => {
    let heartsScore = scoring('We', 'Hearts', 3, 3, 'redoubled')
    let spadesScore = scoring('We', 'Spades', 7, 7, 'redoubled')
    expect(heartsScore[1]).toEqual({'below': 360, 'above': null})
    expect(spadesScore[1]).toEqual({'below': 840, 'above': null})
  })
  it('doubles the score for Minor suits below the line', () => {
    let diamondsScore = scoring('We', 'Diamonds', 2, 2, 'redoubled')
    let clubsScore = scoring('We', 'Clubs', 6, 6, 'redoubled')
    expect(diamondsScore[1]).toEqual({'below': 160, 'above': null})
    expect(clubsScore[1]).toEqual({'below': 480, 'above': null})
  })
})

describe('Redoubled contracts - underbid, NOT vulnerable', () => {
  it('doubles score for NT and adds 100 for every overtrick made', () => {
  let score = scoring('They', 'NT', 5, 7, 'redoubled')
  expect(score[1]).toEqual({'below': 320, 'above': 400})
  })
  it('doubles the score for Major suits and adds 100 for every overtrick made', () => {
    let heartsScore = scoring('They', 'Hearts', 3, 5, 'redoubled')
    let spadesScore = scoring('They', 'Spades', 2, 6, 'redoubled')
    expect(heartsScore[1]).toEqual({'below': 180, 'above': 400})
    expect(spadesScore[1]).toEqual({'below': 120, 'above': 800})
  })
  it('doubles the score for Minor suits and adds 100 above for every overtrick', () => {
    let diamondsScore = scoring('They', 'Diamonds', 2, 3, 'redoubled')
    let clubsScore = scoring('They', 'Clubs', 4, 7, 'redoubled')
    expect(diamondsScore[1]).toEqual({'below': 80, 'above': 200})
    expect(clubsScore[1]).toEqual({'below': 160, 'above': 600})
  })
})

// describe('Doubled and DEFEATED contracts, not vulnerable', () => {
//   it('100 for 1st trick, 200 for 2nd and 3rd and 300 for every other trick lost', () => {
//     let score = scoring('We', 'NT', 7, 1, true, true)
//     let heartsScore = scoring('They', 'Hearts', 6, 2, true, true)
//     let spadesScore = scoring('They', 'Spades', 6, 3, true, true)
//     let diamondsScore = scoring('They', 'Diamonds', 4, 2, true, true)
//     let clubsScore = scoring('They', 'Clubs', 2, 1, true, true)
//     expect(score).toEqual(['They', {'below': null, 'above': 1400}])
//     expect(heartsScore).toEqual(['We', {'below': null, 'above': 800}])
//     expect(spadesScore[1].above).toEqual(500)
//     expect(diamondsScore[1].above).toEqual(300)
//     expect(clubsScore[1].above).toEqual(100)
//   })
// })