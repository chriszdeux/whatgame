import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Horizon from '../../assets/horizon.jpg';
import { RatingStar } from '../modal/RatingStar';
import { InteractiveButtons } from './InteractiveButtons';

export const GameMediumCard = ({game}) => {
  const { name, image, rating } = game
  // debugger
  return (
    <article className="game__medium__card">
      <figure className="game__medium__container">
        <LazyLoadImage 
          className="game--image--medium" src={ image } alt="videogame"
          effect="opacity" 
        />
        {/* <InteractiveButtons /> */}
        {/* <div className="bottom--fade"></div> */}
      <div className="game__content">
        <h2 className="list--title">{ name }</h2>
        <div className="card__medium__info">
          <h2 className="calification">{ rating }</h2>
          <RatingStar />
        </div>
      </div>
      </figure>
    </article>
  )
}
