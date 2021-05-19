import React from 'react';
import { GameSmallCard } from './GameSmallCard';
import '../../styles/games-lists.css';
import { useGamesByGenre } from '../../hooks/useFetchGame';
// import { ListItem } from '../header/ListItem';
export const GameList = ({ genre: { slug, name } }) => {
  const { dataListGame, loading } = useGamesByGenre( slug )
  // debugger
  return (
    <section className="main__container games__list">
      <h2 className="list--title">Best <span className="highlight--text">{ name }</span> Games</h2>
      <div className="cards__container">
          {
            loading
              ? <h2>loading...</h2>
              : dataListGame.map(listGame => (
                <GameSmallCard key={ listGame.slug } listGame={ listGame }/>
              ))
          }
      </div>
    </section>
  )
}
