import React, { useEffect, useState } from 'react'
import resident from '../../assets/re-v.jpg';
import { useFetchGames, useGetGameDetails } from '../../hooks/useFetchGame';
import '../../styles/hero-style.css';
import { CheckNow } from './CheckNow';

export const Hero = () => {
  const { loading, data } = useFetchGames()
  // let random = 0
  

  const [random, setRandom] = useState( 0 )


  useEffect(() => {
    const interval = setInterval(() => {
      let randomNumber = Math.floor( Math.random() * data.length )
      setRandom( randomNumber )
      // debugger
      console.log(`random number: ${setRandom}`)
    }, 10000);
    return () => clearInterval(interval)
  }, [ ])
  
  const { id, name, image, slug } = !loading && data[random];
  // const { id, name, image, slug } = !loading && data[ Math.floor(Math.random() * data.length)];
  // debugger
  // const { detailsData } = useGetGameDetails( slug )
  return (
    <section className="main__container hero ">
      {
        loading 
          ? <h2>loading</h2>
          : <figure className="hero__img__container animate__animated animate__fadeIn">
            <div className="top--fade"></div>
              <img className="hero--img animate__animated animate__fadeIn" src={ image } alt={ name }/>
              <div className="bottom--fade"></div>
            </figure> 
      }
      <div className="hero__text__content">
        <p className="hero--text">{ name }</p>
      </div>
      <CheckNow slug={ slug }/>
    </section>
  )
}
