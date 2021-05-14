import React from 'react'
import resident from '../../assets/re-v.jpg';
import { useFetchGames } from '../../hooks/useFetchGame';
import '../../styles/hero-style.css';
import { CheckNow } from './CheckNow';

export const Hero = () => {
  const { loading, data } = useFetchGames()
  debugger
  const { id, name, image } = !loading && data[ Math.floor(Math.random() * data.length)];
  debugger
  return (
    <section className="main__container hero ">
      {
        loading 
          ? <h2>loading</h2>
          : <figure className="hero__img__container ">
            <div className="top--fade"></div>
              <img className="hero--img animate__animated animate__fadeIn" src={ image } alt={ name }/>
              <div className="bottom--fade"></div>
            </figure> 
      }
      <div className="hero__text__content">
        <p className="hero--text">{ name }</p>
      </div>
      <CheckNow />
    </section>
  )
}
