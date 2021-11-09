const Scoring = require('../../../components/Scoring');

let score;

beforeEach(() => {
  score = new Scoring()
});

describe('Bid and Made', () => {
  it("returns 40 for the first NT trick and 30 for the rest", () => {
    let NTscore = score.scoring('We', 'NT', 5, 5)
    expect(NTscore).toEqual(['We', {below: 160, above: 0}])
  });
  it('returns 30 for every major trick made', () => {
    let heartsScore = score.scoring('They', 'Hearts', 3, 3)
    let spadesScore = score.scoring('They', 'Spades', 6, 6)
    expect(heartsScore).toEqual(['They', {below: 90, above: 0}])
    expect(spadesScore[1]['below']).toEqual(180)
  })
  it('returns 20 for every minor trick made', () => {
    let diamondsScore = score.scoring('We', 'Diamonds', 2, 2)
    let clubsScore = score.scoring('We', 'Clubs', 7, 7)
    expect(diamondsScore[1]['below']).toEqual(40)
    expect(clubsScore[1]['below']).toEqual(140)
  });
});

describe('Overtricks', () => {
  it('returns 30 above the line for each extra trick made in NT and Major suits', () => {
    let NT = score.scoring('We', 'NT', 4, 7)
    let hearts = score.scoring('They', 'Hearts', 5, 7)
    let spades = score.scoring('They', 'Spades', 1, 3)
    expect(NT).toEqual(['We', {below: 130, above: 90}])
    expect(hearts).toEqual(['They', {below: 150, above: 60}])
    expect(spades).toEqual(['They', {below: 30, above: 60}])
  });
  it('returns 30 above the line for each extra trick made in NT and Major suits', () => {
    let diamonds = score.scoring('We', 'diamonds', 5, 7)
    let clubs = score.scoring('They', 'clubs', 1, 6)
    expect(diamonds).toEqual(['We', {below: 100, above: 40}])
    expect(clubs).toEqual(['They', {below: 20, above: 100}])
  });  
});

describe('Defeated contract', () => {
  it('returns 50 above the line for the other pair for every undertrick', () => {
    let firstScore = score.scoring('We', 'NT', 5, 4)
    let secondScore = score.scoring('They', 'Hearts', 7, 3)
    expect(firstScore).toEqual(['They', {'below': 0, 'above': 50}])
    expect(secondScore).toEqual(['We', {'below': 0, 'above': 200}])
  });
});
