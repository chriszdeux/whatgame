import React from 'react'
import { GameMediumCard } from '../videogames-lists/GameMediumCard'
import { ResultHeader } from './ResultHeader'

export const GamePage = () => {
  return (
    <section className="second__container games__list">
      <ResultHeader />  
      <div className="cards__medium__container">
          <GameMediumCard />
          <GameMediumCard />
          <GameMediumCard />
          <GameMediumCard />
          <GameMediumCard />
          <GameMediumCard />
          <GameMediumCard />
          <GameMediumCard />
          <GameMediumCard />
          <GameMediumCard />
          <GameMediumCard />
          <GameMediumCard />
          <GameMediumCard />
          <GameMediumCard />
          <GameMediumCard />
      </div>
    </section>
  )
}
