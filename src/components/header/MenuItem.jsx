import React, { useContext, useState } from 'react'
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

  const handleGenrePage = ( genre ) => {
    // debugger
    setGamesByGenre( genre )
    // debugger
    history.push('./genres', null)
    return <LoadingComponent />
  }


  const [ openContent, handleOpen ] = useShowContent()

  // debugger
  // debugger
  const [openSubMenu, setOpenSubMenu] = useState(false)

  const handleOpenSubMenu = () => {
    scrollTop()
    setOpenSubMenu(!openContent)

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
            !genreLoading && list.subMenu && <SubMenuItem handleGenrePage={ handleGenrePage }/>
            
          }
      </li>
      )
  
}


//try to check what can I do to implement submenu genres mobile