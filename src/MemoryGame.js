import React, { useState } from 'react';
import GameOver from './Components/GameOver';

export default function MemoryGame(){

  const [gameOver,setGameOver] = useState(false);

  function restart(){
    setGameOver(false);
  }

  return (
    <div>
      <GameOver show={gameOver} handleRestart={restart}></GameOver>
    </div>
  )
}