import React, { useState } from 'react'
import { IoMdArrowDropdown as DownArrow } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { menuList } from '../../data/menu';
import { useScrollTop } from '../../hooks/useScrollTop';
import { useShowContent } from '../../hooks/useShowContent';
import { ListDropDown } from './ListDropDown';

export const ListItem = ( { handleOpenContent } ) => {
  const [genres, setGenres] = useState(false)

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
        menuList.map(({name, page, subMenu}) => (
          <li 
            key={ name }
            className="list--item"
            onClick={ handleClickSubmit }
          >
            <Link to={ page } >
              { name }
            </Link>
            {/* <DownArrow className="down--arrow"/> */}
          </li>
        ))
      }        
    </ul>
  )
}
