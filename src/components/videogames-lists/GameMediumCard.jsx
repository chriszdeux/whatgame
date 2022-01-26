import React, { useContext, useEffect, useState } from 'react'
import { LazyLoadComponent, LazyLoadImage } from 'react-lazy-load-image-component';
import Horizon from '../../assets/horizon.jpg';
import { RatingStar } from '../modal/RatingStar';
import { InteractiveButtons } from './InteractiveButtons';
import Modal from 'react-modal';
import { useShowContent } from '../../hooks/useShowContent';
import { CardContent } from '../modal/CardContent';
import { VscChromeClose as CloseIcon } from 'react-icons/vsc';
import { LoadingComponent } from '../loading/LoadingComponent';
import { CgArrowsExpandUpRight } from 'react-icons/cg'
import { IoMdAdd as AddIcon } from 'react-icons/io'
import { DataContext } from '../../context/DataFetchContext';
import { FavSubmit } from '../helpers/FavSubmit';
import { IoTrashBinSharp as DeleteIcon } from 'react-icons/io5'


export const GameMediumCard = ({values}) => {
  const { data, index } =  !!values && values
  const [ openContent, handleOpenContent, animation ] = useShowContent()
  // debugger
  const { dispatch, handleOpenGameModal } = useContext( DataContext )
  const { handleAdd, handleRemove, addToggle} = FavSubmit(data, dispatch)
  const { name, image, calification, metacritic, rating_star,  slug, checked } = data
  const [show, setShow] = useState(true)
  // debugger
  // debugger
  // debugger

  let gameCalification = []
  if(metacritic >= 90 ) {
    gameCalification.push(<h2 key={1} className="calification high--rate--color">{ metacritic }</h2>)
  } else if ( metacritic >= 70 && metacritic < 90 ) {
    gameCalification.push(<h2 key={2} className="calification medium--rate--color">{ metacritic }</h2>)
  } else if(metacritic < 70){
    gameCalification.push(<h2 key={3} className="calification low--rate--color">{ metacritic }</h2>)
  }
  // console.log('medium--card')
  // debugger
  return (
    <LazyLoadComponent className="game__medium__card" 
    >
      {/* <li className="game__medium__container"> */}
      <li className="game__medium__container">
      <h2 className="card--position">{index + 1}</h2>
      <figure className="game__medium__container">
        <LazyLoadImage 
          // placeholderSrc="../../assets/horizon.jpg"
          className="game--image--medium animate__animated animate__fadeIn"
          src={ image } alt="videogame"
          effect="opacity" 
          
          // beforeLoad={ () => handleLoading() }
          // visibleByDefault={ image.src === '../../assets/horizon.jpg' }
          />
        
      <div className="game__content animate__animated animate__fadeIn">
        {
          !openContent &&
          <h2 className="list--title">{ name }</h2>
        }
        <div className="card__medium__info">
          {
            gameCalification
          }
          <RatingStar rating_star={ rating_star }/>
          <CgArrowsExpandUpRight 
            className="dots"
            onClick={ () => handleOpenGameModal({slug}) }
            />
          
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

        </div>
      </div>
      {
        show &&
        <div className="game--medium--name animate__animated animate__fadeIn">{ name }</div>
      }   

        {/* <InteractiveButtons /> */}
        {/* <div className="bottom--fade"></div> */}
      </figure>
      </li>
      {/* </li> */}
      {/* <Modal
        isOpen={ openContent }
        // onAfterOpen={ handleToggleContent }
        onRequestClose={ handleOpenContent }
        className="Modal animate__animated animate__fadeIn"
        overlayClassName="Overlay--cards"
        ariaHideApp={false}
      >
        <CardContent values={{ slug, animation, handleOpenContent }}/>
        <CloseIcon 
          className="close--icon"
          onClick={ handleOpenContent }
        />
      </Modal> */}
    </LazyLoadComponent>
  )
}
