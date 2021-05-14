import React from 'react'
import Horizon from '../../assets/horizon.jpg';
import { RatingStar } from '../modal/RatingStar';
import { InteractiveButtons } from './InteractiveButtons';

export const GameMediumCard = ({game}) => {
  // debugger
  return (
    <article className="game__medium__card">
      <figure className="game__medium__container">
        <img className="game--image--medium" src={Horizon} alt="videogame" />
        {/* <InteractiveButtons /> */}
        {/* <div className="bottom--fade"></div> */}
      <div className="game__content">
        <h2 className="list--title">Videogame Name</h2>
        <div className="card__medium__info">
          <h2 className="calification">8.9</h2>
          <RatingStar />
        </div>
      </div>
      </figure>
    </article>
  )
}
