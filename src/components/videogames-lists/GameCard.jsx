import React from 'react'
import Horizon from '../../assets/horizon.jpg';

export const GameCard = ({}) => {
  return (
    <article className="game__card">
      <figure className="game__image__container">
        <img className="game--image" src={Horizon} alt="videogame" />
      </figure>
    </article>
  )
}
