const scoring = (whoBid, suitBid, numberBid, numberMade, doubled) => {
  if(numberBid === numberMade) {
    return bidAndMade(whoBid, suitBid, numberBid, doubled)
  } else if (numberBid > numberMade) {
    return overbid(whoBid, numberBid, numberMade, doubled)
  } else {
    return underbid(whoBid, suitBid, numberBid, numberMade, doubled)
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
  if(doubled) {
    return doubledBidAndMade(whoBid, chosenSuit, bid)
  } else if(chosenSuit === 'NT') {
    let total = ((bid - 1)*30) + 40
    return [whoBid, {'below': total, 'above': null}]
  } else if (suit(chosenSuit) === 'Major') {
    return [whoBid, {'below': bid*30, 'above': null}]
  } else {
    return [whoBid, {'below': bid*20, 'above': null}]
  }
 }

 const doubledBidAndMade = (whoBid, chosenSuit, bid) => {
  if(chosenSuit === 'NT') {
    let total = ((bid - 1)*60) + 80
    return [whoBid, {'below': total, 'above': null}]
    return true
  } else if (suit(chosenSuit) === 'Major') {
      return [whoBid, {'below': bid*60, 'above': null}]
  } else {
    return [whoBid, {'below': bid*40, 'above': null}]
  }
}

const overbid = (whoBid, bid, made, doubled) => {
  let score = (bid - made)*50
  if(doubled) {
    return defeatedContractDoubled(whoBid, bid, made)
  } else if (whoBid === 'We') {
    return ['They', {'below': null, above: score}]
  } else {
    return ['We', {'below': null, above: score}]
  }
 }

 const defeatedContractDoubled = (whoBid, bid, made) => {
    if(whoBid === 'We') {
      return ['They', {'below': null, above: addScore(bid, made)}]
    } else {
      return ['We', {'below': null, above: addScore(bid, made)}]
    }
  }


 const addScore = (bid, made) => {
  let score = 0
  for (let i = 0; i < bid - made; i++) {
    i === 0 ? score += 100 : i === 1 || i === 2 ? score += 200 : score += 300
  }
  return score
 }

 const underbid = (whoBid, suitBid, bid, made, doubled) => {
  if(doubled) {
    return underbidDoubled(whoBid, suitBid, bid, made)
  } else if (suit(suitBid) === 'Major') {
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

const underbidDoubled = (whoBid, suitBid, bid, made) => {
  if (suit(suitBid) === 'Major') {
    let majorAbove = (made - bid)*100
    let majorBelow = bid*60
    return [whoBid, {'below': majorBelow, 'above': majorAbove}]
  } else if (suitBid === 'NT') {
    let belowScore = ((bid - 1)*60) + 80
    let aboveScore = (made- bid)*100
    return [whoBid, {'below': belowScore, 'above': aboveScore}]
  } else {
    let minorAbove = (made- bid)*100
    let minorBelow = bid*40
    return [whoBid, {'below': minorBelow, 'above': minorAbove}]
  }
}

module.exports = scoring
