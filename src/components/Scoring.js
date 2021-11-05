const scoring = (whoBid, suitBid, numberBid, numberMade, isDoubled, vulnerable) => {
  if(numberBid === numberMade) {
    return bidAndMade(whoBid, suitBid, numberBid, isDoubled)
  } else if (numberBid > numberMade) {
    return overbid(whoBid, numberBid, numberMade, isDoubled, vulnerable)
  } else {
    return underbid(whoBid, suitBid, numberBid, numberMade, isDoubled, vulnerable)
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
    return [whoBid, {'below': bidAndMadeScore(chosenSuit, bid)*2, 'above': null}]
  } else if (isDoubled === 'redoubled') {
    return [whoBid, {'below': bidAndMadeScore(chosenSuit, bid)*4, 'above': null}]
  } else {
    return [whoBid, {'below': bidAndMadeScore(chosenSuit, bid), 'above': null}]
  }
}

const bidAndMadeScore = (chosenSuit, bid) => {
  if(chosenSuit === 'NT') {
    let total = ((bid - 1)*30) + 40
    return total
  } else if (suit(chosenSuit) === 'Major') {
    return bid*30
  } else {
    return bid*20
  }
}

const overbid = (whoBid, bid, made, doubled, vulnerable) => {
  let score = (bid - made)*50
  if(doubled === 'doubled' || doubled === 'redoubled') {
    return defeatedContractDoubled(whoBid, bid, made, doubled, vulnerable)
  } else if (whoBid === 'We') {
    return ['They', {'below': null, above: score}]
  } else {
    return ['We', {'below': null, above: score}]
  }
}

const defeatedContractDoubled = (whoBid, bid, made, doubled, vulnerable) => {
  if(whoBid === 'We') {
    if(doubled === 'doubled') {
      return ['They', {'below': null, above: addScore(bid, made, vulnerable)}]
    } else {
      return ['They', {'below': null, above: (addScore(bid, made, vulnerable))*2}]
    }
  } else {
    if(doubled === 'doubled') {
      return ['We', {'below': null, above: addScore(bid, made, vulnerable)}]
    } else {
      return ['We', {'below': null, above: (addScore(bid, made, vulnerable))*2}]
    }
  }
}

const addScore = (bid, made, vulnerable) => {
  if(vulnerable) {
    let score = 0
    for (let i = 0; i < bid - made; i++) {
      i === 0 ? score += 200 : score += 300
    }
    return score
  } else {
    let score = 0
    for (let i = 0; i < bid - made; i++) {
      i === 0 ? score += 100 : i === 1 || i === 2 ? score += 200 : score += 300
    }
    return score
  }
}

const underbid = (whoBid, suitBid, bid, made, doubled, vulnerable) => {
  if(doubled === 'doubled') {
    if(vulnerable) {
      return[whoBid, {above: underbidScoreAbove(suitBid, bid, made, doubled)*2, 
            below: bidAndMadeScore(suitBid, bid)*2}]
    } else {
      return[whoBid, {above: underbidScoreAbove(suitBid, bid, made, doubled), 
        below: bidAndMadeScore(suitBid, bid)*2}]
    }
  } else if(doubled === 'redoubled') {
    if(vulnerable) {
      return[whoBid, {above: underbidScoreAbove(suitBid, bid, made, doubled)*4, 
            below: bidAndMadeScore(suitBid, bid)*4}]
    } else {
      return[whoBid, {above: underbidScoreAbove(suitBid, bid, made, doubled)*2, 
            below: bidAndMadeScore(suitBid, bid)*4}]
    }
  } else {
    return[whoBid, {above: underbidScoreAbove(suitBid, bid, made, doubled), 
          below: bidAndMadeScore(suitBid, bid)}]
  }
}

const underbidScoreAbove = (suitBid, bid, made, doubled) => {
  let overtricks = made - bid
  if(doubled === 'doubled' || doubled === 'redoubled') {
    return overtricks*100
  } else if (suitBid === 'NT' || suit(suitBid) === 'Major') {
    return overtricks*30
  } else {
    return overtricks*20
  }
}

module.exports = scoring
