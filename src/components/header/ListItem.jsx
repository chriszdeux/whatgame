import React, { useContext, useEffect, useState } from 'react'
import { IoMdArrowDropdown as DownArrow } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { menuList } from '../../data/menu';
import { useScrollTop } from '../../hooks/useScrollTop';
import { useShowContent } from '../../hooks/useShowContent';
import { ListDropDown } from './ListDropDown';

import { VscLibrary as LibraryGames } from 'react-icons/vsc';
import { DataContext } from '../../context/DataFetchContext';
import { FavGames } from './FavGames';
import { SubMenuItem } from './SubMenuItem';
import { LoadingComponent } from '../loading/LoadingComponent';
import { useHistory } from 'react-router';
import { ListGenresMobile } from './ListGenresMobile';
import { ApiComponent } from '../api-component/ApiComponent';


export const ListItem = ( { handleOpenContent } ) => {
  const [genres, setGenres] = useState(false)
  const { favoriteGames, setGamesByGenre, dataGenres,  } = useContext(DataContext)
  const history = useHistory()
  const { genreList } = menuList[2]
  // const [ openContent, handleOpenContent ] = useShowContent()
  const { scrollTop } = useScrollTop()

  const handleClickSubmit = (e) => {
    e.preventDefault()
    handleOpenContent(false)
    // console.log('click')
    scrollTop()
    // unmountComponentAtNode(document.getElementById('root'));

  }
  // debugger
  const [showComponent, setShowComponent] = useState({
    show: false,
    show2: false
  })
  // const [show2, setShow2] = useState(false)
  const [changeAnimation, setChangeAnimation] = useState(false)
  const [changeAnimation2, setChangeAnimation2] = useState(false)


  const [sliceFavList, setSliceFavList] = useState(favoriteGames)

  useEffect(() => {
    const sliceFav = setSliceFavList(sliceFavList.slice(0,6))
    return () => {
      clearImmediate(sliceFav)
    }
  }, [ favoriteGames.length ])
    // const favGameListSliced = favoriteGames.slice(0, 6)
  const { show, show2 } = showComponent
  // debugger
  const handleShow = () => {
    setChangeAnimation(!show)
    setTimeout(() => {
      setShowComponent({
        show: !show,
        show2: false
      })
    }, 500);
  }
  

  const handleShow2 = () => {
    setChangeAnimation2(!show2)
    setTimeout(() => {
      setShowComponent({
        show: false,
        show2: !show2
      })
    }, 500);
  }
  
  // debugger
  const handleGenrePage = ( genre ) => {
    // debugger
    setGamesByGenre( genre )
    // debugger
    history.push('/whatgame/genres', null)
    handleOpenContent()
    return <LoadingComponent />
  }

  // debugger
  return (
    <ul className="menu__list">
      {
        menuList.map(({name, page, subMenu, count, saved, link}) => (
          (saved)
           ? <li 
              key={name}
              className="list--item"
              onClick={ handleShow }  
            > {name}
              <span className="items--saved--mobile"> { favoriteGames.length }</span>
              {
                show && <FavGames 
                values={ {sliceFavList, changeAnimation, handleOpenContent} } />
              }
            </li> 

           : <li 
              key={ name }
              className="list--item"
              onClick={ subMenu ? handleShow2 : handleClickSubmit }
            > 
              <Link to={ page } >
                { name }
              </Link>
                  
                  
        
            </li>
        ))
      }
      
      {/* <li className="fav--game">test</li> */}
      {/* <li className="list--item">
        Library { favoriteGames.length }
      </li>         */}
      {/* <li className="list--item">
        { name }
      </li> */}
          <li key={genreList}
            className="list--sub"
            onClick={ handleShow2 }
          >
            { genreList }
             {
               show2 && <ListGenresMobile values={{ changeAnimation2, handleGenrePage }}/>
               
             }
          </li>


    </ul>
  )
}
