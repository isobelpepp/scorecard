const scoring = require('../../../src/components/Scoring');

describe('Bid and Made', () => {
  it("returns 40 for the first NT trick and 30 for the rest", () => {
    let score = scoring('NT', 5, 5)
    expect(score).toEqual(160)
  });
  it('returns 30 for every major trick made', () => {
    let heartsScore = scoring('Hearts', 3, 3)
    let spadesScore = scoring('Spades', 6, 6)
    expect(heartsScore).toEqual(90)
    expect(spadesScore).toEqual(180)
  })
  it('returns 20 for every minor trick made', () => {
    let diamondsScore = scoring('Diamonds', 2, 2)
    let clubsScore = scoring('Clubs', 7, 7)
    expect(diamondsScore).toEqual(40)
    expect(clubsScore).toEqual(140)
  })
});