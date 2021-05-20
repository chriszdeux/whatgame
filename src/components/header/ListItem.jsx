import React, { useState } from 'react'
import { IoMdArrowDropdown as DownArrow } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { useShowContent } from '../../hooks/useShowContent';
import { ListDropDown } from './ListDropDown';

export const ListItem = () => {
  const menuList = [
    {
      name: 'Home',
      content: false,
      page: '/'
    },
    {
      name: 'API',
      content: false,
      page: '/'
    },
    {
      name: 'Genres',
      content: true,
      page: '/genres'
    },
    {
      name: 'Publishers',
      content: true,
      page: '/publishers'
    },
    {
      name: 'Platforms',
      content: true,
      page: '/platforms'
    },
  ]

  const [genres, setGenres] = useState(false)

  const [ openContent, handleOpenContent ] = useShowContent()
  return (
    <ul className="menu__list">
      {
        menuList.map(({name, page}) => (
          <li 
            key={ name }
            className="list--item"
            onClick={ handleOpenContent }
          >
            <Link to={ page }>
              { name }
            </Link>
            {/* <DownArrow className="down--arrow"/> */}
          </li>
        ))
      }        
    </ul>
  )
}
