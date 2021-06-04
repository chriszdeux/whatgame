import React from 'react'
import { IoMdArrowDropdown as DownArrow } from 'react-icons/io';
import { ListDropDown } from './ListDropDown';

export const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar__container">
        <li className="navbar--item">API
        
        </li>
        <li className="navbar--item">Games <span><DownArrow /></span> </li>
        <li className="navbar--item">Genre 
        
        <span><DownArrow />
          
        </span> </li>
        {/* <li className="navbar--item">Publishers <span><DownArrow /></span> </li>
        <li className="navbar--item">Platforms <span><DownArrow /></span>  </li> */}
      </ul>
      <ListDropDown />
    </nav>
  )
}
