import './App.css';
import React from 'react';
import { useState } from 'react';

function App() {
  const [newGame, setNewGame] = useState(false);

  const handleClick = (event) => {
    event.preventDefault()
    setNewGame(true)
  }

  return (
    <div className="App">
      <header className="App-header">
          <h1>Bridge Scorecard</h1>
      </header>
      <button onClick={handleClick}>New Game</button>
      {newGame ? 'Us' : null}
    </div>
  );
}

export default App;
