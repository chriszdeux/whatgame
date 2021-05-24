import React, { useContext } from 'react'
import { DataContext } from '../../context/DataFetchContext'

export const HomeImage = ( ) => {
  const { data } = useContext(DataContext)
  debugger
  const randomNumber = Math.floor(Math.random() * data.length)
  const { image, name } = data[randomNumber]
  // debugger
  return (
    <figure className="hero__img__container animate__animated animate__fadeIn">
      <img className="hero--img animate__animated animate__fadeIn" src={ image } alt={ name }/>
      <caption> </caption>
    </figure> 
  )
}
