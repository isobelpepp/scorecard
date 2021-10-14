import './App.css';
import React from 'react';
import { useState } from 'react';
import Scorecard from './components/Scorecard';
import Bidding from './components/Bidding'

function App() {
  const [newGame, setNewGame] = useState(false);
  const [weScores, setWeScores] = useState([])
  const [theyScores, setTheyScores] = useState([])

  const handleClick = (event) => {
    event.preventDefault()
    setNewGame(true)
  }

  const submit = (whoBid, score) => {
    if(whoBid === 'We') {
      weScores.push(score)
      let newWeScores = weScores
      setWeScores([...newWeScores])
    } else {
      theyScores.push(score)
      let newTheyScores = theyScores
      setTheyScores([...newTheyScores])
    }
  }

  return (
    <div className="App">
      <header className="App-header">
          <h1>Bridge Scorecard</h1>
      </header>
      <button onClick={handleClick}>New Game</button>
      {newGame ? <Scorecard weScores={weScores} theyScores={theyScores}/> : null }
      {newGame ? <Bidding submit={submit} /> : null }
    </div>
  );
}

export default App;
