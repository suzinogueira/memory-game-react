import React, { useEffect, useState } from 'react';
import GameBoard from './Components/GameBoard';
import GameOver from './Components/GameOver';
import game from './game/game';

export default function MemoryGame(){

  const [gameOver,setGameOver] = useState(false);
  const [cards, setCards] = useState([]);

  useEffect(()=>{
    setCards(game.createCardsFromTechs())
  },[])

  function restart(){
    game.clearCards()
    setCards(game.createCardsFromTechs())
    setGameOver(false);
  }

  function handleFlip(card){

    game.flipCard(card.id, ()=>{
      //Game Over Callback
      setGameOver(true);
    }, ()=>{
      //No Match Callback
      setCards([...game.cards])
    })
    setCards([...game.cards])
    

  }

  return (
    <div>
      <GameBoard handleFlip={handleFlip} cards={cards}></GameBoard>
      <GameOver show={gameOver} handleRestart={restart}></GameOver>
    </div>
  )
}