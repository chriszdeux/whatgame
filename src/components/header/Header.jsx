import React, { useContext, useState } from 'react';
import Modal from 'react-modal';
import {  FiMenu as IconMenu } from 'react-icons/fi';
import '../../styles/header-style.css'
import { MenuList } from './MenuList';
import { Navbar } from './Navbar';
import { useShowContent } from '../../hooks/useShowContent';
import { VscChromeClose as CloseIcon } from 'react-icons/vsc'; //YOU ARE HERE
import { DataContext } from '../../context/DataFetchContext';


export const Header = () => {
  
  // const [openContent, handleOpenContent] = useShowContent()
  
  const { openContent, handleOpenContent } = useContext(DataContext)
  // debugger
  return (
    <header className="main__container">
      <div className="header" >
        <h2 className="highlight--text">WhatGame</h2>
        {/* {showContent && <MenuList />} */}
        
        {
          (!openContent)
            ? <IconMenu 
                onClick={ handleOpenContent }
                className="icon--menu animate__animated animate__fadeIn"
              />
            : <CloseIcon 
                className="close--icon animate__animated animate__fadeIn" 
                onClick={ handleOpenContent }
              />
            

        }
        <Modal
          isOpen={ openContent }
          onRequestClose={ handleOpenContent }
          ariaHideApp={ false }
          className="Modal--menu"
          overlayClassName="Overlay"
        >
          <MenuList handleOpenContent={handleOpenContent}/>
          
        </Modal>
        <Navbar handleOpenContent={ handleOpenContent }/>
      </div>
    </header>
  )
}
