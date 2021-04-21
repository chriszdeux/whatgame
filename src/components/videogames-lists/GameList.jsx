import React from 'react';
import { GameCard } from './GameCard';
import '../../styles/games-lists.css';
export const GameList = () => {
  return (
    <section className="main__container games__list">
      <h2 className="list--title">Best <span className="list--gender">Rating</span> Games</h2>
      <div className="cards__container">
          <GameCard />
          <GameCard />
          <GameCard />
          <GameCard />
          <GameCard />
          <GameCard />
      </div>
    </section>
  )
}
