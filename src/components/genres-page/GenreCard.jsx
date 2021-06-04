import React, { useContext } from 'react'
import { CardContent } from '../modal/CardContent';
import { VscChromeClose as CloseIcon } from 'react-icons/vsc';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useShowContent } from '../../hooks/useShowContent'
import Modal from 'react-modal'
import { DataContext } from '../../context/DataFetchContext';

export const GenreCard = ({ genre }) => {
  const [openContent, handleOpenModal] = useShowContent();
  const { setGamesByGenre } = useContext( DataContext )
  const { image, name } =  genre
  // debugger
  return (
    <article className="genre__card">
      <figure 
        className="gender__img"
      >
        <div className="fade--bottom"></div>
        <LazyLoadImage 
          className="gender--image" 
          src={ image } 
          alt={ name }
          // onClick={ handleOpenModal } 
          effect="opacity"
          onClick={ () => setGamesByGenre( genre ) }
          // onClick={ handleSubmit }
        />
        
        <caption className="genre--name">{name}</caption>
      </figure>
    </article>
  )
}
