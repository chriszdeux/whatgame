import React, { useContext, useEffect, useState } from 'react'
import { IoMdArrowDropdown as DownArrow } from 'react-icons/io';
import { menuList } from '../../data/menu';
import { ListDropDown } from './ListDropDown';
import { MenuItem } from './MenuItem';
// import { menuIcons } from '../../data/menu'
import { SearchBar } from './SearchBar';
import { SubMenuItem } from './SubMenuItem';
import { VscLibrary as LibraryGames } from 'react-icons/vsc';
import { AiOutlineSearch as SearchIcon } from 'react-icons/ai';
import { RiUser3Fill as UserIcon } from 'react-icons/ri'
import { useShowContent } from '../../hooks/useShowContent';
import { DataContext } from '../../context/DataFetchContext';
import { Link } from 'react-router-dom';
import { SubMenuFavGames } from './SubMenuFavGames';

export const Navbar = ( ) => {
  const [openContent, handleOpenContent] = useShowContent(false)
  const [openFavsMenu, setOpenFavsMenu] = useState(false)

  const { favoriteGames } = useContext( DataContext )
  // debugger
  const [renderFavGames, setRenderFavGames] = useState()

  const handleFavSubMenu = () => {
     setOpenFavsMenu(!openFavsMenu)
  }

  useEffect(() => {
    setRenderFavGames( <span className="items--saved">{ favoriteGames.length }</span>)
  }, [ favoriteGames.length ])


  return (
    <nav className="navbar">
      <ul className="navbar__container">
      {
        menuList.map( list => (
          <MenuItem list={ list }/>
        ))
      }
      
      {/* <SearchBar handleOpenContent={handleOpenContent}/> */}
      </ul>
      <ul className="navbar__container">
        <li className="list--item">
          <SearchIcon 
            className="search--icon"
            onClick={ () => handleOpenContent(true) }
          />
          {
            openContent && <SearchBar handleOpenContent={ handleOpenContent }/>
          }
        </li>
        <li 
          className="list--item"
          onClick={ handleFavSubMenu }
        >
          <LibraryGames className="games--collection--icon"
          />
          {
            renderFavGames
          }
          {
            openFavsMenu && 
          <SubMenuFavGames favoriteGames={ favoriteGames }/>
          }
          
        </li>
        <li className="list--item">
          <UserIcon className="user--icon"/>
        </li>

      </ul>
      <ListDropDown />
    </nav>
  )
}
