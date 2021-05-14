import React, { useState } from 'react';
import Modal from 'react-modal';
import {  FiMenu as IconMenu } from 'react-icons/fi';
import '../../styles/header-style.css'
import { MenuList } from './MenuList';
import { Navbar } from './Navbar';
import { useShowModal } from '../../hooks/useShowModal';
import { VscChromeClose as CloseIcon } from 'react-icons/vsc'; //YOU ARE HERE


export const Header = () => {
  
  const [openModal, handleOpenModal] = useShowModal()

  return (
    <header className="main__container">
      <div className="header">
        <h2>LogoApp</h2>
        {/* {showContent && <MenuList />} */}
        <IconMenu 
          onClick={ handleOpenModal }
          className="icon--menu"
        />
        <Modal
          isOpen={ openModal }
          onRequestClose={ handleOpenModal }
          ariaHideApp={ false }
          className="Modal--menu"
          overlayClassName="Overlay"
        >
          <MenuList handleOpenModal={handleOpenModal}/>
        </Modal>
        <Navbar />
      </div>
    </header>
  )
}
