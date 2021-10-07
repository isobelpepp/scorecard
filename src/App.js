import './App.css';
import React from 'react';
import { useState } from 'react';
import Scorecard from './components/Scorecard'
import Bidding from './components/Bidding'

function App() {
  const [newGame, setNewGame] = useState(false);
  const [tricks, setTricks] = useState(null);

  const handleClick = (event) => {
    event.preventDefault()
    setNewGame(true)
  }

  const submitTricks = (tricks) => {
    setTricks(tricks.value)
    console.log(tricks.value)
  }

  return (
    <div className="App">
      <header className="App-header">
          <h1>Bridge Scorecard</h1>
      </header>
      <button onClick={handleClick}>New Game</button>
      {newGame ? <Scorecard tricks={tricks}/> : null }
      {newGame ? <Bidding submit={submitTricks}/> : null}
    </div>
  );
}

export default App;
