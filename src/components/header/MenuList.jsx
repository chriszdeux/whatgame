import React from 'react'
import { VscChromeClose as CloseIcon } from 'react-icons/vsc';
import { ListItem } from './ListItem';
import { SearchBar } from './SearchBar';

export const MenuList = () => {
  return (
    <div className="modal">
      <div className="menu--overlay"></div>
      <div className="drop__menu">
        <CloseIcon className="close--icon" />
        <SearchBar />
        <ListItem />      
        </div>
        

    </div>
  )
}
