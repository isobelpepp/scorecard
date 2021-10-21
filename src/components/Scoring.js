const scoring = (whoBid, suitBid, numberBid, numberMade) => {
  if(numberBid === numberMade) {
    if(suitBid === 'NT') {
      let total = (numberBid -1)*30
      return [whoBid, {'below': total + 40, 'above': null}]
    } else if (suit(suitBid) === 'Major') {
      return [whoBid, {'below': numberBid*30, 'above': null}]
    } else {
      return [whoBid, {'below': numberBid*20, 'above': null}]
    }
  } else if (numberBid > numberMade) {
    let score = (numberBid - numberMade)*50
    if(whoBid === 'We') {
      return ['They', {'below': null, above: score}]
    } else {
      return ['We', {'below': null, above: score}]
    }
  } else if (numberBid < numberMade) {
    if(suitBid === 'NT') {
      let belowScore = ((numberBid - 1)*30) + 40
      let aboveScore = (numberMade - numberBid)*30
      return [whoBid, {'below': belowScore, 'above': aboveScore}]
    } else if (suit(suitBid) === 'Major') {
      let majorAbove = (numberMade - numberBid)*30
      let majorBelow = numberBid*30
      return [whoBid, {'below': majorBelow, 'above': majorAbove}]
    } else {
      let minorAbove = (numberMade - numberBid)*20
      let minorBelow = numberBid*20
      return [whoBid, {'below': minorBelow, 'above': minorAbove}]
    }
  } else {
    return 'not accounted for yet'
  }
};


const suit = (suit) => {
  if(suit === 'Hearts' || suit === 'Spades') {
    return 'Major'
  } else {
    return 'Minor'
  }
}

module.exports = scoring