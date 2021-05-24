import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { useShowContent } from '../../hooks/useShowContent';
import { ListItem } from './ListItem';
import { SearchBar } from './SearchBar';
import { useGetGamesByName } from '../../hooks/useFetchGame';
import { SearchContext } from '../../context/DataFetchContext';
import { VscChromeClose as CloseIcon } from 'react-icons/vsc'; //YOU ARE HERE

export const MenuList = ( { handleOpenContent} ) => {
  return (
      // <div className="modal">
      // <div className="menu--overlay"></div>
      <div className="drop__menu">
        <CloseIcon 
                className="close--icon animate__animated animate__fadeIn" 
                onClick={ handleOpenContent }
              />
          <SearchBar handleOpenContent={ handleOpenContent }/>
        {/* <Link to="/results" className="input--link">
        </Link> */}
        <ListItem handleOpenContent={ handleOpenContent }/>      
        </div>
    // </div>
  )
}
