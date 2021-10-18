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
      return ['They', {'below': score, above: null}]
    } else {
      return ['We', {'below': score, above: null}]
    }
  } else if (numberBid < numberMade) {
    if(suitBid === 'NT') {
      let aboveScore = ((numberBid - 1)*30) + 40
      let belowScore = (numberMade - numberBid)*30
      return [whoBid, {'below': belowScore, 'above': aboveScore}]
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