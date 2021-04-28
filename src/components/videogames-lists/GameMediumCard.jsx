import React from 'react'
import Horizon from '../../assets/horizon.jpg';
import { HiEmojiHappy as Like, HiEmojiSad as Dislike, HiPlay as Play } from 'react-icons/hi';
import { RiAddCircleFill as Add } from 'react-icons/ri';
export const GameMediumCard = () => {
  return (
    <article className="game__medium__card">
      <figure className="game__medium__container">
        <img className="game--image--medium" src={Horizon} alt="videogame" />
      <div className="bottom--fade"></div>
        <div className="interactive__buttons">
          <Play />
          <Like />
          <Dislike />
          <Add />
        </div>
      </figure>
    </article>
  )
}
