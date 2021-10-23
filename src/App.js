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
      if(scoreAbove != null) {
        weAboveScores.push(scoreAbove)
        let newWeAboveScores = weAboveScores
        setWeAboveScores([...newWeAboveScores])
      } 
      weBelowScores.push(scoreBelow)
      let newWeBelowScores = weBelowScores
      setWeBelowScores([...newWeBelowScores])
      weGameScores.push(scoreBelow)
      let total = weGameScores.reduce((a, b) => a + b, 0) 
        if(total >= 100) {
          let weCurrentGames = weGames
          weCurrentGames += 1
          setWeGames(weCurrentGames)
          setWeGameScores([])
        } else {
          setWeGameScores(weGameScores)
        }
    } else {
      if(scoreAbove != null) {
        theyAboveScores.push(scoreAbove)
        let newTheyAboveScores = theyAboveScores
        setTheyAboveScores([...newTheyAboveScores])
      } 
      theyBelowScores.push(scoreBelow)
      let newTheyBelowScores = theyBelowScores
      setTheyBelowScores([...newTheyBelowScores])
      theyGameScores.push(scoreBelow)
      let total = theyGameScores.reduce((a, b) => a + b, 0) 
        if(total >= 100) {
          let theyCurrentGames = theyGames
          theyCurrentGames += 1
          setTheyGames(theyCurrentGames)
          setTheyGameScores([])
        } else {
          setTheyGameScores(theyGameScores)
        }
    }
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
