import React from 'react';
import { AiOutlineClose as CloseIcon, AiOutlineMenu as IconMenu, AiOutlineSearch as SearchIcon } from 'react-icons/ai';
import { IoMdArrowDropdown as DownArrow } from 'react-icons/io';
import '../../styles/header-style.css'
export const Header = () => {
  return (
    <header className="main__container header">
      <h2>LogoApp</h2>
      <span>Read Me</span>
      <IconMenu />
      <div>
        <CloseIcon />
        <form action="">
          <input type="text"/>
          <SearchIcon />
        </form>
        <ul>
          <li>API <DownArrow /> </li>
          <li>Games <DownArrow /> </li>
          <li>Genre <DownArrow /> </li>
          <li>Publishers <DownArrow /> </li>
          <li>Platforms <DownArrow /> </li>
        </ul>
      </div>
    </header>
  )
}
