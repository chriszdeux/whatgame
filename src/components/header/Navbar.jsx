import React from 'react'
import { IoMdArrowDropdown as DownArrow } from 'react-icons/io';
import { menuList } from '../../data/menu';
import { ListDropDown } from './ListDropDown';
import { MenuItem } from './MenuItem';
import { SearchBar } from './SearchBar';
import { SubMenuItem } from './SubMenuItem';

export const Navbar = ({ handleOpenContent }) => {
  // const handleClickSubmit = (e) => {
  //   e.preventDefault()
  //   handleOpenContent(false)
  //   console.log('click')
  //   // unmountComponentAtNode(document.getElementById('root'));

  // }
  // console.log(menuList)
  // debugger
  return (
    <nav className="navbar">
      <ul className="navbar__container">
      {
        menuList.map( list => (
          <MenuItem key={list.name} list={ list }/>
        ))
      }
      <SearchBar handleOpenContent={handleOpenContent}/>
      </ul>
      <ListDropDown />
    </nav>
  )
}
