import './Player.css'
import { useState } from 'react'
// Componente Jugador
// Recibe varias propiedades. Props = {name: 'Player 1', score: 43, current: 0, isActive:}
// Quitamos los IDs, ya que no hacen falta en react
function Player({ name, score, current, isActive }) {
  //const { name, score, current, isActive } = props
  const classPlayer =
    score >= 100
      ? 'player player--winner'
      : isActive
      ? 'player player--active'
      : 'player'
  console.log(
    `Renderizando el componenete Player para ${name} con la clase ${classPlayer} y un score de ${score}`
  )
  return (
    <section className={classPlayer}>
      <h2 className="name">{name}</h2>
      <p className="score">{score}</p>
      <div className="current">
        <p className="current-label">Current</p>
        <p className="current-score">{current || 0}</p>
      </div>
    </section>
  )
}
export default Player
