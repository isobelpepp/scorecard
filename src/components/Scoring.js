const scoring = (suitBid, numberBid, numberMade) => {
  if(suitBid === 'NT' && numberBid <= numberMade) {
    let total = (numberBid -1)*30
    return total + 40
  }
//  under the line
// NT - 40 for first trick, 30 for each trick after that
// Major - 30 for each trick
// Minor = 20 for each trick
};

module.exports = scoring