import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { DataContext } from '../../context/DataFetchContext';
import { menuList } from '../../data/menu';
import { useFetchGenres } from '../../hooks/useFetchGame';
import { useHistory } from 'react-router';
import { LoadingComponent } from '../loading/LoadingComponent';
import { useScrollTop } from '../../hooks/useScrollTop';

export const MenuItem = ({list}) => {
  const { data, loading } = useFetchGenres()
  // debugger\
  const { setGamesByGenre } = useContext
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


  // debugger
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
          >
                { list.name }
              </Link>
          }
          {
            list.subMenu && 
            <ul className="sub--menu animate__animated animate__fadeIn">
              {
                !loading &&
                data.map(item => ((
                  <li 
                    className="sub--menu--item"
                    onClick={ () => handleGenrePage(item.slug) }
                    
                  >
                    { item.name }
                  </li>
                )))
              }
            </ul>
          }
      </li>
      )
  
}
