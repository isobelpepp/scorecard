const scoring = (whoBid, suitBid, numberBid, numberMade, isDoubled) => {
  if(numberBid === numberMade) {
    return bidAndMade(whoBid, suitBid, numberBid, isDoubled)
  } else if (numberBid > numberMade) {
    return overbid(whoBid, numberBid, numberMade, isDoubled)
  } else {
    return underbid(whoBid, suitBid, numberBid, numberMade, isDoubled)
  }
  }

const suit = (suit) => {
  if(suit === 'Hearts' || suit === 'Spades') {
    return 'Major'
  } else {
    return 'Minor'
  }
}

 const bidAndMade = (whoBid, chosenSuit, bid, isDoubled) => {
  if(isDoubled === 'doubled') {
    return [whoBid, {'below': doubledBidAndMade(chosenSuit, bid), 'above': null}]
  } else if (isDoubled === 'redoubled') {
    return [whoBid, {'below': doubledBidAndMade(chosenSuit, bid)*2, 'above': null}]
  } else if(chosenSuit === 'NT') {
    let total = ((bid - 1)*30) + 40
    return [whoBid, {'below': total, 'above': null}]
  } else if (suit(chosenSuit) === 'Major') {
    return [whoBid, {'below': bid*30, 'above': null}]
  } else {
    return [whoBid, {'below': bid*20, 'above': null}]
  }
 }

 const doubledBidAndMade = (chosenSuit, bid) => {
  if(chosenSuit === 'NT') {
    let total = ((bid - 1)*60) + 80
    return total
  } else if (suit(chosenSuit) === 'Major') {
    return bid*60
  } else {
    return bid*40
  }
}

const overbid = (whoBid, bid, made, doubled) => {
  let score = (bid - made)*50
  if(doubled === 'doubled' || doubled === 'redoubled') {
    return defeatedContractDoubled(whoBid, bid, made, doubled)
  } else if (whoBid === 'We') {
    return ['They', {'below': null, above: score}]
  } else {
    return ['We', {'below': null, above: score}]
  }
 }

 const defeatedContractDoubled = (whoBid, bid, made, doubled) => {
    if(whoBid === 'We') {
      if(doubled === 'doubled') {
        return ['They', {'below': null, above: addScore(bid, made)}]
      } else {
        let total = (addScore(bid, made))*2
        return ['They', {'below': null, above: total}]
      }
    } else {
      if(doubled === 'doubled') {
        return ['We', {'below': null, above: addScore(bid, made)}]
      } else {
        return ['We', {'below': null, above: (addScore(bid, made))*2}]
      }
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
  if(doubled === 'doubled' || doubled === 'redoubled') {
    return underbidDoubled(whoBid, suitBid, bid, made, doubled)
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

const underbidDoubled = (whoBid, suitBid, bid, made, doubled) => {
  if (suit(suitBid) === 'Major') {
    let majorAbove = (made - bid)*100
    let majorBelow = bid*60
    if(doubled === 'doubled') {
      return [whoBid, {'below': majorBelow, 'above': majorAbove}]
    } else {
      return [whoBid, {'below': majorBelow, 'above': majorAbove*2}]
    }
  } else if (suitBid === 'NT') {
    let belowScore = ((bid - 1)*60) + 80
    let aboveScore = (made- bid)*100
    if(doubled === 'doubled') {
      return [whoBid, {'below': belowScore, 'above': aboveScore}]
    } else {
      return [whoBid, {'below': belowScore, 'above': aboveScore*2}]
    }
  } else {
    let minorAbove = (made- bid)*100
    let minorBelow = bid*40
    if(doubled === 'doubled') {
      return [whoBid, {'below': minorBelow, 'above': minorAbove}]
    } else {
      return [whoBid, {'below': minorBelow, 'above': minorAbove*2}]
    }
  }
}

module.exports = scoring
