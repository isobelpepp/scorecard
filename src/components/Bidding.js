import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
const Scoring = require('./Scoring');

export const Bidding = (props) => {
  const [whoBid, setWhoBid] = useState('');
  const [suit, setSuit] = useState('');
  const [number, setNumber] = useState(0);
  const [tricks, setTricks] = useState(0);
  const [doubled, setDoubled] = useState(false)
  const [redoubled, setRedoubled] = useState(false)
  // const [honours, setHonours] = useState('')

  let calculateScore = new Scoring()
  
  const handleClick = (bid) => (event) => {
    event.preventDefault()
    if(bid === 'We' || bid === 'They') {
      setWhoBid(bid)
    } else if (bid === 'Doubled'){
      if(doubled) {
        setDoubled(false)
      } else {
        setDoubled(true)
        setRedoubled(false)
      }
    } else if (bid === 'Redoubled') {
      if(redoubled) {
        setRedoubled(false)
      } else {
        setRedoubled(true)
        setDoubled(false)
      }
    } else {
      setSuit(bid)
    }
  }

  const handleNumber = (number) =>  (event) => {
    event.preventDefault()
    setNumber(number)
  }

  const handleChange = (event) => {
    setTricks(event.target.value);
  }

  const handleHonours = (honours) => (event) => {
    event.preventDefault()
    calculateScore.honours(honours)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    let numberMade = parseInt(tricks) - 6
    if(doubled) {
      calculateScore.isDoubled()
    } else if (redoubled) {
      calculateScore.isRedoubled()
    }
    if(vulnerable()){
      calculateScore.isVulnerable()
    }
    let score = calculateScore.scoring(whoBid, suit, number, numberMade)
    props.submit(score[0], score[1]['below'], score[1]['above'])
    reset()
  }

  const vulnerable = () => {
    if((whoBid === 'We' && props.weGames >= 1) || (whoBid === 'They' && props.theyGames >= 1)) {
      return true
    } else {
      return false
    }
  }

  const reset = () => {
    setWhoBid('')
    setSuit('')
    setNumber(0)
    setTricks(0)
    setDoubled(false)
    setRedoubled(false)
    calculateScore = new Scoring()
  }

  return (
    <div className="bidding">
      <button onClick={handleClick('We')} data-testid='we-button'>We</button>
      <button onClick={handleClick('They')} data-testid='they-button'>They</button>
      <p>{whoBid !== '' ? whoBid + ' bid...' : null}</p>
      <button onClick={handleNumber(1)} data-testid='one'>1</button>
      <button onClick={handleNumber(2)} data-testid='two'>2</button>
      <button onClick={handleNumber(3)} data-testid='three'>3</button>
      <button onClick={handleNumber(4)} data-testid='four'>4</button>
      <button onClick={handleNumber(5)} data-testid='five'>5</button>
      <button onClick={handleNumber(6)} data-testid='six'>6</button>
      <button onClick={handleNumber(7)} data-testid='seven'>7</button> <br />
      <button onClick={handleClick('Spades')} data-testid='spades'>Spades</button>
      <button onClick={handleClick('Hearts')} data-testid='hearts'>Hearts</button>
      <button onClick={handleClick('Clubs')} data-testid='clubs'>Clubs</button>
      <button onClick={handleClick('Diamonds')} data-testid='diamonds'>Diamonds</button>
      <button onClick={handleClick('NT')} data-testid='no-trumps'>No Trumps</button> <br />
      <button onClick={handleClick('Doubled')} data-testid='doubled'>Doubled</button>
      <button onClick={handleClick('Redoubled')} data-testid='redoubled'>Redoubled</button>

      <h2>Honours:</h2>
      <button onClick={handleHonours('4/5')} data-testid='small-honours'>4/5</button>
      <button onClick={handleHonours('full honours')} data-testid='full-honours'>Full Honours</button>

      <p>{suit !== '' && number !== 0 ? number + ' ' + suit : null}</p>
      <p> { doubled ? 'Doubled' : null} </p>
      <p> { redoubled ? 'Redoubled' : null} </p>
      {/* <p> {honours !== '' ? honours : null}</p> */}

      <h4>Tricks won:</h4>
      <form data-testid='result' onSubmit={handleSubmit}>
        <input type='number' data-testid='tricks-number' value={tricks} onChange={handleChange}/>
        <input className="submit" type="submit" value="Submit" data-testid='submit-result' />
      </form>
    </div>
  )
}

Bidding.propTypes = {
  props: PropTypes.func,
  submit: PropTypes.func,
  weGames: PropTypes.number,
  theyGames: PropTypes.number,
};

export default Bidding;