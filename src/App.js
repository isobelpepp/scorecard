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
  const [weGameScores, setWeGameScores] = useState([])
  const [weGames, setWeGames] = useState(0)
  const [theyGameScores, setTheyGameScores] = useState([])
  const [theyGames, setTheyGames] = useState(0)

  const handleClick = (event) => {
    event.preventDefault()
    setNewGame(true)
  }

  const submit = (whoBid, scoreBelow, scoreAbove) => {
    if(whoBid === 'We') {
      weScores(scoreBelow, scoreAbove)
    } else {
      theyScores(scoreBelow, scoreAbove)
    }
  }

  const weScores = (scoreBelow, scoreAbove) => {
    if(scoreAbove != null) {
      updateWeScoresAbove(scoreAbove)
    } 
    updateWeScoresBelow(scoreBelow)
    updateWeGames(scoreBelow)
  }

  const theyScores = (scoreBelow, scoreAbove) => {
    if(scoreAbove != null) {
      updateTheyScoresAbove(scoreAbove)
    } 
    updateTheyScoresBelow(scoreBelow)
    updateTheyGames(scoreBelow)
  }

  const updateWeGames = (scoreBelow) => {
    weGameScores.push(scoreBelow)
    let total = weGameScores.reduce((a, b) => a + b, 0) 
    total >= 100 ? updateAndResetWeGames() : setWeGameScores(weGameScores)
  }

  const updateTheyGames = (scoreBelow) => {
    theyGameScores.push(scoreBelow)
    let total = theyGameScores.reduce((a, b) => a + b, 0) 
    total >= 100 ? updateAndResetTheyGames() : setTheyGameScores(theyGameScores)
  }

  const updateWeScoresAbove = (scoreAbove) => {
    weAboveScores.push(scoreAbove)
    let newWeAboveScores = weAboveScores
    setWeAboveScores([...newWeAboveScores])
  }

  const updateTheyScoresAbove = (scoreAbove) => {
    theyAboveScores.push(scoreAbove)
    let newTheyAboveScores = theyAboveScores
    setTheyAboveScores([...newTheyAboveScores])
  }

  const updateWeScoresBelow = (scoreBelow) => {
    weBelowScores.push(scoreBelow)
    let newWeBelowScores = weBelowScores
    setWeBelowScores([...newWeBelowScores])
  }

  const updateTheyScoresBelow = (scoreBelow) => {
    theyBelowScores.push(scoreBelow)
    let newTheyBelowScores = theyBelowScores
    setTheyBelowScores([...newTheyBelowScores])
  }

  const updateAndResetWeGames = () => {
    let weCurrentGames = weGames
    weCurrentGames += 1
    setWeGames(weCurrentGames)
    setWeGameScores([])
  }

  const updateAndResetTheyGames = () => {
    let theyCurrentGames = theyGames
    theyCurrentGames += 1
    setTheyGames(theyCurrentGames)
    setTheyGameScores([])
  }

  return (
    <div className="App">
      <header className="App-header">
          <h1>Bridge Scorecard</h1>
      </header>
      <button onClick={handleClick}>New Game</button>
      {newGame ? <Scorecard weBelowScores={weBelowScores} theyBelowScores={theyBelowScores}
      weAboveScores={weAboveScores} theyAboveScores={theyAboveScores} weGames={weGames} theyGames={theyGames}/> : null }
      {newGame ? <Bidding submit={submit} /> : null }
    </div>
  );
}

export default App;
