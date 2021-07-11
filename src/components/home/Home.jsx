import React, { useEffect, useState } from 'react'
import resident from '../../assets/re-v.jpg';
import { useFetchGames, useGetGameDetails } from '../../hooks/useFetchGame';
import '../../styles/home-style.css';
import { LoadingComponent } from '../loading/LoadingComponent';
import { GamesMap } from '../videogames-lists/GamesMap';
import { CheckNow } from './CheckNow';

export const Home = () => {
  const { loading, data } = useFetchGames()
  // const  next  = !loading && data[1] 
  // debugger
  // const  previous  = !loading && data[2] 
  // debugger
  // const [myRandom, setMyRandom] = useState( 0 )
  // debugger
  // const handleRandom = () => {
  // }
  // useEffect(() => {
  //   // handleRandom()
  //   // debugger
  // }, [ loading ])
  const  random = !loading && data[3]
    // useEffect(() => {
    //   setMyRandom(random)
    // }, [data]) 
  // setMyRandom( !loading && data[3])
  const { id, name, background_image, slug } = !loading && random;
  // debugger
  // debugger
  
  let vh = window.innerHeight * 0.01;
  // Then we set the value in the --vh custom property to the root of the document
  document.documentElement.style.setProperty('--vh', `${vh}px`);

  // We listen to the resize event
  window.addEventListener('resize', () => {
    // We execute the same script as before
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  });

  const [myCheckNow, setMyCheckNow] = useState()

  const handleCheck = () => {
    setTimeout(() => {
      setMyCheckNow(<CheckNow slug={ slug }/>)
    }, 4000);
  }
  handleCheck()
// debugger
  return (
    <>
    <section id="home" className="main__container home ">
      {
        loading 
          ? <LoadingComponent />
          : <figure className="hero__img__container     animate__animated animate__fadeIn">
            <div className="top--fade"></div>
              <img className="hero--img animate__animated animate__fadeIn" src={ background_image } alt={ name }/>
              <div className="bottom--fade"></div>
              <caption className="hero--text">{ name }</caption>
            </figure> 
      }
      {/* <CheckNow slug={ slug }/>  */}

      {
        myCheckNow
      }
      {/* <div className="hero__text__content">
        <p className="hero--text">{ name }</p>
      </div> */}
    </section>
      <GamesMap />
  </>
  )
}
