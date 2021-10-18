import './App.css';
import React from 'react';
import { useState } from 'react';
import Scorecard from './components/Scorecard';
import Bidding from './components/Bidding'

function App() {
  const [newGame, setNewGame] = useState(false);
  const [weAboveScores, setWeAboveScores] = useState([])
  const [weBelowScores, setWeBelowScores] = useState([])
  const [theyAboveScores, setTheyAboveScores] = useState([])
  const [theyBelowScores, setTheyBelowScores] = useState([])

  const handleClick = (event) => {
    event.preventDefault()
    setNewGame(true)
  }

  const submit = (whoBid, scoreBelow, scoreAbove) => {
    if(whoBid === 'We') {
      if(scoreAbove != null) {
        weAboveScores.push(scoreAbove)
        let newWeAboveScores = weAboveScores
        setWeAboveScores([...newWeAboveScores])
      } 
      weBelowScores.push(scoreBelow)
      let newWeBelowScores = weBelowScores
      setWeBelowScores([...newWeBelowScores])
    } else {
      if(scoreAbove != null) {
        theyAboveScores.push(scoreAbove)
        let newTheyAboveScores = theyAboveScores
        setTheyAboveScores([...newTheyAboveScores])
      } 
      theyBelowScores.push(scoreBelow)
      let newTheyBelowScores = theyBelowScores
      setTheyBelowScores([...newTheyBelowScores])
    }
  }

  return (
    <div className="App">
      <header className="App-header">
          <h1>Bridge Scorecard</h1>
      </header>
      <button onClick={handleClick}>New Game</button>
      {newGame ? <Scorecard weBelowScores={weBelowScores} theyBelowScores={theyBelowScores}
      weAboveScores={weAboveScores} theyAboveScores={theyAboveScores}/> : null }
      {newGame ? <Bidding submit={submit} /> : null }
    </div>
  );
}

export default App;
