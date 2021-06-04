import React, { useContext, useEffect, useState } from 'react'
import { DataContext } from '../../context/DataFetchContext'

export const HomeImage = ( { data } ) => {
  // debugger
  const [random, setRandom] = useState(0)
  useEffect(() => {
    setRandom( Math.floor(Math.random() * data.length) )
  }, [])
  const {name, image} = data[random]
  // const { data, genreLoading} = useContext(DataContext)
  // const { random } = data
  // debugger
  // const { random:{name, background_image:image} } = data
  // debugger
  // const randomNumber = Math.floor(Math.random() * data.length)
  // const { image, name } = data[randomNumber]
  // debugger
  return (
    <figure className="hero__img__container animate__animated animate__fadeIn">
      <img className="hero--img animate__animated animate__fadeIn" src={ image } alt={ name }/>
      <caption className="genre--name"> { name } </caption>
    </figure> 
  )
}
