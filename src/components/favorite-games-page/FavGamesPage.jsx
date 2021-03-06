
import React, { useContext, useEffect } from 'react'
import { DataContext } from '../../context/DataFetchContext'
import { useScrollTop } from '../../hooks/useScrollTop';
import '../../styles/favorite-games-page.css'
import { GameMediumCard } from '../videogames-lists/GameMediumCard';
import { ScrollTop } from '../helpers/ScrollTop';
import { BackgroundAnimation } from '../animations/BackgroundAnimation';
import { FavSubmit } from '../helpers/FavSubmit';


export const FavGamesPage = () => {
  

  const { favoriteGames, dispatch } = useContext( DataContext )

  const { handleRemoveAll } = FavSubmit(favoriteGames, dispatch)
  // const { handleAdd, handleRemove, addToggle} = FavSubmit(data, dispatch)
  // debugger
  const { scrollTop } = useScrollTop()
  // // const [favList, setFavList] = useState(favoriteGames)
  // const [favGame, setFavGame] = useState()
  // const [showFavGame, setShowFavGame] = useState(false)
  // const [data, setData] = useState(favGame)
  // const { name, image, rating_star, metacritic, calification, released } = favGame !== undefined && favGame
  // const [ openContent, handleOpenContent, animation ] = useShowContent()
  // // debugger
  // const [slug, setSlug] = useState()
  // const [removeRepeatElement, setRemoveRepeatElement] = useState([])


  // useEffect(() => {
  //   setRemoveRepeatElement([...new Set(favoriteGames)])
  //   // return () => {
  //   //   cleanup(remove)
  //   // }
  // }, [favoriteGames])
  // debugger
  // const handleFavGameImage = ( game ) => {
    
  //   handleOpenContent()
  //   // setShowFavGame(false)
  //   setSlug(game.slug)
    
  //   setTimeout(() => {
  //     // const element = document.getElementById(`${game.name}`)
  //     // element.scrollIntoView(false)
  //     // setFavGame(game)
  //     // setShowFavGame(true)
  //     // setShowFavGame(!showFavGame)
  //     // debugger
  //   }, 200);
    
  // }
  
  // const handleRemoveGames = () => {
  //   // setFavGame([])
  // }

  // const handleToTop = () => {
  //   scrollTop()
  // }
  
  
  useEffect(() => {
    scrollTop()
    // scrollTop()
  }, [  ])

  // useEffect(() => {

  // }, [ favGame ])
  // debugger
  return (
    <>
      <section className="favorite__page ">
      <div className="page__header">
        <h2 className="favorite--games--title">Favorite Games: { favoriteGames.length }</h2>
        {
          favoriteGames.length > 0 &&
            <button 
              className="btn btn--remove"
              onClick={ handleRemoveAll }
            >Remove All</button>

        }
      </div>
      <div className="games__container">
        {
           
           favoriteGames.map((data, index) => (
            <GameMediumCard key={ data.id }  className="animate__animated animate__fadeIn" values={{ data, index }}/>
            
          ))
        }
      </div>
      {/* <Modal
        isOpen={ openContent }
        // onAfterOpen={ handleToggleContent }
        onRequestClose={ handleOpenContent }
        className="Modal"
        overlayClassName="Overlay--cards"
        ariaHideApp={false}
      >
        <CardContent values={{ slug, animation, handleOpenContent }}/>
        <CloseIcon 
          className="close--icon"
          onClick={ handleOpenContent }
        />
      </Modal> */}
      {/* {
        showFavGame && 
        <div className="fav__info">
          <figure className={ `fav__img ${ showFavGame ? 'animate__animated animate__fadeIn' : 'animate__animated animate__fadeOut' }` }>
          <img className="fav--image" src={image} alt={name} />
          <figcaption className="fav--game--name"> 
            { name }
          </figcaption>
        </figure>
          <p className="info--title">Name: <span>{ name }</span></p>
          <p className="info--title">Metacritic: <span>{ metacritic }</span></p>
          <p className="info--title">Calification: <span>{ calification }</span></p>
          <p className="info--title">Released: <span>{ released }</span></p>
          <RatingStar rating_star={ rating_star } />
        </div>
      }      */}
      {
        favoriteGames.length > 10 &&
        <ScrollTop />
      }
      
      <BackgroundAnimation />

    </section>
    </>
  )
}
