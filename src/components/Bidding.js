import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';

export const Bidding = (props) => {
  const [whoBid, setWhoBid] = useState('');
  const [suit, setSuit] = useState('');
  const [number, setNumber] = useState(0);
  const [tricks, setTricks] = useState(0);

  const handleClick = (bid) =>  (event) => {
    event.preventDefault()
    if(bid === 'We' || bid === 'They') {
      setWhoBid(bid)
    } else {
      setSuit(bid)
    }
  }

  const handleNumber = (number) =>  (event) => {
    event.preventDefault()
      setNumber(number)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    props.submit(tricks);
  }

  const handleChange = (event) => {
    setTricks({value: event.target.value});
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
      <button onClick={handleNumber(7)} data-testid='seven'>7</button> 

      <button onClick={handleClick('Spades')} data-testid='spades'>Spades</button>
      <button onClick={handleClick('Hearts')} data-testid='hearts'>Hearts</button>
      <button onClick={handleClick('Clubs')} data-testid='clubs'>Clubs</button>
      <button onClick={handleClick('Diamonds')} data-testid='diamonds'>Diamonds</button>

      <p>{suit !== '' && number !== 0 ? number + ' ' + suit : null}</p>

      <h4>Tricks won:</h4>
      <form data-testid='result' onSubmit={handleSubmit}>
        <input type='number' data-testid='tricks-number' min="1" max="13" onChange={handleChange}/>
        <input className="submit" type="submit" value="Submit" data-testid='submit' />
      </form>
    </div>
  )
}

Bidding.propTypes = {
  props: PropTypes.func,
  submit: PropTypes.func
};

export default Bidding;