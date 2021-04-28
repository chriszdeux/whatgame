import React from 'react'
import Horizon from '../../assets/horizon.jpg';

export const GameSmallCard = ({}) => {
  return (
    <article className="game__small__card">
      <figure className="game__small__container">
        <img className="game--image--small" src={Horizon} alt="videogame" />
      </figure>
    </article>
  )
}
