import React from 'react'
import resident from '../../assets/re-v.jpg';
import '../../styles/hero-style.css';
import { CheckNow } from './CheckNow';

export const Hero = () => {
  return (
    <section className="main__container hero">
      <figure className="hero__img__container">
        <img className="hero--img" src={ resident } alt="hero section"/>
        <div className="bottom--fade"></div>
      </figure>
      <div className="hero__text__content">
        <p className="hero--text">Thousands of games you can check right now</p>
      </div>
      <CheckNow />
    </section>
  )
}
