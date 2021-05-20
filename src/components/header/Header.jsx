import React, { useState } from 'react';
import Modal from 'react-modal';
import {  FiMenu as IconMenu } from 'react-icons/fi';
import '../../styles/header-style.css'
import { MenuList } from './MenuList';
import { Navbar } from './Navbar';
import { useShowContent } from '../../hooks/useShowContent';
import { VscChromeClose as CloseIcon } from 'react-icons/vsc'; //YOU ARE HERE


export const Header = () => {
  
  const [openContent, handleOpenContent] = useShowContent()

  return (
    <header className="main__container">
      <div className="header">
        <h2>LogoApp</h2>
        {/* {showContent && <MenuList />} */}
        <IconMenu 
          onClick={ handleOpenContent }
          className="icon--menu"
        />
        <Modal
          isOpen={ openContent }
          onRequestClose={ handleOpenContent }
          ariaHideApp={ false }
          className="Modal--menu"
          overlayClassName="Overlay"
        >
          <MenuList handleOpenContent={handleOpenContent}/>
        </Modal>
        <Navbar />
      </div>
    </header>
  )
}
