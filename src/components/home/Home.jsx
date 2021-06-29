import React, { useEffect, useState } from 'react'
import resident from '../../assets/re-v.jpg';
import { useFetchGames, useGetGameDetails } from '../../hooks/useFetchGame';
import '../../styles/home-style.css';
import { LoadingComponent } from '../loading/LoadingComponent';
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

// debugger
  return (
    <section className="main__container home ">
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
      <CheckNow slug={ slug }/> 
      {/* <div className="hero__text__content">
        <p className="hero--text">{ name }</p>
      </div> */}
    </section>
  )
}
