const scoring = (suitBid, numberBid, numberMade) => {
  if(numberBid === numberMade) {
    if(suitBid === 'NT') {
      let total = (numberBid -1)*30
      return total + 40
    } else if (suitBuid(suitBid) === 'Major') {
      return numberBid*30
    } else {
      return numberBid*20
    }
  } else {
    return 'not accounted for yet'
  }
};

const suitBuid = (suit) => {
  if(suit === 'Hearts' || suit === 'Spades') {
    return 'Major'
  } else {
    return 'Minor'
  }
}

module.exports = scoring