import React, { useContext } from 'react'
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

export const Navbar = ( ) => {
  const [openContent, handleOpenContent] = useShowContent(false)
  const { favoriteGames } = useContext( DataContext )
  // debugger
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
        <li className="list--item">
          <LibraryGames className="games--collection--icon"/>
          <span className="items--saved">{ favoriteGames.length }</span>
        </li>
        <li className="list--item">
          <UserIcon className="user--icon"/>
        </li>

      </ul>
      <ListDropDown />
    </nav>
  )
}
