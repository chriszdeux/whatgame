import React, { useContext } from 'react'
import { MdRemoveRedEye as Check } from 'react-icons/md'
import { Link, useHistory } from 'react-router-dom'
import { DataContext } from '../../context/DataFetchContext'
import { LoadingComponent } from '../loading/LoadingComponent'

export const FavGames = ({ values }) => 
{
  const{ sliceFavList, changeAnimation, handleOpenContent} = values

  // debugger
  const { favoriteGames } = useContext( DataContext )

  // const history = useHistory()
  // const handleFavPage = ()  => {
  //   history.push('./favorite-games', null)
  //   handleOpenContent()
  //   return <LoadingComponent />
  // }

  const handleFavPage = () => {
    handleOpenContent()
    return <LoadingComponent />
  }
  return (
    <ul className={`sub__menu__favs ${ changeAnimation ? 'animate__animated animate__fadeInDown' : 'animate__animated animate__fadeOutUp' }`}>
    {
      sliceFavList.map(item => (
        <li key={item.name} className="fav--game"> {item.name} 
        <Check className="eye--check"/> 
        </li>
      ))
    }
    
      <li className="fav--game " onClick={ handleFavPage }>
        <Link to="/whatgame/favorite-games" className="btn__primary">
          View More
        </Link>
        {/* <button className="show--more" onClick={ handleFavPage }>Show More</button> */}
      </li>
    
  </ul>
  )
}


