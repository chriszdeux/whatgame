import React, { useEffect, useState } from 'react'
import resident from '../../assets/re-v.jpg';
import { useFetchGames, useGetGameDetails } from '../../hooks/useFetchGame';
import '../../styles/home-style.css';
import { BackgroundAnimation } from '../animations/BackgroundAnimation';
import { LoadingComponent } from '../loading/LoadingComponent';
import { GamesMap } from '../videogames-lists/GamesMap';
import { CheckNow } from './CheckNow';

export const Home = () => {
  const { loading, data } = useFetchGames()
  // debugger
  // const  random = 
  const { id, name, background_image, slug } = !loading && data.randomResult;
  // debugger
  // debugger
  
  
  useEffect(() => {
    const vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  
    // We listen to the resize event
    window.addEventListener('resize', () => {
      // We execute the same script as before
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    });
  }, [])
  const [myCheckNow, setMyCheckNow] = useState()

  // const handleCheck = () => {
  // }
  // handleCheck()
  // debugger
  useEffect(() => {
    setTimeout(() => {
      setMyCheckNow(<CheckNow className="animate__animated animate__fadeInUp" slug={ slug }/>)
    }, 4000);

  }, [data])
  return (
    <>
    <section id="home" className="main__container home ">
      {
        loading 
          ? <LoadingComponent />
          : 
          <>
          <figure className="hero__img__container     animate__animated animate__fadeIn">
            <div className="top--fade"></div>
              <img className="hero--img animate__animated animate__fadeIn" src={ background_image } alt={ name }/>
              <div className="bottom--fade"></div>
              <caption className="hero--text">{ name }</caption>
            </figure> 
            
          </>
      }
      {/* <CheckNow slug={ slug }/>  */}

      {
        myCheckNow
      }
      {/* <div className="hero__text__content">
        <p className="hero--text">{ name }</p>
      </div> */}
      <BackgroundAnimation />
    </section>
      <GamesMap />
  </>
  )
}
