import React, { useContext, useState } from 'react'
import { IoMdArrowDropdown as DownArrow } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { menuList } from '../../data/menu';
import { useScrollTop } from '../../hooks/useScrollTop';
import { useShowContent } from '../../hooks/useShowContent';
import { ListDropDown } from './ListDropDown';

import { VscLibrary as LibraryGames } from 'react-icons/vsc';
import { DataContext } from '../../context/DataFetchContext';


export const ListItem = ( { handleOpenContent } ) => {
  const [genres, setGenres] = useState(false)
  const { favoriteGames } = useContext(DataContext)
  // const [ openContent, handleOpenContent ] = useShowContent()
  const { scrollTop } = useScrollTop()

  const handleClickSubmit = (e) => {
    e.preventDefault()
    handleOpenContent(false)
    console.log('click')
    scrollTop()
    // unmountComponentAtNode(document.getElementById('root'));

  }
  // debugger
  return (
    <ul className="menu__list">
      {
        menuList.map(({name, page, subMenu, count}) => (
          <li 
            key={ name }
            className="list--item"
            onClick={ handleClickSubmit }
          >
            <Link to={ page } >
              { 
                count 
                ? `${name}:  ${favoriteGames.length}`
                : name
              }
            </Link>
              {/* {
                count && <span className="items--saved"> { favoriteGames.length }</span>
              } */}
            {/* <DownArrow className="down--arrow"/> */}
          </li>
        ))
      }
      {/* <li className="list--item">
        Library { favoriteGames.length }
      </li>         */}
    </ul>
  )
}
