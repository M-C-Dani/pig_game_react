import './App.css'
import Player from './Player/Player'
import { useState } from 'react'
// 4. Manejar los eventos de click en los botones de New game, Roll dice y Hold
// 5. Manejar el cambio de imagen de dado cuando se hace click en el botón rolldice
// 5. Manejar el cambio de jugador activo cuando se hace click en el botón Hold
// 6. Manejar el cambio de jugador activo cuando se obtiene un 1 al hacer click en el botón Roll dice
// 7. Manejar el cambio de jugador activo cuando se obtiene un 6 al hacer click en el botón Roll dice
// 8. Manejar el cambio de jugador activo cuando se obtiene un número diferente de 1 o 6 al hacer click en el botón Roll dice
// 9. Manejar el cambio de jugador activo cuando se hace click en el botón New game
function App() {
  // 1. Definir variables de estado usando useState (activePlayer, score, current, diceNumber)
  const [activePlayer, setActivePlayer] = useState(1)
  const [score, setScore] = useState([0, 0])
  const [current, setCurrent] = useState(0)
  const [diceNumber, SetDiceNumber] = useState(0)
  // 2. Definir funciones para manejar los eventos de click (handleNewGame, handleRollDice, handleHold)
  const handleHold = () => {
    console.log('Hold')
  }
  const handleNewGame = () => {
    setActivePlayer(1)
    setAcore([0, 0])
    setCurrent(0)
    setDiceNumber(0)
  }
  //handleRollDice, se encarga únicamente de cambiar el valor del dado
  const handleRollDice = () => {
    //const randomNumber = Math.floor(Math.random () * 6) + 1
    //SetDiceNumber(randomNumber)
    SetDiceNumber(Math.floor(Math.random() * 6) + 1)
  }
  // 3. Pasar las variables de estado y las funciones a los componentes Player y Dice
  return (
    <main>
      <Player
        //Devuelve el primer valor del array. Si es verdadero devuelve el resultado y si es vacío, devuelve 0
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
      {/* Cuando todo es verdadero, devuelve el último. Si todo es falso, no devuelve nada */}
      {diceNumber && (
        <img
          src={`dice-${diceNumber}.png`}
          alt="Playing dice"
          className="dice"
        />
      )}
      <button className="btn btn--new" onClick={handleNewGame}>
        :flechas_en_sentido_antihorario: New game
      </button>
      <button className="btn btn--roll" onClick={handleRollDice}>
        :dado: Roll dice
      </button>
      <button className="btn btn--hold" onClick={handleHold}>
        :bandeja_de_entrada: Hold
      </button>
    </main>
  )
}
export default App
