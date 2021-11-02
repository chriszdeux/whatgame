import React, { useContext, useEffect } from 'react'
import { RatingStar } from './RatingStar'
import { IoMdAdd as AddIcon } from 'react-icons/io'
import { DataContext } from '../../context/DataFetchContext'
import { FavSubmit } from '../helpers/FavSubmit'
import { IoTrashBinSharp as DeleteIcon } from 'react-icons/io5'

export const HeroImageModal = ( {data} ) => {
  const { dispatch } = useContext( DataContext )
  const { handleAdd, handleRemove, addToggle} = FavSubmit(data, dispatch)
  const { slug, name, image, rating_star, rating } = data;
  // debugger
  // console.log('hero--image--modal')
  // useEffect(() => {
  //   console.log('hero--image--modal')
  // }, [ data ])
  return (
    <>
    <figure className="game__img">
      <img className="card--image" src={ image } alt={ slug }/>
      <div className="rating__stars">
        <h2 className="card--title">{ name }</h2>
        <RatingStar rating_star={ rating_star }/>
      </div>

{
            !addToggle 
            ? <AddIcon 
              className="add--icon"
              onClick={ handleAdd }
            />
            : <DeleteIcon 
              className="add--icon"
              onClick={ handleRemove }
            />
          }
    </figure>
    </>
  )
}
