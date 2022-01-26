import React, { useContext, useState } from 'react';
import Modal from 'react-modal';
import {  FiMenu as IconMenu } from 'react-icons/fi';
import '../../styles/header-style.css'
import { MenuList } from './MenuList';
import { Navbar } from './Navbar';
import { useShowContent } from '../../hooks/useShowContent';
import { VscChromeClose as CloseIcon } from 'react-icons/vsc'; //YOU ARE HERE
import { DataContext } from '../../context/DataFetchContext';
import { Link } from 'react-router-dom';


export const Header = () => {
  
  const [openContent, handleOpenContent, animation] = useShowContent()
  
  // const { openContent, handleOpenContent, animation } = useContext(DataContext)
  // debugger
  return (
    <header className="main__container">
      <div className="header animate__animated animate__fadeIn" >
        <Link to="/whatgame">
        <h2 className="highlight--text">WhatGame</h2>
        </Link>
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
          <MenuList values={{handleOpenContent, animation}}/>
          
        </Modal>
        <Navbar />
      </div>
    </header>
  )
}
