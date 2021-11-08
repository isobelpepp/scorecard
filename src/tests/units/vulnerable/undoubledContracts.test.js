const scoring = require('../../../../src/components/Scoring');

describe('Undoubled and DEFEATED contracts, VULNERABLE', () => {
  it('100 above the line for each undertrick', () => {
    let score = scoring('We', 'NT', 7, 1, null, true)
    let heartsScore = scoring('They', 'Hearts', 6, 2, null, true)
    let spadesScore = scoring('They', 'Spades', 6, 3, null, true)
    let diamondsScore = scoring('They', 'Diamonds', 4, 2, null, true)
    let clubsScore = scoring('They', 'Clubs', 2, 1, null, true)
    expect(score).toEqual(['They', {'below': null, 'above': 600}])
    expect(heartsScore[1].above).toEqual(400)
    expect(spadesScore[1].above).toEqual(300)
    expect(diamondsScore[1].above).toEqual(200)
    expect(clubsScore[1].above).toEqual(100)
  });
});
