class Scoring {

  constructor() {
    this.belowScore = 0
    this.aboveScore = 0
    this.whoBid = ''
    this.doubled = false
    this.redoubled = false
    this.vulnerable = false
  }

  scoring(whoBid, suitBid, numberBid, numberMade) {
    this.whoBid = whoBid
    if(numberBid <= numberMade) {
      this.bidAndMade(suitBid, numberBid)
      this.overtricks(suitBid, numberBid, numberMade)
    } else {
      this.whoBid === 'We' ? this.whoBid = 'They' : this.whoBid = 'We'
      this.defeatedContract(numberBid, numberMade)
    }
    this.slamBonus(numberBid, numberMade)
    this.doubledBonus(numberBid, numberMade)
    return this.finalScore()
  }

  bidAndMade(suitBid, numberBid) {
    this.belowScore = this.calculateScoreBelow(suitBid, numberBid)
  }

  calculateScoreBelow(chosenSuit, bid) {
    if(this.doubled) {
      return (this.bidAndMadeScore(chosenSuit, bid))*2
    } else if (this.redoubled) {
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

  overtricks(suitBid, bid, made) {
    if((this.doubled && this.vulnerable) || this.redoubled && !this.vulnerable) {
      this.aboveScore += this.calculateScoreAbove(suitBid, bid, made)*2
    } else if (this.redoubled) {
      this.aboveScore += this.calculateScoreAbove(suitBid, bid, made)*4
    } else {
      this.aboveScore += this.calculateScoreAbove(suitBid, bid, made)
    }
  }

  calculateScoreAbove(suitBid, bid, made) {
    let overtricks = made - bid
    if(this.doubled|| this.redoubled) {
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

  defeatedContract(bid, made){
    let score = (bid - made)*50
    if(this.doubled || this.redoubled) {
      this.aboveScore += this.defeatedContractDoubled(bid, made)
    } else if (this.vulnerable) {
      this.aboveScore += score*2
    } else {
      this.aboveScore += score
    }
  }

defeatedContractDoubled(bid, made) {
  if(this.doubled) {
    return this.addScore(bid, made)
  } else {
    return (this.addScore(bid, made))*2
  }
}
  
  addScore(bid, made) {
    if(this.vulnerable) {
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

  slamBonus(bid, made) {
    if(bid < 6 || made < bid) {
      return
    } else if(this.vulnerable) {
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

  doubledBonus(bid, made) {
    if(made >= bid) {
      if(this.doubled) {
        this.aboveScore += 50
      } else if(this.redoubled) {
        this.aboveScore += 100
      }
    }
  }

  honours(honours) {
    if(honours === '4/5'){
      this.aboveScore += 100
    } else if(honours === 'full honours') {
      this.aboveScore += 150
    }
  }

  isDoubled() {
    this.doubled = true
  }

  isRedoubled() {
    this.redoubled = true
  }

  isVulnerable() {
    this.vulnerable = true
  }
}

module.exports = Scoring