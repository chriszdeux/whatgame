import React from 'react'
import { IoMdArrowDropdown as DownArrow } from 'react-icons/io';
import { ListDropDown } from './ListDropDown';

export const ListItem = () => {
  return (
    <ul className="menu__list">
      <li className="list--item">API <DownArrow className="down--arrow"/> </li>
      <li className="list--item">Games <DownArrow className="down--arrow"/> </li>
      <li className="list--item">Genre <DownArrow className="down--arrow"/> 
        
      </li>
      <ListDropDown />
      <li className="list--item">Publishers <DownArrow className="down--arrow"/> </li>
      <li className="list--item">Platforms <DownArrow className="down--arrow"/> </li>
      </ul>
  )
}
