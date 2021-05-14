import React from 'react'
import { VscChromeClose as CloseIcon } from 'react-icons/vsc'; //YOU ARE HERE
import { useShowModal } from '../../hooks/useShowModal';
import { ListItem } from './ListItem';
import { SearchBar } from './SearchBar';

export const MenuList = ( {handleOpenModal} ) => {
  // const [showContent, handleToggleContent] = useShowModal()
  // debugger
  return (
      // <div className="modal">
      // <div className="menu--overlay"></div>
      <div className="drop__menu">
        <CloseIcon 
          className="close--icon" 
          onClick={ handleOpenModal }
        />
        <SearchBar />
        <ListItem />      
        </div>
    // </div>
  )
}
