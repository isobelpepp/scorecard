const scoring = require('../../../src/components/Scoring');

describe('Bid and Made', () => {
  it("returns 40 for the first NT trick and 30 for the rest", () => {
    let score = scoring('We', 'NT', 5, 5)
    expect(score[1]['below']).toEqual(160)
  });
  it('returns 30 for every major trick made', () => {
    let heartsScore = scoring('They', 'Hearts', 3, 3)
    let spadesScore = scoring('They', 'Spades', 6, 6)
    expect(heartsScore[1]['below']).toEqual(90)
    expect(spadesScore[1]['below']).toEqual(180)
  })
  it('returns 20 for every minor trick made', () => {
    let diamondsScore = scoring('We', 'Diamonds', 2, 2)
    let clubsScore = scoring('We', 'Clubs', 7, 7)
    expect(diamondsScore[1]['below']).toEqual(40)
    expect(clubsScore[1]['below']).toEqual(140)
  });
});

describe('Defeated contract', () => {
  it('returns 50 for the other pair for every undertrick', () => {
    let firstScore = scoring('We', 'NT', 5, 4)
    let secondScore = scoring('They', 'Hearts', 7, 3)
    expect(firstScore).toEqual(['They', {'below': null, 'above': 50}])
    expect(secondScore).toEqual(['We', {'below': null, 'above': 200}])
  });
});

describe('Underbid in NT and Major suits', () => {
  it('returns 30 above the line for each extra trick made in NT and Major suits', () => {
    let NT = scoring('We', 'NT', 4, 7)
    let hearts = scoring('They', 'Hearts', 5, 7)
    let spades = scoring('They', 'Spades', 1, 3)
    expect(NT).toEqual(['We', {below: 130, above: 90}])
    expect(hearts).toEqual(['They', {below: 150, above: 60}])
    expect(spades).toEqual(['They', {below: 30, above: 60}])
  });
});

describe('Underbid in Minor suits', () => {
  it('returns 30 above the line for each extra trick made in NT and Major suits', () => {
    let diamonds = scoring('We', 'diamonds', 5, 7)
    let clubs = scoring('They', 'clubs', 1, 6)
    expect(diamonds).toEqual(['We', {below: 100, above: 40}])
    expect(clubs).toEqual(['They', {below: 20, above: 100}])
  });
});