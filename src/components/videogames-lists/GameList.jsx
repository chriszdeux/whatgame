import React from 'react';
import { GameSmallCard } from './GameSmallCard';
import '../../styles/games-lists.css';
export const GameList = () => {
  return (
    <section className="main__container games__list">
      <h2 className="list--title">Best <span className="highlight--text">Rating</span> Games</h2>
      <div className="cards__container">
          <GameSmallCard />
          <GameSmallCard />
          <GameSmallCard />
          <GameSmallCard />
          <GameSmallCard />
          <GameSmallCard />
      </div>
    </section>
  )
}
