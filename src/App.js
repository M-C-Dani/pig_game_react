import Player from 'Player'
import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [activePlayer, setActivePlayer] = useState(1)
  const [diceNumber, setDiceNumber] = useState(0)
  const [current, setCurrent] = useState(0)
  const [score, setScore] = useState([0, 0])

  const handleNew = () => {
    setActivePlayer(1)
    setCurrent(0)
    setScore([0, 0])
    setDiceNumber(0)
  }

  const handleHold = () => {
    // Update the score of the active player
    const newScore = [...score]
    newScore[activePlayer - 1] = current
    setScore(newScore)
    setActivePlayer(activePlayer === 1 ? 2 : 1)
    setCurrent(0)
  }

  const handleDice = () => {
    setDiceNumber(Math.floor(Math.random() * 6) + 1)
  }

  useEffect(() => {
    if (diceNumber === 1) {
      setActivePlayer((activePlayer) => (activePlayer === 1 ? 2 : 1))
      setCurrent(0)
    } else {
      setCurrent((current) => current + diceNumber)
    }
  }, [diceNumber])

  const finishedPlaying = Math.max(...score) >= 10 ? true : false

  return (
    <main>
      <Player
        name="Player 1"
        score={score[0]}
        current={activePlayer === 1 && current}
        isActive={activePlayer === 1}
      />
      <Player
        name="Player 2"
        score={score[1]}
        current={activePlayer === 2 && current}
        isActive={activePlayer === 2}
      />
      {diceNumber && (
        <img
          src={`dice-${diceNumber}.png`}
          alt="Playing dice"
          className="dice"
        />
      )}
      <button className="btn btn--new" onClick={handleNew}>
        :arrows_counterclockwise: New game
      </button>
      <button
        className="btn btn--roll"
        onClick={handleDice}
        disabled={finishedPlaying}
      >
        :game_die: Roll dice
      </button>
      <button
        className="btn btn--hold"
        onClick={handleHold}
        disabled={finishedPlaying}
      >
        :inbox_tray: Hold
      </button>
    </main>
  )
}

export default App
