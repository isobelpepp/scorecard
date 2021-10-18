const scoring = (whoBid, suitBid, numberBid, numberMade) => {
  if(numberBid === numberMade) {
    if(suitBid === 'NT') {
      let total = (numberBid -1)*30
      return [whoBid, total + 40]
    } else if (suit(suitBid) === 'Major') {
      return [whoBid, numberBid*30]
    } else {
      return [whoBid, numberBid*20]
    }
  } else if (numberBid > numberMade) {
    let score = (numberBid - numberMade)*50
    if(whoBid === 'We') {
      return ['They', score]
    } else {
      return ['We', score]
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