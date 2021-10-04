import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import Horizon from '../../assets/horizon.jpg';
import { useShowContent } from '../../hooks/useShowContent';
import { CardContent } from '../modal/CardContent';
import { VscChromeClose as CloseIcon } from 'react-icons/vsc';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { resizeFile } from '../../data/fetchGames';
import { useResizeImage } from '../../hooks/useFetchGame';


export const GameSmallCard = ({data}) => {
  const [openContent, handleOpenModal, animation] = useShowContent()
  // debugger
  // debugger
  const { image, name, slug } =   data;
  // debugger
  // debugger
  // const { resizeImage } = useResizeImage()
  // const { lowImage, loading } = useResizeImage(image)
  // debugger
  // const [delayImage, setDelayImage] = useState()

  // useEffect(() => {
  //   setTimeout(() => {
  //     setDelayImage(
       
  //     )
  //   }, 1000);
  // }, [ data ])
  // debugger

  // lazy-load-image-background opacity lazy-load-image-loaded
  return (
    // <article className="game__small__card">
      
      <figure 
        className="game__small__container animate__animated animate__fadeIn"
      >
         <LazyLoadImage 
          className="game--image--small" 
          src={ image } 
          alt={ name }
          onClick={ handleOpenModal } 
          effect="opacity"
        />

        <Modal
          isOpen={ openContent }
          onRequestClose={ handleOpenModal }
          ariaHideApp={false}
          className="Modal "
          overlayClassName="Overlay--cards"
          
        >
          <CloseIcon 
            className="close--icon animate__animated animate__fadeIn"
            onClick={ handleOpenModal }
          />
          <CardContent values={{ slug, animation }}/>
        </Modal>
        <caption className="game--name">{name}</caption>
      </figure>
      
    // </article>
  )
}
