const scoring = require('../../../src/components/Scoring');

describe('Bid and Made', () => {
  it("returns 40 for the first NT trick and 30 for the rest", () => {
    let score = scoring('NT', 5, 9)
    expect(score).toEqual(160)
  });
});