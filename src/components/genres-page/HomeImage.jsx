import React, { useContext } from 'react'
import { DataContext } from '../../context/DataFetchContext'

export const HomeImage = ( ) => {
  const {dataGenre} = useContext(DataContext)
  // debugger
  const randomNumber = Math.floor(Math.random() * dataGenre.length)
  const { image, name } = dataGenre[randomNumber]
  // debugger
  return (
    <figure className="hero__img__container animate__animated animate__fadeIn">
      <img className="hero--img animate__animated animate__fadeIn" src={ image } alt={ name }/>
      <caption> </caption>
    </figure> 
  )
}
