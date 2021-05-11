import React from 'react'
import { VscChromeClose as CloseIcon } from 'react-icons/vsc'; //YOU ARE HERE
import { useShowContent } from '../../hooks/useShowContent';
import { ListItem } from './ListItem';
import { SearchBar } from './SearchBar';

export const MenuList = () => {
  const [showContent, handleToggleContent] = useShowContent()
  return (
    (
      !showContent && <div className="modal">
      <div className="menu--overlay"></div>
      <div className="drop__menu">
        <CloseIcon 
          className="close--icon" 
          onClick={ handleToggleContent }
        />
        <SearchBar />
        <ListItem />      
        </div>
    </div>
  )
  )
}
