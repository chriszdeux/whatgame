import React, { useContext, useState } from 'react'
import { VscChromeClose as CloseIcon } from 'react-icons/vsc'; //YOU ARE HERE
import { Link } from 'react-router-dom';
import { useShowContent } from '../../hooks/useShowContent';
import { ListItem } from './ListItem';
import { SearchBar } from './SearchBar';
import { useGetGamesByName } from '../../hooks/useFetchGame';
import { SearchContext } from '../../context/UseResultsGamesContext';
export const MenuList = ( { handleOpenContent} ) => {
  return (
      // <div className="modal">
      // <div className="menu--overlay"></div>
      <div className="drop__menu">
        <CloseIcon 
          className="close--icon" 
          onClick={ handleOpenContent }
        />
          <SearchBar handleOpenContent={ handleOpenContent }/>
        {/* <Link to="/results" className="input--link">
        </Link> */}
        <ListItem />      
        </div>
    // </div>
  )
}
