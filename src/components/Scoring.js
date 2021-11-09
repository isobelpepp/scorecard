class Scoring {

  constructor() {
    this.belowScore = 0
    this.aboveScore = 0
    this.whoBid = ''
  }

  scoring(whoBid, suitBid, numberBid, numberMade, isDoubled, vulnerable) {
    this.whoBid = whoBid
    if(numberBid <= numberMade) {
      this.bidAndMade(suitBid, numberBid, isDoubled)
      this.overtricks(suitBid, numberBid, numberMade, isDoubled, vulnerable)
    } else {
      this.whoBid === 'We' ? this.whoBid = 'They' : this.whoBid = 'We'
      this.defeatedContract(numberBid, numberMade, isDoubled, vulnerable)
    }
    this.slamBonus(numberBid, numberMade, vulnerable)
    this.doubledBonus(numberBid, numberMade, isDoubled)
    return this.finalScore()
  }

  bidAndMade(suitBid, numberBid, isDoubled) {
    this.belowScore = this.calculateScoreBelow(suitBid, numberBid, isDoubled)
  }

  calculateScoreBelow(chosenSuit, bid, isDoubled) {
    if(isDoubled === 'doubled') {
      return (this.bidAndMadeScore(chosenSuit, bid))*2
    } else if (isDoubled === 'redoubled') {
      return (this.bidAndMadeScore(chosenSuit, bid))*4
    } else {
      return this.bidAndMadeScore(chosenSuit, bid)
    }
  }

  bidAndMadeScore(chosenSuit, bid) {
    if(chosenSuit === 'NT') {
      return ((bid - 1)*30) + 40
    } else if (this.suit(chosenSuit) === 'Major') {
      return bid*30
    } else {
      return bid*20
    }
  }

  overtricks(suitBid, bid, made, doubled, vulnerable) {
    if((doubled === 'doubled' && vulnerable) || doubled === 'redoubled' && !vulnerable) {
      this.aboveScore = this.calculateScoreAbove(suitBid, bid, made, doubled)*2
    } else if (doubled === 'redoubled') {
      this.aboveScore = this.calculateScoreAbove(suitBid, bid, made, doubled)*4
    } else {
      this.aboveScore = this.calculateScoreAbove(suitBid, bid, made, doubled)
    }
  }

  calculateScoreAbove(suitBid, bid, made, doubled) {
    let overtricks = made - bid
    if(doubled === 'doubled' || doubled === 'redoubled') {
      return overtricks*100
    } else if (suitBid === 'NT' || this.suit(suitBid) === 'Major') {
      return overtricks*30
    } else {
      return overtricks*20
   }
  }

  suit(suit){
    if(suit === 'Hearts' || suit === 'Spades') {
      return 'Major'
    } else {
      return 'Minor'
    }
  }

  defeatedContract(bid, made, doubled, vulnerable){
    let score = (bid - made)*50
    if(doubled === 'doubled' || doubled === 'redoubled') {
      this.aboveScore = this.defeatedContractDoubled(bid, made, doubled, vulnerable)
    } else if (vulnerable) {
      this.aboveScore = score*2
    } else {
      this.aboveScore = score
    }
  }

defeatedContractDoubled(bid, made, doubled, vulnerable) {
  if(doubled === 'doubled') {
    return this.addScore(bid, made, vulnerable)
  } else {
    return (this.addScore(bid, made, vulnerable))*2
  }
}
  
  addScore(bid, made, vulnerable) {
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

  finalScore() {
    return [this.whoBid, {below: this.belowScore, above: this.aboveScore}]
  }

  slamBonus(bid, made, vulnerable) {
    if(bid < 6 || made < bid) {
      return
    } else if(vulnerable) {
      if(this.smallSlam(bid, made)) {
        this.aboveScore += 750
      } else if(this.grandSlam(bid, made)) {
        this.aboveScore += 1500
      }
    } else if(this.smallSlam(bid, made)) {
      this.aboveScore += 500
    } else {
      this.aboveScore += 1000
    }
  }

  smallSlam(bid, made) {
    if(made >= 6 && bid === 6) {
      return true
    } 
  }

  grandSlam(bid, made) {
    if(made === 7 && bid === 7) {
      return true
    } 
  }

  doubledBonus(bid, made, doubled) {
    if(made >= bid) {
      if(doubled === 'doubled') {
        this.aboveScore += 50
      } else if(doubled === 'redoubled') {
        this.aboveScore += 100
      }
    }
  }
}

module.exports = Scoring