import React from 'react';
import { useState } from 'react';

export const Bidding = () => {
  const [whoBid, setWhoBid] = useState('');

  const clickWe = (event) => {
    event.preventDefault()
    setWhoBid('We')
  }

  const clickThey = (event) => {
    event.preventDefault()
    setWhoBid('They')
  }

  return (
    <div className="bidding">
      <button onClick={clickWe} data-testid='we-button'>We</button>
      <button onClick={clickThey} data-testid='they-button'>They</button>
      <p>{whoBid !== '' ? whoBid + ' bid...' : null}</p>
    </div>
  )
}


export default Bidding;