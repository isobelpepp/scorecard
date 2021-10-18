const scoring = require('../../../src/components/Scoring');

describe('Bid and Made', () => {
  it("returns 40 for the first NT trick and 30 for the rest", () => {
    let score = scoring('We', 'NT', 5, 5)
    expect(score[1]).toEqual(160)
  });
  it('returns 30 for every major trick made', () => {
    let heartsScore = scoring('They', 'Hearts', 3, 3)
    let spadesScore = scoring('They', 'Spades', 6, 6)
    expect(heartsScore[1]).toEqual(90)
    expect(spadesScore[1]).toEqual(180)
  })
  it('returns 20 for every minor trick made', () => {
    let diamondsScore = scoring('We', 'Diamonds', 2, 2)
    let clubsScore = scoring('We', 'Clubs', 7, 7)
    expect(diamondsScore[1]).toEqual(40)
    expect(clubsScore[1]).toEqual(140)
  })
});

describe('Underbid', () => {
  it('returns 50 for the other pair for every undertrick', () => {
    let firstScore = scoring('We', 'NT', 5, 4)
    let secondScore = scoring('They', 'Hearts', 7, 3)
    expect(firstScore).toEqual(['They', 50])
    expect(secondScore).toEqual(['We', 200])
  })
})