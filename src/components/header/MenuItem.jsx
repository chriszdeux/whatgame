import React, { useContext, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import { DataContext } from '../../context/DataFetchContext';
import { menuList } from '../../data/menu';
import { useFetchGenres } from '../../hooks/useFetchGame';
import { useHistory } from 'react-router';
import { LoadingComponent } from '../loading/LoadingComponent';
import { useScrollTop } from '../../hooks/useScrollTop';
import { SubMenuItem } from './SubMenuItem';
import { useShowContent } from '../../hooks/useShowContent';

export const MenuItem = ({list}) => {
  // const { data, loading } = useFetchGenres()
  // debugger\
  const { setGamesByGenre, dataGenres, genreLoading } = useContext
  (DataContext)
  const { scrollTop } = useScrollTop()
  const history = useHistory()

  const [openSubMenu, setOpenSubMenu] = useState(false)
  const handleGenrePage = ( genre ) => {
    // debugger
    setGamesByGenre( genre )
    // debugger
    setOpenSubMenu(false)
    history.push('/whatgame/genres', null)
    return <LoadingComponent />
  }


  const [ openContent, handleOpen ] = useShowContent()
  const mounted = useRef(true)
  // debugger
  // debugger

  useEffect(() => {
  
    return () => {
      mounted.current = false
    }
  }, [ openContent ])

  const handleOpenSubMenu = () => {
    scrollTop()
    setOpenSubMenu(!openSubMenu)

  }
  return (

      <li 
        key={ list.name }
        className={ 
          (list.subMenu)
          ? 'list--item  submenu'
          : 'list--item'
         }
         onClick={ () => scrollTop() }
        // onClick={ handleClickSubmit }
        >
          {/* { JSON.parse((item)) } */}
          {
            mounted.current &&
            (!list.subMenu) 
            ? <Link 
                to={ list.page }
              >
                { list.name }
              </Link>
            : <Link 
                to={ list.page }
                onClick={ handleOpenSubMenu }
              >
                { list.name }
              </Link>
          }
          {
            openSubMenu &&  <SubMenuItem handleGenrePage={ handleGenrePage }/>
            
          }
      </li>
      )
  
}


//try to check what can I do to implement submenu genres mobile