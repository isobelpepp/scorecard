const scoring = (whoBid, suitBid, numberBid, numberMade, doubled) => {
  if(numberBid === numberMade) {
    return bidAndMade(whoBid, suitBid, numberBid, doubled)
  } else if (numberBid > numberMade) {
    return overbid(whoBid, numberBid, numberMade)
  } else {
    return underbid(whoBid, suitBid, numberBid, numberMade)
  }
  }

const suit = (suit) => {
  if(suit === 'Hearts' || suit === 'Spades') {
    return 'Major'
  } else {
    return 'Minor'
  }
}

 const bidAndMade = (whoBid, chosenSuit, bid, doubled) => {
  if(chosenSuit === 'NT') {
    if(doubled){
      let total = ((bid - 1)*60) + 80
      return [whoBid, {'below': total, 'above': null}]
    } else {
      let total = ((bid - 1)*30) + 40
      return [whoBid, {'below': total, 'above': null}]
    }
  } else if (suit(chosenSuit) === 'Major') {
    if(doubled) {
      return [whoBid, {'below': bid*60, 'above': null}]
    } else {
      return [whoBid, {'below': bid*30, 'above': null}]
    }
  } else {
    if(doubled) {
      return [whoBid, {'below': bid*40, 'above': null}]
    } else {
      return [whoBid, {'below': bid*20, 'above': null}]
    }
  }
 }

 const overbid = (whoBid, bid, made) => {
  let score = (bid - made)*50
  if(whoBid === 'We') {
    return ['They', {'below': null, above: score}]
  } else {
    return ['We', {'below': null, above: score}]
  }
 }

 const underbid = (whoBid, suitBid, bid, made) => {
  if (suit(suitBid) === 'Major') {
    let majorAbove = (made- bid)*30
    let majorBelow = bid*30
    return [whoBid, {'below': majorBelow, 'above': majorAbove}]
  } else if (suitBid === 'NT') {
    let belowScore = ((bid - 1)*30) + 40
    let aboveScore = (made- bid)*30
    return [whoBid, {'below': belowScore, 'above': aboveScore}]
  } else {
    let minorAbove = (made- bid)*20
    let minorBelow = bid*20
    return [whoBid, {'below': minorBelow, 'above': minorAbove}]
  }
 }

module.exports = scoring
