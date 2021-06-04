import React, { useEffect, useState } from 'react'
import resident from '../../assets/re-v.jpg';
import { useFetchGames, useGetGameDetails } from '../../hooks/useFetchGame';
import '../../styles/home-style.css';
import { CheckNow } from './CheckNow';

export const Home = () => {
  const { loading, data } = useFetchGames()
  const [myRandom, setMyRandom] = useState( 0 )
  // let random = 0
  
  // const handleRandom = () => {
  //   return setMyRandom( Math.floor(Math.random () * data.length) )
  // }
  // const [random, setRandom] = useState( {
  //   randomNumber: Math.floor(Math.random() * data.length)
  // } )
  // debugger
  // const random = Math.floor(Math.random() * data.length)
  useEffect(() => {
    setMyRandom(Math.floor(Math.random () * data.length))
  }, [ data ])
  const { id, name, image, slug } = !loading && data[myRandom];
  // debugger

// debugger
  return (
    <section className="main__container home ">
      {
        loading 
          ? <h2>loading</h2>
          : <figure className="hero__img__container animate__animated animate__fadeIn">
            <div className="top--fade"></div>
              <img className="hero--img animate__animated animate__fadeIn" src={ image } alt={ name }/>
              <div className="bottom--fade"></div>
              <caption className="hero--text">{ name }</caption>
            </figure> 
      }
      {/* <div className="hero__text__content">
        <p className="hero--text">{ name }</p>
      </div> */}
      <CheckNow slug={ slug }/>
    </section>
  )
}
